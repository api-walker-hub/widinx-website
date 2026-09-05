<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import PrivacyContent from '@/components/legal/PrivacyContent.vue'
</script>

<template>
  <article class="section-illustrated legal-illustrated wrap max-w-[780px] py-[clamp(56px,7vw,96px)]">
    <SectionBackground scene="verification" />
    <PrivacyContent />
  </article>
</template>
