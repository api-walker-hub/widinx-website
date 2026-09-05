<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  variant: { type: String, default: 'primary' }, // primary | ink | ghost | white | forest
  size: { type: String, default: 'md' }, // sm | md | lg
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
})

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-none border font-sans text-[13px] font-medium tracking-[0.01em] no-underline transition duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0'

const variants = {
  primary: 'border-forest bg-forest text-white hover:bg-ink',
  ink: 'border-line bg-ink text-white hover:bg-forest',
  forest: 'border-line bg-forest text-white hover:bg-ink',
  ghost: 'border-line bg-white text-ink hover:bg-ink hover:text-white',
  white: 'border-white bg-white text-ink   hover:bg-neon',
}

const sizes = {
  sm: 'px-4 py-2.5',
  md: 'px-6 py-[14px]',
  lg: 'px-7 py-4 text-[13px]',
}

const classes = computed(() => [base, variants[props.variant], sizes[props.size]])
const tag = computed(() => (props.to ? RouterLink : props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :to="to || undefined"
    v-bind="href ? { href } : {}"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? disabled : undefined"
    :class="classes"
  >
    <slot />
  </component>
</template>
