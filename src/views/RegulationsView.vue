<script setup>
import PageHero from '@/components/ui/PageHero.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import TimelineSection from '@/components/sections/TimelineSection.vue'
import SectionBackground from '@/components/ui/SectionBackground.vue'
import SectionHead from '@/components/ui/SectionHead.vue'
import CtaSection from '@/components/sections/CtaSection.vue'

const faq = [
  {
    q: 'What is a Digital Product Passport?',
    a: 'A structured record about a product — composition, origin, substances, repair, end of life, compliance — reachable from a code on the product. The Ecodesign for Sustainable Products Regulation (ESPR) makes it mandatory group by group.',
  },
  {
    q: 'Who has to publish it?',
    a: 'The economic operator placing the product on the EU market: the manufacturer, the importer, or an authorised representative for a producer based outside the EU.',
  },
  {
    q: 'Model, batch or item?',
    a: 'Each delegated act sets the grain. Batteries need one passport per unit; many textiles will be per model or batch. WidinX supports all three and lets the regulation decide.',
  },
  {
    q: 'What has to be on the product?',
    a: 'A data carrier — usually a QR code or DataMatrix following GS1 Digital Link — that resolves to the passport. The data behind it can change; the code does not.',
  },
  {
    q: 'Who can see what?',
    a: 'Consumers see the public part. Business partners, recyclers and market surveillance authorities get the extra data the regulation reserves for them.',
  },
]
</script>

<template>
  <div>
    <PageHero
      scene="registry"
      eyebrow="Regulations"
      title="What applies,"
      em="and when."
      lead="The EU is rolling out Digital Product Passports one product group at a time. Some obligations already apply; most sectors get theirs between 2027 and 2030. Here is the calendar we track for our customers."
    >
      <template #actions>
        <div class="mt-8 flex flex-wrap gap-3">
          <BaseButton to="/demo">Check your deadline with us →</BaseButton>
          <BaseButton to="/sectors" variant="ghost">Sector templates</BaseButton>
        </div>
      </template>
    </PageHero>
    <TimelineSection :more="false" />
    <section class="section-illustrated section-pad border-t border-line bg-bone">
      <SectionBackground scene="circularity" />
      <div class="wrap">
        <SectionHead eyebrow="The basics" title="Five questions we hear" em="every week." class="mb-12" />
        <dl class="mx-auto grid max-w-[900px] gap-3">
          <div v-for="item in faq" :key="item.q" v-reveal class="border border-line bg-pale p-6">
            <dt class="font-display text-[18px] font-semibold">{{ item.q }}</dt>
            <dd class="mt-2 text-[15px] leading-relaxed text-body">{{ item.a }}</dd>
          </div>
        </dl>
      </div>
    </section>
    <CtaSection />
  </div>
</template>
