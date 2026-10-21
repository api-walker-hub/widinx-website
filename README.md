# WidinX website

Marketing site for **WidinX** — EU Digital Product Passports. Copy follows what the WidinX app (`tracex-app`) actually ships; anything not shipped is labelled roadmap.

Vue 3 · Vite · Tailwind CSS v4 · vue-router, plus a small Express server that relays demo requests to HubSpot.

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

## Salesforce leads (`server/index.js`)

Each demo request becomes a **Lead** in the apiwalker Salesforce org (LeadSource `Web`; industry, use cases, timeline, message and UTM attribution in Description). The server authenticates with the OAuth 2.0 client-credentials flow of the External Client App **WidinX Website Leads** (Setup → External Client App Manager), which runs as the org's admin user. Set `SALESFORCE_CLIENT_ID` and `SALESFORCE_CLIENT_SECRET` as encrypted env vars on the DigitalOcean app (`SALESFORCE_LOGIN_URL` defaults to `https://apiwalker.my.salesforce.com`). Salesforce and HubSpot run independently: the request succeeds if either CRM accepted it. `/api/health` reports which are configured.

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
    sections/             Page blocks (hero, pillars, live passports, timeline, roles, sectors, journey, platform, trust, CTA)
    passport/             Passport card (with QR) used in galleries
    forms/                Demo form, field wrapper, chip multi-select
  views/                  One file per route
  router/index.js         Routes, scroll behaviour, document titles
public/                   Favicon, artwork, passport product images (public/passport-images/)
```

## Design system

Aligned with the app's "Stamped Ledger" tokens: bone `#F1EFE9`, forest ink `#10231C`, WidinX green `#1B3D2F`, leaf `#2F7955`; square corners; offset "stamp" shadows on hover. Inter for body, Space Grotesk for UI and passport headings, Instrument Serif for display headings (italic accent), DM Mono for eyebrows. The logo is the app's mark, drawn inline in `BrandLogo.vue` so the wordmark gets the web font. Illustrated full-viewport sections use mandatory scroll snapping — any new top-level section must be a `section-illustrated` or `screen-scene`, or snapping will jump over it.

## Live passports

`/passports` lists demonstration passports (`src/content/passports.js`), one per sector, each with a QR code. Every passport opens at its GS1 Digital Link — `/01/{gtin}[/10/{lot}][/21/{serial}]` — or at `/passports/{slug}`, rendered by `PassportView.vue` in the layout of the app's public passport (identity + QR, badges, audience switch, folding sections, claims & evidence, lifecycle, proof). Brands and data are fictional and marked DEMO ONLY; GTINs are in the GS1 restricted-circulation range (`02…`) so they never match a real product. Textile photos come from the textile test pack; the other products are SVG illustrations.

`/sectors` lists the app's 15 EU sector templates (textiles is the path live in the console; others are opened per pilot) and the three entry roles. `/regulations` holds the timeline and the basics FAQ. `/solutions`, `/sustainability` and `/ecology` redirect to `/sectors`.

The privacy policy body lives in `src/components/legal/PrivacyContent.vue` and is rendered both on `/privacy` and inside a dialog (`BaseModal`) opened from the demo form, so visitors return to their filled-in form.

## About & Careers

`/about` and `/careers` follow the pi.security structure (statement hero → problem → team → belief → CTA, and hero → what we look for → open roles → process). Every statistic on the About page is sourced in `src/content/about.js` (`research` list with URLs). Open roles are plain data in `src/content/careers.js` — trim or empty the list before publishing; applications go to `VITE_CAREERS_EMAIL`.

## Content rules (from the launch readiness plan)

- Trust claims on the site are limited to what is true today: privacy & security by design, EU data residency available, encryption in transit and at rest, role-based access, auditability.
- Never display "GDPR certified". Certifications in progress (pentest, ISO/IEC 27001) appear on the Trust Center as dated roadmap items.
- The demo form collects the CRM minimum field set (person, company, use case, intent) plus automatic attribution; scale and stack questions are left for discovery.
- Legal pages contain bracketed placeholders (`[...]`) for the legal entity and hosting provider — fill them before publishing.

## Deploy

Deployed on DigitalOcean App Platform (region `fra`) as one Node service from `.do/app.yaml`: the buildpack runs `npm run build`, then `npm start` serves `dist/` and `/api/leads` on port 8787. Source is the public repo `api-walker-hub/widinx-website`, branch `main`. Because the app uses a plain git clone URL (not the GitHub integration), pushes do **not** auto-deploy — trigger one after pushing:

```bash
doctl apps create-deployment 4fb40361-3adb-47ce-ab65-44a322f73290
```

Live URL: https://widinx-website-8l3s4.ondigitalocean.app

- `HUBSPOT_PRIVATE_APP_TOKEN` is an encrypted secret in the App Platform console; the committed spec keeps it empty.
- Update the spec with `doctl apps update <app-id> --spec .do/app.yaml` (add the token value in a local, uncommitted copy first, or set it in the console).
- Health check: `GET /api/health`.
