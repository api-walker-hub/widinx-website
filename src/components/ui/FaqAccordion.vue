<script setup>
import { ref } from 'vue'

defineProps({
  items: { type: Array, required: true },
})

const open = ref(0)
const toggle = (i) => (open.value = open.value === i ? -1 : i)
</script>

<template>
  <div class="brut divide-y-2 divide-ink">
    <div v-for="(item, i) in items" :key="item.q">
      <button
        type="button"
        class="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-mint"
        :class="open === i ? 'bg-mint' : ''"
        :aria-expanded="open === i"
        :aria-controls="`faq-${i}`"
        @click="toggle(i)"
      >
        <span class="text-[17px] font-bold tracking-[-0.01em]">{{ item.q }}</span>
        <span
          class="grid size-7 shrink-0 place-items-center border border-line bg-white font-mono text-[16px] leading-none transition"
          :class="open === i ? 'bg-ink text-neon' : ''"
          aria-hidden="true"
        >
          {{ open === i ? '−' : '+' }}
        </span>
      </button>
      <div
        :id="`faq-${i}`"
        class="grid transition-[grid-template-rows] duration-300"
        :class="open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      >
        <div class="overflow-hidden">
          <p class="px-6 pb-6 pt-4 text-[15px] leading-relaxed text-body">{{ item.a }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
