<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { impact } from '@/content/home'
import SectionHead from '@/components/ui/SectionHead.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ModuleIcon from '@/components/ui/ModuleIcon.vue'
</script>

<template>
  <section id="impact" class="section-illustrated section-pad border-y border-line bg-bone">
    <SectionBackground scene="circularity" />
    <div class="wrap grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:items-start">
      <SectionHead :eyebrow="impact.eyebrow" :title="impact.title" :em="impact.em" :intro="impact.intro" align="left" size="md">
        <div class="mt-8 flex flex-wrap gap-2">
          <span v-for="tag in impact.tags" :key="tag" class="border border-line bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-forest">
            {{ tag }}
          </span>
        </div>
        <BaseButton :to="impact.cta.to" class="mt-8">{{ impact.cta.label }} →</BaseButton>
      </SectionHead>

      <div class="grid gap-3 sm:grid-cols-3">
        <article
          v-for="(item, i) in impact.items"
          :key="item.title"
          v-reveal="{ delay: i * 80 }"
          class="brut brut-lift flex flex-col p-6"
        >
          <ModuleIcon :name="item.icon" class="text-forest" />
          <h3 class="mt-5 text-[17px] font-bold tracking-[-0.01em]">{{ item.title }}</h3>
          <p class="mt-2 text-[14px] leading-relaxed text-body">{{ item.text }}</p>
          <span class="mt-auto pt-5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{{ item.note }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
