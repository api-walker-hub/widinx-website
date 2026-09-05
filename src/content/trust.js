/**
 * Trust Center v0 — accurate claims only. Anything not yet achieved is shown
 * as a dated roadmap item, never as a badge. (Do not display "GDPR certified".)
 */
export const trustPage = {
  hero: {
    eyebrow: 'Trust Center',
    title: 'What we do, what we don’t claim, and',
    em: 'when.',
    lead:
      'WidinX handles product data that companies consider sensitive. This page states plainly how we protect it, where it lives, and which independent proofs are in progress.',
    updated: '2026-09-05',
  },
  commitments: {
    eyebrow: 'Commitments',
    title: 'Five things you can hold us to.',
    items: [
      {
        icon: 'lock',
        title: 'Privacy & security by design',
        text: 'Threat modelling, data minimisation and security review are part of how features are built, not a phase after.',
      },
      {
        icon: 'globe',
        title: 'EU data residency available',
        text: 'Production runs in the EU on a single cloud provider. Each tenant carries a primary and backup region as a business setting.',
      },
      {
        icon: 'key',
        title: 'Encryption in transit and at rest',
        text: 'TLS for all traffic, encrypted databases, object storage and backups, keys managed by the cloud KMS.',
      },
      {
        icon: 'users',
        title: 'Role-based access',
        text: 'Least-privilege roles, MFA for privileged accounts, periodic access reviews and SSO/SAML planned for enterprise tenants.',
      },
      {
        icon: 'list',
        title: 'Auditability',
        text: 'Tamper-evident logs for sensitive actions and cryptographically verifiable product histories.',
      },
    ],
  },
  principles: {
    eyebrow: 'Architecture principles',
    title: 'Designed so the answer to “where is my data?” is short.',
    items: [
      {
        title: 'No personal data on public blockchains',
        text: 'Only hashes, proofs and non-personal identifiers are anchored. Personal data and documents stay in your authorised data plane.',
      },
      {
        title: 'Tenant isolation',
        text: 'Customers are logically isolated and isolation is covered by automated tests. Dedicated deployments are available for specific requirements.',
      },
      {
        title: 'Backups you can restore',
        text: 'Encrypted backups with defined RPO/RTO objectives and scheduled restore drills before onboarding production customers.',
      },
      {
        title: 'Transparent AI usage',
        text: 'Every model, provider, data category, region and retention setting is inventoried. No customer data is used to train third-party models.',
      },
      {
        title: 'Secure development',
        text: 'Static analysis, dependency and secret scanning in CI, reviewed changes and a documented patch and vulnerability process.',
      },
      {
        title: 'Incident response',
        text: 'A documented response process with customer notification commitments and a dedicated security contact.',
      },
    ],
  },
  roadmap: {
    eyebrow: 'Assurance roadmap',
    title: 'Independent proof, on a public schedule.',
    intro:
      'We publish the plan rather than a badge we have not earned. Dates are targets and will be updated here as milestones are reached.',
    items: [
      { when: 'Sep 2026', title: 'Trust Center v0 & privacy notices', text: 'This page, our privacy policy and website data practices published.', status: 'done' },
      { when: 'Oct 2026', title: 'Security baseline', text: 'MFA and privileged access controls, incident response process and security contact in place.', status: 'progress' },
      { when: 'Nov 2026', title: 'Sales-ready security pack', text: 'Data Processing Agreement v1, subprocessor list and a security questionnaire pack available to prospects.', status: 'planned' },
      { when: 'Dec 2026', title: 'Independent penetration test', text: 'Web, API, authentication and tenant isolation tested by an independent firm; critical and high findings remediated.', status: 'planned' },
      { when: 'Jan 2027', title: 'First-client production review', text: 'Residency, restore, monitoring and onboarding controls reviewed before the first production customer.', status: 'planned' },
      { when: 'H1 2027', title: 'ISO/IEC 27001:2022 certification', text: 'Information security management system audited on a defined scope covering the platform, cloud, development and support.', status: 'planned' },
    ],
  },
  notClaimed: {
    eyebrow: 'What we don’t claim',
    items: [
      'We are not yet ISO/IEC 27001 certified. Certification is targeted for H1 2027 (see roadmap).',
      'We do not describe ourselves as “GDPR certified”. GDPR compliance is an ongoing obligation we operate, not a badge.',
      'We have not completed a SOC 2 examination. We will consider one if customers require it.',
    ],
  },
  dataProcessing: {
    eyebrow: 'Data processing',
    title: 'Roles, agreements and subprocessors.',
    items: [
      {
        title: 'Controller / processor',
        text: 'For product and supply-chain data you upload, WidinX acts as processor on your instructions. For website and account data, WidinX is the controller — see the privacy policy.',
      },
      {
        title: 'Data Processing Agreement',
        text: 'A DPA with standard contractual clauses where required is available to customers on request.',
      },
      {
        title: 'Subprocessors',
        text: 'Cloud hosting (EU region), transactional email, CRM, monitoring, an AI model provider and blockchain RPC infrastructure. The named list is provided with the DPA and kept current.',
      },
      {
        title: 'International transfers',
        text: 'Customer data is hosted in the EU. Where a subprocessor operates outside the EEA, transfers rely on approved mechanisms and are documented.',
      },
    ],
  },
  disclosure: {
    eyebrow: 'Responsible disclosure',
    title: 'Found something? Tell us.',
    text: 'If you believe you have found a security vulnerability in WidinX, email our security team. We acknowledge reports within three business days, keep you informed, and do not pursue researchers acting in good faith.',
  },
}
