<script setup>
/**
 * Labelled field wrapper. Renders input / custom select / textarea based on
 * `as`, supports v-model, hint and error text.
 */
import BaseSelect from '@/components/ui/BaseSelect.vue'

defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  as: { type: String, default: 'input' }, // input | select | textarea
  type: { type: String, default: 'text' },
  options: { type: Array, default: () => [] }, // strings or {value,label}
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  hint: { type: String, default: '' },
  error: { type: String, default: '' },
  autocomplete: { type: String, default: undefined },
})

const model = defineModel({ type: [String, Number], default: '' })

const control =
  'w-full border bg-white px-3.5 py-3 text-[15px] text-ink outline-none transition placeholder:text-muted/70 focus:'
</script>

<template>
  <div>
    <label :for="id" class="mb-1.5 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em]">
      {{ label }}
      <span v-if="required" class="size-1.5 bg-clay" aria-label="required" />
    </label>

    <BaseSelect
      v-if="as === 'select'"
      :id="id"
      v-model="model"
      :options="options"
      :placeholder="placeholder || 'Select…'"
      :invalid="!!error"
    />

    <textarea
      v-else-if="as === 'textarea'"
      :id="id"
      v-model="model"
      :required="required"
      :placeholder="placeholder"
      rows="4"
      :class="[control, 'resize-y', error ? 'border-clay' : 'border-ink']"
      :aria-invalid="!!error || undefined"
    />

    <input
      v-else
      :id="id"
      v-model="model"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :class="[control, error ? 'border-clay' : 'border-ink']"
      :aria-invalid="!!error || undefined"
    />

    <p v-if="error" class="mt-1.5 font-mono text-[11px] text-clay">{{ error }}</p>
    <p v-else-if="hint" class="mt-1.5 text-[12px] text-muted">{{ hint }}</p>
  </div>
</template>
