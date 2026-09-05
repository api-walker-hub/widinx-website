<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import { sustainabilityPage as s } from '@/content/sustainability'
import PageHero from '@/components/ui/PageHero.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import PillTag from '@/components/ui/PillTag.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <div>
    <PageHero scene="circularity" v-bind="s.hero">
      <template #actions>
        <div class="mt-8 flex flex-wrap gap-3">
          <BaseButton to="/demo">Get your products’ footprint →</BaseButton>
          <BaseButton href="#regulations" variant="ghost">AGEC & Ecoscore coverage</BaseButton>
        </div>
      </template>
      <template #side>
        <!-- Sample impact card: what a customer sees after scanning -->
        <div class="brut mx-auto w-full max-w-[420px] p-6">
          <div class="flex items-center justify-between gap-3">
            <span class="eyebrow text-[10px] text-forest">Environmental sheet</span>
            <PillTag tone="mint">Passport view</PillTag>
          </div>
          <p class="mt-3 text-[15px] font-bold tracking-[-0.01em]">{{ s.sample.product }}</p>
          <div class="mt-4 grid grid-cols-2 gap-3">
            <div class="border border-line bg-bone p-4">
              <span class="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Carbon footprint</span>
              <b class="mt-1 block font-serif text-[30px] leading-none font-normal text-forest">{{ s.sample.carbon }}</b>
              <span class="mt-1 block text-[11px] text-muted">cradle to grave</span>
            </div>
            <div class="border border-line bg-ink p-4 text-white">
              <span class="font-mono text-[10px] uppercase tracking-[0.1em] text-white/60">{{ s.sample.ecoscoreLabel }}</span>
              <b class="mt-1 block font-serif text-[30px] leading-none font-normal text-neon">{{ s.sample.ecoscore }}</b>
              <span class="mt-1 block text-[11px] text-white/60">Ecobalyse method</span>
            </div>
          </div>
          <dl class="mt-4 divide-y divide-line border-y border-line text-[13px]">
            <div v-for="[k, v] in s.sample.rows" :key="k" class="flex justify-between gap-4 py-2">
              <dt class="text-muted">{{ k }}</dt>
              <dd class="font-medium text-ink">{{ v }}</dd>
            </div>
          </dl>
          <p class="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">AGEC Art. 13 · Decree 2022-748 · illustrative data</p>
        </div>
      </template>
    </PageHero>

    <!-- What we compute -->
    <section class="section-illustrated section-pad bg-white">
      <SectionBackground scene="materials" />
      <div class="wrap">
        <SectionHead :eyebrow="s.compute.eyebrow" :title="s.compute.title" :intro="s.compute.intro" class="mb-14" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            v-for="(item, i) in s.compute.items"
            :key="item.title"
            :icon="item.icon"
            personalized
            :title="item.title"
            :text="item.text"
            :delay="i * 80"
          />
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section-illustrated section-pad border-y border-line bg-bone">
      <SectionBackground scene="connection" />
      <div class="wrap">
        <SectionHead :eyebrow="s.how.eyebrow" :title="s.how.title" class="mb-14" />
        <ol class="grid gap-4 md:grid-cols-3">
          <li
            v-for="(step, i) in s.how.steps"
            :key="step.label"
            v-reveal="{ delay: i * 90 }"
            class="brut brut-lift relative flex min-h-[280px] flex-col p-7"
          >
            <div class="flex items-center justify-between">
              <span class="font-mono text-[12px] font-medium text-forest">0{{ i + 1 }}</span>
              <span class="border border-line bg-mint px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-forest">{{ step.label }}</span>
            </div>
            <h3 class="display mt-auto mb-3 text-[30px]">{{ step.title }}</h3>
            <p class="text-[15px] leading-relaxed text-muted">{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Regulations -->
    <section id="regulations" class="section-illustrated section-pad bg-ink text-white">
      <SectionBackground scene="verification" dark />
      <div class="wrap">
        <SectionHead :eyebrow="s.regulations.eyebrow" :title="s.regulations.title" :intro="s.regulations.intro" tone="white" class="mb-14" />
        <ol class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(r, i) in s.regulations.items"
            :key="r.code"
            v-reveal="{ delay: (i % 3) * 80 }"
            class="flex flex-col border border-white/15 bg-white/[0.04] p-7 transition hover:border-neon"
          >
            <div class="flex flex-wrap items-center justify-between gap-3">
              <span class="bg-neon px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink">{{ r.code }}</span>
              <span class="font-mono text-[10px] uppercase tracking-[0.08em] text-neon">{{ r.when }}</span>
            </div>
            <h3 class="mt-5 text-[17px] font-bold tracking-[-0.01em]">{{ r.name }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-white/70">{{ r.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Why it matters -->
    <section class="section-illustrated section-pad bg-white">
      <SectionBackground scene="shipping" />
      <div class="wrap">
        <SectionHead :eyebrow="s.why.eyebrow" :title="s.why.title" class="mb-14" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(st, i) in s.why.stats"
            :key="st.value"
            v-reveal="{ delay: i * 80 }"
            class="brut brut-lift flex flex-col p-6"
          >
            <b class="font-serif text-[40px] leading-none font-normal text-forest">{{ st.value }}</b>
            <p class="mt-3 text-[14px] leading-snug text-ink">{{ st.label }}</p>
            <span class="mt-auto border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{{ st.source }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- Blockchain responsibly -->
    <section class="section-illustrated section-pad border-y border-line bg-bone">
      <SectionBackground scene="provenance" />
      <div class="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <SectionHead :eyebrow="s.chain.eyebrow" :title="s.chain.title" :intro="s.chain.text" align="left" size="md" />
        <ul v-reveal class="brut divide-y divide-line">
          <li v-for="p in s.chain.points" :key="p" class="flex items-start gap-3 px-6 py-4 text-[15px] text-body">
            <span class="mt-0.5 grid size-6 shrink-0 place-items-center bg-mint text-forest">
              <IconGlyph name="check" :size="14" />
            </span>
            {{ p }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Sources -->
    <section class="section-pad bg-white">
      <div class="wrap">
        <SectionHead eyebrow="Sources" title="Where these facts come from." size="md" class="mb-10" />
        <ol class="brut divide-y divide-line">
          <li
            v-for="(src, i) in s.sources"
            :key="src.url"
            class="grid gap-3 px-6 py-4 transition hover:bg-mint md:grid-cols-[40px_220px_1fr_auto] md:items-center"
          >
            <span class="font-mono text-[12px] text-muted">{{ String(i + 1).padStart(2, '0') }}</span>
            <PillTag tone="line">{{ src.org }}</PillTag>
            <span class="text-[14px] text-body">{{ src.title }}</span>
            <a
              :href="src.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-line bg-white px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] no-underline transition hover:bg-neon"
            >
              Source ↗
            </a>
          </li>
        </ol>
        <p class="mt-6 text-[12px] text-muted">
          Regulatory thresholds and dates reflect adopted French and EU texts as of September 2026; methods such as Ecobalyse are versioned and WidinX follows the published version.
        </p>
      </div>
    </section>

    <CtaSection eyebrow="Start with one product line" title="Ready to show your customers the" em="footprint?" text="Bring one product family and its bill of materials. We come back with a first carbon figure, an Ecoscore estimate and the AGEC sheet — on your real data." />
  </div>
</template>
