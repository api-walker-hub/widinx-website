/**
 * Demonstration passports shown on the website. Every brand, product and figure
 * here is fictional and marked DEMO ONLY. GTINs use the GS1 restricted-circulation
 * range (prefix 2), so they can never collide with a real product's code.
 *
 * Shape mirrors a WidinX public passport: identity, grain (model / batch / serial),
 * version and currentness, sections grouped by audience, claims with their evidence,
 * documents and lifecycle events.
 */

/** GTIN-14 from a 12-digit restricted-range body (starts with 2): leading 0 + body + mod-10 check digit. */
function gtin(body12) {
  const digits = body12.split('').map(Number)
  const sum = digits.reverse().reduce((s, d, i) => s + d * (i % 2 === 0 ? 3 : 1), 0)
  return '0' + body12 + ((10 - (sum % 10)) % 10)
}

/** Audience keys, in the order the switcher shows them. */
export const audiences = [
  { key: 'public', label: 'Consumer' },
  { key: 'b2b', label: 'Business' },
  { key: 'recycler', label: 'Recycler' },
  { key: 'authority', label: 'Authority' },
]

export const passportLocales = ['EN', 'FR', 'DE', 'IT', 'ES', 'NL', 'PL', 'PT']

const TEXTILE_ACT = 'ESPR 2024/1781 · textiles delegated act (expected 2027)'

