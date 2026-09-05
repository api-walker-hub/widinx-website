<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { pillars } from '@/content/home'
import SectionHead from '@/components/ui/SectionHead.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
</script>

<template>
  <section id="pillars" class="section-illustrated section-pad border-b border-line bg-bone">
      <SectionBackground scene="registry" />
    <div class="wrap">
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
