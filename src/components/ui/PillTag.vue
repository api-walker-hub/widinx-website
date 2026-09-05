<script setup>
defineProps({
  tone: { type: String, default: 'mint' }, // mint | clay | ink | line | neon
})

const tones = {
  mint: 'bg-mint text-forest',
  clay: 'bg-clay text-white',
  ink: 'bg-ink text-white',
  line: 'bg-white text-ink',
  neon: 'bg-neon text-ink',
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em]',
      tones[tone],
    ]"
  >
    <slot />
  </span>
</template>
