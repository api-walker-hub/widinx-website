/**
 * Home page copy. Kept as data so wording can be edited without touching
 * components, and reused by other pages (pillars, use cases, ticker...).
 */

export const hero = {
  eyebrow: 'Digital Product Passports · ESPR ready',
  title: ['One code on the product.'],
  em: 'Everything behind it, for years.',
  lead:
    'WidinX lets producers, brands, importers and authorised representatives create, publish and maintain EU Digital Product Passports at model, batch and serial level. Scan the code, see the passport — no app to install, no reprint when the data changes.',
  primary: { label: 'Book a demo', to: '/demo' },
  secondary: { label: 'See live passports', to: '/passports' },
}

export const ticker = [
  { value: '15', label: 'EU sector templates' },
  { value: '19', label: 'core passport fields (ESPR Annex III)' },
  { value: '12', label: 'passport languages' },
  { value: 'GS1', label: 'Digital Link · QR · DataMatrix' },
  { value: '3', label: 'grains: model, batch, item' },
  { value: 'W3C VC', label: 'signed passports · Ed25519' },
  { value: 'CSV · Akeneo', label: 'catalogue import' },
]

export const pillars = {
  eyebrow: 'How WidinX works',
  title: 'Three moves from a spreadsheet to a passport in a customer’s hand.',
  intro:
    'Most of a passport already exists in your product data. WidinX gives it the structure the regulation asks for, publishes it behind a permanent code, and keeps it current.',
  items: [
    {
      icon: 'box',
      tag: 'Model',
      title: 'Model your products once',
      text: 'Families, categories and attributes in a catalogue built for passports. Import from CSV, JSON or Akeneo with a column-mapping wizard, then complete what the sector template still needs.',
    },
    {
      icon: 'passport',
      tag: 'Publish',
      title: 'Publish at the right grain',
      text: 'The regulation decides whether a passport is per model, per batch or per item. WidinX picks the grain with you, routes the passport through an independent approval and publishes it.',
    },
    {
      icon: 'refresh',
      tag: 'Maintain',
      title: 'Print the code, change the data',
      text: 'Each passport lives behind a GS1 Digital Link. The QR or DataMatrix you print today keeps opening the current version, while earlier versions stay on record.',
    },
  ],
}

export const journey = {
  eyebrow: 'From catalogue to scan',
  title: 'Every step writes to the same record.',
  intro: 'Nothing is retyped between the import, the approval and the page your customer sees.',
  steps: [
    {
      label: 'Import',
      title: 'Bring your catalogue',
      text: 'CSV or JSON with column mapping, or a direct Akeneo connection. Images, variants and attributes come along.',
    },
    {
      label: 'Complete',
      title: 'Fill the gaps',
      text: 'The sector template shows what is missing for each product and each market: composition, origin, substances, evidence.',
    },
    {
      label: 'Approve',
      title: 'Four eyes, then publish',
      text: 'Claims carry their evidence. A second person approves before anything goes public, and every step is in the audit trail.',
    },
    {
      label: 'Scan',
      title: 'Passport in hand',
      text: 'The code opens the passport in the reader’s language, with the right view for consumers, partners, recyclers and authorities.',
    },
  ],
}

export const platform = {
  eyebrow: 'The platform',
  title: 'A passport console, not another PIM.',
  intro:
    'WidinX sits next to the systems you already run. It takes product data in, adds what the regulation needs, and publishes passports that stay correct for the life of the product.',
  layers: [
    {
      tag: 'Catalogue & import',
      title: 'Your products, structured for the regulation',
      text: 'Families, categories, attributes, batches and units. CSV, JSON and Akeneo imports; a versioned REST API with OpenAPI and JSON Schema for everything else.',
      points: ['Column-mapping import wizard', 'Akeneo PIM connector', 'REST API & exports'],
    },
    {
      tag: 'Compliance work',
      title: 'Claims, evidence and approvals',
      text: 'Each claim points to its evidence. Products are assessed per market, regulatory changes are tracked, and publishing needs an independent approval.',
      points: ['Claims with evidence', 'Assessment per market', 'Four-eyes publishing'],
    },
    {
      tag: 'Public passports',
      title: 'Codes and pages that last',
      text: 'GS1 Digital Link resolver, QR, DataMatrix and Code 128 labels, 12 passport languages, audience views and signed W3C Verifiable Credentials.',
      points: ['GS1 Digital Link', 'Audience-based views', 'Signed, versioned passports'],
    },
  ],
}

export const trustBand = {
  eyebrow: 'Security & privacy',
  title: 'Built to be inspected.',
  intro:
    'We are a young company, so we make claims we can show — and publish what is still on the roadmap.',
  claims: [
    { title: 'Privacy & security by design', text: 'Data minimisation, threat modelling and reviews from the first line of code.' },
    { title: 'EU data residency available', text: 'Production runs in the EU. Tenant region is a business setting, not a hidden default.' },
    { title: 'Encryption in transit and at rest', text: 'TLS everywhere, encrypted storage and backups, managed keys.' },
    { title: 'Role-based access', text: 'Least-privilege roles, separate publishers and approvers, MFA for privileged accounts.' },
    { title: 'Auditability', text: 'Every change, approval and publication is written to an audit trail you can export.' },
  ],
  cta: { label: 'Visit the Trust Center', to: '/trust' },
}

export const manifesto = {
  eyebrow: 'Why WidinX',
  quote: 'The label is printed once. The product lives for years. The passport has to keep',
  em: 'up.',
  caption: 'One code · current data · every version on record',
}

export const finalCta = {
  eyebrow: 'Start a conversation',
  title: 'Ready to give your products a',
  em: 'passport?',
  text: 'Tell us which products, which markets and which deadline. We come back with an honest read and a first step — usually a pilot on your real catalogue.',
}
