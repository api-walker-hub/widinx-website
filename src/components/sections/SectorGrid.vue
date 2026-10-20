<script setup>
import { computed } from 'vue'
import SectionBackground from '@/components/ui/SectionBackground.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
import { sectors } from '@/content/sectors'
import { findPassport, digitalLinkPath } from '@/content/passports'

const props = defineProps({
  limit: { type: Number, default: 0 },
  title: { type: String, default: 'Pick your sector.' },
})
const list = computed(() => (props.limit ? sectors.slice(0, props.limit) : sectors))
const exampleLink = (s) => (s.example ? digitalLinkPath(findPassport(s.example)) : null)
</script>

<template>
  <section class="section-illustrated section-pad bg-white">
    <SectionBackground scene="materials" />
    <div class="wrap">
      <SectionHead
        eyebrow="Sector templates"
        :title="title"
        em="The fields are already there."
        intro="Each template carries the 19 core passport fields plus what the sector’s rules ask for. Textiles is open in the console today; the other templates are opened with each pilot."
        class="mb-12"
      />
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(s, i) in list"
          :id="s.id"
          :key="s.id"
          v-reveal="{ delay: (i % 3) * 60 }"
          class="flex flex-col border border-line bg-pale p-5"
        >
          <div class="flex items-start justify-between gap-3">
            <span class="grid size-10 place-items-center border border-line bg-mint/60 text-forest"><IconGlyph :name="s.icon" :size="20" /></span>
            <span
              class="badge"
              :class="s.status === 'live' ? 'border-emerald/35 bg-emerald/[0.08] text-emerald' : 'border-line bg-mint/60 text-muted'"
            >{{ s.status === 'live' ? 'Live in the console' : 'Template · pilot' }}</span>
          </div>
          <h3 class="mt-4 font-display text-[18px] font-semibold">{{ s.name }}</h3>
          <p class="mt-0.5 font-mono text-[11px] text-emerald">{{ s.regulation }}</p>
          <p class="mt-3 text-[14px] leading-relaxed text-muted">{{ s.text }}</p>
          <RouterLink v-if="exampleLink(s)" :to="exampleLink(s)" class="mt-auto pt-4 text-[13px] font-medium text-forest">See an example passport →</RouterLink>
        </article>
      </div>
      <div v-if="limit" class="mt-8 text-center">
        <RouterLink to="/sectors" class="text-[14px] font-medium text-forest">All {{ sectors.length }} sector templates →</RouterLink>
      </div>
    </div>
  </section>
</template>
