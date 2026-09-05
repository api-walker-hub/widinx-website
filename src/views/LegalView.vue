<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { site } from '@/config/site'
</script>

<template>
  <article class="section-illustrated legal-illustrated wrap max-w-[780px] py-[clamp(56px,7vw,96px)]">
    <SectionBackground scene="verification" />
    <span class="eyebrow text-forest">Legal notice</span>
    <h1 class="display mt-4 text-[clamp(40px,5vw,64px)]">Mentions légales.</h1>

    <div class="prose-legal mt-8">
      <h2>Publisher</h2>
      <p>
        This website is published by {{ site.name }}.
        <strong>[Legal form, share capital, registered office, company registration number, VAT number and publication
        director to be completed before going live.]</strong>
      </p>
      <p>Contact: <a :href="`mailto:${site.contactEmail}`">{{ site.contactEmail }}</a></p>

      <h2>Hosting</h2>
      <p><strong>[Hosting provider name, address and contact — EU region.]</strong></p>

      <h2>Intellectual property</h2>
      <p>
        The {{ site.name }} name, logo and the content of this website are protected. Reproduction without prior written
        permission is prohibited, except for private use or where the law allows.
      </p>

      <h2>Trademarks</h2>
      <p>
        Third-party product and company names mentioned on this site (for example ERP, PIM, PLM or commerce platforms) are
        trademarks of their respective owners and are cited for identification purposes only. Their mention does not imply
        endorsement or partnership.
      </p>

      <h2>Liability</h2>
      <p>
        Information on this site is provided for general information about our products and services. Regulatory
        summaries are not legal advice; obligations depend on your products, markets and role in the supply chain.
      </p>

      <h2>Personal data</h2>
      <p>See our <RouterLink to="/privacy">privacy policy</RouterLink>.</p>
    </div>
  </article>
</template>
