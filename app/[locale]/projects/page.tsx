import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectFilter } from "@/components/sections/ProjectFilter";
import { PROJECT_CATEGORIES, PROJECTS } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

const COPY = {
  title: { tr: "Kıbrıs'ın dört bir yanında inşa ettiklerimiz.", en: "What we've built across Cyprus." },
  lead: {
    tr: "Villalar, konutlar, ticari ve endüstriyel yapılar. Her biri aynı titizlikle tasarlandı ve inşa edildi.",
    en: "Villas, homes, commercial and industrial buildings, each one designed and built with the same care.",
  },
  description: {
    tr: "ZKA Investment projeleri: KKTC'de çelik villa, konut, ticari ve endüstriyel yapı referanslarımız.",
    en: "ZKA Investment projects: our steel villas, residential, commercial and industrial buildings in North Cyprus.",
  },
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const nav = await getTranslations({ locale, namespace: "nav" });
  return buildMetadata({ locale, path: "/projects", title: nav("projects"), description: COPY.description[locale] });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");
  const t = await getTranslations("common");

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("projects"), path: "/projects" }])} />
      <PageHero
        eyebrow={nav("projects")}
        title={COPY.title[locale]}
        lead={COPY.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("projects"), href: "/projects" }]}
      />
      <section className="container-x py-20 lg:py-28">
        <ProjectFilter
          allLabel={t("all")}
          categories={PROJECT_CATEGORIES.map((c) => ({ id: c.id, label: c.label[locale] }))}
          items={PROJECTS.map((p, i) => ({
            id: p.slug,
            category: p.category,
            node: <ProjectCard project={p} locale={locale} index={i} placeholderLabel={t("placeholderImage")} />,
          }))}
        />
      </section>
      <CtaBand />
    </>
  );
}
