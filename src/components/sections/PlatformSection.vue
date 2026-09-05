<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { platform } from '@/content/home'
import SectionHead from '@/components/ui/SectionHead.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
</script>

<template>
  <section id="platform" class="section-illustrated section-pad relative overflow-hidden bg-ink text-white">
      <SectionBackground scene="integrations" dark />
    <div
      class="pointer-events-none absolute -bottom-64 left-1/2 size-[900px] -translate-x-1/2 rounded-none bg-[radial-gradient(circle,rgba(23,241,134,0.16),transparent_60%)]"
    />
    <div class="wrap relative">
      <SectionHead
        :eyebrow="platform.eyebrow"
        :title="platform.title"
        :intro="platform.intro"
        tone="white"
        class="mb-14"
      />
      <div class="grid gap-4 md:grid-cols-3">
        <article
          v-for="(layer, i) in platform.layers"
          :key="layer.tag"
          v-reveal="{ delay: i * 90 }"
          class="flex h-full flex-col rounded-none border border-white/15 bg-white/[0.04] p-7 transition hover:border-neon "
        >
          <span class="eyebrow text-[10px] text-neon">{{ layer.tag }}</span>
          <h3 class="mt-3 text-[22px] font-bold tracking-[-0.02em]">{{ layer.title }}</h3>
          <p class="mt-3 text-[15px] leading-relaxed text-white/70">{{ layer.text }}</p>
          <ul class="mt-6 space-y-2 border-t border-white/15 pt-5 text-[14px]">
            <li v-for="p in layer.points" :key="p" class="flex items-center gap-2 text-white/85">
              <IconGlyph name="check" :size="16" class="text-neon" />
              {{ p }}
            </li>
          </ul>
        </article>
      </div>
      <div v-reveal class="mt-12 text-center">
        <BaseButton to="/platform" variant="white">Explore the platform →</BaseButton>
      </div>
    </div>
  </section>
</template>
