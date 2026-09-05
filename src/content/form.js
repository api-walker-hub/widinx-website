/**
 * Demo / contact form model. Mirrors the CRM minimum-field set:
 * person, company, use case, intent, plus automatic attribution (see useUtm).
 * Scale and stack questions are deliberately left for discovery calls.
 */
export const useCaseOptions = [
  { value: 'DPP', label: 'Digital Product Passport' },
  { value: 'Regulation', label: 'Regulation management' },
  { value: 'Trust', label: 'Digital twins & anti-counterfeiting' },
  { value: 'Supply', label: 'Supplier network' },
  { value: 'PIM', label: 'PIM / DAM' },
  { value: 'Carbon', label: 'Carbon footprint & Ecoscore' },
  { value: 'AGEC', label: 'AGEC compliance' },
]

export const industryOptions = [
  'Luxury & fashion',
  'Watches & jewellery',
  'Cosmetics & beauty',
  'Electronics & batteries',
  'Furniture & textiles',
  'Distribution & retail',
  'Other',
]

export const timelineOptions = [
  { value: 'now', label: 'We have a deadline in the next 3 months' },
  { value: 'quarter', label: 'Within 3–6 months' },
  { value: 'year', label: 'This year' },
  { value: 'exploring', label: 'Just exploring' },
]

export const countryOptions = [
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Netherlands',
  'Belgium',
  'Switzerland',
  'United Kingdom',
  'Portugal',
  'Austria',
  'Sweden',
  'Denmark',
  'Ireland',
  'Poland',
  'United States',
  'Other',
]

export const demoPage = {
  eyebrow: 'Book a demo',
  title: 'See your product with a',
  em: 'passport.',
  lead:
    'Thirty minutes, on your use case. We show the platform on a product like yours and tell you honestly what a pilot would take.',
  bullets: [
    'A walkthrough on a product category close to yours',
    'A read on your regulatory deadlines and data readiness',
    'A written pilot proposal if it makes sense — no pressure if it doesn’t',
  ],
  privacyNote:
    'We use these details only to answer your request and to follow up on it. See our privacy policy for how we handle your data.',
}
