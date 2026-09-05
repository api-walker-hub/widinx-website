<script setup>
import { onMounted } from 'vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import { captureAttribution } from '@/composables/useUtm'

onMounted(captureAttribution)
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-none focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
  >
    Skip to content
  </a>
  <SiteHeader />
  <main id="main">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <SiteFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.18s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
