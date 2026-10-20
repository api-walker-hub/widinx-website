<script setup>
/**
 * WidinX logo as used in the app: the geometric mark (diamond cut out) plus the
 * wordmark set in Space Grotesk. Inline so the wordmark gets the web font.
 */
defineProps({
  size: { type: Number, default: 34 },
  tone: { type: String, default: 'ink' }, // ink | white
  link: { type: Boolean, default: true },
})
</script>

<template>
  <component
    :is="link ? 'RouterLink' : 'span'"
    v-bind="link ? { to: '/' } : {}"
    class="inline-flex items-center no-underline"
    :class="tone === 'white' ? 'text-white' : 'text-forest'"
    aria-label="WidinX home"
    :style="{ gap: `${size * 0.28}px` }"
  >
    <svg :height="size" :width="Math.round((size * 470) / 290)" viewBox="0 0 470 290" aria-hidden="true" class="shrink-0">
      <defs>
        <mask :id="`wx-cut-${tone}`">
          <rect width="470" height="290" fill="white" />
          <polygon points="312,93 364,145 312,197 260,145" fill="black" />
        </mask>
      </defs>
      <g fill="currentColor" :mask="`url(#wx-cut-${tone})`">
        <polygon points="0,0 100,0 255,290 155,290" />
        <polygon points="155,0 255,0 470,290 370,290" />
        <polygon points="370,0 470,0 255,290 155,290" />
      </g>
    </svg>
    <span
      class="font-display font-bold leading-none tracking-[-0.03em]"
      :style="{ fontSize: `${Math.round(size * 0.78)}px` }"
    >WidinX</span>
  </component>
</template>
