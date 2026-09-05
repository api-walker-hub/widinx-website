<script setup>
/**
 * Minimal inline icon set (24×24, stroke-based). Add a path to `icons`
 * rather than pulling in an icon library.
 */
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 22 },
})

const icons = {
  box: 'M21 8 12 3 3 8v8l9 5 9-5V8ZM3 8l9 5 9-5M12 13v8',
  shield: 'M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3ZM9 12l2 2 4-4',
  scale: 'M12 3v18M5 7h14M5 7 2 14a3.5 3.5 0 0 0 6 0L5 7ZM19 7l-3 7a3.5 3.5 0 0 0 6 0l-3-7ZM8 21h8',
  passport: 'M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM8 18h8',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 17h6a4 4 0 0 0 0-8h-4a2 2 0 0 1 0-4h6',
  layers: 'm12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5',
  refresh: 'M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5',
  leaf: 'M4 20c8 0 14-6 14-14v-2h-2C8 4 4 10 4 18v2ZM4 20c3-5 6-8 10-10',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6',
  plug: 'M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v4',
  lock: 'M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1ZM8 11V7a4 4 0 0 1 8 0v4',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18',
  key: 'M14 3a5 5 0 1 0-4.5 7.1L3 16.6V21h4.4l1.1-1.1v-2.2h2.2l1.4-1.4A5 5 0 1 0 14 3Zm1 4h.01',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 21a6 6 0 0 1 12 0M16 4a4 4 0 0 1 0 7M21 21a6 6 0 0 0-4-5.7',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  bag: 'M6 8h12l1 13H5L6 8ZM9 8V6a3 3 0 0 1 6 0v2',
  watch: 'M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM12 9v3l2 2M9 6l.6-3h4.8L15 6M9 18l.6 3h4.8l.6-3',
  drop: 'M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z',
  battery: 'M3 8h15a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM21 10v4M6 11v2M10 11v2',
  sofa: 'M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3v-5ZM6 18v2M18 18v2',
  check: 'm5 12 5 5L20 7',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  chevron: 'm6 9 6 6 6-6',
  twin: 'M4 4h10v10H4ZM10 10h10v10H10ZM7 7h4v4M13 13h4v4',
  network: 'M9 9h6v6H9ZM12 3v6M12 15v6M3 12h6M15 12h6M3 3h3v3H3ZM18 3h3v3h-3ZM3 18h3v3H3ZM18 18h3v3h-3Z',
  dam: 'M3 5h18v14H3ZM3 15l5-5 4 4 3-3 6 6M15 8h3v3h-3Z',
  carbon: 'M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.5-1.5A4.5 4.5 0 0 0 7 18ZM8 21h2M12 21h2M16 21h2',
}

const d = computed(() => icons[props.name] || icons.box)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="d" /><circle v-if="!['check', 'arrow', 'menu', 'close', 'chevron', 'mail'].includes(name)" cx="20" cy="4" r="2.5" fill="var(--color-emerald)" stroke="var(--color-bone)" stroke-width="1.5" />
  </svg>
</template>
