<script setup>
import { ref, watchEffect } from 'vue'

/** QR code rendered as inline SVG in WidinX green, same settings as the app (ECC M). */
const props = defineProps({
  value: { type: String, required: true },
  size: { type: Number, default: 96 },
  label: { type: String, default: '' },
})

const svg = ref('')
watchEffect(async () => {
  const QRCode = (await import('qrcode')).default
  svg.value = await QRCode.toString(props.value, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 1,
    color: { dark: '#1B3D2F', light: '#FFFFFF' },
  })
})
</script>

<template>
  <div
    class="qr bg-white"
    :style="{ width: `${size}px`, height: `${size}px` }"
    role="img"
    :aria-label="label || `QR code for ${value}`"
    v-html="svg"
  />
</template>

<style scoped>
.qr :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
