<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { platformPage as p } from '@/content/platform'
import PageHero from '@/components/ui/PageHero.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
import PassportCard from '@/components/passport/PassportCard.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import { findPassport } from '@/content/passports'

const sample = findPassport('ebike-battery-500')
const statusTone = {
  available: 'border-emerald/35 bg-emerald/[0.08] text-emerald',
  partial: 'border-ochre/40 bg-ochre/[0.08] text-ochre',
  roadmap: 'border-line bg-mint/60 text-muted',
}
</script>

<template>
  <div>
    <PageHero scene="registry" v-bind="p.hero">
      <template #actions>
        <div class="mt-8 flex flex-wrap gap-3">
          <BaseButton to="/demo">Book a demo →</BaseButton>
          <BaseButton to="/passports" variant="ghost">See live passports</BaseButton>
        </div>
      </template>
      <template #side>
        <div class="mx-auto w-full max-w-[300px]"><PassportCard :passport="sample" /></div>
      </template>
    </PageHero>

    <!-- Modules -->
    <section class="section-illustrated section-pad bg-white">
      <SectionBackground scene="materials" />
      <div class="wrap">
        <SectionHead :eyebrow="p.modules.eyebrow" :title="p.modules.title" class="mb-14" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            v-for="(m, i) in p.modules.items"
            :key="m.title"
            :icon="m.icon"
            personalized
            :title="m.title"
            :text="m.text"
            :delay="(i % 4) * 70"
          />
        </div>
      </div>
    </section>

    <!-- Codes -->
    <section id="codes" class="section-illustrated section-pad border-t border-line bg-ink text-white">
      <SectionBackground scene="verification" dark />
      <div class="wrap">
        <SectionHead :eyebrow="p.codes.eyebrow" :title="p.codes.title" :intro="p.codes.intro" tone="white" class="mb-14" />
        <ol class="grid gap-4 md:grid-cols-3">
          <li
            v-for="(g, i) in p.codes.grains"
            :key="g.label"
            v-reveal="{ delay: i * 90 }"
            class="flex flex-col border border-white/15 bg-white/[0.04] p-7 transition hover:border-neon"
          >
            <span class="eyebrow text-[11px] text-neon">{{ g.label }}</span>
            <code class="mt-4 font-mono text-[15px] text-white">{{ g.path }}</code>
            <p class="mt-4 text-[14px] leading-relaxed text-white/70">{{ g.text }}</p>
          </li>
        </ol>
        <ul v-reveal class="mt-8 grid gap-3 border border-white/15 bg-white/[0.04] p-6 sm:grid-cols-2">
          <li v-for="f in p.codes.facts" :key="f" class="flex items-start gap-2 text-[14px] text-white/85">
            <IconGlyph name="check" :size="16" class="mt-0.5 shrink-0 text-neon" />
            {{ f }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Standards & integrations -->
    <section class="section-illustrated section-pad border-b border-line bg-bone">
      <SectionBackground scene="integrations" />
      <div class="wrap grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHead :eyebrow="p.standards.eyebrow" :title="p.standards.title" align="left" size="md" class="mb-8" />
          <ul class="divide-y divide-line border border-line bg-pale">
            <li v-for="s in p.standards.items" :key="s.name" class="flex items-center justify-between gap-4 px-5 py-3 text-[14px]">
              {{ s.name }}
              <span class="badge shrink-0" :class="statusTone[s.status]">{{ s.status }}</span>
            </li>
          </ul>
        </div>
        <div>
          <SectionHead :eyebrow="p.integrations.eyebrow" :title="p.integrations.title" align="left" size="md" class="mb-8" />
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="g in p.integrations.groups" :key="g.title" class="border border-line bg-pale p-5">
              <h3 class="eyebrow text-[11px]" :class="g.title === 'Shipped' ? 'text-forest' : 'text-muted'">{{ g.title }}</h3>
              <ul class="mt-4 space-y-2">
                <li v-for="item in g.items" :key="item" class="border border-line bg-white px-3 py-2 text-[14px] font-medium">{{ item }}</li>
              </ul>
            </div>
          </div>
          <p class="mt-6 text-[13px] leading-relaxed text-muted">{{ p.integrations.note }}</p>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
