/**
 * Launch switch.
 *
 * Until SITE_LAUNCHED is true, the production deployment (builds of the `main`
 * branch on Cloudflare Pages or Vercel) shows only the under-construction page.
 * Preview deployments (e.g. the `preview` branch) and local dev show the full site.
 *
 * Launch day: set SITE_LAUNCHED to true and merge into main.
 * To test the under-construction page locally: UNDER_CONSTRUCTION=true npm run build
 *
 * Server-only: read this in server components, metadata, robots and sitemap.
 */
export const SITE_LAUNCHED = false;

const PRODUCTION_BRANCH = "main";

const isProductionBuild =
  process.env.CF_PAGES_BRANCH === PRODUCTION_BRANCH || // Cloudflare Pages
  process.env.VERCEL_ENV === "production"; // Vercel

export const UNDER_CONSTRUCTION =
  process.env.UNDER_CONSTRUCTION === "true" || (!SITE_LAUNCHED && isProductionBuild);
