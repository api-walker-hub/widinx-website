/**
 * v-reveal — fade/slide an element in the first time it enters the viewport.
 * Usage: <div v-reveal> or <div v-reveal="{ delay: 120 }">
 */
let observer

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target
        const delay = Number(el.dataset.revealDelay || 0)
        if (delay) el.style.transitionDelay = `${delay}ms`
        el.classList.add('is-in')
        observer.unobserve(el)
      }
    },
    { threshold: 0.1, rootMargin: '70px 0px' },
  )
  return observer
}

export const reveal = {
  mounted(el, binding) {
    if (typeof IntersectionObserver === 'undefined') return
    el.classList.add('reveal')
    if (binding.value?.delay) el.dataset.revealDelay = String(binding.value.delay)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
