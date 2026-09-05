<script setup>
/**
 * Accessible dialog: backdrop, Escape to close, focus moved into the panel,
 * body scroll locked while open. Content is provided via slot; the page
 * behind keeps its state (used to show the privacy policy over the demo form).
 */
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import IconGlyph from './IconGlyph.vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
})
const emit = defineEmits(['close'])

const panel = ref(null)
let previouslyFocused = null

function onKey(e) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      previouslyFocused = document.activeElement
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
      await nextTick()
      panel.value?.focus()
    } else {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  },
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        class="fixed inset-0 z-[60] flex items-end justify-center bg-ink/55 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
        @click.self="emit('close')"
      >
        <div
          ref="panel"
          role="dialog"
          aria-modal="true"
          :aria-label="title || undefined"
          tabindex="-1"
          class="flex max-h-[92vh] w-full max-w-[820px] flex-col border border-line bg-white shadow-lift outline-none"
        >
          <header class="flex items-center justify-between gap-4 border-b border-line bg-bone px-6 py-4">
            <span class="eyebrow text-[11px] text-forest">{{ title }}</span>
            <button
              type="button"
              class="inline-flex items-center gap-2 border border-line bg-white px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition hover:bg-ink hover:text-white"
              @click="emit('close')"
            >
              Close <IconGlyph name="close" :size="14" />
            </button>
          </header>
          <div class="overflow-y-auto px-6 py-6 sm:px-8">
            <slot />
          </div>
          <footer class="flex justify-end border-t border-line bg-bone px-6 py-4">
            <button
              type="button"
              class="border border-forest bg-forest px-5 py-3 font-sans text-[13px] font-medium text-white transition hover:bg-ink"
              @click="emit('close')"
            >
              Back to the form
            </button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.18s ease;
}
.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.18s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from > div,
.modal-leave-to > div {
  transform: translateY(12px);
}
</style>
