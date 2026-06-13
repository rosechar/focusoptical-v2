# Focus Optical

Marketing site for Focus Optical, an independent optical store in Rochester Hills, MI. Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in EmailJS credentials
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Environment variables

The appointment form (`components/AppointmentForm.tsx`) sends requests via [EmailJS](https://www.emailjs.com). Without these variables the form renders but submissions fail with an error banner.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

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
