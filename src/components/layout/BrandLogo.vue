<script setup>
defineProps({
  size: { type: Number, default: 34 },
  tone: { type: String, default: 'ink' }, // ink | white
})
</script>

<template>
  <RouterLink to="/" class="inline-flex items-center gap-2.5 no-underline" aria-label="WidinX home">
    <img src="/widinx-symbol.svg?v=2" alt="" :width="size" :height="size" class="shrink-0 select-none" />
    <span
      :class="[
        'font-sans font-bold tracking-[-0.04em]',
        tone === 'white' ? 'text-white' : 'text-ink',
      ]"
      :style="{ fontSize: `${Math.round(size * 0.68)}px`, lineHeight: 1 }"
    >
      Widin<span :class="tone === 'white' ? 'text-neon' : 'text-emerald'">X</span>
    </span>
  </RouterLink>
</template>
