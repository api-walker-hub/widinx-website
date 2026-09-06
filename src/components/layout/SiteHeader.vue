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
  <header class="sticky top-0 z-30 border-b border-line bg-bone">
    <div class="wrap grid h-[76px] grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_auto] lg:gap-6 xl:gap-12">
      <BrandLogo class="lg:order-1" />

      <nav class="hidden lg:order-2 lg:block" aria-label="Primary">
        <ul class="flex items-center gap-1 xl:gap-2">
          <li v-for="item in nav" :key="item.to">
            <RouterLink
              :to="item.to"
              class="group relative inline-flex min-h-11 items-center px-3 font-sans text-[15px] font-semibold tracking-[0.01em] whitespace-nowrap text-ink no-underline transition-colors hover:bg-mint focus-visible:bg-mint [&.is-active]:bg-mint"
              active-class="is-active"
            >
              {{ item.label }}
              <span
                class="absolute right-3 bottom-1 left-3 h-[3px] origin-left scale-x-0 bg-forest transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 group-[.is-active]:scale-x-100"
              />
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-3 justify-self-end lg:order-3">
        <BaseButton to="/demo" size="sm" class="hidden sm:inline-flex">Book a demo</BaseButton>
        <button
          type="button"
          class="grid size-10 place-items-center border border-line bg-white  active:translate-x-0.5 active:translate-y-0.5 active:shadow-none lg:hidden"
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
      <div v-if="open" id="mobile-nav" class="border-t border-line bg-white lg:hidden">
        <nav class="wrap flex flex-col py-4" aria-label="Mobile">
          <RouterLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="border-b border-ink/10 px-1 py-3.5 font-mono text-[15px] font-semibold uppercase tracking-[0.12em] no-underline hover:bg-mint"
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
