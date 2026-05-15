# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

YUG Estates is an **authentic real-estate marketplace** — not a luxury brand. It lists handpicked, owner-verified farmland, river-attached properties, and villa plots across South Bangalore (7 live listings today, all agricultural / river-attached). The marketplace emphasizes *trust, transparency, and real people* over premium/exclusive positioning.

### Brand Positioning

- **We ARE:** authentic, grounded, transparent, community-driven, verified, handpicked, real-owner-first (think Airbnb/Etsy-for-farmland)
- **We are NOT:** luxury, exclusive, premium-tier, elite, resort-brand (avoid phrasing like "luxury villa projects", "95% customer satisfaction", or "sophisticated" unless backed by real data)
- **Target buyer:** retail investor looking for managed agri-land, a river-attached plot, or a small villa plot — wants proof, not polish
- **Trust levers:** real photos, owner verification, managed-crop transparency, expected-yield disclosure, clear per-acre pricing in rupees

### Design Language

- **Pattern:** Marketplace / Directory — hero is a **search bar**, not a decorative CTA. Section flow: search → categories → featured listings → trust signals → contact.
- **Palette (Paper & Ink — editorial):** warm stone base + near-black primary + single rust accent. Think NYT Magazine / The Atlantic for land. Trust through restraint, not saturation. Tokens listed under Conventions below.
- **Typography:** `Fraunces` (warm, organic serif) for headings + `Inter` for body. Fraunces conveys handcrafted/authentic; Inter keeps UI readable. Avoid Cinzel/Playfair (too luxury).
- **Tone in copy:** "handpicked", "verified", "real yield", "owner-managed", "in your neighborhood" — not "luxury", "premium", "exclusive", "sophisticated".
- **Imagery:** real property photos — wide landscape shots at golden hour, overhead drone shots of farmland, river-edge plots. Avoid stock luxury-villa / infinity-pool / marble-foyer imagery. If no Contentful image is set, the hero falls back to an elegant emerald gradient with an icon — leave it as-is rather than shipping a mediocre placeholder.
- **Hero copy (home page):** keep it **broad**, not plot-type-specific. Current wording: _"Find land worth owning."_ with sub _"A handpicked marketplace of verified real estate — curated by people who'd buy it themselves."_ — DO NOT narrow the H1 to "farmland" or "river plots" here; those belong on category chips, not the headline.

### Background treatment

- Hero now uses **no decorative orbs** — only a subtle warm radial wash at top + paper-grain overlay (`.bg-grain` utility in [globals.css](app/globals.css) at 4% opacity with `mix-blend-multiply`). Editorial = restraint.
- **Landing page section rhythm** (stone tonal cadence):
  - Hero → `bg-stone-50` (warm paper, with grain + radial wash)
  - Featured Properties → `bg-white` (crisp canvas — property cards pop on pure paper)
  - Contact Form → `bg-stone-100` (deeper warm tone — form card + info cards lift off it)
  - Footer → `bg-stone-50` (returns to starting tone — closes the page loop)
