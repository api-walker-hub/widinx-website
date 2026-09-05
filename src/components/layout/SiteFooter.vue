<script setup>
import { footerNav, site } from '@/config/site'
import BrandLogo from './BrandLogo.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line bg-ink text-white grid-paper-dark">
    <div class="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div>
        <BrandLogo :size="30" tone="white" />
        <p class="mt-5 max-w-[320px] text-[14px] leading-relaxed text-white/70">
          {{ site.tagline }} Digital product passports, traceability and regulation management for brands that sell in Europe.
        </p>
        <a
          :href="`mailto:${site.contactEmail}`"
          class="mt-5 inline-block border-b border-neon font-mono text-[12px] uppercase tracking-[0.12em] text-neon no-underline hover:text-white"
        >
          {{ site.contactEmail }}
        </a>
      </div>

      <div v-for="group in footerNav" :key="group.title">
        <h3 class="eyebrow text-[11px] text-neon">{{ group.title }}</h3>
        <ul class="mt-4 space-y-2.5">
          <li v-for="link in group.links" :key="link.label">
            <RouterLink :to="link.to" class="text-[14px] text-white/80 no-underline hover:text-neon">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/20">
      <div class="wrap flex flex-col gap-3 py-6 font-mono text-[10px] uppercase tracking-[0.08em] text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <span>© {{ year }} {{ site.name }}</span>
        <span>Built in Europe · EU data residency available</span>
      </div>
    </div>
  </footer>
</template>
