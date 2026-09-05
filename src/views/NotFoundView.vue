<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="wrap py-[clamp(80px,12vw,160px)] text-center">
    <span class="eyebrow text-forest">404</span>
    <h1 class="display mx-auto mt-4 max-w-[16ch] text-[clamp(40px,5.5vw,72px)]">
      This page has no <em class="italic text-clay">history.</em>
    </h1>
    <p class="mx-auto mt-5 max-w-[460px] text-muted">The link may be outdated or mistyped. Every real page is a click away.</p>
    <div class="mt-8 flex justify-center gap-3">
      <BaseButton to="/">Back to home</BaseButton>
      <BaseButton to="/demo" variant="ghost">Book a demo</BaseButton>
    </div>
  </section>
</template>