export const passports = [
  {
    slug: 'merino-crew-sweater',
    sector: 'textile',
    sectorLabel: 'Textile',
    name: 'Merino Crew-Neck Sweater',
    brand: 'Atlas Atelier',
    model: 'AA-KN-0301',
    gtin: gtin('200000000301'),
    batch: 'KN26-0417',
    grain: 'batch',
    image: '/passport-images/tx-03-001.jpg',
    variants: [
      { label: 'Oatmeal', swatch: '#D8CCBA', image: '/passport-images/tx-03-001.jpg' },
      { label: 'Charcoal', swatch: '#3E4143', image: '/passport-images/tx-03-002.jpg' },
      { label: 'Burgundy', swatch: '#6E2232', image: '/passport-images/tx-03-003.jpg' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    version: { n: 3, validFrom: '2026-09-02' },
    regulation: TEXTILE_ACT,
    highlights: [
      { value: '100 %', label: 'Merino wool' },
      { value: '9.4 kg', label: 'CO₂e per item' },
      { value: '10 yrs', label: 'Expected use' },
    ],
    sections: [
      {
        title: 'Product details',
        audience: 'public',
        rows: [
          ['Category', 'Knitwear · crew-neck sweater'],
          ['Fibre composition', '100 % merino wool (19.5 µm)'],
          ['Construction', 'Fine-gauge knit, 240 g/m²'],
          ['Country of manufacture', 'Portugal (knitting, linking, finishing)'],
          ['Fibre origin', 'Australia (mulesing-free, certified farms)'],
          ['Weight', '0.31 kg (size M)'],
        ],
      },
      {
        title: 'Care & repair',
        audience: 'public',
        rows: [
          ['Washing', 'Hand wash or wool cycle at 30 °C · lay flat to dry'],
          ['Repair', 'Free darning of holes for 5 years at partner tailors'],
          ['Spare yarn', 'Matching yarn card sewn inside the side seam'],
          ['Resale', 'Take-back for resale credit in store'],
        ],
      },
      {
        title: 'Supply chain',
        audience: 'b2b',
        rows: [
          ['Spinning', 'Biella, Italy · supplier ID SP-0219'],
          ['Dyeing', 'Barcelos, Portugal · ZDHC MRSL conformant'],
          ['Knitting & make-up', 'Guimarães, Portugal · facility ID PT-GU-118'],
          ['HS code', '6110.11'],
        ],
      },
      {
        title: 'End of life',
        audience: 'recycler',
        rows: [
          ['Mono-material', 'Yes — wool body, wool rib, no elastane'],
          ['Trims to remove', 'Woven label (polyester), size label'],
          ['Recommended route', 'Mechanical recycling to recycled wool yarn'],
          ['Substances of concern', 'None above 0.1 % w/w'],
        ],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [
          ['Economic operator', 'Atlas Atelier SAS · FR 482 917 334'],
          ['Responsible person (EU)', 'Atlas Atelier SAS, 14 rue des Tisserands, 59100 Roubaix, FR'],
          ['Textile labelling', 'Regulation (EU) 1007/2011 conformant'],
          ['REACH Annex XVII', 'Azo dyes < 30 mg/kg (test report attached)'],
        ],
      },
    ],
    claims: [
      { claim: 'Azo dyes below 30 mg/kg', issuer: 'Accredited test laboratory', status: 'verified' },
      { claim: 'Mulesing-free wool', issuer: 'Third-party farm audit', status: 'verified' },
      { claim: 'Fibre composition 100 % merino', issuer: 'Atlas Atelier', status: 'declared' },
    ],
    documents: ['Care guide (PDF)', 'Azo dye test report', 'Declaration of conformity'],
    events: [
      { date: '2026-04-17', label: 'Batch KN26-0417 knitted' },
      { date: '2026-05-06', label: 'Passport published' },
      { date: '2026-09-02', label: 'Version 3 — repair offer added' },
    ],
  },
  {
    slug: 'linen-cushion-cover',
    sector: 'textile',
    sectorLabel: 'Home textile',
    name: 'Linen Cushion Cover 45 × 45',
    brand: 'Casa Lenna',
    model: 'CL-HT-1102',
    gtin: gtin('200000011022'),
    batch: 'LN26-B12',
    grain: 'batch',
    image: '/passport-images/tx-11-002.jpg',
    variants: [{ label: 'Terracotta', swatch: '#B4593B', image: '/passport-images/tx-11-002.jpg' }],
    version: { n: 1, validFrom: '2026-07-21' },
    regulation: TEXTILE_ACT,
    highlights: [
      { value: '100 %', label: 'European flax linen' },
      { value: '2.1 kg', label: 'CO₂e per item' },
      { value: '0', label: 'Plastic in packaging' },
    ],
    sections: [
      {
        title: 'Product details',
        audience: 'public',
        rows: [
          ['Category', 'Home textiles · cushion cover'],
          ['Fibre composition', '100 % linen (flax grown in Normandy)'],
          ['Construction', 'Plain weave, stone-washed, 210 g/m²'],
          ['Closure', 'Coconut-shell buttons'],
          ['Country of manufacture', 'Lithuania'],
        ],
      },
      {
        title: 'Care & repair',
        audience: 'public',
        rows: [
          ['Washing', 'Machine wash 40 °C · tumble dry low'],
          ['Buttons', 'Spare button stitched inside'],
        ],
      },
      {
        title: 'Supply chain',
        audience: 'b2b',
        rows: [
          ['Scutching', 'Normandy, France'],
          ['Weaving', 'Kaunas, Lithuania · facility ID LT-KA-044'],
          ['HS code', '6304.92'],
        ],
      },
      {
        title: 'End of life',
        audience: 'recycler',
        rows: [
          ['Mono-material', 'Linen body; remove coconut buttons before processing'],
          ['Recommended route', 'Mechanical recycling or composting (undyed core)'],
        ],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [
          ['Economic operator', 'Casa Lenna SRL · IT 09281740961'],
          ['Textile labelling', 'Regulation (EU) 1007/2011 conformant'],
        ],
      },
    ],
    claims: [
      { claim: 'European flax, traceable to the field', issuer: 'Flax certification body', status: 'verified' },
      { claim: 'OEKO-TEX® Standard 100', issuer: 'Certificate holder upload', status: 'verified' },
    ],
    documents: ['Care guide (PDF)', 'OEKO-TEX® certificate'],
    events: [
      { date: '2026-06-30', label: 'Batch LN26-B12 woven' },
      { date: '2026-07-21', label: 'Passport published' },
    ],
  },
  {
    slug: 'ebike-battery-500',
    sector: 'battery',
    sectorLabel: 'Battery',
    name: 'E-Bike Battery Pack 500 Wh',
    brand: 'Voltaria',
    model: 'VB-36-500',
    gtin: gtin('200000050003'),
    batch: 'VB26-W31',
    serial: 'VB500-0042719',
    grain: 'serial',
    image: '/passport-images/battery.svg',
    version: { n: 2, validFrom: '2026-08-14' },
    regulation: 'Batteries Regulation (EU) 2023/1542 · passport from 18 Feb 2027',
    highlights: [
      { value: '96 %', label: 'State of health' },
      { value: '61 kg', label: 'CO₂e per kWh' },
      { value: '16 %', label: 'Recycled cobalt' },
    ],
    sections: [
      {
        title: 'Battery identity',
        audience: 'public',
        rows: [
          ['Battery category', 'LMT battery (light means of transport)'],
          ['Chemistry', 'Lithium-ion NMC 811'],
          ['Rated capacity', '13.9 Ah · 500 Wh · 36 V'],
          ['Weight', '2.7 kg'],
          ['Manufacture date', '2026-07-31'],
          ['Place of manufacture', 'Wrocław, Poland'],
        ],
      },
      {
        title: 'Performance & durability',
        audience: 'public',
        rows: [
          ['State of health', '96 % (last reading 2026-10-02)'],
          ['Expected lifetime', '1 000 full cycles to 80 % capacity'],
          ['Carbon footprint class', 'Class B · 61 kg CO₂e/kWh'],
          ['Warranty', '3 years or 800 cycles'],
        ],
      },
      {
        title: 'Materials & recycled content',
        audience: 'b2b',
        rows: [
          ['Recycled cobalt', '16 %'],
          ['Recycled lithium', '6 %'],
          ['Recycled nickel', '6 %'],
          ['Critical raw materials', 'Cobalt, lithium, natural graphite'],
          ['Due diligence report', 'OECD-aligned, 2026 edition'],
        ],
      },
      {
        title: 'Dismantling & end of life',
        audience: 'recycler',
        rows: [
          ['Disassembly', '6 Torx T20 screws · cell module clips out · no adhesive'],
          ['Hazards', 'Discharge below 2.5 V/cell before opening'],
          ['Take-back', 'Free at any partner bike shop in the EU'],
          ['Cell supplier', 'Disclosed to authorised recyclers on request'],
        ],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [
          ['Economic operator', 'Voltaria Sp. z o.o. · PL 8971923345'],
          ['CE marking', 'Batteries Regulation · EN 50604-1'],
          ['Unique identifier', 'VB500-0042719'],
        ],
      },
    ],
    claims: [
      { claim: 'Carbon footprint 61 kg CO₂e/kWh', issuer: 'Notified body verification', status: 'verified' },
      { claim: '16 % recycled cobalt', issuer: 'Voltaria', status: 'declared' },
    ],
    documents: ['EU declaration of conformity', 'Carbon footprint study', 'Dismantling guide'],
    events: [
      { date: '2026-07-31', label: 'Unit manufactured' },
      { date: '2026-08-14', label: 'Passport published' },
      { date: '2026-10-02', label: 'State-of-health reading 96 %' },
    ],
  },
  {
    slug: 'nordbyte-aero-14',
    sector: 'electronics',
    sectorLabel: 'Electronics',
    name: 'Aero 14 Laptop',
    brand: 'Nordbyte',
    model: 'NB-A14-2026',
    gtin: gtin('200000014007'),
    grain: 'model',
    image: '/passport-images/laptop.svg',
    version: { n: 1, validFrom: '2026-06-10' },
    regulation: 'ESPR · Ecodesign for electronics (expected 2028) · EPREL',
    highlights: [
      { value: '8.1 / 10', label: 'Repairability index' },
      { value: '7 yrs', label: 'Spare parts' },
      { value: '41 %', label: 'Recycled aluminium' },
    ],
    sections: [
      {
        title: 'Product details',
        audience: 'public',
        rows: [
          ['Category', 'Notebook computer, 14″'],
          ['Battery endurance', '1 000 cycles to 80 % · user-replaceable'],
          ['Software updates', 'Security updates guaranteed until 2033'],
          ['Energy', 'Typical energy consumption 14.2 kWh/year'],
        ],
      },
      {
        title: 'Repair',
        audience: 'public',
        rows: [
          ['Repairability index', '8.1 / 10'],
          ['Spare parts', 'Battery, keyboard, screen, SSD, fan — 7 years'],
          ['Repair manual', 'Public, with part numbers and torque values'],
          ['Tools needed', 'Standard Phillips #0'],
        ],
      },
      {
        title: 'Materials',
        audience: 'b2b',
        rows: [
          ['Chassis', 'Aluminium, 41 % post-consumer recycled'],
          ['Plastics', '32 % recycled content'],
          ['SVHC', 'None above 0.1 % w/w'],
        ],
      },
      {
        title: 'End of life',
        audience: 'recycler',
        rows: [
          ['Battery removal', '4 screws, connector — no adhesive'],
          ['Printed circuit boards', 'Marked for precious-metal recovery'],
        ],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [
          ['Economic operator', 'Nordbyte AB · SE 559281-4402'],
          ['CE / RoHS', 'Conformant · DoC attached'],
          ['EPREL registration', '1923441'],
        ],
      },
    ],
    claims: [
      { claim: 'Repairability index 8.1', issuer: 'Independent repair lab', status: 'verified' },
      { claim: '41 % recycled aluminium', issuer: 'Nordbyte', status: 'declared' },
    ],
    documents: ['Repair manual', 'EU declaration of conformity', 'Energy label'],
    events: [{ date: '2026-06-10', label: 'Model passport published' }],
  },
  {
    slug: 'oak-dining-chair',
    sector: 'furniture',
    sectorLabel: 'Furniture',
    name: 'Oak Dining Chair',
    brand: 'Forma Nord',
    model: 'FN-CH-07',
    gtin: gtin('200000000707'),
    batch: 'FN26-311',
    grain: 'batch',
    image: '/passport-images/chair.svg',
    version: { n: 1, validFrom: '2026-05-19' },
    regulation: 'ESPR · furniture (working plan 2025–2030) · EUDR',
    highlights: [
      { value: 'FSC®', label: 'Certified oak' },
      { value: '25 yrs', label: 'Design lifetime' },
      { value: '100 %', label: 'Spare parts listed' },
    ],
    sections: [
      {
        title: 'Product details',
        audience: 'public',
        rows: [
          ['Materials', 'Solid European oak, wool seat pad'],
          ['Finish', 'Natural hard-wax oil, VOC < 5 g/l'],
          ['Dimensions', 'W 46 × D 52 × H 81 cm'],
          ['Country of manufacture', 'Denmark'],
        ],
      },
      {
        title: 'Care & repair',
        audience: 'public',
        rows: [
          ['Care', 'Re-oil once a year'],
          ['Spare parts', 'Seat pad, glides, joining dowels'],
        ],
      },
      {
        title: 'Supply chain',
        audience: 'b2b',
        rows: [
          ['Timber origin', 'Poland · geolocated forest plots'],
          ['EUDR due diligence', 'Statement reference attached'],
        ],
      },
      {
        title: 'End of life',
        audience: 'recycler',
        rows: [['Disassembly', 'Bolted frame, no glue in main joints']],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [['Economic operator', 'Forma Nord ApS · DK 41928374']],
      },
    ],
    claims: [
      { claim: 'FSC® certified oak', issuer: 'Chain-of-custody certificate', status: 'verified' },
      { claim: 'Deforestation-free (EUDR)', issuer: 'Forma Nord due diligence', status: 'declared' },
    ],
    documents: ['Assembly & care guide', 'FSC® certificate', 'EUDR due diligence statement'],
    events: [
      { date: '2026-05-02', label: 'Batch FN26-311 produced' },
      { date: '2026-05-19', label: 'Passport published' },
    ],
  },
  {
    slug: 'rpet-water-bottle',
    sector: 'packaging',
    sectorLabel: 'Packaging',
    name: 'Still Water 0.5 L — rPET Bottle',
    brand: 'Source Claire',
    model: 'SC-050',
    gtin: gtin('200000000501'),
    batch: 'L26-288-B',
    grain: 'batch',
    image: '/passport-images/bottle.svg',
    version: { n: 1, validFrom: '2026-08-12' },
    regulation: 'PPWR (EU) 2025/40 · applies from 12 Aug 2026',
    highlights: [
      { value: '100 %', label: 'Recycled PET' },
      { value: 'Grade A', label: 'Recyclability' },
      { value: 'DRS', label: 'Deposit return' },
    ],
    sections: [
      {
        title: 'Packaging layers',
        audience: 'public',
        rows: [
          ['Bottle', 'PET, 100 % recycled · 14 g'],
          ['Cap', 'HDPE, tethered · 1.6 g'],
          ['Label', 'PP film, wash-off adhesive'],
        ],
      },
      {
        title: 'Sorting instructions',
        audience: 'public',
        rows: [
          ['Return', 'Deposit return scheme — €0.15 in DE, NL, IE'],
          ['Elsewhere', 'Yellow bin, cap on'],
        ],
      },
      {
        title: 'Recyclability',
        audience: 'recycler',
        rows: [
          ['Design-for-recycling grade', 'A'],
          ['PFAS', 'Not intentionally added'],
        ],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [
          ['Producer', 'Source Claire SA · BE 0712.384.991'],
          ['EPR registration', 'Registered in BE, FR, DE'],
        ],
      },
    ],
    claims: [{ claim: '100 % recycled PET', issuer: 'Recycled-content certification', status: 'verified' }],
    documents: ['Declaration of conformity (PPWR)'],
    events: [{ date: '2026-08-12', label: 'Passport published' }],
  },
  {
    slug: 'ridgeway-ecogrip',
    sector: 'tyre',
    sectorLabel: 'Tyre',
    name: 'EcoGrip 205/55 R16 91V',
    brand: 'Ridgeway',
    model: 'RW-EG-2055516',
    gtin: gtin('200000205516'),
    grain: 'model',
    image: '/passport-images/tyre.svg',
    version: { n: 2, validFrom: '2026-03-01' },
    regulation: 'Tyre labelling (EU) 2020/740 · EPREL',
    highlights: [
      { value: 'A', label: 'Fuel efficiency' },
      { value: 'A', label: 'Wet grip' },
      { value: '69 dB', label: 'External noise' },
    ],
    sections: [
      {
        title: 'Tyre label',
        audience: 'public',
        rows: [
          ['Fuel efficiency class', 'A'],
          ['Wet grip class', 'A'],
          ['External rolling noise', '69 dB · class A'],
          ['Snow / ice', '3PMSF — no'],
        ],
      },
      {
        title: 'Materials',
        audience: 'b2b',
        rows: [
          ['Renewable & recycled materials', '38 %'],
          ['Natural rubber origin', 'Due diligence under EUDR'],
        ],
      },
      {
        title: 'End of life',
        audience: 'recycler',
        rows: [['Recommended route', 'Retreading, then granulation']],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [
          ['EPREL registration', '1428873'],
          ['Type approval', 'E4 · R117'],
        ],
      },
    ],
    claims: [{ claim: 'Label classes A / A / A', issuer: 'Type-approval test', status: 'verified' }],
    documents: ['EU tyre label', 'Product information sheet'],
    events: [
      { date: '2025-11-03', label: 'Model passport published' },
      { date: '2026-03-01', label: 'Version 2 — recycled content updated' },
    ],
  },
  {
    slug: 'wooden-train-set',
    sector: 'toys',
    sectorLabel: 'Toys',
    name: 'Wooden Train Starter Set',
    brand: 'Little Pine',
    model: 'LP-TR-01',
    gtin: gtin('200000000127'),
    batch: 'LP26-0812',
    grain: 'batch',
    image: '/passport-images/toy.svg',
    version: { n: 1, validFrom: '2026-09-15' },
    regulation: 'Toy Safety Regulation (EU) 2025 · digital product passport',
    highlights: [
      { value: '3+', label: 'Age' },
      { value: 'Beech', label: 'FSC® wood' },
      { value: 'EN 71', label: 'Tested' },
    ],
    sections: [
      {
        title: 'Product details',
        audience: 'public',
        rows: [
          ['Age', '3 years and up'],
          ['Materials', 'Beech wood, water-based paints'],
          ['Pieces', '18'],
          ['Warnings', 'Not suitable for children under 36 months — small parts'],
        ],
      },
      {
        title: 'Safety',
        audience: 'authority',
        rows: [
          ['EN 71-1/2/3', 'Passed · test report attached'],
          ['Economic operator', 'Little Pine GmbH · DE 318294771'],
        ],
      },
      {
        title: 'End of life',
        audience: 'recycler',
        rows: [['Route', 'Wood recycling; magnets to metal stream']],
      },
    ],
    claims: [{ claim: 'EN 71 safety tests passed', issuer: 'Accredited toy-testing lab', status: 'verified' }],
    documents: ['EN 71 test report', 'EU declaration of conformity'],
    events: [{ date: '2026-09-15', label: 'Passport published' }],
  },
  {
    slug: 'isoterra-mineral-wool',
    sector: 'construction',
    sectorLabel: 'Construction',
    name: 'Mineral Wool Insulation Roll 100 mm',
    brand: 'Isoterra',
    model: 'IT-MW-100',
    gtin: gtin('200000001001'),
    batch: 'IT26-35',
    grain: 'batch',
    image: '/passport-images/insulation.svg',
    version: { n: 1, validFrom: '2026-04-04' },
    regulation: 'Construction Products Regulation (EU) 2024/3110',
    highlights: [
      { value: '0.035', label: 'λ W/(m·K)' },
      { value: 'A1', label: 'Reaction to fire' },
      { value: '62 %', label: 'Recycled glass' },
    ],
    sections: [
      {
        title: 'Declared performance',
        audience: 'public',
        rows: [
          ['Thermal conductivity', 'λD 0.035 W/(m·K)'],
          ['Thermal resistance', 'RD 2.85 m²·K/W'],
          ['Reaction to fire', 'Euroclass A1'],
        ],
      },
      {
        title: 'Environmental data',
        audience: 'b2b',
        rows: [
          ['EPD', 'EN 15804+A2 · GWP 1.2 kg CO₂e/m²'],
          ['Recycled content', '62 % post-consumer glass'],
        ],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [['Declaration of performance', 'DoP IT-MW-100-2026']],
      },
    ],
    claims: [{ claim: 'EPD verified', issuer: 'Programme operator', status: 'verified' }],
    documents: ['Declaration of performance', 'Environmental product declaration'],
    events: [{ date: '2026-04-04', label: 'Passport published' }],
  },
  {
    slug: 'herbelle-face-cream',
    sector: 'cosmetics',
    sectorLabel: 'Cosmetics',
    name: 'Daily Face Cream 50 ml',
    brand: 'Herbelle',
    model: 'HB-FC-50',
    gtin: gtin('200000000509'),
    batch: 'HB26-271',
    grain: 'batch',
    image: '/passport-images/cream.svg',
    version: { n: 1, validFrom: '2026-10-01' },
    regulation: 'Cosmetics Regulation (EC) 1223/2009 · digital labelling',
    highlights: [
      { value: '98 %', label: 'Natural origin' },
      { value: '12 M', label: 'After opening' },
      { value: 'Glass', label: 'Refillable jar' },
    ],
    sections: [
      {
        title: 'Ingredients (INCI)',
        audience: 'public',
        rows: [
          ['List', 'Aqua, Glycerin, Squalane, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Glyceryl Stearate, Tocopherol, Xanthan Gum, Sodium Levulinate, Parfum'],
          ['Allergens', 'Limonene, Linalool'],
          ['Period after opening', '12 months'],
        ],
      },
      {
        title: 'Packaging',
        audience: 'public',
        rows: [['Jar', 'Glass, refill pods available'], ['Lid', 'Aluminium, 80 % recycled']],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [['Responsible person', 'Herbelle SAS, Grasse, FR'], ['CPNP notification', '3928471']],
      },
    ],
    claims: [{ claim: '98 % ingredients of natural origin', issuer: 'ISO 16128 calculation', status: 'declared' }],
    documents: ['Product information summary', 'Refill guide'],
    events: [{ date: '2026-10-01', label: 'Passport published' }],
  },
  {
    slug: 'atlas-leather-tote',
    sector: 'luxury',
    sectorLabel: 'Leather goods',
    name: 'Atelier Tote — Full-Grain Leather',
    brand: 'Atlas Leathercraft',
    model: 'AL-TT-01',
    gtin: gtin('200000000011'),
    batch: 'AL26-09',
    serial: 'AL-TT-01-000318',
    grain: 'serial',
    image: '/passport-images/handbag.svg',
    version: { n: 2, validFrom: '2026-09-28' },
    regulation: 'ESPR · authenticity & ownership (voluntary)',
    highlights: [
      { value: '#318', label: 'Of 500 numbered' },
      { value: 'LWG Gold', label: 'Tannery' },
      { value: 'Lifetime', label: 'Repair service' },
    ],
    sections: [
      {
        title: 'Authenticity',
        audience: 'public',
        rows: [
          ['Serial number', 'AL-TT-01-000318'],
          ['Signed passport', 'Ed25519 signature valid'],
          ['Ownership', 'Transferable to the next owner from this page'],
        ],
      },
      {
        title: 'Craft & materials',
        audience: 'public',
        rows: [
          ['Leather', 'Full-grain calf, vegetable-tanned, Tuscany'],
          ['Hardware', 'Solid brass'],
          ['Hand-stitched in', 'Florence, Italy'],
        ],
      },
      {
        title: 'Supply chain',
        audience: 'b2b',
        rows: [['Tannery', 'Santa Croce sull’Arno · LWG Gold'], ['Hides', 'By-product of EU food industry']],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [['Economic operator', 'Atlas Leathercraft SRL · IT 07219440487']],
      },
    ],
    claims: [
      { claim: 'LWG Gold-rated tannery', issuer: 'Leather Working Group audit', status: 'verified' },
      { claim: 'Hand-stitched in Florence', issuer: 'Atlas Leathercraft', status: 'declared' },
    ],
    documents: ['Certificate of authenticity', 'Care guide'],
    events: [
      { date: '2026-09-11', label: 'Unit #318 finished' },
      { date: '2026-09-28', label: 'Version 2 — first owner registered' },
    ],
  },
  {
    slug: 'clearleaf-laundry-liquid',
    sector: 'detergent',
    sectorLabel: 'Digital label',
    name: 'Laundry Liquid 1.5 L',
    brand: 'Clearleaf',
    model: 'CLF-LL-150',
    gtin: gtin('200000001506'),
    grain: 'model',
    image: '/passport-images/detergent.svg',
    version: { n: 1, validFrom: '2026-07-01' },
    regulation: 'Detergents Regulation · digital label',
    highlights: [
      { value: '40', label: 'Washes' },
      { value: '30 °C', label: 'Effective from' },
      { value: '50 %', label: 'Recycled HDPE' },
    ],
    sections: [
      {
        title: 'Digital label',
        audience: 'public',
        rows: [
          ['Ingredients', '5–15 % anionic surfactants, < 5 % non-ionic surfactants, soap, enzymes, perfume'],
          ['Dosage', '35 ml per normal load · 50 ml heavily soiled'],
          ['Hazard', 'Causes serious eye irritation (H319)'],
        ],
      },
      {
        title: 'Packaging',
        audience: 'public',
        rows: [['Bottle', 'HDPE, 50 % recycled · recyclable'], ['Refill', 'Refill stations in 120 stores']],
      },
      {
        title: 'Compliance',
        audience: 'authority',
        rows: [['Safety data sheet', 'Available to professionals']],
      },
    ],
    claims: [{ claim: '50 % recycled HDPE bottle', issuer: 'Clearleaf', status: 'declared' }],
    documents: ['Safety data sheet', 'Ingredient data sheet'],
    events: [{ date: '2026-07-01', label: 'Digital label published' }],
  },
]

export const findPassport = (slug) => passports.find((p) => p.slug === slug)
export const findByGtin = (code) => passports.find((p) => p.gtin === code)

/** GS1 Digital Link path for a passport at its own grain. */
export function digitalLinkPath(p) {
  let path = `/01/${p.gtin}`
  if (p.batch && p.grain !== 'model') path += `/10/${p.batch}`
  if (p.serial && p.grain === 'serial') path += `/21/${p.serial}`
  return path
}
