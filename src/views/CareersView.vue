<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { careersPage as c } from '@/content/careers'
import { site } from '@/config/site'
import SectionHead from '@/components/ui/SectionHead.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import PillTag from '@/components/ui/PillTag.vue'

const applyHref = (role) =>
  `mailto:${site.careersEmail}?subject=${encodeURIComponent(`Application — ${role}`)}`
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="section-illustrated relative overflow-hidden border-b border-line bg-ink text-white grid-paper-dark">
      <SectionBackground scene="team" dark />
      <div class="wrap relative py-[clamp(72px,10vw,150px)] text-center">
        <span v-reveal class="eyebrow text-neon">Careers</span>
        <h1 v-reveal class="display mx-auto mt-6 max-w-[16ch] text-[clamp(48px,7vw,104px)] leading-[0.96]">
          {{ c.hero.title }}
          <em class="block italic text-neon">{{ c.hero.em }}</em>
        </h1>
        <p v-reveal class="mx-auto mt-8 max-w-[620px] text-[18px] leading-relaxed text-white/75">{{ c.hero.lead }}</p>
        <div v-reveal class="mt-9">
          <BaseButton href="#roles">{{ c.hero.cta }} ↓</BaseButton>
        </div>
      </div>
    </section>

    <!-- What we look for -->
    <section class="section-illustrated section-pad bg-bone">
      <SectionBackground scene="materials" />
      <div class="wrap">
        <SectionHead :eyebrow="c.lookFor.eyebrow" title="Four things we hire for." class="mb-12" />
        <div class="grid border border-line bg-ink gap-[2px] sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(v, i) in c.lookFor.items"
            :key="v.title"
            v-reveal="{ delay: i * 80 }"
            class="group flex min-h-[300px] flex-col bg-white p-7 transition hover:bg-neon"
          >
            <span class="font-mono text-[12px] text-muted group-hover:text-ink">0{{ i + 1 }}</span>
            <h3 class="display mt-auto text-[42px]">{{ v.title }}</h3>
            <p class="mt-3 text-[15px] leading-relaxed text-body group-hover:text-ink">{{ v.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- How we work -->
    <section class="section-illustrated section-pad border-y border-line bg-white">
      <SectionBackground scene="integrations" />
      <div class="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <SectionHead :eyebrow="c.howWeWork.eyebrow" :title="c.howWeWork.title" align="left" size="md" />
        <ul class="grid gap-3 sm:grid-cols-2">
          <li
            v-for="(item, i) in c.howWeWork.items"
            :key="item.title"
            v-reveal="{ delay: i * 60 }"
            class="flex gap-3 border border-line bg-bone p-5"
          >
            <span class="mt-1.5 size-3 shrink-0 bg-neon ring-2 ring-ink" />
            <div>
              <h3 class="text-[16px] font-bold tracking-[-0.01em]">{{ item.title }}</h3>
              <p class="mt-1 text-[14px] leading-relaxed text-body">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Open roles -->
    <section id="roles" class="section-illustrated section-pad bg-bone">
      <SectionBackground scene="connection" />
      <div class="wrap">
        <SectionHead :eyebrow="c.roles.eyebrow" :title="c.roles.title" :intro="c.roles.intro" class="mb-12" />
        <div v-if="c.roles.items.length" class="brut divide-y-2 divide-ink">
          <article
            v-for="(role, i) in c.roles.items"
            :key="role.title"
            v-reveal="{ delay: i * 70 }"
            class="grid gap-5 p-6 transition hover:bg-mint md:grid-cols-[1fr_auto] md:items-center md:p-8"
          >
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <PillTag tone="ink">{{ role.team }}</PillTag>
                <PillTag tone="line">{{ role.location }}</PillTag>
                <PillTag tone="line">{{ role.type }}</PillTag>
              </div>
              <h3 class="mt-4 text-[24px] font-bold tracking-[-0.02em]">{{ role.title }}</h3>
              <p class="mt-2 max-w-[720px] text-[15px] leading-relaxed text-body">{{ role.summary }}</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="t in role.tags" :key="t" class="border border-ink/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                  {{ t }}
                </span>
              </div>
            </div>
            <BaseButton :href="applyHref(role.title)" size="sm">Apply →</BaseButton>
          </article>
        </div>
        <div v-else v-reveal class="brut p-8 text-center">
          <h3 class="display text-[32px]">No open roles right now.</h3>
          <p class="mt-2 text-body">We still read every message. Tell us what you would build here.</p>
        </div>

        <div v-reveal class="mt-8 flex flex-col items-start justify-between gap-4 border border-line bg-ink p-6 text-white sm:flex-row sm:items-center">
          <div>
            <h3 class="text-[18px] font-bold">Don’t see your role?</h3>
            <p class="mt-1 text-[14px] text-white/75">Send a short note and a link to something you have built. We answer everyone.</p>
          </div>
          <BaseButton :href="applyHref('General application')" variant="white" size="sm">{{ site.careersEmail }}</BaseButton>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-illustrated section-pad border-t border-line bg-white">
      <SectionBackground scene="circularity" />
      <div class="wrap">
        <SectionHead :eyebrow="c.process.eyebrow" title="Four steps. No puzzles." class="mb-12" />
        <ol class="grid gap-4 md:grid-cols-4">
          <li
            v-for="(s, i) in c.process.steps"
            :key="s.title"
            v-reveal="{ delay: i * 80 }"
            class="brut brut-lift relative p-6 pt-10"
          >
            <span class="absolute -top-[2px] -left-[2px] grid size-9 place-items-center border border-line bg-neon font-mono text-[12px]">0{{ i + 1 }}</span>
            <h3 class="text-[18px] font-bold tracking-[-0.01em]">{{ s.title }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-body">{{ s.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-illustrated section-pad border-t border-line bg-forest text-center text-white grid-paper-dark">
      <SectionBackground scene="shipping" dark />
      <div class="wrap">
        <span v-reveal class="eyebrow text-neon">Proof, not promises</span>
        <h2 v-reveal class="display mx-auto mt-5 max-w-[14ch] text-[clamp(40px,5.5vw,72px)]">
          All rigour, <em class="italic text-neon">no theatre.</em>
        </h2>
        <p v-reveal class="mx-auto mt-6 mb-8 max-w-[560px] text-white/75">
          See what we are building before you apply — the platform, the trust roadmap and the customers we serve.
        </p>
        <div v-reveal class="flex flex-wrap justify-center gap-4">
          <BaseButton to="/platform" variant="white">See the platform</BaseButton>
          <BaseButton to="/about" variant="ink">About WidinX</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>
