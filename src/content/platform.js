export const platformPage = {
  hero: {
    eyebrow: 'Platform',
    title: 'The product record that suppliers feed, regulators check and customers',
    em: 'trust.',
    lead:
      'WidinX is a SaaS platform with PIM/DAM tools, a supplier network, a regulation engine for the EU and digital twins anchored on Solana. It sits between the systems you already run — ERP, PIM, PLM, e-commerce — and the people who need proof.',
  },
  modules: {
    eyebrow: 'Modules',
    title: 'Everything a passport needs, nothing you have to build.',
    items: [
      {
        icon: 'box',
        title: 'Product registry',
        text: 'Canonical identity per SKU, batch and unit. Attributes, bill of materials and suppliers, versioned over time.',
      },
      {
        icon: 'dam',
        title: 'PIM / DAM',
        text: 'Product information and digital asset management: attributes, variants, media, translations and channel exports, synced with ERP, PLM and commerce.',
      },
      {
        icon: 'network',
        title: 'Supplier network',
        text: 'Invite tier-n suppliers, request documents and attestations, and share the product records they contribute to — without a full licence on their side.',
      },
      {
        icon: 'passport',
        title: 'Passport builder',
        text: 'Templates per product category and regulation. Public and restricted views, multilingual, resolvable by QR, NFC or GS1 Digital Link.',
      },
      {
        icon: 'scale',
        title: 'Regulation engine for the EU',
        text: 'ESPR/DPP, AGEC, French Ecoscore, EUDR, battery passport and green-claims rules mapped to products and markets. Rules run on every data change and produce an auditable status.',
      },
      {
        icon: 'twin',
        title: 'Digital twins on Solana',
        text: 'One twin per unit, minted and anchored on Solana. Ownership transfers, repairs and resale are written to the twin; only hashes and proofs go on-chain.',
      },
      {
        icon: 'shield',
        title: 'Verification',
        text: 'Scan-to-verify for customers, retailers and customs, with anomaly signals for duplicated, misplaced or suspicious scans.',
      },
      {
        icon: 'route',
        title: 'Chain of custody',
        text: 'Events from manufacturing to resale, tied to the digital twin and to the supplier who declared them.',
      },
      {
        icon: 'carbon',
        title: 'Carbon footprint & Ecoscore',
        text: 'Life-cycle carbon in kg CO₂e per product plus the French environmental cost (Ecobalyse method), computed from declared inputs with methodology and confidence shown.',
      },
      {
        icon: 'leaf',
        title: 'AGEC environmental sheet',
        text: 'The Article 13 product sheet — traceability, recycled content, recyclability, substances, microplastics, repairability, sorting — generated and published automatically.',
      },
      {
        icon: 'spark',
        title: 'AI assistants',
        text: 'Extract data from certificates and invoices, suggest mappings and flag inconsistencies. Every call is inventoried and reviewable.',
      },
      {
        icon: 'plug',
        title: 'API & integrations',
        text: 'REST API and webhooks for everything the UI does. Connectors for common ERP, PIM, PLM and commerce platforms.',
      },
    ],
  },
  twin: {
    eyebrow: 'Digital twins on Solana',
    title: 'One product. One twin. No room for a copy.',
    intro:
      'A counterfeit can copy a logo, a stitch or a tag. It cannot copy a twin that was created when the genuine unit was, and that anyone can check.',
    steps: [
      { title: 'Serialise', text: 'Each unit receives an identifier — QR, NFC or RFID — linked to its product record.' },
      { title: 'Mint', text: 'A digital twin is created and its fingerprint anchored on Solana, a proof-of-stake network with negligible energy per transaction.' },
      { title: 'Verify', text: 'A scan compares the physical tag with the anchored twin and shows the passport. Duplicates and misplaced scans raise a signal.' },
      { title: 'Transfer', text: 'Resale, repair and take-back are written to the twin, so ownership and history travel with the object — without exposing the owner.' },
    ],
    facts: [
      'Hashes and proofs on-chain; documents and personal data never',
      'Public verification without a wallet or crypto knowledge',
      'Works with existing serialisation and tag suppliers',
      'Network footprint reported and offset by the Solana Foundation',
    ],
  },
  architecture: {
    eyebrow: 'Architecture',
    title: 'Your data stays where you decide.',
    intro:
      'WidinX runs EU-first on a single production cloud with a portable, infrastructure-as-code stack. Each tenant carries its own residency policy.',
    nodes: [
      {
        title: 'Global edge & control',
        text: 'DNS, WAF, tenant routing and minimal billing metadata. Never a reservoir of customer data.',
      },
      {
        title: 'EU data plane',
        text: 'Application, database, object store, search, queues, logs, keys and backups — all inside the EU region you choose.',
      },
      {
        title: 'Additional data planes',
        text: 'Same stack, isolated data, deployed for other regions only when a customer needs it.',
      },
    ],
    policy: [
      'primary_region and backup_region per tenant',
      'Allowed AI regions and cross-border transfer policy per tenant',
      'Region-scoped logs, backups, monitoring and support exports',
      'Anchors and hashes may be global; personal data and documents never are',
    ],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Plays well with the stack you have.',
    groups: [
      { title: 'ERP', items: ['SAP', 'Microsoft Dynamics', 'Oracle NetSuite', 'Odoo'] },
      { title: 'PIM / PLM', items: ['Akeneo', 'Salsify', 'Centric PLM', 'PTC Windchill'] },
      { title: 'Commerce', items: ['Shopify', 'Salesforce Commerce', 'commercetools', 'Adobe Commerce'] },
      { title: 'Identification', items: ['GS1 Digital Link', 'QR & NFC tags', 'RFID', 'Serialisation partners'] },
    ],
    note: 'Connector list is indicative of the platforms we integrate with through the API and standard connectors; availability is confirmed during scoping.',
  },
}
