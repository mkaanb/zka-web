import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { getProject, PROJECT_CATEGORIES, PROJECTS } from "@/content/projects";
import { getService } from "@/content/services";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => PROJECTS.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return buildMetadata({ locale, path: `/projects/${slug}`, title: p.title[locale], description: p.summary[locale] });
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const p = getProject(slug);
  if (!p) notFound();
  const nav = await getTranslations("nav");
  const t = await getTranslations("common");
  const idx = PROJECTS.indexOf(p);
  const cat = PROJECT_CATEGORIES.find((c) => c.id === p.category);
  const more = PROJECTS.filter((x) => x.slug !== slug).slice(0, 3);
  const nf = new Intl.NumberFormat(locale === "tr" ? "tr-TR" : "en-GB");
  const path = `/projects/${slug}`;
  const gallery = p.images.length > 0 ? p.images : [undefined, undefined, undefined];

  const facts = [
    { label: t("location"), value: p.location[locale] },
    { label: t("year"), value: String(p.year) },
    { label: t("area"), value: `${nf.format(p.area)} m²` },
    ...(p.steelTons ? [{ label: t("steel"), value: `${nf.format(p.steelTons)} ${t("tons")}` }] : []),
    { label: t("status"), value: t(p.status) },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale, [
          { name: nav("home"), path: "" },
          { name: nav("projects"), path: "/projects" },
          { name: p.title[locale], path },
        ])}
      />
      <PageHero
        eyebrow={cat?.label[locale]}
        title={p.title[locale]}
        lead={p.summary[locale]}
        crumbs={[
          { name: nav("home"), href: "/" },
          { name: nav("projects"), href: "/projects" },
          { name: p.title[locale], href: path },
        ]}
      />

      <section className="container-x -mt-10 lg:-mt-16">
        <Reveal className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl shadow-graphite/20">
          <Placeholder seed={idx} src={gallery[0]} alt={p.title[locale]} label={t("placeholderImage")} />
        </Reveal>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-[1fr_340px] lg:py-28">
        <Reveal className="space-y-5 text-lg leading-relaxed text-graphite/80">
          {p.description[locale].map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="divide-y divide-graphite/10 rounded-3xl bg-paper-2 px-8 py-4">
            {facts.map((f) => (
              <div key={f.label} className="flex justify-between gap-4 py-4 text-sm">
                <dt className="text-graphite/55">{f.label}</dt>
                <dd className="text-right font-semibold">{f.value}</dd>
              </div>
            ))}
            <div className="py-4 text-sm">
              <dt className="mb-3 text-graphite/55">{t("scope")}</dt>
              <dd className="flex flex-wrap gap-2">
                {p.scope.map((sl) => {
                  const s = getService(sl);
                  return s ? (
                    <Link key={sl} href={`/services/${sl}`} className="rounded-full border border-graphite/15 px-3 py-1 text-xs hover:border-teal hover:text-teal">
                      {s.title[locale]}
                    </Link>
                  ) : null;
                })}
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 pb-24 sm:grid-cols-2">
        {gallery.slice(1).map((src, i) => (
          <Reveal key={i} delay={i * 0.08} className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Placeholder seed={idx + i + 1} src={src} alt={p.title[locale]} label={t("placeholderImage")} />
          </Reveal>
        ))}
      </section>

      <section className="bg-paper-2 py-24">
        <div className="container-x">
          <SectionHeading title={t("relatedProjects")} className="mb-12" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <ProjectCard key={m.slug} project={m} locale={locale} index={PROJECTS.indexOf(m)} placeholderLabel={t("placeholderImage")} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-24" />
      <CtaBand />
    </>
  );
}
