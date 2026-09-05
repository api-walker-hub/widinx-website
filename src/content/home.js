/**
 * Home page copy. Kept as data so wording can be edited without touching
 * components, and reused by other pages (pillars, use cases, ticker...).
 */

export const hero = {
  eyebrow: 'Digital product passports · End-to-end traceability',
  // `em` is rendered in italic serif, clay colour.
  title: ['Every product.', 'Every step.'],
  em: 'Verified.',
  lead:
    'WidinX gives every physical product a verifiable digital identity — origin, materials, compliance, carbon footprint and ownership — from the maker’s hands to the customer’s phone.',
  primary: { label: 'Book a demo', to: '/demo' },
  secondary: { label: 'See the platform', to: '/platform' },
}

export const ticker = [
  { value: '1', label: 'digital twin per product' },
  { value: 'EU', label: 'DPP ready · data residency' },
  { value: 'AGEC · Ecoscore', label: 'compliance built in' },
  { value: 'kg CO₂e', label: 'per product, shown to customers' },
  { value: 'Solana', label: 'anchored digital twins' },
  { value: 'PIM · DAM', label: 'one product record' },
  { value: 'Zero', label: 'personal data on-chain' },
]

export const pillars = {
  eyebrow: 'Three pillars',
  title: 'One platform. Three jobs your product data has to do.',
  intro:
    'Brands are asked to prove where a product comes from, that it is genuine, and that it meets the rules of every market it enters. WidinX answers all three from a single record — shared with your suppliers and shown to your customers.',
  items: [
    {
      icon: 'dam',
      tag: 'PIM / DAM',
      title: 'One record per product',
      text: 'Product information and digital asset management in one place: attributes, variants, bills of materials, media and translations, synced with your ERP, PLM and commerce stack. Passports and product pages are generated from it, never retyped.',
    },
    {
      icon: 'twin',
      tag: 'Digital twins on Solana',
      title: 'A fake has no twin',
      text: 'Each unit gets a digital twin anchored on the Solana blockchain. A scan verifies the twin in seconds; ownership transfers with the object. Counterfeits cannot fake a history that is written once and checked publicly.',
    },
    {
      icon: 'scale',
      tag: 'Regulation engine for the EU',
      title: 'Rules follow the product',
      text: 'ESPR/DPP, AGEC product sheets, the French Ecoscore, EUDR, battery passports and customs documentation are mapped to your products. Checks run as data arrives, so compliance is a status, not a project.',
    },
  ],
}

export const journey = {
  eyebrow: 'How it works',
  title: 'From the maker’s hands to yours.',
  intro: 'Every stage writes to the same passport. Nothing is retyped, nothing is lost.',
  steps: [
    {
      label: 'Made',
      title: 'Capture at the source',
      text: 'Materials, suppliers, batch and workshop data flow in from your systems or from suppliers invited into your network.',
    },
    {
      label: 'Shipped',
      title: 'Compliance on the move',
      text: 'Customs, materials declarations, deforestation-free proof and carbon data are checked as the product travels.',
    },
    {
      label: 'Delivered',
      title: 'Passport in hand',
      text: 'A QR or NFC tag opens the product’s passport: origin, care, repair, resale, carbon footprint and Ecoscore — in the customer’s language.',
    },
    {
      label: 'Verified',
      title: 'Proof that lasts',
      text: 'Ownership transfers, repairs and second life are recorded on the digital twin, so the history stays complete long after the sale.',
    },
  ],
}

export const platform = {
  eyebrow: 'The platform',
  title: 'Web3, AI and SaaS — built around a single idea: your product, at the center.',
  intro:
    'Three layers, one product record. Each is useful on its own; together they turn traceability into something suppliers can feed, customers can read and regulators can check.',
  layers: [
    {
      tag: 'Trust layer · Solana',
      title: 'Digital twins that kill counterfeiting',
      text: 'Every unit is minted as a digital twin on Solana, a low-energy proof-of-stake network. Only hashes and proofs go on-chain — documents and personal data stay in your EU data plane.',
      points: ['One twin per unit', 'Public scan-to-verify', 'No personal data on-chain'],
    },
    {
      tag: 'Intelligence',
      title: 'AI that reads your supply chain',
      text: 'Extract data from supplier documents, flag inconsistencies, and compute carbon footprints and Ecoscores from real inputs — with every model call inventoried and human-reviewable.',
      points: ['Document extraction', 'Anomaly detection', 'Carbon & Ecoscore computation'],
    },
    {
      tag: 'Workspace',
      title: 'PIM, DAM and a regulation engine',
      text: 'Product information, digital assets, supplier network and EU compliance status in one workspace, with role-based access, audit logs and an API for everything the UI does.',
      points: ['PIM / DAM', 'Regulation engine for the EU', 'Supplier network & API'],
    },
  ],
}

