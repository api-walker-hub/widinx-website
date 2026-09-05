<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { nav } from '@/config/site'
import BrandLogo from './BrandLogo.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-line bg-bone/95 backdrop-blur-xl">
    <div class="wrap grid h-[76px] grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_auto] md:gap-12">
      <BrandLogo class="md:order-1" />

      <nav class="hidden md:order-2 md:block" aria-label="Primary">
        <ul class="flex gap-[26px]">
          <li v-for="item in nav" :key="item.to">
            <RouterLink
              :to="item.to"
              class="group relative font-sans text-[13px] tracking-[0.01em] text-ink no-underline"
              active-class="is-active"
            >
              {{ item.label }}
              <span
                class="absolute -bottom-1.5 left-0 h-[3px] w-0 bg-neon  transition-all duration-200 group-hover:w-full group-[.is-active]:w-full"
              />
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-3 justify-self-end md:order-3">
        <BaseButton to="/demo" size="sm" class="hidden sm:inline-flex">Book a demo</BaseButton>
        <button
          type="button"
          class="grid size-10 place-items-center border border-line bg-white  active:translate-x-0.5 active:translate-y-0.5 active:shadow-none md:hidden"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <IconGlyph :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <div v-if="open" id="mobile-nav" class="border-t border-line bg-white md:hidden">
        <nav class="wrap flex flex-col py-4" aria-label="Mobile">
          <RouterLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="border-b border-ink/10 px-1 py-3.5 font-mono text-[14px] uppercase tracking-[0.12em] no-underline hover:bg-mint"
            active-class="text-forest"
          >
            {{ item.label }}
          </RouterLink>
          <BaseButton to="/demo" class="mt-5">Book a demo</BaseButton>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
