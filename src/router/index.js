import { createRouter, createWebHistory } from 'vue-router'
import { site } from '@/config/site'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Digital Product Passports' },
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import('@/views/PlatformView.vue'),
    meta: { title: 'Platform' },
  },
  {
    path: '/sectors',
    name: 'sectors',
    component: () => import('@/views/SectorsView.vue'),
    meta: { title: 'Sector templates' },
  },
  { path: '/solutions', redirect: '/sectors' },
  { path: '/sustainability', redirect: '/sectors' },
  { path: '/ecology', redirect: '/sectors' },
  {
    path: '/regulations',
    name: 'regulations',
    component: () => import('@/views/RegulationsView.vue'),
    meta: { title: 'Regulations timeline' },
  },
  {
    path: '/passports',
    name: 'passports',
    component: () => import('@/views/PassportsView.vue'),
    meta: { title: 'Live passports' },
  },
  {
    path: '/passports/:slug',
    name: 'passport',
    component: () => import('@/views/PassportView.vue'),
    meta: { title: 'Digital product passport', bare: true },
  },
  {
    // GS1 Digital Link: /01/{gtin}[/10/{lot}][/21/{serial}] — what the QR code on the product opens.
    path: '/01/:gtin/:rest(.*)*',
    name: 'digital-link',
    component: () => import('@/views/PassportView.vue'),
    meta: { title: 'Digital product passport', bare: true },
  },
  {
    path: '/trust',
    name: 'trust',
    component: () => import('@/views/TrustView.vue'),
    meta: { title: 'Trust Center' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About' },
  },
  { path: '/company', redirect: '/about' },
  {
    path: '/careers',
    name: 'careers',
    component: () => import('@/views/CareersView.vue'),
    meta: { title: 'Careers' },
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/DemoView.vue'),
    meta: { title: 'Book a demo' },
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue'),
    meta: { title: 'Privacy policy' },
  },
  {
    path: '/legal',
    name: 'legal',
    component: () => import('@/views/LegalView.vue'),
    meta: { title: 'Legal notice' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Page not found' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta?.title
  document.title = title ? `${site.name} — ${title}` : site.name
})

export default router
