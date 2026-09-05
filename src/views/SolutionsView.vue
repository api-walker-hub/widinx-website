<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { solutionsPage as s } from '@/content/solutions'
import PageHero from '@/components/ui/PageHero.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <div>
    <PageHero scene="materials" v-bind="s.hero">
      <template #actions>
        <div class="mt-8 flex flex-wrap gap-3">
          <BaseButton to="/demo">Book a demo →</BaseButton>
          <BaseButton to="/platform" variant="ghost">How the platform works</BaseButton>
        </div>
      </template>
      <template #side>
        <div class="grid gap-3 sm:grid-cols-2">
          <div
            v-for="(stat, i) in [
              ['ESPR', 'Digital Product Passport framework'],
              ['EUDR', 'Deforestation-free due diligence'],
              ['CSRD', 'Sustainability reporting inputs'],
              ['Customs', 'Documentation per market'],
            ]"
            :key="stat[0]"
            v-reveal="{ delay: i * 80 }"
            class="rounded-none border border-line bg-white p-5"
          >
            <b class="font-serif text-[30px] leading-none font-normal">{{ stat[0] }}</b>
            <p class="mt-2 text-[13px] text-muted">{{ stat[1] }}</p>
          </div>
        </div>
      </template>
    </PageHero>

    <section class="section-illustrated section-pad bg-white">
      <SectionBackground scene="team" />
      <div class="wrap">
        <SectionHead :eyebrow="s.industries.eyebrow" :title="s.industries.title" class="mb-14" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            v-for="(item, i) in s.industries.items"
            :key="item.title"
            v-bind="item"
            :delay="(i % 3) * 80"
          />
        </div>
      </div>
    </section>

    <section class="section-illustrated section-pad border-y border-line bg-bone">
      <SectionBackground scene="registry" />
      <div class="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead :eyebrow="s.roles.eyebrow" :title="s.roles.title" align="left" size="md" />
        <div class="grid gap-3 sm:grid-cols-2">
          <article
            v-for="(r, i) in s.roles.items"
            :key="r.title"
            v-reveal="{ delay: i * 70 }"
            class="rounded-none border border-line bg-white p-6"
          >
            <h3 class="text-[17px] font-bold tracking-[-0.01em]">{{ r.title }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-muted">{{ r.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-illustrated section-pad bg-white">
      <SectionBackground scene="circularity" />
      <div class="wrap">
        <SectionHead :eyebrow="s.engagement.eyebrow" :title="s.engagement.title" class="mb-14" />
        <ol class="grid gap-4 md:grid-cols-3">
          <li
            v-for="(step, i) in s.engagement.steps"
            :key="step.title"
            v-reveal="{ delay: i * 90 }"
            class="flex min-h-[250px] flex-col rounded-none border border-line bg-white p-7 transition brut-lift"
          >
            <span class="font-mono text-[12px] font-medium text-forest">0{{ i + 1 }}</span>
            <h3 class="display mt-auto mb-3 text-[36px]">{{ step.title }}</h3>
            <p class="text-[15px] leading-relaxed text-muted">{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section-illustrated section-pad border-t border-line bg-bone">
      <SectionBackground scene="connection" />
      <div class="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow="Questions" title="Things people ask before a pilot." align="left" size="md" />
        <div v-reveal><FaqAccordion :items="s.faq" /></div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
