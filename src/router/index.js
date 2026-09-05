import { createRouter, createWebHistory } from 'vue-router'
import { site } from '@/config/site'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Every product. Every step. Verified.' },
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import('@/views/PlatformView.vue'),
    meta: { title: 'Platform' },
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('@/views/SolutionsView.vue'),
    meta: { title: 'Solutions' },
  },
  {
    path: '/sustainability',
    name: 'sustainability',
    component: () => import('@/views/SustainabilityView.vue'),
    meta: { title: 'Ecology & impact' },
  },
  { path: '/ecology', redirect: '/sustainability' },
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
