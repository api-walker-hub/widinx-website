<script setup>
import IconGlyph from './IconGlyph.vue'
import ModuleIcon from './ModuleIcon.vue'

defineProps({
  icon: { type: String, default: '' },
  personalized: { type: Boolean, default: false },
  tag: { type: String, default: '' },
  title: { type: String, required: true },
  text: { type: String, default: '' },
  bullets: { type: Array, default: () => [] },
  delay: { type: Number, default: 0 },
  index: { type: [Number, String], default: '' },
})
</script>

<template>
  <article v-reveal="{ delay }" class="brut brut-lift group flex h-full flex-col p-7">
    <div class="mb-6 flex items-start justify-between">
      <div
        v-if="icon && !personalized"
        class="grid size-11 place-items-center rounded-none border border-line bg-mint text-ink transition group-hover:bg-neon"
      >
        <IconGlyph :name="icon" />
      </div>
      <ModuleIcon v-if="icon && personalized" :name="icon" class="text-forest" />
      <span v-if="index !== ''" class="font-mono text-[11px] text-muted">{{ index }}</span>
    </div>
    <span v-if="tag" class="eyebrow text-[10px] text-forest">{{ tag }}</span>
    <h3 class="mt-2 text-[21px] font-bold tracking-[-0.02em]">{{ title }}</h3>
    <p v-if="text" class="mt-2 text-[15px] leading-relaxed text-body">{{ text }}</p>
    <ul v-if="bullets.length" class="mt-4 space-y-1.5 text-[14px] text-body">
      <li v-for="b in bullets" :key="b" class="flex items-start gap-2">
        <span class="mt-2 size-2 shrink-0 bg-neon ring-1 ring-ink" />
        <span>{{ b }}</span>
      </li>
    </ul>
    <slot />
  </article>
</template>
