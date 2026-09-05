/**
 * WidinX lead relay.
 *
 * Receives demo-form submissions from the website and creates the records in
 * HubSpot with a private-app token that never leaves this server:
 *   1. Contact  — created or updated by email
 *   2. Company  — created by domain if missing, associated to the contact
 *   3. Lead     — HubSpot "Leads" object associated to the contact (skipped
 *                 quietly if the portal does not have the object)
 *
 * In production it also serves the built site from ../dist with an SPA
 * fallback, so the API and the pages share one origin.
 *
 * Run:  node --env-file=.env.local server/index.js
 * Env:  HUBSPOT_PRIVATE_APP_TOKEN (required), PORT (8787), ALLOWED_ORIGINS
 *       (comma-separated, for cross-origin dev), NODE_ENV=production to serve dist.
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = Number(process.env.PORT || 8787)
const TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN || ''
const HS = process.env.HUBSPOT_API_BASE || 'https://api-na2.hubapi.com'
const ALLOWED = (process.env.ALLOWED_ORIGINS || 'http://localhost:5180,http://127.0.0.1:5180')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

if (!TOKEN) console.warn('[leads] HUBSPOT_PRIVATE_APP_TOKEN is not set — submissions will fail.')

const app = express()
app.use(express.json({ limit: '64kb' }))

// CORS — only for origins we know (dev server on another port).
app.use((req, res, next) => {
  const origin = req.headers.origin
  if (origin && ALLOWED.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

// Very small in-memory rate limit: 10 submissions / 10 minutes / IP.
const hits = new Map()
function rateLimited(ip) {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000)
  arr.push(now)
  hits.set(ip, arr)
  return arr.length > 10
}

// --- HubSpot helpers -------------------------------------------------------

async function hs(method, url, body) {
  const res = await fetch(`${HS}${url}`, {
    method,
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  let data = {}
  try {
    data = text ? JSON.parse(text) : {}
  } catch {
    data = { raw: text }
  }
  if (!res.ok) {
    const err = new Error(data.message || `HubSpot ${method} ${url} → ${res.status}`)
    err.status = res.status
    err.data = data
    throw err
  }
  return data
}

const clean = (v) => (typeof v === 'string' ? v.trim() : v)
const domainOf = (website, email) => {
  try {
    if (website) return new URL(website.startsWith('http') ? website : `https://${website}`).hostname.replace(/^www\./, '')
  } catch {
    /* fall through */
  }
  return (email || '').split('@')[1]?.toLowerCase() || ''
}

function buildNote(f, utm = {}) {
  return [
    f.message,
    '',
    `Use cases: ${(f.useCases || []).join(', ') || '-'}`,
    `Timeline: ${f.timeline || '-'}`,
    `Demo requested: ${f.demoRequested ? 'yes' : 'no'}`,
    `Source: ${utm.utm_source || 'direct'} / ${utm.utm_medium || '-'} / ${utm.utm_campaign || '-'}`,
    `Landing page: ${utm.landing_page || '-'}`,
    `Referrer: ${utm.referrer || '-'}`,
    `Page: ${f.page || '-'}`,
  ]
    .filter((l) => l !== undefined && l !== null)
    .join('\n')
}

async function upsertContact(f, note) {
  const props = {
    email: f.email,
    firstname: f.firstName,
    lastname: f.lastName,
    jobtitle: f.role,
    company: f.company,
    country: f.country,
    website: f.website,
    message: note,
    hs_lead_status: 'NEW',
    lifecyclestage: 'lead',
  }
  Object.keys(props).forEach((k) => (props[k] === undefined || props[k] === '') && delete props[k])

  // Look up by email as the unique id property — unlike /search this is not
  // affected by HubSpot's indexing delay on freshly created records.
  const existing = await hs('GET', `/crm/v3/objects/contacts/${encodeURIComponent(f.email)}?idProperty=email&properties=email`).catch((e) => {
    if (e.status === 404) return null
    throw e
  })
  if (existing) {
    // Do not downgrade an existing customer's lifecycle stage.
    delete props.lifecyclestage
    await hs('PATCH', `/crm/v3/objects/contacts/${existing.id}`, { properties: props })
    return { id: existing.id, created: false }
  }
  const created = await hs('POST', '/crm/v3/objects/contacts', { properties: props })
  return { id: created.id, created: true }
}

