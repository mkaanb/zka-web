# ZKA Investment Ltd. — Corporate Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · next-intl (TR/EN) · Framer Motion · static export.

## Run

```bash
npm install
npm run dev        # http://localhost:3000/tr
npm run build      # static site in ./out
npm run typecheck && npm run lint
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_KEY` (free key from web3forms.com)
so the contact/careers forms deliver to your inbox. Without it, the forms open the visitor's mail client.

Deploy: Cloudflare Pages connected to GitHub (build `npm run build`, output `out`, env `NODE_VERSION=22`).
`public/_redirects` sends `/` to `/tr/` (Cloudflare); `vercel.json` does the same on Vercel.

## Branches & launch

| Branch | Deployment | Shows |
| --- | --- | --- |
| `main` | Production (main domain) | Under-construction page, not indexed by search engines |
| `preview` | Preview URL | Full website, used for testing and changes |

Work on `preview`, and merge into `main` whenever you like: production keeps showing the
under-construction page until launch. **Launch day:** set `SITE_LAUNCHED = true` in
`lib/launch.ts` and merge into `main`.

Test the under-construction page locally: `UNDER_CONSTRUCTION=true npm run build`, then serve `out/`.

## Where things live

| What | File |
| --- | --- |
| Company facts (phone, address, stats, socials) | `lib/site.ts` |
| Services | `content/services.ts` |
| Projects (add photos to `public/projects/<slug>/` and list them in `images`) | `content/projects.ts` |
| Blog articles | `content/insights.ts` |
| Open positions | `content/careers.ts` |
| Page copy (home, about, mission/vision, process, why steel, quality, contact, legal) | `content/pages.ts` |
| UI strings (nav, buttons, form labels) | `messages/tr.json`, `messages/en.json` |
| Logo paths (generated from `ZKA Logo.svg`) | `components/brand/logoData.ts` |
| Intro animation | `components/brand/Loader.tsx` |

Search for `TODO(ZKA)` to find placeholder content that must be replaced before launch.
