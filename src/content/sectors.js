/**
 * Who WidinX is for, the regulations timeline and the sector templates.
 * Sector list mirrors the app's EU sector templates (useSectorTemplates.ts).
 * Textiles is the path offered in the console today; the other templates exist
 * and are opened per pilot.
 */

export const timeline = [
  {
    date: '18 Jul 2024',
    title: 'ESPR enters into force',
    text: 'Regulation (EU) 2024/1781 sets the Digital Product Passport as the rule for products sold in the EU.',
    status: 'in-force',
  },
  {
    date: '19 Jul 2026',
    title: 'Unsold apparel: destruction ban',
    text: 'Large companies may no longer destroy unsold clothing and footwear, and must disclose what they discard.',
    status: 'in-force',
  },
  {
    date: 'Mid 2026',
    title: 'EU DPP registry',
    text: 'The Commission registry that holds each passport’s unique identifier opens to economic operators.',
    status: 'in-force',
  },
  {
    date: '12 Aug 2026',
    title: 'PPWR applies',
    text: 'Packaging and Packaging Waste Regulation obligations start: recyclability, recycled content, labelling.',
    status: 'in-force',
  },
  {
    date: '18 Feb 2027',
    title: 'Battery passport required',
    text: 'EV, light-means-of-transport and industrial batteries above 2 kWh need a passport per unit.',
    status: 'applies',
  },
  {
    date: '2027',
    title: 'Textiles delegated act',
    text: 'Expected adoption of the textile and apparel requirements; passports follow about 18 months later.',
    status: 'expected',
  },
  {
    date: '2027 – 2028',
    title: 'Steel, aluminium, tyres',
    text: 'Next delegated acts in the ESPR working plan, with intermediate products such as steel coil.',
    status: 'expected',
  },
  {
    date: '2028 +',
    title: 'Electronics, furniture, toys, construction',
    text: 'ICT and electronics, furniture and mattresses, the new Toy Safety Regulation and the revised Construction Products Regulation.',
    status: 'expected',
  },
]

export const statusLabels = {
  'in-force': 'In force',
  applies: 'Applies from',
  expected: 'Expected',
}

export const roles = [
  {
    id: 'eu',
    icon: 'building',
    title: 'EU producers & importers',
    lead: 'You are the economic operator. You publish the passport and answer for it.',
    points: [
      'Import your catalogue from CSV, JSON or Akeneo and map the columns once',
      'Pick the sector template; the regulation decides the grain: model, batch or item',
      'Publish with an independent approval, print the GS1 code, update the data for years',
    ],
  },
  {
    id: 'non-eu',
    icon: 'globe',
    title: 'Non-EU producers',
    lead: 'You hold the product data; your EU importer or authorised representative holds the responsibility.',
    points: [
      'Fill the passport data where it is born — at the factory',
      'Share it with the EU operator who signs and publishes',
      'One record serves every brand and market you supply',
    ],
  },
  {
    id: 'partners',
    icon: 'users',
    title: 'Consultants & partners',
    lead: 'Compliance consultants, producer responsibility organisations and integrators.',
    points: [
      'Run passports for several clients from one place',
      'Keep each client’s data, approvals and audit trail separate',
      'Stay independent: your clients own their passports',
    ],
  },
]

export const sectors = [
  {
    id: 'textile',
    icon: 'layers',
    name: 'Textiles & apparel',
    status: 'live',
    regulation: 'ESPR textiles act · destruction ban 2026',
    text: 'Fibre composition, origin of each stage, care and repair, substances of concern. One passport per style, colour or batch.',
    example: 'merino-crew-sweater',
  },
  {
    id: 'battery',
    icon: 'battery',
    name: 'Batteries',
    status: 'template',
    regulation: 'Batteries Regulation 2023/1542 · 18 Feb 2027',
    text: 'Per-unit passport with state of health, carbon footprint class, recycled content and dismantling information.',
    example: 'ebike-battery-500',
  },
  {
    id: 'packaging',
    icon: 'box',
    name: 'Packaging',
    status: 'template',
    regulation: 'PPWR 2025/40 · from 12 Aug 2026',
    text: 'Material layers, recyclability grade, recycled content, PFAS and sorting instructions per market.',
    example: 'rpet-water-bottle',
  },
  {
    id: 'electronics',
    icon: 'plug',
    name: 'Electronics & ICT',
    status: 'template',
    regulation: 'ESPR · EPREL · repairability',
    text: 'Repairability, spare parts availability, software support period, battery endurance.',
    example: 'nordbyte-aero-14',
  },
  {
    id: 'furniture',
    icon: 'sofa',
    name: 'Furniture',
    status: 'template',
    regulation: 'ESPR working plan · EUDR',
    text: 'Materials, timber origin and deforestation due diligence, spare parts, disassembly.',
    example: 'oak-dining-chair',
  },
  {
    id: 'tyres',
    icon: 'refresh',
    name: 'Tyres',
    status: 'template',
    regulation: 'Tyre labelling 2020/740 · EPREL',
    text: 'Label classes, recycled and renewable content, natural rubber due diligence.',
    example: 'ridgeway-ecogrip',
  },
  {
    id: 'construction',
    icon: 'building',
    name: 'Construction products',
    status: 'template',
    regulation: 'CPR 2024/3110',
    text: 'Declaration of performance, environmental product declaration, recycled content.',
    example: 'isoterra-mineral-wool',
  },
  {
    id: 'toys',
    icon: 'spark',
    name: 'Toys',
    status: 'template',
    regulation: 'Toy Safety Regulation',
    text: 'Age grading, warnings, safety test reports and the economic operator behind the toy.',
    example: 'wooden-train-set',
  },
  {
    id: 'cosmetics',
    icon: 'drop',
    name: 'Cosmetics',
    status: 'template',
    regulation: 'Cosmetics Regulation 1223/2009',
    text: 'Ingredients, allergens, period after opening, refill and packaging data.',
    example: 'herbelle-face-cream',
  },
  {
    id: 'chemicals',
    icon: 'drop',
    name: 'Chemicals & detergents',
    status: 'template',
    regulation: 'Detergents Regulation · digital label',
    text: 'The light passport: a digital label for ingredients, dosage and hazards, live in days.',
    example: 'clearleaf-laundry-liquid',
  },
  {
    id: 'luxury',
    icon: 'bag',
    name: 'Leather goods & luxury',
    status: 'template',
    regulation: 'Voluntary · authenticity',
    text: 'Item-level passports with serial numbers, provenance and ownership for resale.',
    example: 'atlas-leather-tote',
  },
  { id: 'machinery', icon: 'key', name: 'Machinery', status: 'template', regulation: 'Machinery Regulation 2023/1230', text: 'Digital instructions, declarations of conformity and spare parts.' },
  { id: 'vehicles', icon: 'route', name: 'Vehicles', status: 'template', regulation: 'ELV proposal · circularity', text: 'Recycled content, dismantling information and the parts that carry passports.' },
  { id: 'metals', icon: 'layers', name: 'Steel & aluminium', status: 'template', regulation: 'ESPR working plan', text: 'Intermediate products: grade, carbon intensity and recycled content per heat or coil.' },
  { id: 'food', icon: 'leaf', name: 'Food & medical', status: 'template', regulation: 'Sector rules', text: 'Batch-level digital labels and traceability where sector rules call for them.' },
]
