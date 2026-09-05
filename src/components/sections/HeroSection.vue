<script setup>
import { ref } from 'vue'
import { hero } from '@/content/home'
import BaseButton from '@/components/ui/BaseButton.vue'
const paused = ref(false)
</script>

<template>
  <section class="journey-hero relative overflow-hidden border-b border-line bg-bone" :class="{ 'motion-paused': paused }">
    <div class="hero-world" aria-hidden="true"><img src="/images/widinx-journey.png" alt="" fetchpriority="high" /><div class="world-light" /></div>
    <div class="hero-wash" />
    <div class="wrap relative z-10 pt-16 pb-80 lg:pt-24 lg:pb-52">
      <div v-reveal class="max-w-[650px]">
        <span class="eyebrow text-[10px] text-forest">A new standard of product trust</span>
        <h1 class="mt-7 text-[clamp(48px,5.7vw,80px)] leading-[1.04] font-medium tracking-[-0.065em]">
          Every product.<br />Every step.<br /><em class="font-serif font-normal tracking-[-0.025em] text-emerald">Beautifully verified.</em>
        </h1>
        <p class="mt-7 max-w-[480px] text-[17px] leading-[1.8] text-muted">{{ hero.lead }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <BaseButton :to="hero.primary.to">{{ hero.primary.label }} <span class="ml-4">↗</span></BaseButton>
          <BaseButton :to="hero.secondary.to" variant="ghost">Explore the platform <span class="ml-2">→</span></BaseButton>
        </div>
        <p class="mt-8 font-mono text-[10px] tracking-[.08em] text-forest">ORIGIN → JOURNEY → VERIFIED IDENTITY</p>
      </div>
    </div>
    <div class="journey-label" aria-hidden="true"><span class="label-marker" /> A product. A journey. A story worth keeping.</div>
    <button type="button" class="motion-control" :aria-pressed="paused" @click="paused = !paused">{{ paused ? '▶ Play motion' : 'Ⅱ Pause motion' }}</button>
  </section>
</template>

<style scoped>
.journey-hero{min-height:780px}.hero-world{position:absolute;inset:0;overflow:hidden}.hero-world img{width:100%;height:100%;object-fit:cover;object-position:center 65%;animation:world-drift 22s ease-in-out infinite alternate;transform-origin:70% 75%;will-change:transform}.hero-wash{position:absolute;inset:0;background:linear-gradient(90deg,#f7f8f2f5 0%,#f7f8f2c9 31%,#f7f8f22b 62%,transparent 85%);pointer-events:none}.world-light{position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,#fff8 50%,transparent 65%);opacity:.2;animation:light-drift 18s ease-in-out infinite alternate}.journey-label{position:absolute;z-index:11;right:7%;bottom:85px;background:#f7f8f2ed;border:1px solid #cbd6c7;padding:14px 18px;display:flex;gap:10px;align-items:center;font-size:11px;color:#245c4d;animation:label-float 6s ease-in-out infinite}.label-marker{width:7px;height:7px;background:#b97950}.motion-control{position:absolute;z-index:12;bottom:20px;right:24px;border:1px solid #b8c8b8;padding:8px 12px;background:#f7f8f2ed;color:#245c4d;font:10px var(--font-mono);cursor:pointer}.motion-paused *{animation-play-state:paused!important}@keyframes world-drift{from{transform:scale(1.02) translateX(-.5%)}to{transform:scale(1.1) translateX(1%)}}@keyframes light-drift{from{transform:translateX(-25%)}to{transform:translateX(25%)}}@keyframes label-float{50%{transform:translateY(-9px)}}@media(max-width:767px){.journey-hero{min-height:930px}.hero-world{top:38%}.hero-world img{object-position:68% bottom}.hero-wash{background:linear-gradient(#f7f8f2 0%,#f7f8f2 44%,#f7f8f2b3 62%,transparent 80%)}.journey-label{right:16px;left:16px;bottom:68px;font-size:10px;justify-content:center}}@media(prefers-reduced-motion:reduce){.hero-world img,.world-light,.journey-label{animation:none}.motion-control{display:none}}
</style>
