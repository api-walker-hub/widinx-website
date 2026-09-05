<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { useCases } from '@/content/home'
import SectionHead from '@/components/ui/SectionHead.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
</script>

<template>
  <section id="use-cases" class="section-illustrated section-pad bg-white">
      <SectionBackground scene="materials" />
    <div class="wrap">
      <SectionHead :eyebrow="useCases.eyebrow" :title="useCases.title" :intro="useCases.intro" class="mb-14" />
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          v-for="(item, i) in useCases.items"
          :key="item.key"
          :icon="item.icon"
          :title="item.title"
          :text="item.text"
          :delay="(i % 3) * 80"
        />
      </div>
    </div>
  </section>
</template>
