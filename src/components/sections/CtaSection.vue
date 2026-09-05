<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { finalCta } from '@/content/home'
import { site } from '@/config/site'
import BaseButton from '@/components/ui/BaseButton.vue'

defineProps({
  eyebrow: { type: String, default: finalCta.eyebrow },
  title: { type: String, default: finalCta.title },
  em: { type: String, default: finalCta.em },
  text: { type: String, default: finalCta.text },
})
</script>

<template>
  <section id="contact" class="section-illustrated section-pad bg-white text-center">
      <SectionBackground scene="connection" />
    <div class="wrap">
      <span v-reveal class="eyebrow text-forest">{{ eyebrow }}</span>
      <h2 v-reveal class="display mx-auto mt-5 max-w-[14ch] text-[clamp(44px,5.5vw,72px)] leading-[0.98]">
        {{ title }} <em class="italic text-clay">{{ em }}</em>
      </h2>
      <p v-reveal class="mx-auto mt-6 mb-8 max-w-[550px] text-muted">{{ text }}</p>
      <div v-reveal class="flex flex-wrap justify-center gap-3">
        <BaseButton to="/demo">Book a demo →</BaseButton>
        <BaseButton :href="`mailto:${site.contactEmail}`" variant="ink">{{ site.contactEmail }}</BaseButton>
      </div>
    </div>
  </section>
</template>
