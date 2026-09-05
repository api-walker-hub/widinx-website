<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { demoPage } from '@/content/form'
import { site } from '@/config/site'
import DemoForm from '@/components/forms/DemoForm.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
</script>

<template>
  <section class="section-illustrated relative overflow-hidden bg-bone">
      <SectionBackground scene="connection" />
    <div
      class="pointer-events-none absolute -top-40 -left-40 size-[560px] rounded-none bg-[radial-gradient(circle,rgba(23,241,134,0.2),transparent_62%)]"
    />
    <div class="wrap relative grid gap-12 py-[clamp(56px,7vw,96px)] lg:grid-cols-[1fr_1.15fr] lg:items-start">
      <div v-reveal class="lg:sticky lg:top-28">
        <span class="eyebrow text-forest">{{ demoPage.eyebrow }}</span>
        <h1 class="display mt-4 max-w-[14ch] text-[clamp(42px,5.4vw,72px)]">
          {{ demoPage.title }} <em class="italic text-clay">{{ demoPage.em }}</em>
        </h1>
        <p class="mt-6 max-w-[520px] text-[17px] leading-relaxed text-body">{{ demoPage.lead }}</p>
        <ul class="mt-8 space-y-3">
          <li v-for="b in demoPage.bullets" :key="b" class="flex items-start gap-3 text-[15px] text-body">
            <span class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-none bg-mint text-forest">
              <IconGlyph name="check" :size="14" />
            </span>
            {{ b }}
          </li>
        </ul>
        <div id="contact" class="mt-10 rounded-none border border-line bg-white p-6">
          <span class="eyebrow text-[10px] text-muted">Prefer email?</span>
          <a :href="`mailto:${site.contactEmail}`" class="mt-2 block text-[18px] font-bold text-ink no-underline hover:text-forest">
            {{ site.contactEmail }}
          </a>
          <p class="mt-2 text-[13px] text-muted">Security or privacy matter? Write to {{ site.securityEmail }}.</p>
        </div>
      </div>
      <div v-reveal="{ delay: 120 }">
        <DemoForm />
      </div>
    </div>
  </section>
</template>
