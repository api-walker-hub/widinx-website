/**
 * Platform page copy. Describes what the WidinX console does today; anything
 * not shipped is labelled roadmap.
 */
export const platformPage = {
  hero: {
    eyebrow: 'Platform',
    title: 'Everything a passport needs,',
    em: 'in one console.',
    lead:
      'WidinX is a passport console: a catalogue structured for the regulation, imports from the tools you already run, claims with their evidence, four-eyes publishing and public passports behind GS1 codes that never need reprinting.',
  },
  modules: {
    eyebrow: 'Modules',
    title: 'What you work with every day.',
    items: [
      {
        icon: 'box',
        title: 'Catalogue',
        text: 'Families, categories and attributes built for passports. Products, variants, batches and units, each with the data its grain needs.',
      },
      {
        icon: 'dam',
        title: 'Imports',
        text: 'CSV or JSON with a column-mapping wizard, a direct Akeneo PIM connection, images fetched with the rows. Create or update in one pass.',
      },
      {
        icon: 'scale',
        title: 'Sector templates',
        text: 'The 19 core fields of ESPR Annex III, plus each sector’s own: 15 EU templates, with US variants for brands selling on both sides.',
      },
      {
        icon: 'shield',
        title: 'Claims & evidence',
        text: 'Every claim points to its evidence: test reports, certificates, declarations. What is verified and what is self-declared shows on the passport.',
      },
      {
        icon: 'route',
        title: 'Approvals & workflows',
        text: 'Publishing needs an independent approver. Workflows per market decide who checks what before a passport goes public.',
      },
      {
        icon: 'passport',
        title: 'Passport builder',
        text: 'The regulation decides the grain — model, batch or item. A five-step wizard picks the subject, checks completeness and publishes.',
      },
      {
        icon: 'plug',
        title: 'Codes & labels',
        text: 'GS1 Digital Link, QR, DataMatrix and Code 128, exported for print. The same code keeps opening the current passport.',
      },
      {
        icon: 'refresh',
        title: 'Regulatory tracking',
        text: 'Assess products per market, follow regulatory changes and see which products a new rule touches before it applies.',
      },
    ],
  },
  codes: {
    eyebrow: 'GS1 Digital Link',
    title: 'One code on the product. The right passport behind it.',
    intro:
      'Each passport is reachable at a standard GS1 Digital Link. Phones open it like any web page; scanners in a warehouse read the same code as a GTIN.',
    grains: [
      { label: 'Model', path: '/01/{GTIN}', text: 'One passport for every unit of a model — electronics, tyres, detergents.' },
      { label: 'Batch', path: '/01/{GTIN}/10/{lot}', text: 'One per production lot — textiles, furniture, packaging, cosmetics.' },
      { label: 'Item', path: '/01/{GTIN}/21/{serial}', text: 'One per unit — batteries, leather goods, anything resold or repaired.' },
    ],
    facts: [
      'Passports versioned — the code always opens the current one',
      'Audience views for consumers, partners, recyclers, authorities',
      '12 passport languages',
      'Signed as W3C Verifiable Credentials (Ed25519) with published keys',
    ],
  },
  standards: {
    eyebrow: 'Standards',
    title: 'Built on the standards the regulation points to.',
    items: [
      { name: 'ESPR Articles 9–13', status: 'available' },
      { name: 'GS1 Digital Link', status: 'available' },
      { name: 'QR & DataMatrix (ISO/IEC 18004, 16022)', status: 'available' },
      { name: 'ISO/IEC 15459 unique identifiers', status: 'available' },
      { name: 'W3C Verifiable Credentials · Ed25519', status: 'available' },
      { name: 'JSON-LD & HTML content negotiation', status: 'available' },
      { name: 'EU DPP registry identifier', status: 'partial' },
      { name: 'EPCIS 2.0 events', status: 'roadmap' },
    ],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Next to the systems you already run.',
    groups: [
      { title: 'Shipped', items: ['CSV & JSON import', 'Akeneo PIM', 'REST API · OpenAPI', 'Exports & EPR files'] },
      { title: 'Roadmap', items: ['SAP & other ERPs', 'Shopify & WooCommerce', 'Webhooks', 'Zapier & Make'] },
    ],
    note: 'Everything the console does is available through the versioned REST API, with JSON Schema for each passport type.',
  },
}
