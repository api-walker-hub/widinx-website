<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import { timeline, statusLabels } from '@/content/sectors'

defineProps({
  more: { type: Boolean, default: true },
})
const tone = {
  'in-force': 'border-emerald/35 bg-emerald/[0.08] text-emerald',
  applies: 'border-ochre/40 bg-ochre/[0.08] text-ochre',
  expected: 'border-line bg-mint/60 text-muted',
}
</script>

<template>
  <section class="section-illustrated section-pad bg-white">
    <SectionBackground scene="registry" />
    <div class="wrap">
      <SectionHead
        eyebrow="Regulations timeline"
        title="The deadlines are already"
        em="on the calendar."
        intro="The passport is no longer a pilot topic. Here is what applies, and what comes next, for products sold in the EU."
        class="mb-12"
      />
      <ol class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(t, i) in timeline"
          :key="t.title"
          v-reveal="{ delay: (i % 4) * 70 }"
          class="flex flex-col border border-line bg-pale p-5"
        >
          <div class="flex items-center justify-between gap-2">
            <span class="font-mono text-[13px] font-medium text-ink">{{ t.date }}</span>
            <span class="badge" :class="tone[t.status]">{{ statusLabels[t.status] }}</span>
          </div>
          <h3 class="mt-4 font-display text-[17px] leading-snug font-semibold">{{ t.title }}</h3>
          <p class="mt-2 text-[13.5px] leading-relaxed text-muted">{{ t.text }}</p>
        </li>
      </ol>
      <p class="mt-6 text-[12px] text-muted">
        Dates as known in October 2026. Delegated-act dates are estimates from the Commission’s ESPR working plan.
        <RouterLink v-if="more" to="/regulations" class="ml-1 font-medium text-forest">Read the full timeline →</RouterLink>
      </p>
    </div>
  </section>
</template>
