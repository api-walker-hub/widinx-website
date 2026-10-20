<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import QrCode from '@/components/ui/QrCode.vue'
import { digitalLinkPath } from '@/content/passports'

const props = defineProps({
  passport: { type: Object, required: true },
  qr: { type: Boolean, default: true },
})

const path = computed(() => digitalLinkPath(props.passport))
const origin = typeof window !== 'undefined' ? window.location.origin : 'https://widinx.com'
const grainLabel = { model: 'Model', batch: 'Batch', serial: 'Serial' }
</script>

<template>
  <RouterLink
    :to="path"
    class="group flex h-full flex-col border border-line bg-pale no-underline transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-stamp)]"
  >
    <div class="relative aspect-[4/3] overflow-hidden border-b border-line bg-white">
      <img
        :src="passport.image"
        :alt="passport.name"
        loading="lazy"
        class="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
      />
      <span class="badge absolute top-3 left-3 border-ochre/40 bg-[#fbf5e8] text-ochre">Demo only</span>
      <div v-if="qr" class="absolute right-3 bottom-3 border border-line bg-white p-1 shadow-[var(--shadow-card)]">
        <QrCode :value="origin + path" :size="64" :label="`QR code for the ${passport.name} passport`" />
      </div>
    </div>
    <div class="flex flex-1 flex-col p-4">
      <span class="section-label text-emerald">{{ passport.sectorLabel }} · {{ grainLabel[passport.grain] }}</span>
      <h3 class="mt-1.5 font-display text-[16px] leading-snug font-semibold text-ink">{{ passport.name }}</h3>
      <p class="mt-0.5 text-[13px] text-muted">{{ passport.brand }}</p>
      <span class="mt-auto pt-4 font-mono text-[11px] text-muted group-hover:text-forest">Open passport →</span>
    </div>
  </RouterLink>
</template>
