<script setup>
/**
 * Centered (default) or left-aligned section header:
 * mono eyebrow → serif display title (with optional italic accent) → intro.
 */
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, default: '' },
  em: { type: String, default: '' },
  intro: { type: String, default: '' },
  align: { type: String, default: 'center' }, // center | left
  size: { type: String, default: 'lg' }, // lg | md
  tone: { type: String, default: 'ink' }, // ink | white
})
</script>

<template>
  <div
    v-reveal
    :class="[
      'max-w-[760px]',
      align === 'center' ? 'mx-auto text-center' : '',
      tone === 'white' ? 'text-white' : '',
    ]"
  >
    <span v-if="eyebrow" :class="['eyebrow', tone === 'white' ? 'text-neon' : 'text-forest']">
      {{ eyebrow }}
    </span>
    <h2
      :class="[
        'display mt-4 mb-5',
        size === 'lg' ? 'text-[clamp(40px,5vw,64px)]' : 'text-[clamp(32px,3.6vw,46px)]',
      ]"
    >
      {{ title }}
      <em v-if="em" :class="['italic', tone === 'white' ? 'text-neon' : 'text-clay']">{{ em }}</em>
    </h2>
    <p
      v-if="intro"
      :class="[
        'text-[17px] leading-relaxed',
        align === 'center' ? 'mx-auto max-w-[610px]' : 'max-w-[610px]',
        tone === 'white' ? 'text-white/75' : 'text-body',
      ]"
    >
      {{ intro }}
    </p>
    <slot />
  </div>
</template>
