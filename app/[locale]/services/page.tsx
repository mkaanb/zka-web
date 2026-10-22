import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SERVICES } from "@/content/services";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

const COPY = {
  title: { tr: "Tek çatı altında tüm yapı hizmetleri.", en: "Every building service, under one roof." },
  lead: {
    tr: "Mimari tasarım, statik proje, çelik yapı, inşaat taahhüt ve anahtar teslim projeler. Ayrı ayrı ya da uçtan uca.",
    en: "Architectural design, structural engineering, steel construction, general contracting and turnkey projects, either individually or end to end.",
  },
  description: {
    tr: "ZKA Investment hizmetleri: KKTC'de mimari tasarım, statik proje, çelik yapı, inşaat taahhüt, anahtar teslim projeler ve proje yönetimi.",
    en: "ZKA Investment services: architectural design, structural engineering, steel construction, general contracting, turnkey projects and project management in North Cyprus.",
  },
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const nav = await getTranslations({ locale, namespace: "nav" });
  return buildMetadata({ locale, path: "/services", title: nav("services"), description: COPY.description[locale] });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("services"), path: "/services" }])} />
      <PageHero
        eyebrow={nav("services")}
        title={COPY.title[locale]}
        lead={COPY.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("services"), href: "/services" }]}
      />
      <section className="container-x py-24 lg:py-32">
        <ServiceGrid services={SERVICES} locale={locale} />
      </section>
      <CtaBand />
    </>
  );
}
