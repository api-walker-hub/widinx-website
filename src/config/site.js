/**
 * Site-wide configuration. Anything that changes per environment reads from
 * Vite env vars (see .env.example); everything else is a plain constant.
 */
const env = import.meta.env

export const site = {
  name: 'WidinX',
  tagline: 'Every product. Every step. Verified.',
  description:
    'WidinX gives every physical product a verifiable digital identity: EU Digital Product Passports, anti-counterfeiting and regulation management in one platform.',
  contactEmail: env.VITE_CONTACT_EMAIL || 'hello@widinx.com',
  securityEmail: env.VITE_SECURITY_EMAIL || 'security@widinx.com',
  privacyEmail: env.VITE_PRIVACY_EMAIL || 'privacy@widinx.com',
  careersEmail: env.VITE_CAREERS_EMAIL || 'careers@widinx.com',
  launch: {
    // Dates from the launch readiness plan (kept in one place for the Trust Center).
    pitchReady: '2026-09-30',
    salesReady: '2026-11-15',
    firstClient: '2027-01-04',
    pentest: '2026-12',
    isoTarget: '2027-06-30',
  },
  leads: {
    endpoint: env.VITE_LEAD_ENDPOINT || '',
    hubspotPortalId: env.VITE_HUBSPOT_PORTAL_ID || '',
    hubspotFormGuid: env.VITE_HUBSPOT_FORM_GUID || '',
  },
}

export const nav = [
  { label: 'Platform', to: '/platform' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Ecology', to: '/sustainability' },
  { label: 'Trust', to: '/trust' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
]

export const footerNav = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', to: '/platform' },
      { label: 'Solutions', to: '/solutions' },
      { label: 'Ecology & impact', to: '/sustainability' },
      { label: 'AGEC & Ecoscore', to: '/sustainability#regulations' },
      { label: 'Digital twins on Solana', to: '/platform#twins' },
      { label: 'Trust Center', to: '/trust' },
      { label: 'Book a demo', to: '/demo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About WidinX', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Research & reading', to: '/about#research' },
      { label: 'Contact', to: '/demo#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', to: '/privacy' },
      { label: 'Legal notice', to: '/legal' },
      { label: 'Security disclosure', to: '/trust#disclosure' },
    ],
  },
]
