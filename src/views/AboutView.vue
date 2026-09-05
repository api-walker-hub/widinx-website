<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { aboutPage as a } from '@/content/about'
import { site } from '@/config/site'
import SectionHead from '@/components/ui/SectionHead.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import PillTag from '@/components/ui/PillTag.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <div>
    <!-- Hero: centered statement, pi.security-style -->
    <section class="section-illustrated relative overflow-hidden border-b border-line bg-bone">
      <SectionBackground scene="team" />
      <div class="wrap relative py-[clamp(72px,10vw,140px)] text-center">
        <span v-reveal class="eyebrow text-forest">{{ a.hero.eyebrow }}</span>
        <h1 v-reveal class="display mx-auto mt-6 max-w-[17ch] text-[clamp(44px,6.4vw,92px)] leading-[0.98]">
          {{ a.hero.title }}
          <em class="block italic text-clay">{{ a.hero.em }}</em>
        </h1>
        <p v-reveal class="mx-auto mt-8 max-w-[640px] text-[18px] leading-relaxed text-body">{{ a.hero.lead }}</p>
        <div v-reveal class="mt-9 flex flex-wrap justify-center gap-4">
          <BaseButton href="#team" variant="ink">Meet the team ↓</BaseButton>
          <BaseButton to="/demo">Book a demo</BaseButton>
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section id="problem" class="section-illustrated section-pad bg-white">
      <SectionBackground scene="materials" />
      <div class="wrap grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div v-reveal>
          <span class="eyebrow text-forest">{{ a.problem.eyebrow }}</span>
          <h2 class="display mt-4 text-[clamp(36px,4.4vw,58px)]">{{ a.problem.title }}</h2>
          <div class="mt-6 space-y-5 text-[16px] leading-relaxed text-body">
            <p v-for="p in a.problem.paragraphs" :key="p.slice(0, 20)">{{ p }}</p>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="(s, i) in a.problem.stats"
            :key="s.value"
            v-reveal="{ delay: i * 80 }"
            :class="[
              'brut-lift flex flex-col border border-line p-6 shadow-card',
              i === 0 ? 'bg-ink text-white' : 'bg-white',
            ]"
          >
            <b :class="['font-serif text-[46px] leading-none font-normal', i === 0 ? 'text-neon' : 'text-ink']">{{ s.value }}</b>
            <p :class="['mt-3 text-[14px] leading-snug', i === 0 ? 'text-white/85' : 'text-body']">{{ s.label }}</p>
            <span :class="['mt-auto pt-4 font-mono text-[10px] uppercase tracking-[0.08em]', i === 0 ? 'text-white/55' : 'text-muted']">
              {{ s.source }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Regulation -->
    <section id="regulation" class="section-illustrated section-pad border-y border-line bg-forest text-white grid-paper-dark">
      <SectionBackground scene="verification" dark />
      <div class="wrap">
        <SectionHead :eyebrow="a.regulation.eyebrow" :title="a.regulation.title" :intro="a.regulation.intro" tone="white" class="mb-14" />
        <ol class="grid gap-4 md:grid-cols-2">
          <li
            v-for="(r, i) in a.regulation.items"
            :key="r.code"
            v-reveal="{ delay: i * 80 }"
            class="flex flex-col border border-white bg-ink p-7 "
          >
            <div class="flex items-center justify-between gap-4">
              <span class="border border-neon bg-neon px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink">{{ r.code }}</span>
              <span class="font-mono text-[11px] uppercase tracking-[0.08em] text-neon">{{ r.when }}</span>
            </div>
            <h3 class="mt-5 text-[19px] font-bold tracking-[-0.01em]">{{ r.name }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-white/75">{{ r.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Customers -->
    <section id="customers" class="section-illustrated section-pad bg-bone">
      <SectionBackground scene="connection" />
      <div class="wrap">
        <SectionHead :eyebrow="a.customers.eyebrow" :title="a.customers.title" :intro="a.customers.intro" class="mb-14" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(s, i) in a.customers.stats"
            :key="s.value"
            v-reveal="{ delay: (i % 3) * 80 }"
            class="brut brut-lift flex flex-col p-6"
          >
            <b class="font-serif text-[44px] leading-none font-normal text-forest">{{ s.value }}</b>
            <p class="mt-3 text-[15px] leading-snug text-ink">{{ s.label }}</p>
            <span class="mt-auto border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{{ s.source }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section id="team" class="section-illustrated section-pad border-y border-line bg-white">
      <SectionBackground scene="registry" />
      <div class="wrap">
        <SectionHead :eyebrow="a.team.eyebrow" :title="a.team.title" class="mb-12" />
        <div class="grid gap-4 md:grid-cols-3">
          <article
            v-for="(m, i) in a.team.members"
            :key="m.role"
            v-reveal="{ delay: i * 90 }"
            class="brut brut-lift p-7"
          >
            <div class="grid size-14 place-items-center border border-line bg-mint font-serif text-[28px] text-forest">{{ m.initials }}</div>
            <h3 class="mt-5 text-[18px] font-bold tracking-[-0.01em]">{{ m.role }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-body">{{ m.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Belief -->
    <section class="section-illustrated section-pad bg-ink text-center text-white grid-paper-dark">
      <SectionBackground scene="circularity" dark />
      <div class="wrap max-w-[860px]">
        <span v-reveal class="eyebrow text-neon">{{ a.belief.eyebrow }}</span>
        <h2 v-reveal class="display mt-6 text-[clamp(38px,5vw,66px)]">{{ a.belief.title }}</h2>
        <p v-reveal class="mx-auto mt-7 max-w-[680px] text-[17px] leading-relaxed text-white/75">{{ a.belief.text }}</p>
      </div>
    </section>

    <!-- Research -->
    <section id="research" class="section-illustrated section-pad bg-white">
      <SectionBackground scene="integrations" />
      <div class="wrap">
        <SectionHead :eyebrow="a.research.eyebrow" :title="a.research.title" class="mb-12" />
        <ol class="brut divide-y-2 divide-ink">
          <li
            v-for="(r, i) in a.research.items"
            :key="r.url"
            v-reveal="{ delay: (i % 4) * 50 }"
            class="grid gap-3 px-6 py-5 transition hover:bg-mint md:grid-cols-[56px_180px_1fr_auto] md:items-start"
          >
            <span class="font-mono text-[12px] text-muted">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="flex flex-wrap items-center gap-2 md:flex-col md:items-start">
              <PillTag tone="line">{{ r.org }}</PillTag>
              <span class="font-mono text-[11px] text-muted">{{ r.year }}</span>
            </div>
            <div>
              <h3 class="text-[16px] font-bold tracking-[-0.01em]">{{ r.title }}</h3>
              <p class="mt-1 text-[14px] leading-relaxed text-body">{{ r.takeaway }}</p>
            </div>
            <a
              :href="r.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-line bg-white px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] no-underline  transition hover:bg-neon active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              Source ↗
            </a>
          </li>
        </ol>
        <p v-reveal class="mt-6 text-[12px] text-muted">
          Figures are quoted from the linked publications as of September 2026. Regulatory dates reflect adopted EU legislation and may be amended.
        </p>
      </div>
    </section>

    <CtaSection eyebrow="Work with us" title="Want to help build proof that" em="lasts?" text="We are hiring a small founding team in Europe. See the open roles, or tell us about the product you need to protect." />
    <div class="border-t border-line bg-bone py-8 text-center">
      <BaseButton to="/careers" variant="ink">Join the team →</BaseButton>
    </div>
  </div>
</template>
