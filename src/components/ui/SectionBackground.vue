<script setup>
defineProps({
  scene: { type: String, default: 'registry' },
  dark: { type: Boolean, default: false },
})
</script>
<template>
  <div class="section-background" :class="{ dark }" aria-hidden="true">
    <img :src="`/images/widinx-${scene}.png`" alt="" loading="lazy" width="1536" height="1024" />
    <div class="section-background-wash" />
  </div>
</template>
<style scoped>
.section-background{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}.section-background img{height:100%;width:100%;object-fit:cover;object-position:center bottom;opacity:.72}.section-background-wash{position:absolute;inset:0;background:linear-gradient(180deg,#f7f8f2d9 0%,#f7f8f2b3 35%,#f7f8f273 72%,#f7f8f233 100%)}.dark img{opacity:.45}.dark .section-background-wash{background:linear-gradient(180deg,#142f2ae6,#142f2abf 65%,#142f2a80)}
</style>
