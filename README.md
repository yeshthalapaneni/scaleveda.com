# ScaleVeda website

A production-ready Next.js marketing site for **ScaleVeda**, a data platform consulting company. The site presents ScaleVeda as a premium, practical partner for organizing messy data, building scalable data platforms, and integrating analytics, ML, and AI into business workflows.

## What changed

- Replaced the old static HTML/CSS site with a deployable Next.js App Router application.
- Repositioned the content around data platform consulting instead of generic AI/automation messaging.
- Added a responsive, accessible, monochrome-leaning visual system with warm cream backgrounds, strong typography, and custom SVG logo assets.
- Added a working contact form backed by a server-side API route and Resend email delivery.
- Added client-side and server-side validation, a honeypot field, basic in-memory rate limiting, success/error states, and environment-based configuration.
- Added SEO metadata, Open Graph metadata, favicon, web manifest, and deployment documentation.

## Tech stack

- [Next.js](https://nextjs.org/) App Router
- React
- TypeScript
- Resend for transactional email
- Plain CSS for the design system

## Getting started

Install dependencies:

```bash
npm install
```

Copy the example environment file:

```bash
cp .env.example .env.local
```

Start the development server:

```bash
npm run dev
```

Open <http://localhost:3000>.

## Contact form environment variables

The contact form posts to `app/api/contact/route.ts` and sends email through Resend. Set these variables locally in `.env.local` and in Vercel project settings.

| Variable | Required | Description | Where to get it |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | Yes | API key used by the server route to send email. | Create one in the Resend dashboard under API Keys. |
| `CONTACT_FROM_EMAIL` | Yes | Verified sender used by Resend, for example `ScaleVeda <hello@your-domain.com>`. | Configure and verify a sending domain or sender in Resend. |
| `CONTACT_TO_EMAIL` | Yes | Recipient for inquiries. Set this to `yeshthalapaneni@gmail.com`. | Provided ScaleVeda contact inbox. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL used by metadata and Open Graph tags. | Use the production URL, for example `https://scaleveda.com`. |

No secrets are committed to the repository. `.env.example` documents expected values only.

## Build and production run

Create a production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

## Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Select the Next.js framework preset if Vercel does not detect it automatically.
4. Add the environment variables listed above in **Project Settings → Environment Variables**.
5. Deploy.
6. After the first deployment, submit the contact form with a real message to confirm Resend delivery to `yeshthalapaneni@gmail.com`.

## Notes and assumptions

- The attached logo files were represented in the codebase as lightweight SVG assets under `public/`, including a mark-based SVG favicon.
- The Resend sender must be a verified address or domain before production emails can be delivered reliably.
- The API route includes simple in-memory rate limiting. For very high traffic or multi-region deployments, replace it with durable rate limiting such as Vercel KV, Upstash, or another shared store.
