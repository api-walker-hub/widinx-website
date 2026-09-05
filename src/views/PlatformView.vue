<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { platformPage as p } from '@/content/platform'
import PageHero from '@/components/ui/PageHero.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
import PassportVisual from '@/components/sections/PassportVisual.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <div>
    <PageHero scene="registry" v-bind="p.hero">
      <template #actions>
        <div class="mt-8 flex flex-wrap gap-3">
          <BaseButton to="/demo">Book a demo →</BaseButton>
          <BaseButton to="/trust" variant="ghost">Security & residency</BaseButton>
        </div>
      </template>
      <template #side>
        <PassportVisual class="mx-auto w-full max-w-[520px]" />
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

    <!-- Digital twins on Solana -->
    <section id="twins" class="section-illustrated section-pad border-t border-line bg-ink text-white">
      <SectionBackground scene="verification" dark />
      <div class="wrap">
        <SectionHead :eyebrow="p.twin.eyebrow" :title="p.twin.title" :intro="p.twin.intro" tone="white" class="mb-14" />
        <ol class="grid gap-4 md:grid-cols-4">
          <li
            v-for="(step, i) in p.twin.steps"
            :key="step.title"
            v-reveal="{ delay: i * 90 }"
            class="relative flex min-h-[220px] flex-col border border-white/15 bg-white/[0.04] p-7 transition hover:border-neon"
          >
            <span class="font-mono text-[12px] text-neon">0{{ i + 1 }}</span>
            <h3 class="display mt-auto mb-3 text-[32px]">{{ step.title }}</h3>
            <p class="text-[14px] leading-relaxed text-white/70">{{ step.text }}</p>
          </li>
        </ol>
        <ul v-reveal class="mt-8 grid gap-3 border border-white/15 bg-white/[0.04] p-6 sm:grid-cols-2">
          <li v-for="f in p.twin.facts" :key="f" class="flex items-start gap-2 text-[14px] text-white/85">
            <IconGlyph name="check" :size="16" class="mt-0.5 shrink-0 text-neon" />
            {{ f }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Architecture -->
    <section id="architecture" class="section-illustrated section-pad border-y border-line bg-bone">
      <SectionBackground scene="integrations" />
      <div class="wrap">
        <SectionHead :eyebrow="p.architecture.eyebrow" :title="p.architecture.title" :intro="p.architecture.intro" class="mb-14" />
        <div class="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <template v-for="(node, i) in p.architecture.nodes" :key="node.title">
            <article
              v-reveal="{ delay: i * 100 }"
              :class="[
                'rounded-none border p-7 text-center',
                i === 1 ? 'border-forest bg-forest text-white shadow-lift' : 'border-line bg-white',
              ]"
            >
              <span :class="['eyebrow text-[10px]', i === 1 ? 'text-neon' : 'text-forest']">
                {{ i === 0 ? 'Global' : i === 1 ? 'EU region' : 'On demand' }}
              </span>
              <h3 class="mt-2 text-[20px] font-bold tracking-[-0.02em]">{{ node.title }}</h3>
              <p :class="['mt-2 text-[14px] leading-relaxed', i === 1 ? 'text-white/75' : 'text-muted']">{{ node.text }}</p>
            </article>
            <div v-if="i < 2" class="hidden justify-center text-forest lg:flex" aria-hidden="true">
              <IconGlyph name="arrow" :size="26" />
            </div>
          </template>
        </div>
        <div v-reveal class="mt-8 rounded-none border border-line bg-white p-7">
          <h3 class="eyebrow text-[11px] text-ink">Tenant residency policy</h3>
          <ul class="mt-4 grid gap-3 sm:grid-cols-2">
            <li v-for="line in p.architecture.policy" :key="line" class="flex items-start gap-2 text-[15px] text-body">
              <IconGlyph name="check" :size="16" class="mt-1 shrink-0 text-forest" />
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Integrations -->
    <section class="section-illustrated section-pad bg-white">
      <SectionBackground scene="connection" />
      <div class="wrap">
        <SectionHead :eyebrow="p.integrations.eyebrow" :title="p.integrations.title" class="mb-14" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(g, i) in p.integrations.groups"
            :key="g.title"
            v-reveal="{ delay: i * 70 }"
            class="rounded-none border border-line bg-bone p-6"
          >
            <h3 class="eyebrow text-[11px] text-forest">{{ g.title }}</h3>
            <ul class="mt-4 space-y-2">
              <li
                v-for="item in g.items"
                :key="item"
                class="rounded-none border border-line bg-white px-3 py-2 text-[14px] font-medium"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <p v-reveal class="mx-auto mt-8 max-w-[720px] text-center text-[13px] text-muted">{{ p.integrations.note }}</p>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
