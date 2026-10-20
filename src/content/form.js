/**
 * Demo / contact form model. Mirrors the CRM minimum-field set:
 * person, company, use case, intent, plus automatic attribution (see useUtm).
 * Scale and stack questions are deliberately left for discovery calls.
 */
export const useCaseOptions = [
  { value: 'DPP', label: 'Digital Product Passports' },
  { value: 'Textile', label: 'Textile DPP' },
  { value: 'Battery', label: 'Battery passport' },
  { value: 'Packaging', label: 'Packaging (PPWR)' },
  { value: 'DigitalLabel', label: 'Digital label' },
  { value: 'Import', label: 'Import from PIM / ERP / CSV' },
  { value: 'Regulation', label: 'Regulation tracking & approvals' },
  { value: 'Partner', label: 'Partner / consultant programme' },
]

export const industryOptions = [
  'Textiles & apparel',
  'Batteries',
  'Electronics & ICT',
  'Furniture',
  'Packaging',
  'Construction products',
  'Toys',
  'Cosmetics & detergents',
  'Tyres & automotive',
  'Leather goods & luxury',
  'Consultancy / PRO',
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
  'China',
  'Türkiye',
  'India',
  'Bangladesh',
  'Vietnam',
  'Morocco',
  'Tunisia',
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
