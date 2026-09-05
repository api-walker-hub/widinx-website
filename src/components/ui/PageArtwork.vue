<script setup>
defineProps({
  image: { type: String, default: '/images/widinx-provenance.png' },
  caption: { type: String, default: 'Connected by design.' },
  position: { type: String, default: 'center' },
  compact: { type: Boolean, default: false },
})
</script>
<template>
  <figure class="page-artwork border border-line bg-bone" :class="{ compact }">
    <img :src="image" alt="" width="1536" height="1024" :style="{ objectPosition: position }" />
    <figcaption class="flex items-center justify-between gap-4 border-t border-line bg-bone px-5 py-3 font-mono text-[10px] tracking-[.06em] text-forest"><span>{{ caption }}</span><span aria-hidden="true">WX ↗</span></figcaption>
  </figure>
</template>
<style scoped>
.page-artwork{overflow:hidden}.page-artwork img{height:300px;width:100%;object-fit:cover}.page-artwork.compact img{height:170px}@media(max-width:640px){.page-artwork img{height:230px}}
</style>
