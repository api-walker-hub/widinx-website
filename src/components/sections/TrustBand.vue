<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { trustBand } from '@/content/home'
import SectionHead from '@/components/ui/SectionHead.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
</script>

<template>
  <section id="trust" class="section-illustrated section-pad border-y border-line bg-bone">
      <SectionBackground scene="verification" />
    <div class="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
      <SectionHead
        :eyebrow="trustBand.eyebrow"
        :title="trustBand.title"
        :intro="trustBand.intro"
        align="left"
        size="md"
      >
        <BaseButton :to="trustBand.cta.to" variant="ink" class="mt-8">{{ trustBand.cta.label }} →</BaseButton>
      </SectionHead>
      <ul class="grid gap-3 sm:grid-cols-2">
        <li
          v-for="(claim, i) in trustBand.claims"
          :key="claim.title"
          v-reveal="{ delay: i * 70 }"
          class="flex gap-3 rounded-none border border-line bg-white p-5"
        >
          <span class="mt-0.5 grid size-7 shrink-0 place-items-center rounded-none bg-mint text-forest">
            <IconGlyph name="check" :size="15" />
          </span>
          <div>
            <h3 class="text-[16px] font-bold tracking-[-0.01em]">{{ claim.title }}</h3>
            <p class="mt-1 text-[14px] leading-relaxed text-muted">{{ claim.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
