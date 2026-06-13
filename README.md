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

Customer confirmations require a [verified sending domain](https://resend.com/domains) in Resend. Until `focusopticalrochesterhills.com` is verified, use `Focus Optical <onboarding@resend.dev>`, which only delivers to the Resend account owner.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

- `app/` — routes (App Router), one folder per page, plus `layout.tsx` (global metadata + LocalBusiness JSON-LD) and `sitemap.ts`
- `components/` — shared Header, Footer, and AppointmentForm
- `lib/business.ts` — single source of truth for business info (phone, address, hours, maps URLs, site URL); update store details here
- `public/images/` — static photos
