<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import PillarsSection from '@/components/sections/PillarsSection.vue'
import LivePassportsSection from '@/components/sections/LivePassportsSection.vue'
import TimelineSection from '@/components/sections/TimelineSection.vue'
import RolesSection from '@/components/sections/RolesSection.vue'
import SectorGrid from '@/components/sections/SectorGrid.vue'
import JourneySection from '@/components/sections/JourneySection.vue'
import PlatformSection from '@/components/sections/PlatformSection.vue'
import TrustBand from '@/components/sections/TrustBand.vue'
import ManifestoSection from '@/components/sections/ManifestoSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <PillarsSection />
    <LivePassportsSection />
    <TimelineSection />
    <RolesSection />
    <SectorGrid :limit="6" />
    <JourneySection />
    <PlatformSection />
    <TrustBand />
    <ManifestoSection />
    <CtaSection />
  </div>
</template>
