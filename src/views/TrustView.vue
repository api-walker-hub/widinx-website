<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { trustPage as t } from '@/content/trust'
import { site } from '@/config/site'
import PageHero from '@/components/ui/PageHero.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import PillTag from '@/components/ui/PillTag.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'

const statusLabel = { done: 'Done', progress: 'In progress', planned: 'Planned' }
const statusTone = { done: 'mint', progress: 'clay', planned: 'line' }
</script>

<template>
  <div>
    <PageHero scene="verification" v-bind="t.hero">
      <template #actions>
        <p class="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Last updated {{ t.hero.updated }}</p>
      </template>
      <template #side>
        <div class="rounded-none border border-line bg-white p-6 shadow-card">
          <span class="eyebrow text-[10px] text-forest">At a glance</span>
          <ul class="mt-4 divide-y divide-ink text-[14px]">
            <li class="flex justify-between gap-4 py-2.5"><span class="text-muted">Hosting</span><b>EU region, single cloud</b></li>
            <li class="flex justify-between gap-4 py-2.5"><span class="text-muted">Encryption</span><b>In transit & at rest</b></li>
            <li class="flex justify-between gap-4 py-2.5"><span class="text-muted">Personal data on-chain</span><b>Never</b></li>
            <li class="flex justify-between gap-4 py-2.5"><span class="text-muted">Independent pentest</span><b>Dec 2026</b></li>
            <li class="flex justify-between gap-4 py-2.5"><span class="text-muted">ISO/IEC 27001</span><b>Target H1 2027</b></li>
            <li class="flex justify-between gap-4 py-2.5"><span class="text-muted">DPA</span><b>Available on request</b></li>
          </ul>
        </div>
      </template>
    </PageHero>

    <!-- Commitments -->
    <section class="section-illustrated section-pad bg-white">
      <SectionBackground scene="registry" />
      <div class="wrap">
        <SectionHead :eyebrow="t.commitments.eyebrow" :title="t.commitments.title" class="mb-14" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <FeatureCard
            v-for="(c, i) in t.commitments.items"
            :key="c.title"
            :icon="c.icon"
            :title="c.title"
            :text="c.text"
            :delay="i * 60"
            class="[&_h3]:text-[18px]"
          />
        </div>
      </div>
    </section>

    <!-- Principles -->
    <section class="section-illustrated section-pad border-y border-line bg-bone">
      <SectionBackground scene="integrations" />
      <div class="wrap">
        <SectionHead :eyebrow="t.principles.eyebrow" :title="t.principles.title" class="mb-14" />
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(p, i) in t.principles.items"
            :key="p.title"
            v-reveal="{ delay: (i % 3) * 70 }"
            class="flex gap-3 rounded-none border border-line bg-white p-6"
          >
            <span class="mt-0.5 grid size-7 shrink-0 place-items-center rounded-none bg-mint text-forest">
              <IconGlyph name="check" :size="15" />
            </span>
            <div>
              <h3 class="text-[16px] font-bold tracking-[-0.01em]">{{ p.title }}</h3>
              <p class="mt-1 text-[14px] leading-relaxed text-muted">{{ p.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section id="roadmap" class="section-illustrated section-pad bg-white">
      <SectionBackground scene="shipping" />
      <div class="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHead :eyebrow="t.roadmap.eyebrow" :title="t.roadmap.title" :intro="t.roadmap.intro" align="left" size="md" />
          <div v-reveal class="mt-8 rounded-none border border-clay bg-white p-6">
            <h3 class="eyebrow text-[10px] text-clay">{{ t.notClaimed.eyebrow }}</h3>
            <ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-body">
              <li v-for="line in t.notClaimed.items" :key="line" class="flex gap-2">
                <span class="mt-2 size-1.5 shrink-0 rounded-none bg-clay" />
                {{ line }}
              </li>
            </ul>
          </div>
        </div>
        <ol class="relative border-l border-line pl-8">
          <li
            v-for="(item, i) in t.roadmap.items"
            :key="item.title"
            v-reveal="{ delay: i * 60 }"
            class="relative pb-8 last:pb-0"
          >
            <span
              :class="[
                'absolute top-1.5 -left-[37px] size-[17px] rounded-none border-4 border-white ring-1',
                item.status === 'done' ? 'bg-neon ring-ink' : item.status === 'progress' ? 'bg-clay ring-clay' : 'bg-white ring-ink',
              ]"
            />
            <div class="flex flex-wrap items-center gap-3">
              <span class="font-mono text-[12px] font-medium text-forest">{{ item.when }}</span>
              <PillTag :tone="statusTone[item.status]">{{ statusLabel[item.status] }}</PillTag>
            </div>
            <h3 class="mt-2 text-[19px] font-bold tracking-[-0.01em]">{{ item.title }}</h3>
            <p class="mt-1 max-w-[560px] text-[14px] leading-relaxed text-muted">{{ item.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Data processing -->
    <section class="section-illustrated section-pad border-y border-line bg-bone">
      <SectionBackground scene="team" />
      <div class="wrap">
        <SectionHead :eyebrow="t.dataProcessing.eyebrow" :title="t.dataProcessing.title" class="mb-14" />
        <div class="grid gap-3 sm:grid-cols-2">
          <article
            v-for="(d, i) in t.dataProcessing.items"
            :key="d.title"
            v-reveal="{ delay: i * 70 }"
            class="rounded-none border border-line bg-white p-6"
          >
            <h3 class="text-[17px] font-bold tracking-[-0.01em]">{{ d.title }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-muted">{{ d.text }}</p>
          </article>
        </div>
        <div v-reveal class="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-none border border-line bg-white p-6">
          <p class="text-[15px] text-body">Need our DPA, subprocessor list or a security questionnaire answered?</p>
          <BaseButton :href="`mailto:${site.securityEmail}?subject=Security%20pack%20request`" variant="ink" size="sm">
            Request the security pack
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Disclosure -->
    <section id="disclosure" class="section-illustrated section-pad bg-white text-center">
      <SectionBackground scene="connection" />
      <div class="wrap max-w-[720px]">
        <span v-reveal class="eyebrow text-forest">{{ t.disclosure.eyebrow }}</span>
        <h2 v-reveal class="display mt-4 text-[clamp(36px,4.5vw,56px)]">{{ t.disclosure.title }}</h2>
        <p v-reveal class="mx-auto mt-5 max-w-[600px] text-muted">{{ t.disclosure.text }}</p>
        <div v-reveal class="mt-8">
          <BaseButton :href="`mailto:${site.securityEmail}`">{{ site.securityEmail }}</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>
