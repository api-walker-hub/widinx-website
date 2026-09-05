<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { journey } from '@/content/home'
import SectionHead from '@/components/ui/SectionHead.vue'
</script>

<template>
  <section id="journey" class="section-illustrated section-pad bg-white">
      <SectionBackground scene="shipping" />
    <div class="wrap">
      <SectionHead :eyebrow="journey.eyebrow" :title="journey.title" :intro="journey.intro" class="mb-14" />
      <ol class="relative grid gap-4 md:grid-cols-4">
        <!-- connecting thread -->
        <span class="pointer-events-none absolute top-[38px] left-[6%] right-[6%] hidden h-[2px] bg-ink md:block" />
        <li
          v-for="(step, i) in journey.steps"
          :key="step.label"
          v-reveal="{ delay: i * 90 }"
          class="relative flex min-h-[270px] flex-col rounded-none border border-line bg-white p-7 transition duration-300 brut-lift"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-[12px] font-medium text-forest">0{{ i + 1 }}</span>
            <span class="border border-line bg-mint px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-forest">{{ step.label }}</span>
          </div>
          <h3 class="display mt-auto mb-3 text-[32px]">{{ step.title }}</h3>
          <p class="text-[15px] leading-relaxed text-muted">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
