<script setup>
import { computed, ref } from 'vue'
import SectionBackground from '@/components/ui/SectionBackground.vue'
import PassportCard from '@/components/passport/PassportCard.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import { passports } from '@/content/passports'

const filter = ref('all')
const sectors = computed(() => ['all', ...new Set(passports.map((p) => p.sectorLabel))])
const shown = computed(() => (filter.value === 'all' ? passports : passports.filter((p) => p.sectorLabel === filter.value)))
</script>

<template>
  <div>
    <section class="section-illustrated border-b border-line bg-bone py-[clamp(48px,6vw,80px)]">
      <SectionBackground scene="verification" />
      <div class="wrap">
        <div class="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div v-reveal>
            <span class="eyebrow text-forest">Live passports</span>
            <h1 class="display mt-4 text-[clamp(40px,5vw,66px)]">
              Scan one. See what <em class="italic text-clay">your customers will.</em>
            </h1>
          </div>
          <p v-reveal="{ delay: 80 }" class="max-w-[560px] text-[16px] leading-relaxed text-body">
            Every card opens a working passport, one per product category. Scan the code with your phone or click the
            card: you land on the page a consumer, a business partner, a recycler or a market surveillance authority
            would see.
          </p>
        </div>

        <div class="mt-10 mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter by sector">
          <button
            v-for="s in sectors"
            :key="s"
            type="button"
            role="tab"
            :aria-selected="filter === s"
            class="border px-3 py-1.5 text-[13px] font-medium transition"
            :class="filter === s ? 'border-ink bg-forest text-white shadow-[var(--shadow-stamp-sm)]' : 'border-line bg-white text-body hover:border-ink'"
            @click="filter = s"
          >
            {{ s === 'all' ? `All (${passports.length})` : s }}
          </button>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PassportCard v-for="p in shown" :key="p.slug" :passport="p" />
        </div>
        <p class="mt-8 max-w-[760px] text-[12.5px] leading-relaxed text-muted">
          Demonstration passports. Brands, products and figures are fictional and were not provided or endorsed by any
          manufacturer. GTINs use the GS1 restricted-circulation range, so they can never match a product on sale.
        </p>
      </div>
    </section>

    <CtaSection
      eyebrow="Your product could be next"
      title="Build one in the console, see it live"
      em="behind a QR code."
      text="Import your catalogue, pick the sector template, publish. The code you print today keeps working when the data changes."
    />
  </div>
</template>
