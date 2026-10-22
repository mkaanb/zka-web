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

Deploy: import the repo in Vercel (framework preset: Next.js). `vercel.json` redirects `/` → `/tr/`.

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
