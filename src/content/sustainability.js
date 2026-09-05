/**
 * Ecology & impact page. Regulatory facts and statistics are sourced in
 * `sources` — keep numbers and links together when editing.
 */
export const sustainabilityPage = {
  hero: {
    eyebrow: 'Ecology & impact',
    title: 'Know the footprint of every product. Then',
    em: 'show it.',
    lead:
      'WidinX computes the environmental footprint of your products from real supply-chain data and turns it into what French and EU rules now require — AGEC product sheets, the Ecoscore (environmental cost) display and Digital Product Passports — visible to your customers at the point of sale.',
  },

  // Example passport data shown in the hero card
  sample: {
    product: 'Leather tote · Ref. LT-2041',
    carbon: '12.4 kg CO₂e',
    ecoscore: '1 340 pts',
    ecoscoreLabel: 'Coût environnemental',
    rows: [
      ['Recycled content', '38 %'],
      ['Weaving', 'Prato, Italy'],
      ['Dyeing', 'Guimarães, Portugal'],
      ['Making', 'Cholet, France'],
      ['Microfibres', 'None declared'],
      ['Sorting', 'Triman · Info-tri'],
    ],
  },

  compute: {
    eyebrow: 'What we compute',
    title: 'Four things a product has to be able to say about itself.',
    intro:
      'Every indicator is computed from the same product record that feeds your passports, so the numbers you publish, the sheets you file and the passports customers scan never disagree.',
    items: [
      {
        icon: 'carbon',
        title: 'Carbon footprint per product',
        text: 'A life-cycle based figure in kg CO₂e for each reference, batch or unit — materials, processes, transport and end of life — built from your bill of materials and supplier declarations, with the emission factor and confidence shown for every line.',
      },
      {
        icon: 'leaf',
        title: 'Ecoscore · environmental cost',
        text: 'The French affichage environnemental for textiles, expressed in impact points and aligned with the official ADEME Ecobalyse method, plus the underlying PEF indicators so you can publish in France and reuse the data elsewhere in Europe.',
      },
      {
        icon: 'passport',
        title: 'AGEC product sheet',
        text: 'The “fiche produit relative aux qualités et caractéristiques environnementales” required by Article 13 of the AGEC law: traceability of manufacturing steps, recycled material share, recyclability, hazardous substances, microplastic release, repairability and sorting instructions — generated automatically.',
      },
      {
        icon: 'refresh',
        title: 'Circularity & second life',
        text: 'Repair, resale, take-back and recycling events written to the passport, so durability and circular claims are backed by records rather than intentions.',
      },
    ],
  },

  how: {
    eyebrow: 'How it works',
    title: 'Collect. Compute. Display.',
    steps: [
      {
        label: 'Collect',
        title: 'From your suppliers, not from guesses',
        text: 'Producers invite their suppliers into the WidinX supplier network. Material composition, process energy, certificates and transport legs arrive as structured data, tied to the products they concern.',
      },
      {
        label: 'Compute',
        title: 'Rules and factors you can audit',
        text: 'The regulation engine applies the method that fits the market — Ecobalyse for the French Ecoscore, PEF-based indicators for the EU, AGEC fields for the product sheet — and records the version, factor and assumption behind every number.',
      },
      {
        label: 'Display',
        title: 'Where customers actually look',
        text: 'Carbon footprint, Ecoscore and AGEC information are published through the product passport (QR, NFC, GS1 Digital Link), a product-page widget and the API. Update the data once; every surface follows.',
      },
    ],
  },

  regulations: {
    eyebrow: 'Regulations we support',
    title: 'French and European rules, mapped to your products.',
    intro:
      'WidinX ships with the obligations below modelled as rules. When a threshold, method or date changes, the rule changes — not your data model.',
    items: [
      {
        code: 'AGEC · Art. 13',
        name: 'Loi anti-gaspillage pour une économie circulaire — Decree 2022-748',
        when: 'In force · thresholds since 1 Jan 2023, 2024 and 2025',
        text: 'Free, dematerialised information on the environmental qualities and characteristics of products (traceability, recycled content, recyclability, substances, microplastics, repairability, sorting). Applies to companies above €50M turnover and 25,000 units since 2023, €20M and 10,000 units since 2024, €10M and 10,000 units since 2025.',
      },
      {
        code: 'Ecoscore',
        name: 'Affichage environnemental textile — Decree 2025-957 (Climate & Resilience law)',
        when: 'Voluntary display since 1 October 2025',
        text: 'The “coût environnemental” of clothing, calculated with the official ADEME Ecobalyse method and expressed in impact points per reference. WidinX produces the score and the required breakdown, ready for the label, the product page and the passport.',
      },
      {
        code: 'Triman · Info-tri',
        name: 'Sorting signage under AGEC',
        when: 'In force',
        text: 'Correct Triman logo and sorting instructions per product family and market, kept consistent between packaging data, the AGEC sheet and the passport.',
      },
      {
        code: 'ESPR · DPP',
        name: 'Ecodesign for Sustainable Products Regulation (EU) 2024/1781',
        when: 'In force since July 2024 · product acts from 2027',
        text: 'The Digital Product Passport carries durability, repairability, recycled content and footprint data at EU level. The same WidinX record that answers AGEC today feeds the passport when your product group is covered.',
      },
      {
        code: 'Green claims',
        name: 'Empowering Consumers Directive (EU) 2024/825',
        when: 'Applies from 27 September 2026',
        text: 'Generic environmental claims without recognised proof are banned across the EU. A computed, documented footprint is the difference between a claim you can keep and one you have to remove.',
      },
      {
        code: 'CSRD',
        name: 'Corporate Sustainability Reporting Directive',
        when: 'Phased in from FY2024',
        text: 'Product-level footprints roll up into company disclosures under the European Sustainability Reporting Standards, with the evidence trail auditors ask for.',
      },
    ],
  },

  why: {
    eyebrow: 'Why it matters',
    title: 'The footprint is real. Customers want it shown.',
    stats: [
      {
        value: '121 Mt CO₂e',
        label: 'greenhouse gas emissions from producing the textiles Europeans consumed in 2020 — about 270 kg per person',
        source: 'European Environment Agency, 2022',
      },
      {
        value: '4th',
        label: 'highest pressure on environment and climate among EU household consumption categories, after food, housing and mobility',
        source: 'European Environment Agency',
      },
      {
        value: '69%',
        label: 'of shoppers in the five largest EU markets want to know how their clothes are made',
        source: 'Fashion Revolution Consumer Survey, 2020',
      },
      {
        value: '73%',
        label: 'would pay more for a product that offers complete transparency on what it is made of and how',
        source: 'Label Insight Transparency ROI Study, 2016',
      },
    ],
  },

  chain: {
    eyebrow: 'Blockchain, responsibly',
    title: 'Proof that does not cost the planet.',
    text: 'Every WidinX digital twin is anchored on Solana, a proof-of-stake network chosen for its low energy per transaction. Independent measurements put a Solana transaction at roughly 0.17 Wh — the Solana Foundation publishes an annual energy report and offsets the network’s footprint. We anchor only hashes and proofs, never product documents or personal data, so the on-chain footprint of a passport stays negligible.',
    points: [
      'Proof-of-stake network, no mining',
      '≈ 0.17 Wh per transaction (CCRI measurement)',
      'Hashes and proofs only — no documents, no personal data on-chain',
      'Network footprint reported and offset annually by the Solana Foundation',
    ],
  },

  sources: [
    {
      org: 'Légifrance / Ministry of Ecological Transition',
      title: 'Decree 2022-748 — information on the environmental qualities and characteristics of waste-generating products (AGEC Art. 13)',
      url: 'https://www.traceforgood.com/ressources/article/article-13-agec-law',
    },
    {
      org: 'economie.gouv.fr',
      title: 'Vêtements : ce qu’il faut savoir sur le nouvel éco-score textile',
      url: 'https://www.economie.gouv.fr/particuliers/mes-droits-conso/bien-consommer/vetements-ce-quil-faut-savoir-sur-le-nouvel-eco-score-textile',
    },
    {
      org: 'ADEME',
      title: 'Ecobalyse — official environmental cost calculator for textiles',
      url: 'https://affichage-environnemental.ecobalyse.beta.gouv.fr/informations',
    },
    {
      org: 'European Environment Agency',
      title: 'Greenhouse gas emissions from the EU’s textiles consumption',
      url: 'https://www.eea.europa.eu/en/circularity/sectoral-modules/textiles/greenhouse-gas-emissions-from-eus-textiles-consumption',
    },
    {
      org: 'European Environment Agency',
      title: 'Textiles and the environment: the role of design in Europe’s circular economy',
      url: 'https://www.eea.europa.eu/en/analysis/publications/textiles-and-the-environment-the-role-of-design-in-europes-circular-economy-1',
    },
    {
      org: 'European Commission',
      title: 'Digital Product Passport — Ecodesign for Sustainable Products Regulation',
      url: 'https://single-market-economy.ec.europa.eu/single-market/digital-product-passport_en',
    },
    {
      org: 'Solana Foundation',
      title: 'Energy Impact Report, September 2024',
      url: 'https://solana.com/news/energy-use-report-september-2024',
    },
    {
      org: 'Cointelegraph / CCRI',
      title: 'Crypto Carbon Ratings Institute measurement of energy per transaction on proof-of-stake networks',
      url: 'https://cointelegraph.com/news/report-crowns-solana-for-using-least-energy-per-transaction-but-there-s-a-catch',
    },
  ],
}
