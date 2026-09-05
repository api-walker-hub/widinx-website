<script setup>
/**
 * Privacy policy body. Rendered on /privacy and inside the modal opened from
 * the demo form, so the text lives in one place.
 */
import { site } from '@/config/site'

defineProps({
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <div>
    <template v-if="!compact">
      <span class="eyebrow text-forest">Privacy policy</span>
      <h1 class="display mt-4 text-[clamp(40px,5vw,64px)]">How we handle your data.</h1>
    </template>
    <h2 v-else class="display text-[34px]">How we handle your data.</h2>
    <p class="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Version 0.1 · Last updated 2026-09-05</p>

    <div class="prose-legal mt-8">
      <p>
        This policy explains what personal data {{ site.name }} (“we”) collects through this website and our demo and
        contact forms, why we collect it, and the rights you have. It applies to the website only; data processed inside
        the {{ site.name }} platform on behalf of customers is governed by the customer agreement and Data Processing
        Agreement.
      </p>

      <h2>Who we are</h2>
      <p>
        {{ site.name }} is the controller for the data described here.
        <strong>[Legal entity name, registered address and company number to be completed before publication.]</strong>
        You can reach us at <a :href="`mailto:${site.privacyEmail}`">{{ site.privacyEmail }}</a>.
      </p>

      <h2>What we collect</h2>
      <h3>Demo and contact requests</h3>
      <p>When you send a request we collect what you type: name, work email, role, company, country, website, industry, use cases of interest, timeline and your message.</p>
      <h3>Acquisition context</h3>
      <p>
        To know how visitors find us we record, for the duration of your visit, the campaign parameters in the link you
        arrived from (UTM parameters), the referring site and the landing page. This is stored in your browser’s session
        storage and attached to a request only if you send one.
      </p>
      <h3>Technical data</h3>
      <p>Our hosting provider records standard server logs (IP address, user agent, requested pages, timestamps) for security and reliability.</p>
      <h3>Cookies</h3>
      <p>
        This website does not set tracking cookies and does not use third-party analytics. If this changes we will update
        this policy and ask for your consent where required.
      </p>

      <h2>Why we process it and on what basis</h2>
      <ul>
        <li><strong>Answering your request and following up</strong> — performance of pre-contractual steps at your request (GDPR art. 6(1)(b)) and our legitimate interest in developing our business (art. 6(1)(f)).</li>
        <li><strong>Understanding acquisition channels</strong> — legitimate interest (art. 6(1)(f)), using only campaign parameters, not behavioural tracking.</li>
        <li><strong>Security and reliability of the website</strong> — legitimate interest (art. 6(1)(f)).</li>
      </ul>

      <h2>How long we keep it</h2>
      <ul>
        <li>Request and lead data: for the duration of our exchange and up to 3 years after the last contact, unless a customer relationship begins.</li>
        <li>Acquisition context: the duration of your browser session.</li>
        <li>Server logs: up to 12 months.</li>
      </ul>

      <h2>Who receives it</h2>
      <p>
        Only the people at {{ site.name }} who handle sales and support, and the service providers that process data on
        our behalf under contract: cloud hosting (EU region), our CRM, and transactional email. Where a provider operates
        outside the European Economic Area, transfers rely on approved mechanisms such as standard contractual clauses.
        The current list of providers is available on request.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to access, correct, delete or receive a copy of your data, object to or restrict processing based on
        legitimate interest, and withdraw consent where processing relies on it. Write to
        <a :href="`mailto:${site.privacyEmail}`">{{ site.privacyEmail }}</a>; we answer within one month. You may also
        lodge a complaint with your supervisory authority — in France, the CNIL (cnil.fr).
      </p>

      <h2>Changes</h2>
      <p>We will post updates on this page with a new version number and date.</p>
    </div>
  </div>
</template>
