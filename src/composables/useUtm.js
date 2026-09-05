/**
 * Capture acquisition context (UTM parameters, referrer, landing page) on first
 * visit and keep it for the session, so every CTA that becomes a lead carries
 * its source. Mirrors the "Attribution" group of the CRM field model.
 */
const KEY = 'widinx_attribution'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

function read() {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || 'null')
  } catch {
    return null
  }
}

function write(value) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(value))
  } catch {
    /* storage unavailable — attribution is best-effort */
  }
}

export function captureAttribution() {
  if (typeof window === 'undefined') return
  const existing = read()
  const params = new URLSearchParams(window.location.search)
  const utm = {}
  for (const key of UTM_KEYS) {
    const v = params.get(key)
    if (v) utm[key] = v
  }
  if (existing && !Object.keys(utm).length) return
  write({
    ...(existing || {}),
    ...utm,
    landing_page: existing?.landing_page || window.location.pathname,
    referrer: existing?.referrer || document.referrer || '',
    first_seen: existing?.first_seen || new Date().toISOString(),
  })
}

export function useUtm() {
  return {
    attribution: () => read() || {},
  }
}
