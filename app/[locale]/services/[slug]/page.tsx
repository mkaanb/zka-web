import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/content/projects";
import { getService, SERVICES } from "@/content/services";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd, serviceLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => SERVICES.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({
    locale,
    path: `/services/${slug}`,
    title: s.title[locale],
    description: s.short[locale],
    keywords: s.keywords[locale],
  });
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const s = getService(slug);
  if (!s) notFound();
  const nav = await getTranslations("nav");
  const t = await getTranslations("common");
  const related = PROJECTS.filter((p) => p.scope.includes(slug)).slice(0, 3);
  const others = SERVICES.filter((x) => x.slug !== slug);
  const path = `/services/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceLd(locale, { name: s.title[locale], description: s.short[locale], path }),
          breadcrumbLd(locale, [
            { name: nav("home"), path: "" },
            { name: nav("services"), path: "/services" },
            { name: s.title[locale], path },
          ]),
        ]}
      />
      <PageHero
        eyebrow={nav("services")}
        title={s.title[locale]}
        lead={s.short[locale]}
        crumbs={[
          { name: nav("home"), href: "/" },
          { name: nav("services"), href: "/services" },
          { name: s.title[locale], href: path },
        ]}
      />

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1.2fr_1fr] lg:py-32">
        <Reveal>
          <p className="text-xl leading-relaxed text-graphite/80">{s.intro[locale]}</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl bg-paper-2 p-8 lg:p-10">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-teal uppercase">{t("whatWeDeliver")}</h2>
          <ul className="mt-6 space-y-4">
            {s.deliverables[locale].map((d) => (
              <li key={d} className="flex gap-3">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-graphite py-24 text-paper lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={t("whyZka")} title={s.title[locale]} className="mb-14" />
          <ul className="grid gap-10 md:grid-cols-3">
            {s.benefits[locale].map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 0.08} className="border-t border-paper/15 pt-6">
                <h3 className="text-xl font-bold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{b.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <SectionHeading title={t("relatedProjects")} className="mb-12" />
        {related.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} locale={locale} index={i} placeholderLabel={t("placeholderImage")} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="aspect-[21/9] overflow-hidden rounded-3xl">
            <Placeholder label={t("placeholderImage")} />
          </div>
        )}
      </section>

      <section className="container-x pb-16">
        <h2 className="mb-6 text-sm font-semibold tracking-[0.25em] uppercase opacity-60">{t("otherServices")}</h2>
        <ul className="flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/services/${o.slug}`} className="btn-ghost">
                {o.title[locale]}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
