/**
 * Site-wide configuration. Anything that changes per environment reads from
 * Vite env vars (see .env.example); everything else is a plain constant.
 */
const env = import.meta.env

export const site = {
  name: 'WidinX',
  tagline: 'One code on the product. Everything behind it, for years.',
  description:
    'WidinX lets producers, brands, importers and authorised representatives create, publish and maintain EU Digital Product Passports at model, batch and serial level.',
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
  { label: 'Live passports', to: '/passports' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Platform', to: '/platform' },
  { label: 'Regulations', to: '/regulations' },
  { label: 'Trust', to: '/trust' },
  { label: 'About', to: '/about' },
]

export const footerNav = [
  {
    title: 'Product',
    links: [
      { label: 'Live passports', to: '/passports' },
      { label: 'Platform', to: '/platform' },
      { label: 'Sector templates', to: '/sectors' },
      { label: 'Regulations timeline', to: '/regulations' },
      { label: 'GS1 Digital Link', to: '/platform#codes' },
      { label: 'Trust Center', to: '/trust' },
      { label: 'Book a demo', to: '/demo' },
    ],
  },
  {
    title: 'Who it is for',
    links: [
      { label: 'EU producers & importers', to: '/sectors#eu' },
      { label: 'Non-EU producers', to: '/sectors#non-eu' },
      { label: 'Consultants & partners', to: '/sectors#partners' },
      { label: 'Textile passports', to: '/sectors#textile' },
      { label: 'Battery passports', to: '/sectors#battery' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About WidinX', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/demo#contact' },
      { label: 'Privacy policy', to: '/privacy' },
      { label: 'Legal notice', to: '/legal' },
      { label: 'Security disclosure', to: '/trust#disclosure' },
    ],
  },
]
