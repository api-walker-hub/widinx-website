/**
 * Careers page. `roles` is the list of open positions — edit or empty it as
 * hiring changes; the page handles an empty list gracefully.
 */
export const careersPage = {
  hero: {
    title: 'Build proof',
    em: 'that outlasts the product.',
    lead:
      'WidinX is a small, senior team building the trust layer for physical goods sold in Europe. We ship to real customers, on real regulatory deadlines, with our names on the work.',
    cta: 'Join WidinX',
  },

  lookFor: {
    eyebrow: 'What we look for',
    items: [
      {
        title: 'Rigour',
        text: 'We sell proof. A passport that is wrong is worse than no passport. You care about the edge case nobody will thank you for.',
      },
      {
        title: 'Speed',
        text: 'Regulation has dates. Something shipped to a pilot customer this week beats a perfect architecture next quarter.',
      },
      {
        title: 'Curiosity',
        text: 'Leather tanneries, customs codes, delegated acts, zero-knowledge proofs. The people who do best here find all of it interesting.',
      },
      {
        title: 'Ownership',
        text: 'Three founders cannot review everything. You take a problem end to end — including the boring parts — and tell us when we are wrong.',
      },
    ],
  },

  howWeWork: {
    eyebrow: 'How we work',
    title: 'Small team. Real customers. No theatre.',
    items: [
      { title: 'Europe-based, remote-friendly', text: 'We work across EU time zones and meet in person for the moments that need it.' },
      { title: 'Pilots on real data', text: 'Every quarter we ship to a brand with actual products and actual deadlines. You will talk to them.' },
      { title: 'Security is everyone’s job', text: 'We are building towards an independent pentest and ISO/IEC 27001. Reviews, scanning and least privilege are the default, not a ticket.' },
      { title: 'Write things down', text: 'Decisions live in ADRs, not in someone’s head. It is how three founders and their first hires stay aligned.' },
      { title: 'Founders’ terms', text: 'Early team members get meaningful equity, a clear scope and direct access to the people making decisions.' },
      { title: 'Tools you choose', text: 'Pick the machine and the setup that make you fast. We care about output, not about attendance.' },
    ],
  },

  roles: {
    eyebrow: 'Open roles',
    title: 'Who we are hiring.',
    intro:
      'We hire slowly and deliberately. If none of these fit but you think you belong here, send us a note anyway — the best hires rarely match a job title.',
    items: [
      {
        title: 'Founding Full-Stack Engineer',
        team: 'Engineering',
        location: 'Paris or remote (EU)',
        type: 'Full-time',
        summary:
          'Own product surfaces end to end: passport builder, compliance engine and the APIs behind them. TypeScript/Vue on the front, a modern backend and PostgreSQL behind it.',
        tags: ['TypeScript', 'Vue', 'PostgreSQL', 'APIs'],
      },
      {
        title: 'Solutions & Integration Engineer',
        team: 'Customer engineering',
        location: 'Remote (EU)',
        type: 'Full-time',
        summary:
          'Connect customer ERP, PIM and PLM systems to WidinX, run pilots and turn what you learn into product. You are as comfortable in a customer workshop as in a terminal.',
        tags: ['Integrations', 'ERP / PIM / PLM', 'Pilots'],
      },
      {
        title: 'Regulatory & Product Specialist (DPP)',
        team: 'Product',
        location: 'Paris or remote (EU)',
        type: 'Full-time',
        summary:
          'Translate ESPR delegated acts, EUDR and battery passport requirements into data models and product rules. You read regulation for fun and write specs engineers thank you for.',
        tags: ['ESPR / DPP', 'EUDR', 'Data modelling'],
      },
    ],
  },

  process: {
    eyebrow: 'How hiring works',
    steps: [
      { title: 'Intro call', text: '30 minutes with a founder. Your background, our roadmap, honest fit on both sides.' },
      { title: 'Work session', text: 'A paid, scoped exercise on a real problem we have — never a whiteboard puzzle.' },
      { title: 'Team day', text: 'Meet everyone. Ask anything. See how decisions actually get made.' },
      { title: 'Offer', text: 'A clear written offer with scope, equity and start date. We answer every question before you sign.' },
    ],
  },
}
