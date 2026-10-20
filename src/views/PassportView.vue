<script setup>
/**
 * Public passport page, laid out like the WidinX app's public passport
 * (pages/p/[id].vue): narrow column, identity + QR, badges, audience switch,
 * folding sections, proof of signature. Opened by GS1 Digital Link paths
 * (/01/{gtin}/10/{lot}/21/{serial}) or by /passports/{slug}.
 */
import { computed, ref, watch, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import BrandLogo from '@/components/layout/BrandLogo.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
import QrCode from '@/components/ui/QrCode.vue'
import { audiences, digitalLinkPath, findByGtin, findPassport, passportLocales, passports } from '@/content/passports'

const route = useRoute()

const passport = computed(() => {
  if (route.params.slug) return findPassport(route.params.slug)
  const code = String(route.params.gtin || '').padStart(14, '0')
  return findByGtin(code)
})

/** Batch / serial read from the Digital Link, so a scanned unit shows its own identifiers. */
const linkParts = computed(() => {
  const rest = [].concat(route.params.rest || [])
  const parts = {}
  for (let i = 0; i + 1 < rest.length; i += 2) parts[rest[i]] = rest[i + 1]
  return parts
})
const batch = computed(() => linkParts.value['10'] || passport.value?.batch)
const serial = computed(() => linkParts.value['21'] || passport.value?.serial)

const origin = typeof window !== 'undefined' ? window.location.origin : 'https://widinx.com'
const link = computed(() => (passport.value ? origin + digitalLinkPath(passport.value) : ''))

const identifierLine = computed(() => {
  const p = passport.value
  if (!p) return ''
  let line = `GTIN ${p.gtin}`
  if (p.grain !== 'model' && batch.value) line += ` · Lot ${batch.value}`
  if (p.grain === 'serial' && serial.value) line += ` · Serial ${serial.value}`
  return line
})
const grainLabel = computed(
  () => ({ model: 'Model-level passport', batch: 'Batch-level passport', serial: 'Item-level passport' })[passport.value?.grain],
)

// Variant picker (photo + label), defaults to the first variant.
const variantIndex = ref(0)
watch(passport, () => (variantIndex.value = 0))
const image = computed(() => passport.value?.variants?.[variantIndex.value]?.image || passport.value?.image)
const size = ref('M')

// Audience switch: consumers see public sections; other audiences add their own.
const audience = ref('public')
const visibleSections = computed(() =>
  (passport.value?.sections || []).filter((s) => s.audience === 'public' || s.audience === audience.value),
)
const audienceNote = computed(
  () =>
    ({
      public: 'You see what the producer publishes for everyone who scans the code.',
      b2b: 'Business partners also see supply-chain data. In WidinX this view opens after sign-in — shown openly here because this is a demo.',
      recycler: 'Recyclers also see dismantling and material data. In WidinX this view opens after sign-in — shown openly here because this is a demo.',
      authority: 'Market surveillance authorities also see compliance data. In WidinX this view opens after sign-in — shown openly here because this is a demo.',
    })[audience.value],
)

// First two sections open, plus whatever the chosen audience adds.
const defaultOpen = () =>
  new Set(visibleSections.value.flatMap((s, i) => (i < 2 || s.audience !== 'public' ? [i] : [])))
const open = ref(defaultOpen())
watch([passport, audience], () => (open.value = defaultOpen()))
function toggle(i) {
  const next = new Set(open.value)
  next.has(i) ? next.delete(i) : next.add(i)
  open.value = next
}

// Proof block: a real SHA-256 of the passport content, computed in the browser.
const contentHash = ref('')
watchEffect(async () => {
  const p = passport.value
  if (!p || !globalThis.crypto?.subtle) return
  const data = new TextEncoder().encode(JSON.stringify(p))
  const digest = await crypto.subtle.digest('SHA-256', data)
  contentHash.value = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
})
const issuerDid = computed(() => `did:web:${passport.value?.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.example`)

const copied = ref(false)
async function copyLink() {
  try {
    await navigator.clipboard.writeText(link.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {
    /* clipboard blocked: the link is shown under the QR anyway */
  }
}

const others = computed(() => passports.filter((p) => p !== passport.value).slice(0, 4))

watchEffect(() => {
  if (passport.value) document.title = `${passport.value.brand} ${passport.value.name} — Digital Product Passport`
})
</script>

<template>
  <div class="passport-page min-h-screen bg-bone text-ink">
    <!-- Demo banner -->
    <div class="border-b border-ochre/30 bg-[#fbf5e8] text-[12px] text-[#7a5408]">
      <div class="mx-auto flex max-w-2xl items-center justify-between gap-3 px-4 py-2">
        <span><strong>Demonstration passport.</strong> Fictional brand and data, built to show what WidinX publishes.</span>
        <RouterLink to="/passports" class="shrink-0 font-semibold text-[#7a5408] underline underline-offset-2">All passports</RouterLink>
      </div>
    </div>

    <header class="sticky top-0 z-20 border-b border-line bg-bone/90 backdrop-blur">
      <div class="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
        <div class="flex items-center gap-3">
          <BrandLogo :size="20" />
          <span class="hidden border-l border-line pl-3 text-[10px] font-semibold tracking-[0.2em] text-muted uppercase sm:inline">Digital product passport</span>
        </div>
        <div class="flex items-center gap-1" aria-label="Published languages">
          <span
            v-for="(l, i) in passportLocales.slice(0, 4)"
            :key="l"
            class="badge"
            :class="i === 0 ? 'border-forest/35 bg-forest/[0.08] text-forest' : 'border-line text-muted'"
          >{{ l }}</span>
          <span class="badge border-line text-muted">+{{ passportLocales.length - 4 }}</span>
        </div>
      </div>
    </header>

    <main v-if="passport" class="mx-auto max-w-2xl px-4 pb-16">
      <!-- Hero -->
      <section class="pt-6 pb-5">
        <div class="relative overflow-hidden border border-line bg-white">
          <img :src="image" :alt="passport.name" class="mx-auto h-72 w-full object-contain p-4 sm:h-80" />
        </div>

        <div v-if="passport.variants?.length > 1 || passport.sizes" class="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div v-if="passport.variants?.length > 1" class="flex items-center gap-2">
            <span class="section-label text-muted">Colour</span>
            <button
              v-for="(v, i) in passport.variants"
              :key="v.label"
              type="button"
              class="size-7 border-2 transition"
              :class="i === variantIndex ? 'border-ink' : 'border-transparent ring-1 ring-line'"
              :style="{ background: v.swatch }"
              :aria-label="v.label"
              :aria-pressed="i === variantIndex"
              @click="variantIndex = i"
            />
            <span class="text-[13px] text-body">{{ passport.variants[variantIndex].label }}</span>
          </div>
          <div v-if="passport.sizes" class="flex items-center gap-1.5">
            <span class="section-label mr-1 text-muted">Size</span>
            <button
              v-for="s in passport.sizes"
              :key="s"
              type="button"
              class="min-w-8 border px-1.5 py-0.5 text-[12px] font-medium"
              :class="s === size ? 'border-ink bg-ink text-white' : 'border-line bg-pale text-body hover:border-ink'"
              :aria-pressed="s === size"
              @click="size = s"
            >{{ s }}</button>
          </div>
        </div>

        <div class="mt-5 flex items-start justify-between gap-4">
          <div class="min-w-0">
            <p class="text-[12px] tracking-[0.18em] text-muted uppercase">{{ passport.brand }} · {{ passport.sectorLabel }}</p>
            <h1 class="mt-1 font-display text-[26px] leading-tight font-semibold tracking-tight sm:text-[30px]">{{ passport.name }}</h1>
            <p class="mt-1.5 font-mono text-[12px] break-all text-body">{{ identifierLine }}</p>
            <p class="mt-0.5 text-[12px] text-muted">Model {{ passport.model }} · {{ grainLabel }}</p>
          </div>
          <div class="flex shrink-0 flex-col items-center gap-1.5">
            <div class="border border-line bg-white p-1">
              <QrCode :value="link" :size="80" :label="`QR code that opens this passport`" />
            </div>
            <button type="button" class="flex items-center gap-1 text-[11px] font-medium text-forest hover:underline" @click="copyLink">
              <IconGlyph name="copy" :size="12" /> {{ copied ? 'Copied' : 'Copy link' }}
            </button>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap gap-1.5">
          <span class="badge border-forest/35 bg-forest/[0.08] text-forest"><IconGlyph name="shield" :size="12" /> Signed</span>
          <span class="badge border-emerald/35 bg-emerald/[0.08] text-emerald">● Version {{ passport.version.n }} · current</span>
          <span class="badge border-line bg-mint/60 text-body normal-case tracking-normal">{{ passport.regulation }}</span>
        </div>

        <p class="mt-3 text-[12px] leading-relaxed text-muted">
          Issued {{ passport.version.validFrom }}. The code on the product always opens the current version of this
          passport; earlier versions stay on record.
        </p>

        <!-- Highlights -->
        <div class="mt-5 grid grid-cols-3 gap-2">
          <div v-for="h in passport.highlights" :key="h.label" class="border border-line bg-pale p-3">
            <div class="font-display text-[18px] leading-tight font-bold text-forest sm:text-[22px]">{{ h.value }}</div>
            <div class="mt-1 text-[11.5px] leading-snug text-muted">{{ h.label }}</div>
          </div>
        </div>
      </section>

      <!-- Audience -->
      <section class="mb-3 border border-line bg-pale p-4">
        <p class="section-label text-muted">Who is looking?</p>
        <div class="mt-2.5 grid grid-cols-2 gap-1.5 sm:grid-cols-4" role="radiogroup" aria-label="Audience">
          <button
            v-for="a in audiences"
            :key="a.key"
            type="button"
            role="radio"
            :aria-checked="audience === a.key"
            class="border px-2 py-2 text-[13px] font-medium transition"
            :class="audience === a.key ? 'border-ink bg-forest text-white shadow-[var(--shadow-stamp-sm)]' : 'border-line bg-white text-body hover:border-ink'"
            @click="audience = a.key"
          >{{ a.label }}</button>
        </div>
        <p class="mt-2.5 text-[12px] leading-relaxed text-muted">{{ audienceNote }}</p>
      </section>

      <!-- Sections -->
      <div class="space-y-2.5">
        <section v-for="(s, i) in visibleSections" :key="s.title" class="overflow-hidden border border-line bg-pale">
          <button type="button" class="flex w-full items-center gap-3 px-4 py-3.5 text-left" :aria-expanded="open.has(i)" @click="toggle(i)">
            <span class="grid size-8 shrink-0 place-items-center border border-line bg-mint/60 text-forest">
              <IconGlyph :name="s.audience === 'recycler' ? 'recycle' : s.audience === 'authority' ? 'scale' : s.audience === 'b2b' ? 'route' : 'info'" :size="16" />
            </span>
            <span class="min-w-0 flex-1">
              <span class="block text-[14px] font-medium">{{ s.title }}</span>
              <span class="block truncate text-[12px] text-muted">
                {{ s.audience === 'public' ? 'Public' : audiences.find((a) => a.key === s.audience).label + ' view' }} · {{ s.rows.length }} fields
              </span>
            </span>
            <IconGlyph name="chevron" :size="16" class="shrink-0 transition-transform" :class="open.has(i) ? '' : '-rotate-90'" />
          </button>
          <div v-show="open.has(i)" class="border-t border-line px-4 pt-1 pb-3">
            <dl class="divide-y divide-line">
              <div v-for="[k, v] in s.rows" :key="k" class="flex justify-between gap-6 py-2.5">
                <dt class="shrink-0 text-[13px] text-muted">{{ k }}</dt>
                <dd class="text-right text-[13px] font-medium">{{ v }}</dd>
              </div>
            </dl>
          </div>
        </section>

        <!-- Claims & evidence -->
        <section class="border border-line bg-pale px-4 py-3.5">
          <h2 class="flex items-center gap-2 text-[14px] font-medium"><IconGlyph name="check" :size="16" class="text-forest" /> Claims &amp; evidence</h2>
          <ul class="mt-2 divide-y divide-line">
            <li v-for="c in passport.claims" :key="c.claim" class="flex items-start justify-between gap-4 py-2.5">
              <div>
                <p class="text-[13px] font-medium">{{ c.claim }}</p>
                <p class="text-[12px] text-muted">{{ c.issuer }}</p>
              </div>
              <span
                class="badge shrink-0"
                :class="c.status === 'verified' ? 'border-emerald/35 bg-emerald/[0.08] text-emerald' : 'border-line bg-mint/60 text-muted'"
              >{{ c.status === 'verified' ? 'Evidence attached' : 'Self-declared' }}</span>
            </li>
          </ul>
        </section>

        <!-- Documents -->
        <section class="border border-line bg-pale px-4 py-3.5">
          <h2 class="flex items-center gap-2 text-[14px] font-medium"><IconGlyph name="file" :size="16" class="text-forest" /> Documents</h2>
          <ul class="mt-2 divide-y divide-line">
            <li v-for="d in passport.documents" :key="d" class="flex items-center justify-between gap-4 py-2.5 text-[13px]">
              {{ d }} <span class="badge border-line text-muted">PDF</span>
            </li>
          </ul>
        </section>

        <!-- Lifecycle -->
        <section class="border border-line bg-pale px-4 py-3.5">
          <h2 class="flex items-center gap-2 text-[14px] font-medium"><IconGlyph name="clock" :size="16" class="text-forest" /> Lifecycle</h2>
          <ol class="mt-3 ml-1 space-y-3 border-l border-line pl-4">
            <li v-for="e in passport.events" :key="e.date + e.label" class="relative">
              <span class="absolute top-1.5 -left-[21px] size-2 bg-forest" />
              <p class="font-mono text-[11px] text-muted">{{ e.date }}</p>
              <p class="text-[13px]">{{ e.label }}</p>
            </li>
          </ol>
        </section>

        <!-- Proof -->
        <section id="proof" class="border border-line bg-pale px-4 py-3.5">
          <h2 class="flex items-center gap-2 text-[14px] font-medium"><IconGlyph name="shield" :size="16" class="text-forest" /> Proof of signature</h2>
          <dl class="mt-2 divide-y divide-line text-[13px]">
            <div class="flex justify-between gap-6 py-2"><dt class="text-muted">Issuer</dt><dd class="font-mono text-[12px] break-all">{{ issuerDid }}</dd></div>
            <div class="flex justify-between gap-6 py-2"><dt class="text-muted">Signing key</dt><dd class="font-mono text-[12px]">key-1 · Ed25519</dd></div>
            <div class="flex justify-between gap-6 py-2"><dt class="text-muted">Format</dt><dd class="text-right">W3C Verifiable Credential · JSON-LD</dd></div>
            <div class="flex justify-between gap-6 py-2"><dt class="text-muted">Signed</dt><dd>{{ passport.version.validFrom }}</dd></div>
            <div class="py-2">
              <dt class="text-muted">Content hash (SHA-256)</dt>
              <dd class="mt-1 font-mono text-[11px] break-all text-body">{{ contentHash || '…' }}</dd>
            </div>
          </dl>
          <p class="mt-2 text-[12px] leading-relaxed text-muted">
            Real WidinX passports are signed with the producer's published key. This demo shows the layout of that proof;
            it is not signed with a production key.
          </p>
        </section>
      </div>

      <!-- Make your own -->
      <section class="mt-8 border border-ink bg-forest p-5 text-white shadow-[var(--shadow-stamp)]">
        <p class="section-label text-neon">Your product could be next</p>
        <p class="mt-2 font-display text-[20px] leading-snug font-semibold">Publish passports like this one, behind a code that never needs reprinting.</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <RouterLink to="/demo" class="border border-white bg-white px-4 py-2 text-[13px] font-medium text-ink no-underline hover:bg-neon">Book a demo</RouterLink>
          <RouterLink to="/passports" class="border border-white/50 px-4 py-2 text-[13px] font-medium text-white no-underline hover:border-white">See all passports</RouterLink>
        </div>
      </section>

      <!-- Other passports -->
      <section class="mt-8">
        <p class="section-label text-muted">Other demo passports</p>
        <div class="mt-3 grid gap-2 sm:grid-cols-2">
          <RouterLink
            v-for="o in others"
            :key="o.slug"
            :to="digitalLinkPath(o)"
            class="flex items-center gap-3 border border-line bg-pale p-2.5 no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-stamp-sm)]"
          >
            <img :src="o.image" alt="" class="size-12 shrink-0 border border-line bg-white object-contain p-1" />
            <span class="min-w-0">
              <span class="block truncate text-[13px] font-medium text-ink">{{ o.name }}</span>
              <span class="block text-[12px] text-muted">{{ o.brand }} · {{ o.sectorLabel }}</span>
            </span>
          </RouterLink>
        </div>
      </section>

      <footer class="mt-10 flex flex-col gap-2 border-t border-line pt-5 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span class="font-mono break-all">{{ link }}</span>
        <span class="flex items-center gap-2">Published with <BrandLogo :size="14" /></span>
      </footer>
    </main>

    <!-- Unknown code -->
    <main v-else class="mx-auto max-w-2xl px-4 py-20 text-center">
      <p class="section-label text-muted">GS1 Digital Link</p>
      <h1 class="mt-2 font-display text-[26px] font-semibold">No passport is published for this code.</h1>
      <p class="mt-3 text-[14px] text-muted">The link was read, but no WidinX demo passport carries this GTIN.</p>
      <RouterLink to="/passports" class="mt-6 inline-block border border-ink bg-forest px-4 py-2 text-[13px] font-medium text-white no-underline">See the live passports</RouterLink>
    </main>
  </div>
</template>

<style scoped>
.passport-page {
  font-size: 14px;
  letter-spacing: -0.006em;
}
</style>
