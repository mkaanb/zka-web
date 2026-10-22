import type { Locale } from "@/i18n/routing";
import { absUrl } from "./seo";
import { SITE } from "./site";

export function organizationLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: absUrl(locale),
    logo: `${SITE.url}/logo.svg`,
    image: `${SITE.url}/logo.svg`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: String(SITE.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: { "@type": "Place", name: locale === "tr" ? "Kuzey Kıbrıs" : "Northern Cyprus" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:30",
    },
    sameAs: Object.values(SITE.social),
  };
}

export function breadcrumbLd(locale: Locale, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(locale, it.path),
    })),
  };
}

export function serviceLd(locale: Locale, s: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: absUrl(locale, s.path),
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: locale === "tr" ? "Kuzey Kıbrıs" : "Northern Cyprus",
  };
}

export function articleLd(locale: Locale, a: { title: string; description: string; path: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    inLanguage: locale,
    url: absUrl(locale, a.path),
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
