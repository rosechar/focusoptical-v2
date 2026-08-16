# Focus Optical

Marketing site for Focus Optical, an independent optical store in Rochester Hills, MI. Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Resend credentials
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Environment variables

The appointment form posts to the `/api/appointment` route (`app/api/appointment/route.ts`), which uses [Resend](https://resend.com) to send a confirmation email to the customer and a notification email to the owner. Without these variables submissions fail with an error banner.

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `OWNER_EMAIL` | Address that receives appointment notifications |
| `RESEND_FROM_EMAIL` | "From" address, e.g. `Focus Optical <appointments@focusopticalrochesterhills.com>` |
| `RESEND_SEGMENT_ID` | Optional. Resend segment that opted-in customers are added to; opt-in is skipped when unset |

Customer confirmations require a [verified sending domain](https://resend.com/domains) in Resend. Until `focusopticalrochesterhills.com` is verified, use `Focus Optical <onboarding@resend.dev>`, which only delivers to the Resend account owner.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

- `app/` — routes (App Router): home, `services`, `about`, `contact`, `insurance`, `service-areas` (+ one static page per city), `not-found`, plus `layout.tsx` (global metadata + JSON-LD), `sitemap.ts`, `robots.ts`, and `opengraph-image.tsx`
- `app/api/appointment/` — form handler that emails the owner and customer via Resend
- `components/` — shared UI (Button, Header, Footer, CtaBand, Faq, ReviewsCarousel, AppointmentForm, MapEmbed, PromoToast)
- `lib/business.ts` — single source of truth for business info: name, phone, address, hours, Google Maps and Google review links, site URL. Update store details here.
- `lib/services.ts` — the service catalog used by the home cards, `/services`, area pages, and structured data
- `lib/cities.ts` — copy for each service-area page
- `lib/schema.ts` — schema.org JSON-LD (Optician, people, offer catalog, FAQ helper)
- `lib/emails.ts`, `lib/appointments.ts`, `lib/validation.ts` — appointment form data, validation, and email templates

## Conventions

- Tailwind v4 only, no arbitrary values: design tokens live in `@theme` and custom utilities in `@utility` in `app/globals.css`.
- The canonical host is `www.focusopticalrochesterhills.com` (`SITE_URL`); the apex domain redirects to it.
