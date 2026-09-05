<script setup>
/**
 * Multi-select rendered as toggle blocks (keyboard accessible checkboxes).
 */
defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true }, // [{ value, label }]
  hint: { type: String, default: '' },
})

const model = defineModel({ type: Array, default: () => [] })

function toggle(value) {
  const next = new Set(model.value)
  next.has(value) ? next.delete(value) : next.add(value)
  model.value = [...next]
}
</script>

<template>
  <fieldset>
    <legend class="mb-2 block font-mono text-[11px] font-medium uppercase tracking-[0.1em]">{{ label }}</legend>
    <div class="flex flex-wrap gap-2">
      <label
        v-for="opt in options"
        :key="opt.value"
        :class="[
          'flex cursor-pointer items-center gap-2 border border-line px-3.5 py-2 text-[13px] font-medium transition select-none has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-ink',
          model.includes(opt.value)
            ? 'bg-ink text-white '
            : 'bg-white text-ink hover:bg-mint',
        ]"
      >
        <input
          type="checkbox"
          class="sr-only"
          :value="opt.value"
          :checked="model.includes(opt.value)"
          @change="toggle(opt.value)"
        />
        <span class="size-2.5 border border-ink" :class="model.includes(opt.value) ? 'bg-neon' : 'bg-white'" aria-hidden="true" />
        {{ opt.label }}
      </label>
    </div>
    <p v-if="hint" class="mt-1.5 text-[12px] text-muted">{{ hint }}</p>
  </fieldset>
</template>
