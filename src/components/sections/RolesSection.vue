<script setup>
import SectionBackground from '@/components/ui/SectionBackground.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
import { roles } from '@/content/sectors'
</script>

<template>
  <section class="section-illustrated section-pad border-t border-line bg-bone">
    <SectionBackground scene="connection" />
    <div class="wrap">
      <SectionHead eyebrow="Where do you start?" title="Three ways in," em="one product record." class="mb-12" />
      <div class="grid gap-4 lg:grid-cols-3">
        <article
          v-for="(r, i) in roles"
          :id="r.id"
          :key="r.id"
          v-reveal="{ delay: i * 90 }"
          class="flex flex-col border border-line bg-pale p-7 transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-stamp)]"
        >
          <span class="grid size-11 place-items-center border border-line bg-mint/60 text-forest"><IconGlyph :name="r.icon" /></span>
          <h3 class="mt-5 font-display text-[22px] leading-tight font-semibold">{{ r.title }}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-body">{{ r.lead }}</p>
          <ul class="mt-5 space-y-2.5 border-t border-line pt-5">
            <li v-for="p in r.points" :key="p" class="flex gap-2.5 text-[14px] leading-relaxed text-muted">
              <IconGlyph name="check" :size="16" class="mt-0.5 shrink-0 text-emerald" /> {{ p }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