async function upsertCompany(f, contactId) {
  const domain = domainOf(f.website, f.email)
  if (!domain || !f.company) return null
  const search = await hs('POST', '/crm/v3/objects/companies/search', {
    filterGroups: [{ filters: [{ propertyName: 'domain', operator: 'EQ', value: domain }] }],
    properties: ['domain'],
    limit: 1,
  })
  let company = search.results?.[0]
  if (!company) {
    const props = { name: f.company, domain, country: f.country }
    if (f.industry) props.description = `Industry (self-declared): ${f.industry}`
    company = await hs('POST', '/crm/v3/objects/companies', { properties: props })
  }
  // Associate contact → company (default association type).
  await hs('PUT', `/crm/v4/objects/contacts/${contactId}/associations/default/companies/${company.id}`).catch(() => {})
  return company.id
}

async function createLead(f, contactId) {
  try {
    const lead = await hs('POST', '/crm/v3/objects/leads', {
      properties: {
        hs_lead_name: `${f.company} — demo request (${f.firstName} ${f.lastName})`,
        hs_lead_type: 'NEW_BUSINESS',
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 578 }],
        },
      ],
    })
    return lead.id
  } catch (e) {
    // Portals without the Leads object (or without Sales Hub) return 400/403 — the contact still exists.
    console.warn('[leads] lead object skipped:', e.status, e.data?.message || e.message)
    return null
  }
}

// --- Routes ----------------------------------------------------------------

app.get('/api/health', (_req, res) => res.json({ ok: true, hubspot: Boolean(TOKEN) }))

app.post('/api/leads', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || 'unknown'
  if (rateLimited(ip)) return res.status(429).json({ ok: false, error: 'Too many requests' })

  const b = req.body || {}
  if (b.website_url) return res.json({ ok: true }) // honeypot: pretend success
  const f = {
    firstName: clean(b.firstName),
    lastName: clean(b.lastName),
    email: clean(b.email)?.toLowerCase(),
    role: clean(b.role),
    company: clean(b.company),
    country: clean(b.country),
    website: clean(b.website),
    industry: clean(b.industry),
    useCases: Array.isArray(b.useCases) ? b.useCases.map(clean) : [],
    timeline: clean(b.timeline),
    message: clean(b.message),
    demoRequested: Boolean(b.demoRequested),
    page: clean(b.page),
  }
  if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) || !f.firstName || !f.lastName || !f.company) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }
  if (!TOKEN) return res.status(503).json({ ok: false, error: 'CRM not configured' })

  try {
    const note = buildNote(f, b.utm || {})
    const contact = await upsertContact(f, note)
    const companyId = await upsertCompany(f, contact.id).catch((e) => {
      console.warn('[leads] company skipped:', e.status, e.data?.message || e.message)
      return null
    })
    const leadId = await createLead(f, contact.id)
    console.log(`[leads] ${f.email} → contact ${contact.id}${contact.created ? ' (new)' : ''}, company ${companyId ?? '-'}, lead ${leadId ?? '-'}`)
    res.json({ ok: true, contactId: contact.id, companyId, leadId })
  } catch (e) {
    console.error('[leads] failed:', e.status, e.data || e.message)
    res.status(502).json({ ok: false, error: 'CRM request failed' })
  }
})

// --- Static site (production) ---------------------------------------------

if (process.env.NODE_ENV === 'production') {
  const dist = path.resolve(__dirname, '..', 'dist')
  app.use(express.static(dist, { maxAge: '1h', index: false }))
  app.get(/^(?!\/api\/).*/, (_req, res) => res.sendFile(path.join(dist, 'index.html')))
}

app.listen(PORT, () => {
  console.log(`[leads] listening on http://localhost:${PORT} (${process.env.NODE_ENV || 'development'})`)
})
