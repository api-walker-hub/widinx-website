<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import TickerStrip from '@/components/ui/TickerStrip.vue'
import { pillars, ticker } from '@/content/home'
import SectionHead from '@/components/ui/SectionHead.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
</script>

<template>
  <!--
    The ticker opens this scene instead of sitting between two snap targets:
    with mandatory scroll snapping, anything between sections is skipped.
  -->
  <section id="pillars" class="section-illustrated section-pad !pt-0 border-b border-line bg-bone">
    <SectionBackground scene="registry" />
    <TickerStrip :items="ticker" class="relative z-[1] w-full shrink-0" />
    <div class="wrap my-auto pt-[clamp(56px,7vw,88px)]">
      <SectionHead :eyebrow="pillars.eyebrow" :title="pillars.title" :intro="pillars.intro" class="mb-14" />
      <div class="grid gap-4 md:grid-cols-3">
        <FeatureCard
          v-for="(item, i) in pillars.items"
          :key="item.title"
          v-bind="item"
          personalized
          :delay="i * 90"
        />
      </div>
    </div>
  </section>
</template>
