import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { SITE } from "./site";

/** Absolute URL for a locale + path (path starts with "/" or is ""). Matches `trailingSlash: true`. */
export function absUrl(locale: Locale, path = "") {
  return `${SITE.url}/${locale}${path}/`.replace(/\/+$/, "/");
}

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  keywords,
  type = "website",
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, absUrl(l, path)]));
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absUrl(locale, path),
      languages: { ...languages, "x-default": absUrl(routing.defaultLocale, path) },
    },
    openGraph: {
      type,
      url: absUrl(locale, path),
      title,
      description,
      siteName: SITE.name,
      locale: locale === "tr" ? "tr_TR" : "en_GB",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
