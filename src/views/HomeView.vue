<script setup>
import { ticker } from '@/content/home'
import HeroSection from '@/components/sections/HeroSection.vue'
import TickerStrip from '@/components/ui/TickerStrip.vue'
import PillarsSection from '@/components/sections/PillarsSection.vue'
import JourneySection from '@/components/sections/JourneySection.vue'
import PlatformSection from '@/components/sections/PlatformSection.vue'
import ImpactSection from '@/components/sections/ImpactSection.vue'
import UseCasesSection from '@/components/sections/UseCasesSection.vue'
import TrustBand from '@/components/sections/TrustBand.vue'
import ManifestoSection from '@/components/sections/ManifestoSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <TickerStrip :items="ticker" />
    <PillarsSection />
    <JourneySection />
    <PlatformSection />
    <ImpactSection />
    <UseCasesSection />
    <TrustBand />
    <ManifestoSection />
    <CtaSection />
  </div>
</template>
