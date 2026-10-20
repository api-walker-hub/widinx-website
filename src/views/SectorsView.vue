<script setup>
import PageHero from '@/components/ui/PageHero.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import RolesSection from '@/components/sections/RolesSection.vue'
import SectorGrid from '@/components/sections/SectorGrid.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <div>
    <PageHero
      scene="materials"
      eyebrow="Sectors"
      title="Your sector’s rules,"
      em="already in the template."
      lead="WidinX ships a passport template for each product group in the EU programme: the 19 core fields every passport carries, plus what your sector’s regulation adds. Start with the products that have a deadline; the same catalogue serves the rest."
    >
      <template #actions>
        <div class="mt-8 flex flex-wrap gap-3">
          <BaseButton to="/demo">Book a demo →</BaseButton>
          <BaseButton to="/passports" variant="ghost">See live passports</BaseButton>
        </div>
      </template>
    </PageHero>
    <SectorGrid title="Fifteen templates." />
    <RolesSection />
    <CtaSection />
  </div>
</template>
