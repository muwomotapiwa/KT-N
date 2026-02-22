# Supabase Backend Plan (Phased)

This document explains how to stage the backend for the current Vite/React site using Supabase. It lists schema, storage, policies, and page-level integration notes so work can proceed incrementally without breaking the UI.

## Phase 0 – Project Setup
- Create a Supabase project.
- Add env vars to `.env.local` (not committed):
  - `VITE_SUPABASE_URL=...`
  - `VITE_SUPABASE_ANON_KEY=...`
  - `SUPABASE_SERVICE_ROLE_KEY=...` (only for local admin scripts/seed, never shipped to client).
- Install client SDK: `npm i @supabase/supabase-js`.
- Add `src/utils/supabaseClient.ts` with a singleton `createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)`.

## Phase 1 – Schema (tables, views, storage)
Tables are normalized so the same data can power multiple pages without duplication.

| Table | Purpose | Pages consuming it |
| --- | --- | --- |
| `service_categories` (id, slug, name, short_description) | Group services | Home `/` (services), Services index, Generic service pages |
| `services` (id, category_id FK, slug, title, teaser, body_md, hero_image_url, icon_name, cta_label, cta_href, sort_order, is_featured) | Source of truth for all service cards/sections | Home `/` (#services), `/services/*` detail pages, Quote calculator hints, AISolutioning section |
| `service_features` (id, service_id FK, title, detail) | Bullet lists under each service | All service detail pages |
| `portfolio_items` (id, slug, title, client, industry, summary, impact, hero_image_url, tags text[]) | Portfolio grid/cards | `/portfolio`, Home highlights if needed |
| `case_studies` (id, service_id FK nullable, title, challenge, solution, results, metrics jsonb, cover_image_url) | Deep dives | `/portfolio`, `/services/*` sidebars |
| `brand_assets` (id, file_name, category enum: apparel/drinkware/stationery/tech, image_url, alt_text, sort_order) | Corporate Identity grid on About page | `/about` (Corporate Identity Collection) |
| `testimonials` (id, name, role, company, quote, avatar_url, related_service_id FK nullable) | Testimonials | Home, Services, Portfolio |
| `contact_submissions` (id, name, email, phone, message, source_page, created_at) | Contact form storage (server-side insert) | `/contact` |
| `quotes` (id, name, email, company, project_type, budget_range, timeline, details, created_at) | Quote calculator submission | `/quote-calculator` |
| `quote_countries` (code PK, name, currency, currency_symbol, whatsapp_number) | Country settings for quote calculator | Quote calculator |
| `quote_packages` (id PK, country_code FK, package_id, name, min_pages, max_pages, base_price, features text[]) | Package tiers per country | Quote calculator |
| `quote_addons` (id PK, country_code FK, addon_id, name, price, description) | Add-ons per country | Quote calculator |

Notes on cross-page reuse:
- The `services` table drives cards on **Home**, **Services index**, and the dynamic detail pages (e.g., `/services/cloud-services`, `/services/website-development`). One source = consistent edits.
- `brand_assets` feeds the About page grid; the same rows can also power future product carousels without schema changes.
- `testimonials` can be filtered by `related_service_id` to show relevant quotes on both Home and service detail pages.

Storage:
- Create a public bucket `brand-assets` for About page images. Store full URLs in `brand_assets.image_url`.
- Optional buckets: `portfolio-media`, `avatars`.

## Phase 2 – Security & Policies
- Enable Row Level Security on all tables.
- Policies:
  - Public read for content tables (`services`, `service_categories`, `service_features`, `portfolio_items`, `case_studies`, `brand_assets`, `testimonials`).
  - Authenticated insert-only for `contact_submissions` and `quotes` (or anon insert with tight column checks + rate limiting via Edge Functions).
- Use storage policies: public read for `brand-assets`, write restricted to service role.

## Phase 3 – Seeding & Migrations
- Write SQL migrations (or use Supabase Studio) to create tables and seed initial rows from current static data:
  - Seed `services` and `service_features` from `src/data/services.ts`.
  - Seed `brand_assets` with filenames matching `src/assets/images`. Upload files to `brand-assets` bucket; record the returned public URLs.
- Track migrations in `supabase/migrations/*.sql` for reproducibility.

## Phase 4 – Frontend Integration Steps
1) Add a lightweight data layer:
   - `src/utils/supabaseClient.ts` (singleton).
   - Optional: simple fetch helpers per entity (e.g., `getServices`, `getBrandAssets`) returning typed data.
2) Replace local arrays with live queries:
   - `/about`: fetch `brand_assets` ordered by `sort_order`, fall back to local placeholder if fetch fails.
   - `Home` and `/services/*`: fetch `services` + `service_features` (by `service_id`).
   - `Portfolio`: fetch `portfolio_items` and `case_studies`.
3) Forms:
   - `Contact` and `QuoteCalculator` pages submit to Supabase via `insert` into `contact_submissions`/`quotes`.
   - Add client-side success/error toasts; no anonymous readback required.
4) Caching/UX:
   - Use `useEffect` + abort controllers for simple fetches; add SWR/React Query later if needed.
   - Show skeletons for grids to preserve layout.

## Phase 5 – Environments & Dev Loop
- Keep separate projects or schemas for `dev` and `prod`; inject keys via `.env.local` per environment.
- Add a `seed:dev` npm script (uses service role key locally) to reseed dev data quickly.
- Before shipping, switch public URLs in `brand_assets` to production bucket paths.

## Minimal Code Hooks to Add
- `src/utils/supabaseClient.ts` exporting `supabase`.
- In each page that loads dynamic data, convert to `useEffect` fetch from Supabase and keep current static data as fallback until parity is confirmed.
- Centralize shared TypeScript types in `src/types/content.ts` to match table columns.

Following this order lets us ship the schema and storage first, then swap UI data sources page by page without breaking the current layout.***
