import { ref } from 'vue'
import { site } from '@/config/site'
import { useUtm } from './useUtm'

/**
 * Sends a demo / contact request. Transport is chosen from configuration:
 *   1. VITE_LEAD_ENDPOINT      → POST JSON (webhook, serverless fn, CRM proxy)
 *   2. HubSpot portal + form   → HubSpot Forms API v3 (public, no secret)
 *   3. nothing configured      → opens a prefilled email (still captures nothing server-side)
 * The website only ever sends what the visitor typed plus acquisition context.
 */
export function useLeadSubmit() {
  const status = ref('idle') // idle | sending | sent | error
  const error = ref('')
  const { attribution } = useUtm()

  function payload(fields) {
    return {
      ...fields,
      utm: attribution(),
      page: typeof window !== 'undefined' ? window.location.href : '',
      submittedAt: new Date().toISOString(),
    }
  }

  async function postJson(url, body) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(`Endpoint replied ${res.status}`)
  }

  async function postHubspot(fields) {
    const { hubspotPortalId, hubspotFormGuid } = site.leads
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormGuid}`
    const utm = attribution()
    // Only default HubSpot contact properties are sent as fields (the Forms API
    // rejects unknown property names). Qualification details and attribution
    // are folded into `message` so nothing is lost and no custom properties are
    // required in the portal.
    const details = [
      fields.message,
      '',
      `Use cases: ${(fields.useCases || []).join(', ') || '-'}`,
      `Timeline: ${fields.timeline || '-'}`,
      `Demo requested: ${fields.demoRequested ? 'yes' : 'no'}`,
      `Source: ${utm.utm_source || 'direct'} / ${utm.utm_medium || '-'} / ${utm.utm_campaign || '-'}`,
      `Landing page: ${utm.landing_page || '-'}`,
    ]
      .filter((l) => l !== undefined)
      .join('\n')
    const flat = {
      email: fields.email,
      firstname: fields.firstName,
      lastname: fields.lastName,
      jobtitle: fields.role,
      company: fields.company,
      country: fields.country,
      website: fields.website,
      industry: fields.industry,
      message: details,
    }
    const body = {
      fields: Object.entries(flat)
        .filter(([, v]) => v !== undefined && v !== null && v !== '')
        .map(([name, value]) => ({ name, value: String(value) })),
      context: { pageUri: window.location.href, pageName: document.title },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'I agree to be contacted about my request and to the WidinX privacy policy.',
        },
      },
    }
    await postJson(url, body)
  }

  function mailtoFallback(fields) {
    const lines = [
      `Name: ${fields.firstName} ${fields.lastName}`,
      `Work email: ${fields.email}`,
      `Role: ${fields.role}`,
      `Company: ${fields.company} (${fields.country})`,
      `Website: ${fields.website || '-'}`,
      `Industry: ${fields.industry || '-'}`,
      `Use cases: ${(fields.useCases || []).join(', ') || '-'}`,
      `Timeline: ${fields.timeline || '-'}`,
      `Demo requested: ${fields.demoRequested ? 'yes' : 'no'}`,
      '',
      fields.message || '',
    ]
    const subject = encodeURIComponent(`Demo request — ${fields.company}`)
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`
  }

  async function submit(fields) {
    status.value = 'sending'
    error.value = ''
    try {
      if (site.leads.endpoint) {
        await postJson(site.leads.endpoint, payload(fields))
      } else if (site.leads.hubspotPortalId && site.leads.hubspotFormGuid) {
        await postHubspot(fields)
      } else {
        mailtoFallback(fields)
      }
      status.value = 'sent'
    } catch (e) {
      error.value = e?.message || 'Something went wrong.'
      status.value = 'error'
    }
  }

  return { status, error, submit }
}