- When adding a new top-level section on the home page, pick a tone that continues the rhythm (don't land two `bg-white` sections back-to-back). Other routes (e.g., `/services`, `/properties`) can break this cadence if they have their own hierarchy.
- **Don't** add colored blur orbs, mesh gradients, or aurora backgrounds. They contradict the editorial brand.
- **Do** use grain on any section that needs tactile warmth. It's the signature texture of the palette.

### Animations

- CSS keyframes live in [app/globals.css](app/globals.css) under `@layer utilities`: `fade-up`, `fade-in`, `ken-burns`, `float-slow`, `shimmer-soft`.
- All utilities are wrapped in a `prefers-reduced-motion: reduce` override — apply them via `motion-safe:animate-*` so they're skipped when the OS opts out.
- Stagger via inline `style={{ animationDelay: 'Xms' }}` — consistent with Tailwind's utility-first approach, no need to add delay utilities for one-off staggers.
- **Don't stack two animation classes on the same element** — only one `animation` property wins. Wrap entry-and-loop with nested divs (outer = one-shot fade-up, inner = infinite float).
- No Framer Motion, no GSAP — pure CSS keeps SSR clean and bundle small.

## Build & Development

- `npm run dev` — dev server at `http://localhost:3000`
- `npm run build` / `npm run start` — production build & serve
- `npm run setup` — one-time Contentful space bootstrap (`lib/setup.js`)
- No lint / test scripts are configured. TypeScript `strict: true` is enforced via `tsconfig.json`; rely on `next build` as the type-check gate.

## Architecture

- **Next.js 14 App Router + TypeScript strict.** Server components by default; mark interactive pieces with `"use client"`.
- **Contentful is the CMS.** All content (properties, hero, amenities, property types, investment details, crops) comes from Contentful GraphQL. There is no database layer.
- **Data flow:** `lib/queries/**` holds GraphQL strings → `lib/api.ts#fetchGraphQL` is the single fetch wrapper that picks the published or preview token based on a `preview` flag → each page calls one of the typed wrappers (`getAllProperties`, `getPropertyBySlug`, `getFeaturedProperties`, `getHeroComponent`).
- **ISR + on-demand revalidation.** `fetchGraphQL` tags every response with `posts`. The Contentful webhook hits `POST /api/revalidate` (guarded by `x-vercel-reval-key` header == `CONTENTFUL_REVALIDATE_SECRET`) which calls `revalidateTag("posts")`. All cached content uses the same tag — revalidating one entry refreshes everything.
- **Draft mode.** `GET /api/draft?secret=…&slug=…` validates the secret, enables Next `draftMode()`, and redirects. `/api/disable-draft` turns it off. Pages read `draftMode()` and pass the flag through to the GraphQL call.
- **Styling.** Tailwind + shadcn/ui (`components/ui/` — button, card, tabs, alert) with CVA. Design language: warm stone/cream background, near-black primary (`stone-900`) for buttons/CTAs, single rust accent (`amber-700`) for highlights, `Fraunces` serif headings + `Inter` body, Lucide icons. Use `cn()` from `lib/utils.ts` to merge classes. Avoid pure gray gradients and saturated decorative orbs — editorial restraint is the point.
- **Images.** `next.config.js` allow-lists `images.ctfassets.net` (Contentful), `images.unsplash.com`, and `images.pexels.com`. For the hero, prefer uploading real site-visit photography to Contentful; Unsplash/Pexels are fallbacks when you need a stock-but-authentic landscape (search terms: _"indian farmland"_, _"rural karnataka"_, _"paddy field golden hour"_, _"coconut grove aerial"_).

## Routes

- `/` — hero + features + featured properties + contact form ([app/page.tsx](app/page.tsx))
- `/properties` — filterable / sortable listing; filters read from `searchParams` ([app/properties/page.tsx](app/properties/page.tsx))
- `/properties/[slug]` — property detail with tabs, amenities, investment breakdown, crops ([app/properties/[slug]/page.tsx](app/properties/[slug]/page.tsx))
- `/services` + subpages: `/services/farm-management`, `/services/crop-cultivation`, `/services/property-investment`, `/services/agricultural-consulting`
- `/investment`, `/about`, `/contact`, `/privacy-policy`, `/terms-conditions`, `/sitemap`
- Server action: [app/actions/contact.ts](app/actions/contact.ts)

## Key Files

- [lib/api.ts](lib/api.ts) — Contentful fetch wrapper + typed query functions
- [lib/queries/](lib/queries/) — GraphQL fragments and queries (`propertyQuery.ts` holds the canonical `PropertyFields` fragment)
- [app/components/](app/components/) — page-level components (header, footer, property-card, property-filters, contact-form, carousel)
- [components/ui/](components/ui/) — shadcn primitives
- [app/layout.tsx](app/layout.tsx) — root layout loading `Inter` (body, `font-sans`) + `Fraunces` (headings, `font-serif`) via `next/font`, header, footer, skip-to-main-content link. Authentic brand metadata lives here.

## Conventions

- Kebab-case filenames (note the existing typo: [app/components/fetaured-properties.tsx](app/components/fetaured-properties.tsx) — don't "fix" the filename without updating imports).
- Optional chaining everywhere on Contentful responses — collections (`imagesCollection`, `amenitiesCollection`, `propertyInvestmentDetailsCollection`, `propertyCropsCollection`) can all be `undefined`.
- Filters and sort on `/properties` are URL-driven via `searchParams` — keep them server-side, not in client state, so links are shareable.
- When adding a new content type: write the query in `lib/queries/`, add a typed wrapper in `lib/api.ts` that extracts the right path from the response, then consume it in the page.
- **Palette tokens (Paper & Ink):**
  - Neutrals: `stone-*` (never `gray-*`). Default pair: `text-stone-900` on `bg-stone-50`.
  - Primary / CTAs / buttons: `bg-stone-900 hover:bg-stone-950` with white text. Near-black buttons are the editorial signature — do not tint them with brand color.
  - Rust accent: `amber-700` (`#B45309`). Use sparingly — italic H1 word, logo subtitle, trust icons (ShieldCheck/MapPin/Sprout), eyebrow labels, link hover. 2–3 touches per viewport, not splashed everywhere.
  - Accent tints: `amber-50` / `amber-100` / `amber-200` for pill backgrounds, soft icon wells, hover borders.
  - Focus rings: `focus:ring-stone-900` (dark, not tinted).
  - Gold highlights: `amber-500` for stars. `amber-50/600/800` also used for warning/alert callouts on `/investment` — semantic, not brand.
  - Dark surfaces (properties listing hero, etc.): `bg-stone-900` — deep neutral, not tinted brand color.
  - Rule: **if unsure whether something should be accented, leave it `stone-*`.** Editorial palettes fail when color creeps in.
- **Type:** wrap display headings (`h1`/`h2`/property titles) in `font-serif` to pick up Fraunces. Body + UI copy stays `font-sans` (Inter, default).
- **Icon-only buttons** must carry an `aria-label`; decorative icons inside labelled controls take `aria-hidden="true"`.
- **Interactive elements** that aren't `<a>` or `<button>` wrappers still need `cursor-pointer` (shadcn Button does not add it by default).
- **Property pricing model.** `price` (number, rupees) is always the **total** price for the listing — used by both the listing-page card (shown as `₹X.X Cr`) and the home featured card (also `₹X.X Cr`). Two **optional** fields, `pricePerUnit` (number, rupees) and `priceUnit` (string, e.g. `"acre"`, `"sqft"`, `"guntha"`), enable a richer subline like _"≈ ₹70,00,000 / acre"_ on the featured card and the detail page sticky price card. Leave both blank for properties where total price is the only meaningful number; populate both when per-unit pricing is informative. Don't write "per acre" in shared / generic site copy — that's a per-listing detail, not a brand promise. Use "in plain rupees" for marketplace-wide messaging.

## Pitfalls & Known Issues

- **`getAllPropertiesQuery` has a hardcoded `limit: 10`.** Raise or paginate before the catalog grows past 10 — [lib/queries/properties/properties.ts](lib/queries/properties/properties.ts).
- **Contact form email sending is stubbed.** The nodemailer call in [app/actions/contact.ts](app/actions/contact.ts) is commented out; the action always returns `{ success: true }`. Uncomment and configure SMTP env vars before relying on it.
- **`posts` revalidation tag is global.** Every cached fetch uses the same tag, so `/api/revalidate` invalidates everything. Fine for current scale; split tags if you need finer control.
- **No pagination** on `/properties` — full result set is sorted/filtered in memory.
- **Price display conventions differ by card.** [app/components/property-card.tsx](app/components/property-card.tsx) (listings page) receives a pre-formatted `price` string with `/ 10,000,000` applied in [app/properties/page.tsx](app/properties/page.tsx) to show Crores. [app/components/featured-property-card.tsx](app/components/featured-property-card.tsx) (home page) shows raw rupees per acre with `toLocaleString('en-IN')`. Consolidate before the two cards diverge further.
- **Two PropertyCard components** ([app/components/property-card.tsx](app/components/property-card.tsx) and [app/components/featured-property-card.tsx](app/components/featured-property-card.tsx)) share ~80% of their carousel logic. Extract before adding a third.
- **Hero `<img>` in featured-property-card.tsx** still uses regular `<img>` instead of `next/image`. Swap when the Contentful host is consistently allow-listed.
- **Contentful hero stats are hard-coded placeholders.** When stats come back from the CMS, remove the "12+ properties / 95% satisfaction / 15yr experience" pattern — it's the luxury-era copy and may not reflect truth.

### Resolved (was broken)

- ~~Draft redirect pointed at `/posts/${slug}`~~ → now redirects to `/properties/${slug}` in [app/api/draft/route.ts](app/api/draft/route.ts).
- ~~Root metadata said "Next.js and Contentful Example"~~ → replaced with proper marketplace title/description in [app/layout.tsx](app/layout.tsx).
- ~~Mobile menu button on [app/components/header.tsx](app/components/header.tsx) had no handler~~ → drawer implemented with `aria-expanded`/`aria-controls`.
- ~~Hero "View Properties"/"Learn More" buttons weren't wrapped in `<Link>`~~ → hero is now a **search form** that POSTs to `/properties?search=`.
- ~~`View Details` button in [app/components/property-card.tsx](app/components/property-card.tsx) cancelled navigation via `preventDefault`~~ → handler removed.
- ~~Social icons in [app/components/footer.tsx](app/components/footer.tsx) had `href="#"`~~ → replaced with real profile URLs and `rel="noopener noreferrer"`.
- ~~Filter inputs had no labels, carousel arrows had no `aria-label`~~ → `sr-only` labels and aria labels added; contact form status now uses `role="status" aria-live="polite"`.

## Environment Variables

Required in `.env.local`:

```
CONTENTFUL_SPACE_ID=1hjt283mwafw
CONTENTFUL_ENVIRONMENT=dev
CONTENTFUL_ACCESS_TOKEN=<published_token>
CONTENTFUL_PREVIEW_ACCESS_TOKEN=<preview_token>
CONTENTFUL_REVALIDATE_SECRET=<webhook_secret>
CONTENTFUL_PREVIEW_SECRET=<draft_secret>
SMTP_HOST=<smtp_host>
SMTP_PORT=<smtp_port>
SMTP_USER=<smtp_user>
SMTP_PASS=<smtp_pass>
SMTP_FROM=<from_email>
CONTACT_EMAIL=<contact_email>
```

## Docs

- [README.md](README.md) — public-facing feature overview (marketing tone; some features described there are aspirational)
- [MARKETING_CAMPAIGN_GUIDE.md](MARKETING_CAMPAIGN_GUIDE.md) — brand messaging and campaign strategies
