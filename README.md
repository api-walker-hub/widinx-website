# WidinX website

Marketing site for **WidinX** — digital product passports, end-to-end traceability and regulation management.

Vue 3 · Vite · Tailwind CSS v4 · vue-router. No backend: the demo form posts to whatever endpoint you configure.

## Run

```bash
npm install
npm run dev        # http://localhost:5180
npm run build      # static output in dist/
npm run preview
```

## Configure

Copy `.env.example` to `.env.local`. The demo form picks its transport in this order:

1. `VITE_LEAD_ENDPOINT` — any JSON endpoint. By default this is the bundled lead relay below.
2. `VITE_HUBSPOT_PORTAL_ID` + `VITE_HUBSPOT_FORM_GUID` — HubSpot Forms API v3 (public endpoint, no secret in the browser).
3. Nothing set — opens a prefilled email to the contact address.

## HubSpot lead relay (`server/index.js`)

A small Express server turns each demo request into HubSpot records using a **private-app token that stays server-side** (`HUBSPOT_PRIVATE_APP_TOKEN`, never prefixed with `VITE_`). For every submission it:

1. creates or updates the **contact** by email (name, job title, company, country, website, lead status `NEW`, lifecycle `lead`, and a `message` note with use cases, timeline and UTM attribution);
2. creates the **company** by domain if missing and associates it;
3. tries to create a **Lead** object and skips it quietly when the portal does not expose that object.

Run it next to Vite in development:

```bash
npm run dev:api     # http://localhost:8787 (reads .env.local)
npm run dev         # http://localhost:5180, posts to VITE_LEAD_ENDPOINT
```

In production, `npm run build` then `npm start`: the same server serves `dist/` with an SPA fallback and the API on `/api/leads` (see `.env.production`). Deploy it as a Node service (DigitalOcean App Platform, Render, Fly…) with `HUBSPOT_PRIVATE_APP_TOKEN` set as a secret. Required token scopes: `crm.objects.contacts.read/write`, `crm.objects.companies.read/write` (leads scopes optional). NA2 portals must set `HUBSPOT_API_BASE=https://api-na2.hubapi.com`.

Every submission carries UTM parameters, referrer and landing page captured on first visit (`src/composables/useUtm.js`).

## Structure

```
src/
  assets/css/main.css     Tailwind import, design tokens (@theme), base styles, utilities
  config/site.js          Name, emails, nav, lead transport (reads Vite env vars)
  content/*.js            All page copy as data — edit words here, not in components
  composables/            v-reveal directive, UTM capture, lead submission
  components/
    layout/               Header, footer, announcement bar, logo
    ui/                   Buttons, section heads, cards, ticker, FAQ, page hero, icons
    sections/             Home page blocks (hero, pillars, journey, platform, trust, manifesto, CTA)
    forms/                Demo form, field wrapper, chip multi-select
  views/                  One file per route
  router/index.js         Routes, scroll behaviour, document titles
public/                   Favicon and brand mark
```

## Design system

Square, editorial layout: hard edges (all radius tokens are 0), 2px ink borders, offset block shadows, forest/bone/neon palette, drafting-grid backgrounds. Space Grotesk for UI, Instrument Serif for display headings (italic accent in clay), DM Mono for uppercase eyebrows with a square marker. Tokens live in `main.css`; reusable surfaces are the `brut` / `brut-lift` utilities. Form controls are custom (`BaseSelect`, `.brut-check`, `ChipMultiSelect`) — no native picklists.

## Ecology & impact

`/sustainability` presents the environmental offer: carbon footprint per product, AGEC Article 13 product sheets, the French Ecoscore (affichage environnemental, Ecobalyse method), Triman/Info-tri, ESPR/DPP, the 2026 EU green-claims rules and CSRD. Copy and sources live in `src/content/sustainability.js`; the home page mirrors it in `ImpactSection.vue`. Capability messaging (supplier network, PIM/DAM, EU regulation engine, digital twins on Solana) is in `src/content/home.js` and `src/content/platform.js`.

The privacy policy body lives in `src/components/legal/PrivacyContent.vue` and is rendered both on `/privacy` and inside a dialog (`BaseModal`) opened from the demo form, so visitors return to their filled-in form.

## About & Careers

`/about` and `/careers` follow the pi.security structure (statement hero → problem → team → belief → CTA, and hero → what we look for → open roles → process). Every statistic on the About page is sourced in `src/content/about.js` (`research` list with URLs). Open roles are plain data in `src/content/careers.js` — trim or empty the list before publishing; applications go to `VITE_CAREERS_EMAIL`.

## Content rules (from the launch readiness plan)

- Trust claims on the site are limited to what is true today: privacy & security by design, EU data residency available, encryption in transit and at rest, role-based access, auditability.
- Never display "GDPR certified". Certifications in progress (pentest, ISO/IEC 27001) appear on the Trust Center as dated roadmap items.
- The demo form collects the CRM minimum field set (person, company, use case, intent) plus automatic attribution; scale and stack questions are left for discovery.
- Legal pages contain bracketed placeholders (`[...]`) for the legal entity and hosting provider — fill them before publishing.

## Deploy

Deployed on DigitalOcean App Platform (region `fra`) as one Node service from `.do/app.yaml`: the buildpack runs `npm run build`, then `npm start` serves `dist/` and `/api/leads` on port 8787. Source is the public repo `api-walker-hub/widinx-website`, branch `main` — App Platform redeploys on push.

- `HUBSPOT_PRIVATE_APP_TOKEN` is an encrypted secret in the App Platform console; the committed spec keeps it empty.
- Update the spec with `doctl apps update <app-id> --spec .do/app.yaml` (add the token value in a local, uncommitted copy first, or set it in the console).
- Health check: `GET /api/health`.
