<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import PassportCard from '@/components/passport/PassportCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { passports, findPassport } from '@/content/passports'

const featured = ['merino-crew-sweater', 'ebike-battery-500', 'rpet-water-bottle', 'nordbyte-aero-14'].map(findPassport)
</script>

<template>
  <section class="section-illustrated section-pad border-t border-line bg-bone">
    <SectionBackground scene="verification" />
    <div class="wrap">
      <SectionHead
        eyebrow="Live demo passports — scan or click"
        title="Point your phone at a code."
        em="That is the product."
        intro="Each card opens a working passport, published the way WidinX publishes yours: one GS1 Digital Link per product, batch or item."
        class="mb-12"
      />
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PassportCard v-for="p in featured" :key="p.slug" :passport="p" />
      </div>
      <div class="mt-10 text-center">
        <BaseButton to="/passports" variant="ghost">Show all {{ passports.length }} live passports →</BaseButton>
      </div>
    </div>
  </section>
</template>
