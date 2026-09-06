<script setup>
import SectionBackground from './SectionBackground.vue'
/**
 * Inner-page hero: compact, left-aligned, with an optional side slot.
 */
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  em: { type: String, default: '' },
  lead: { type: String, default: '' },
  scene: { type: String, default: 'registry' },
})
</script>

<template>
  <section class="screen-scene relative overflow-hidden border-b border-line bg-bone">
    <SectionBackground :scene="scene" />
    <div class="wrap relative grid items-end gap-10 py-[clamp(56px,7vw,96px)] lg:grid-cols-[1.25fr_1fr]">
      <div v-reveal>
        <span v-if="eyebrow" class="eyebrow text-forest">{{ eyebrow }}</span>
        <h1 class="display mt-4 max-w-[16ch] text-[clamp(42px,5.6vw,76px)]">
          {{ title }}
          <em v-if="em" class="italic text-clay">{{ em }}</em>
        </h1>
        <p v-if="lead" class="mt-6 max-w-[620px] text-[18px] leading-relaxed text-body">{{ lead }}</p>
        <slot name="actions" />
      </div>
      <div v-if="$slots.side" v-reveal="{ delay: 120 }">
        <slot name="side" />
      </div>
    </div>
  </section>
</template>
