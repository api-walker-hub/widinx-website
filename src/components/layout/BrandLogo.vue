<script setup>
defineProps({
  size: { type: Number, default: 34 },
  tone: { type: String, default: 'ink' }, // ink | white
})
</script>

<template>
  <RouterLink to="/" class="inline-flex items-center gap-2.5 no-underline" aria-label="WidinX home">
    <img
      :src="tone === 'white' ? '/widinx-logo-light.svg' : '/widinx-logo.svg'"
      alt=""
      :width="Math.round(size * 1378 / 294)"
      :height="size"
      class="shrink-0 select-none"
    />
  </RouterLink>
</template>
