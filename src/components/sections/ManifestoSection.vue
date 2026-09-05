<script setup>
import { manifesto } from '@/content/home'
</script>
<template>
  <section id="manifesto" class="section-pad relative isolate overflow-hidden border-y border-line bg-bone text-center text-ink">
    <img src="/images/widinx-provenance.png" alt="" loading="lazy" class="absolute inset-0 -z-20 h-full w-full object-cover" />
    <div class="absolute inset-0 -z-10 bg-bone/65" />
    <div class="wrap relative py-16">
      <span v-reveal class="eyebrow text-forest">{{ manifesto.eyebrow }}</span>
      <blockquote v-reveal class="display mx-auto mt-6 max-w-[19ch] text-[clamp(40px,5.2vw,70px)]">{{ manifesto.quote }} <em class="italic text-emerald">{{ manifesto.em }}</em></blockquote>
      <p v-reveal class="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{{ manifesto.caption }}</p>
    </div>
  </section>
</template>
