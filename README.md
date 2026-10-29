# Kilolua website

Next.js (App Router) site for Kilolua, a Kenyan green coffee exporter.

## Run locally

1. `npm install` (an `.npmrc` enables `legacy-peer-deps` because `react-simple-maps` has not declared React 19 support yet)
2. Copy `.env.example` to `.env.local` and fill it in
3. `npm run dev`

## Configuration

See `.env.example`. The important ones:

- `NEXT_PUBLIC_SITE_URL`: the live domain. Drives canonical URLs, `sitemap.xml`, `robots.txt`, Open Graph and JSON-LD.
- `SMTP_*`, `CONTACT_*`: the contact form (`/api/contact`) emails enquiries to `info@kilolua.co.ke`. Buyer and
  farmer/cooperative enquiries are labelled differently in the subject and body, and can be routed to separate
  inboxes with `CONTACT_TO_BUYER` / `CONTACT_TO_FARMER`.

Company details (email, phone, address) live in one place: `src/data/site.ts`.

## SEO

- Per-page `metadata` (title, description, canonical, Open Graph, Twitter) in each `app/**/page.tsx`
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- Social share image: `app/opengraph-image.png` (1200x630); icons: `app/icon.png`, `app/apple-icon.png`
- JSON-LD (Organization, WebSite, BreadcrumbList, ContactPage)
