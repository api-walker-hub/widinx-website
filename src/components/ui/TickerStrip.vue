<script setup>
defineProps({
  items: { type: Array, required: true },
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <div
    :class="['overflow-hidden border-y border-ink', dark ? 'bg-ink text-white' : 'bg-white']"
    aria-label="WidinX at a glance"
  >
    <div class="flex w-max animate-ticker">
      <div
        v-for="(item, i) in [...items, ...items]"
        :key="i"
        :class="[
          'flex min-w-[270px] items-baseline gap-4 border-r px-10 py-[22px]',
          dark ? 'border-white/15' : 'border-ink',
        ]"
        :aria-hidden="i >= items.length"
      >
        <b class="font-serif text-[33px] leading-none font-normal">{{ item.value }}</b>
        <span :class="['font-mono text-[11px] uppercase tracking-[0.1em]', dark ? 'text-white/70' : 'text-muted']">
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>
