/**
 * About page. Every figure in `stats` and `research` is taken from a published
 * study and linked to its source — keep it that way when editing.
 */
export const aboutPage = {
  hero: {
    eyebrow: 'About WidinX',
    title: 'A product should only get more trustworthy with time.',
    em: 'Don’t you think?',
    lead:
      'Most products lose their story the moment they leave the factory. WidinX exists so that origin, compliance and ownership travel with the product — and can be checked by anyone who needs to.',
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Fakes have no past. Regulators now ask for one.',
    paragraphs: [
      'Counterfeiting is not a fringe problem. The OECD and the EU Intellectual Property Office estimate the global trade in fake goods at USD 467 billion in 2021 — 2.3% of all world imports — with clothing, footwear and accessories at the top of the list. In the EU alone, fakes represented USD 117 billion, or 4.7% of imports.',
      'At the same time, Europe is turning transparency from a marketing choice into a legal obligation. The Ecodesign for Sustainable Products Regulation makes a Digital Product Passport mandatory category by category; the Battery Regulation requires passports from February 2027; the Deforestation Regulation demands geolocated proof of origin for commodities such as leather, wood and rubber.',
      'The tools brands use today — spreadsheets, PDFs, one-off authentication tags — were built for one audience each. Nobody built the single record that a customs officer, a compliance team, a reseller and a customer can all trust.',
    ],
    stats: [
      { value: '$467bn', label: 'global trade in counterfeit goods, 2021', source: 'OECD / EUIPO, 2025' },
      { value: '4.7%', label: 'of EU imports were fakes ($117bn)', source: 'OECD / EUIPO, 2025' },
      { value: '13%', label: 'of Europeans knowingly bought a fake in the last year — 26% of under-25s', source: 'EUIPO IP Perception Study, 2023' },
      { value: '€83bn', label: 'in lost sales per year for EU industries from counterfeiting', source: 'Europol / EUIPO, 2022' },
    ],
  },

  regulation: {
    eyebrow: 'Why regulation matters',
    title: 'The rules are written. The dates are set.',
    intro:
      'These are not proposals. Each of these instruments is adopted EU law with a published application date, and each one asks for product-level data that most supply chains cannot produce today.',
    items: [
      {
        code: 'ESPR',
        name: 'Ecodesign for Sustainable Products Regulation (EU) 2024/1781',
        when: 'In force since 18 July 2024',
        text: 'Creates the Digital Product Passport. Requirements arrive per product group through delegated acts; textiles and iron & steel are first in the 2025–2030 working plan, with the textile act expected around 2027.',
      },
      {
        code: 'Batteries',
        name: 'Battery Regulation (EU) 2023/1542',
        when: 'Passport mandatory from 18 February 2027',
        text: 'Every EV, light-transport and industrial battery above 2 kWh placed on the EU market must carry a battery passport accessible through a QR code.',
      },
      {
        code: 'EUDR',
        name: 'Deforestation Regulation (EU) 2023/1115',
        when: '30 December 2026 (large & medium) · 30 June 2027 (small & micro)',
        text: 'Cattle, wood, rubber, cocoa, coffee, palm oil and soy — and products made from them, including leather — need geolocated proof they are deforestation-free and legally produced.',
      },
      {
        code: 'CSRD',
        name: 'Corporate Sustainability Reporting Directive',
        when: 'Phased in from FY2024',
        text: 'Large companies must report supply-chain impacts under the European Sustainability Reporting Standards, which means product-level data has to roll up into audited disclosures.',
      },
    ],
  },

  customers: {
    eyebrow: 'Why traceability matters to customers',
    title: 'People already want to know. They just can’t check.',
    intro:
      'Study after study says the same thing: transparency drives loyalty and price tolerance, and consumers reward the brands that prove it.',
    stats: [
      {
        value: '69%',
        label: 'of European shoppers want to know how their clothes are made, up from 59% two years earlier',
        source: 'Fashion Revolution Consumer Survey, 2020 (5,000 people, 5 EU markets)',
      },
      {
        value: '94%',
        label: 'say they would stay loyal to a brand offering complete transparency; 73% would pay more for it',
        source: 'Label Insight Transparency ROI Study, 2016',
      },
      {
        value: '28% vs 20%',
        label: 'five-year growth of products carrying ESG claims versus those without, across 600,000 SKUs',
        source: 'McKinsey & NielsenIQ, 2023',
      },
      {
        value: '56%',
        label: 'of consumers name authentication as the first thing they expect from a Digital Product Passport',
        source: 'Certilogo consumer survey, 2024 (1,741 respondents)',
      },
      {
        value: '26%',
        label: 'average transparency score of the world’s 250 largest fashion brands — 70 of them scored below 10%',
        source: 'Fashion Transparency Index, 2023',
      },
      {
        value: '31%',
        label: 'of Europeans find buying fakes acceptable when the original is too expensive — the gap a verifiable history has to close',
        source: 'EUIPO IP Perception Study, 2023',
      },
    ],
  },

  team: {
    eyebrow: 'Meet the team',
    title: 'Three cofounders, three disciplines.',
    members: [
      {
        initials: 'P',
        role: 'Product & go-to-market',
        text: 'Programme, customers, partnerships and the evidence enterprise buyers ask for.',
      },
      {
        initials: 'A',
        role: 'Strategy, security & cloud architecture',
        text: 'Identity, tenancy, encryption, data residency, logging, backup and disaster recovery — security by design.',
      },
      {
        initials: 'E',
        role: 'Engineering & integrations',
        text: 'Backend, APIs, integrations, CI/CD and the technical proofs behind every passport.',
      },
    ],
  },

  belief: {
    eyebrow: 'Stronger with every scan',
    title: 'We believe a product’s history should compound, not evaporate.',
    text: 'Every supplier document, every customs check, every repair and every resale should make the record more valuable — for the brand that made it, the customer who owns it and the regulator who has to trust it. Proof should not degrade when a product changes hands or a spreadsheet gets lost. With WidinX, it finally doesn’t.',
  },

  research: {
    eyebrow: 'Research & reading',
    title: 'The studies behind the numbers.',
    items: [
      {
        org: 'OECD / EUIPO',
        title: 'Mapping Global Trade in Fakes 2025',
        year: '2025',
        takeaway: 'Counterfeit trade reached USD 467bn (2.3% of world imports) in 2021; clothing, footwear and accessories lead seizures.',
        url: 'https://www.oecd.org/en/publications/mapping-global-trade-in-fakes-2025_94d3b29f-en.html',
      },
      {
        org: 'EUIPO',
        title: 'European Citizens and Intellectual Property: Perception, Awareness and Behaviour',
        year: '2023',
        takeaway: '13% of Europeans (26% of 15–24s) bought fakes intentionally in the past year; 31% find it acceptable if the original is too expensive.',
        url: 'https://www.euipo.europa.eu/en/publications/ip-perception-study-2023',
      },
      {
        org: 'Europol / EUIPO',
        title: 'Intellectual Property Crime Threat Assessment 2022',
        year: '2022',
        takeaway: 'Fakes worth up to €119bn (5.8% of imports) enter the EU; counterfeiting costs €83bn in lost sales and 671,000 jobs a year.',
        url: 'https://www.euipo.europa.eu/en/publications/ip-crime-threat-assessment-2022',
      },
      {
        org: 'Fashion Revolution',
        title: 'Consumer Survey Report 2020',
        year: '2020',
        takeaway: '69% of consumers in the five largest EU markets want to know how their clothes are made; 80% think sustainability certifications matter.',
        url: 'https://www.fashionrevolution.org/resources/consumer-survey/',
      },
      {
        org: 'Fashion Revolution',
        title: 'Fashion Transparency Index 2023',
        year: '2023',
        takeaway: '250 major brands average a 26% transparency score; 52% now publish first-tier supplier lists.',
        url: 'https://www.fashionrevolution.org/fashion-transparency-index-2023/',
      },
      {
        org: 'McKinsey & NielsenIQ',
        title: 'Consumers care about sustainability — and back it up with their wallets',
        year: '2023',
        takeaway: 'Products with ESG-related claims grew 28% over five years versus 20% for those without, across USD 400bn of retail sales.',
        url: 'https://www.mckinsey.com/industries/consumer-packaged-goods/our-insights/consumers-care-about-sustainability-and-back-it-up-with-their-wallets',
      },
      {
        org: 'Label Insight',
        title: 'Transparency ROI Study',
        year: '2016',
        takeaway: '94% of consumers would be loyal to a fully transparent brand; 73% would pay more; 40% would switch brands for it.',
        url: 'https://www.prnewswire.com/news-releases/study-nearly-three-fourths-of-consumers-would-pay-more-for-products-that-offer-complete-transparency-300318901.html',
      },
      {
        org: 'Certilogo',
        title: 'Digital Product Passport: a new era of trust and transparency in fashion',
        year: '2025',
        takeaway: 'Authentication is the top expectation consumers have of a DPP (56%), ahead of sustainability and care information.',
        url: 'https://fashionunited.com/press/business/digital-product-passport-a-new-era-of-trust-and-transparency-in-fashion-starting-with-consumers-according-to-a-certilogo-survey/2025021864545',
      },
      {
        org: 'European Commission',
        title: 'Digital Product Passport — Ecodesign for Sustainable Products Regulation',
        year: '2024',
        takeaway: 'Official overview of the DPP framework, the working plan 2025–2030 and the product groups covered first.',
        url: 'https://single-market-economy.ec.europa.eu/single-market/digital-product-passport_en',
      },
      {
        org: 'European Commission',
        title: 'EUDR: delay until December 2026 and other implementation developments',
        year: '2025',
        takeaway: 'Application on 30 December 2026 for large and medium operators, 30 June 2027 for small and micro operators.',
        url: 'https://trade.ec.europa.eu/access-to-markets/en/news/delay-until-december-2026-and-other-developments-implementation-eudr-regulation',
      },
    ],
  },
}
