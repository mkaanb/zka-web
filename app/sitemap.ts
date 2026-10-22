import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/insights";
import { PROJECTS } from "@/content/projects";
import { SERVICES } from "@/content/services";
import { routing } from "@/i18n/routing";
import { absUrl } from "@/lib/seo";

export const dynamic = "force-static";

const STATIC = ["", "/about", "/about/mission-vision", "/services", "/projects", "/process", "/why-steel", "/quality", "/insights", "/careers", "/contact", "/legal/privacy", "/legal/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC,
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...PROJECTS.map((p) => `/projects/${p.slug}`),
    ...ARTICLES.map((a) => `/insights/${a.slug}`),
  ];
  return paths.map((path) => ({
    url: absUrl(routing.defaultLocale, path),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
    alternates: { languages: Object.fromEntries(routing.locales.map((l) => [l, absUrl(l, path)])) },
  }));
}
