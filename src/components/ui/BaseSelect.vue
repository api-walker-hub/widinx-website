<script setup>
/**
 * Custom select — replaces the native picklist with a brutalist listbox.
 * Keyboard: Enter/Space/ArrowDown open, arrows move, Enter selects, Esc closes.
 */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  options: { type: Array, required: true }, // strings or { value, label }
  placeholder: { type: String, default: 'Select…' },
  invalid: { type: Boolean, default: false },
})

const model = defineModel({ type: [String, Number], default: '' })

const root = ref(null)
const open = ref(false)
const active = ref(-1)

const items = computed(() =>
  props.options.map((o) => (typeof o === 'object' ? o : { value: o, label: o })),
)
const selected = computed(() => items.value.find((o) => o.value === model.value))

function toggle() {
  open.value ? close() : show()
}
function show() {
  open.value = true
  active.value = Math.max(0, items.value.findIndex((o) => o.value === model.value))
}
function close() {
  open.value = false
  active.value = -1
}
function choose(i) {
  model.value = items.value[i].value
  close()
}
function onKey(e) {
  if (!open.value && ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
    e.preventDefault()
    show()
    return
  }
  if (!open.value) return
  if (e.key === 'Escape') return close()
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    active.value = (active.value + 1) % items.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    active.value = (active.value - 1 + items.value.length) % items.value.length
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    if (active.value >= 0) choose(active.value)
  } else if (e.key === 'Tab') {
    close()
  }
}
function onDocClick(e) {
  if (root.value && !root.value.contains(e.target)) close()
}
onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
watch(active, (i) => {
  const el = root.value?.querySelector(`[data-index="${i}"]`)
  el?.scrollIntoView({ block: 'nearest' })
})
</script>

<template>
  <div ref="root" class="relative" @keydown="onKey">
    <button
      :id="id"
      type="button"
      role="combobox"
      :aria-expanded="open"
      :aria-controls="`${id}-listbox`"
      aria-haspopup="listbox"
      :aria-invalid="invalid || undefined"
      :class="[
        'flex w-full items-center justify-between gap-3 border bg-white px-3.5 py-3 text-left text-[15px] transition',
        invalid ? 'border-clay' : 'border-ink',
        open ? '' : '',
      ]"
      @click="toggle"
    >
      <span :class="selected ? 'text-ink' : 'text-muted'">{{ selected ? selected.label : placeholder }}</span>
      <span
        class="grid size-6 shrink-0 place-items-center border border-line bg-neon font-mono text-[12px] leading-none transition-transform"
        :class="open ? 'rotate-180' : ''"
        aria-hidden="true"
      >
        ▾
      </span>
    </button>

    <Transition name="pop">
      <ul
        v-if="open"
        :id="`${id}-listbox`"
        role="listbox"
        class="absolute top-[calc(100%+6px)] left-0 z-20 max-h-[280px] w-full overflow-auto border border-line bg-white "
      >
        <li
          v-for="(opt, i) in items"
          :key="opt.value"
          :data-index="i"
          role="option"
          :aria-selected="opt.value === model"
          :class="[
            'flex cursor-pointer items-center justify-between gap-3 border-b border-ink/10 px-3.5 py-2.5 text-[14px] last:border-b-0',
            i === active ? 'bg-ink text-white' : 'hover:bg-mint',
            opt.value === model && i !== active ? 'bg-mint font-bold' : '',
          ]"
          @mouseenter="active = i"
          @click="choose(i)"
        >
          <span>{{ opt.label }}</span>
          <span v-if="opt.value === model" class="size-2.5 bg-neon ring-1 ring-ink" aria-hidden="true" />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