export const impact = {
  eyebrow: 'Ecology & impact',
  title: 'Know the footprint.',
  em: 'Show it.',
  intro:
    'WidinX computes the carbon footprint of each product from supplier data, produces the AGEC environmental sheet and the French Ecoscore, and publishes them where customers look — the passport, the product page, the label.',
  tags: ['AGEC · Art. 13', 'Ecoscore · Ecobalyse', 'ESPR · DPP', 'Green claims 2026'],
  cta: { label: 'Explore ecology & impact', to: '/sustainability' },
  items: [
    {
      icon: 'carbon',
      title: 'Carbon footprint per product',
      text: 'A life-cycle figure in kg CO₂e for every reference, batch or unit, with the factor and confidence behind each line.',
      note: 'Materials · processes · transport · end of life',
    },
    {
      icon: 'leaf',
      title: 'AGEC & Ecoscore compliance',
      text: 'The AGEC product sheet and the affichage environnemental generated from the same record, aligned with the official ADEME method.',
      note: 'France · reusable across the EU',
    },
    {
      icon: 'passport',
      title: 'Displayed to your customers',
      text: 'Published through the passport QR, a product-page widget and the API. Update once; every surface follows.',
      note: 'QR · NFC · GS1 Digital Link · API',
    },
  ],
}

export const useCases = {
  eyebrow: 'Use cases',
  title: 'Start where it hurts. Grow into the rest.',
  intro:
    'Most teams begin with one regulatory deadline or one counterfeit problem. The same product record serves every use case after that.',
  items: [
    {
      key: 'dpp',
      icon: 'passport',
      title: 'Digital Product Passport',
      text: 'Generate ESPR-ready passports per product, batch or unit, with the data model kept current as delegated acts land.',
    },
    {
      key: 'regulation',
      icon: 'scale',
      title: 'Regulation engine for the EU',
      text: 'ESPR, AGEC, Ecoscore, EUDR, battery and green-claims rules mapped to products and markets. See what is compliant, what is missing and who owns the gap.',
    },
    {
      key: 'twin',
      icon: 'twin',
      title: 'Digital twins on Solana',
      text: 'One anchored twin per unit. Scan-to-verify for customers, retailers and customs; grey-market and counterfeit units detected early.',
    },
    {
      key: 'suppliers',
      icon: 'network',
      title: 'Supplier network',
      text: 'Connect producers with their tier-n suppliers: invitations, document requests, attestations and shared product records — no full licence needed on the supplier side.',
    },
    {
      key: 'pim',
      icon: 'dam',
      title: 'PIM & DAM',
      text: 'Product information and digital assets — attributes, variants, media, translations — aligned with the passport and exported to every channel. No second source of truth.',
    },
    {
      key: 'carbon',
      icon: 'carbon',
      title: 'Carbon footprint & Ecoscore',
      text: 'Compute the footprint of each product from real supply-chain data and display it to customers — AGEC sheet, French Ecoscore and DPP fields included.',
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
    { title: 'Role-based access', text: 'Least-privilege roles, MFA for privileged accounts, SSO for enterprise.' },
    { title: 'Auditability', text: 'Tamper-evident logs for sensitive actions and verifiable product histories.' },
  ],
  cta: { label: 'Visit the Trust Center', to: '/trust' },
}

export const manifesto = {
  eyebrow: 'Why WidinX',
  quote: 'A copy can imitate the object. It can never imitate its',
  em: 'history.',
  caption: 'Proof, not promises',
}

export const finalCta = {
  eyebrow: 'Start a conversation',
  title: 'Ready to give your products a',
  em: 'passport?',
  text: 'Tell us which products, which markets and which deadline. We come back with an honest read and a first step — usually a pilot on your real data.',
}
