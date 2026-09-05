<script setup>
import { reactive, ref } from 'vue'
import { useLeadSubmit } from '@/composables/useLeadSubmit'
import { countryOptions, industryOptions, timelineOptions, useCaseOptions, demoPage } from '@/content/form'
import { site } from '@/config/site'
import FormField from './FormField.vue'
import ChipMultiSelect from './ChipMultiSelect.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import PrivacyContent from '@/components/legal/PrivacyContent.vue'

const { status, error, submit } = useLeadSubmit()

// Privacy policy opens in a dialog so the visitor returns to the filled form.
const privacyOpen = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  company: '',
  country: '',
  website: '',
  industry: '',
  useCases: [],
  timeline: '',
  message: '',
  demoRequested: true,
  consent: false,
  // honeypot — bots fill it, humans never see it
  website_url: '',
})

const errors = reactive({})
const FREE_MAIL = /@(gmail|yahoo|hotmail|outlook|icloud|proton|live|aol)\./i

function validate() {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (!form.firstName.trim()) errors.firstName = 'Please enter your first name.'
  if (!form.lastName.trim()) errors.lastName = 'Please enter your last name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.'
  else if (FREE_MAIL.test(form.email)) errors.email = 'Please use your work email so we can route your request.'
  if (!form.role.trim()) errors.role = 'Please tell us your role.'
  if (!form.company.trim()) errors.company = 'Please enter your company name.'
  if (!form.country) errors.country = 'Please select a country.'
  if (!form.consent) errors.consent = 'We need your consent to reply to you.'
  return Object.keys(errors).length === 0
}

const submitted = ref(false)

async function onSubmit() {
  if (form.website_url) return // honeypot tripped
  if (!validate()) return
  // eslint-disable-next-line no-unused-vars
  const { consent, website_url, ...fields } = form
  await submit(fields)
  if (status.value === 'sent') submitted.value = true
}
</script>

<template>
  <div class="brut p-6  sm:p-8">
    <div v-if="submitted" class="py-10 text-center" role="status">
      <span class="mx-auto grid size-12 place-items-center border border-line bg-neon text-ink">
        <IconGlyph name="check" />
      </span>
      <h3 class="display mt-5 text-[34px]">Thank you.</h3>
      <p class="mx-auto mt-3 max-w-[420px] text-body">
        Your request is on its way. One of the founders replies personally, usually within two business hours.
      </p>
      <BaseButton to="/platform" variant="ghost" class="mt-8">Explore the platform meanwhile</BaseButton>
    </div>

    <form v-else novalidate class="grid gap-5" @submit.prevent="onSubmit">
      <div class="-mx-6 -mt-6 mb-1 flex items-center justify-between border-b border-line bg-ink px-6 py-3 sm:-mx-8 sm:-mt-8 sm:px-8">
        <span class="eyebrow text-[10px] text-neon">Demo request</span>
        <span class="font-mono text-[10px] uppercase tracking-[0.1em] text-white/70">~2 min</span>
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <FormField id="firstName" v-model="form.firstName" label="First name" required autocomplete="given-name" :error="errors.firstName" />
        <FormField id="lastName" v-model="form.lastName" label="Last name" required autocomplete="family-name" :error="errors.lastName" />
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <FormField id="email" v-model="form.email" label="Work email" type="email" required autocomplete="email" placeholder="you@company.com" :error="errors.email" />
        <FormField id="role" v-model="form.role" label="Role" required autocomplete="organization-title" placeholder="Head of Compliance, CTO…" :error="errors.role" />
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <FormField id="company" v-model="form.company" label="Company" required autocomplete="organization" :error="errors.company" />
        <FormField id="country" v-model="form.country" label="Country" as="select" required :options="countryOptions" placeholder="Select a country" :error="errors.country" />
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <FormField id="website" v-model="form.website" label="Company website" type="url" placeholder="https://" autocomplete="url" />
        <FormField id="industry" v-model="form.industry" label="Industry" as="select" :options="industryOptions" placeholder="Select an industry" />
      </div>

      <ChipMultiSelect
        v-model="form.useCases"
        label="What brings you here?"
        :options="useCaseOptions"
        hint="Pick as many as apply — it routes you to the right demo."
      />

      <FormField id="timeline" v-model="form.timeline" label="Timeline" as="select" :options="timelineOptions" placeholder="When do you need this?" />
      <FormField
        id="message"
        v-model="form.message"
        label="What problem are you trying to solve?"
        as="textarea"
        placeholder="Products, markets, deadline, systems in place…"
      />

      <!-- honeypot -->
      <div class="hidden" aria-hidden="true">
        <label for="website_url">Leave this empty</label>
        <input id="website_url" v-model="form.website_url" type="text" tabindex="-1" autocomplete="off" />
      </div>

      <label class="flex items-start gap-3 text-[14px] text-body">
        <input v-model="form.demoRequested" type="checkbox" class="brut-check mt-0.5" />
        <span>I’d like a live demo (30 min).</span>
      </label>
      <label class="flex items-start gap-3 text-[14px] text-body">
        <input v-model="form.consent" type="checkbox" class="brut-check mt-0.5" required />
        <span>
          I agree to be contacted about my request and to the
          <button
            type="button"
            class="font-bold text-forest underline decoration-2 underline-offset-2 hover:text-ink"
            @click="privacyOpen = true"
          >
            privacy policy
          </button>.
          <span class="ml-1 inline-block size-1.5 bg-clay align-middle" aria-label="required" />
        </span>
      </label>
      <p v-if="errors.consent" class="-mt-3 font-mono text-[11px] text-clay">{{ errors.consent }}</p>

      <div class="mt-2 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <BaseButton type="submit" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Send request →' }}
        </BaseButton>
        <p class="max-w-[320px] text-[12px] text-muted">{{ demoPage.privacyNote }}</p>
      </div>
      <p v-if="status === 'error'" class="border border-clay bg-white px-4 py-3 text-[13px] text-clay" role="alert">
        We couldn’t send your request ({{ error }}). Please email us directly at
        <a :href="`mailto:${site.contactEmail}`" class="underline">{{ site.contactEmail }}</a>.
      </p>
    </form>

    <BaseModal :open="privacyOpen" title="Privacy policy" @close="privacyOpen = false">
      <PrivacyContent compact />
    </BaseModal>
  </div>
</template>
