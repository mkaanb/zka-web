import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { QUALITY } from "@/content/pages";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, path: "/quality", title: QUALITY.meta.title[locale], description: QUALITY.meta.description[locale] });
}

export default async function QualityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("quality"), path: "/quality" }])} />
      <PageHero
        eyebrow={QUALITY.eyebrow[locale]}
        title={QUALITY.title[locale]}
        lead={QUALITY.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("quality"), href: "/quality" }]}
      />

      <section className="container-x py-24 lg:py-32">
        <SectionHeading title={QUALITY.standards.title[locale]} className="mb-12" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUALITY.standards.items.map((s, i) => (
            <Reveal as="li" key={s.code} delay={i * 0.08} className="rounded-3xl border border-graphite/10 p-8">
              <p className="font-display text-2xl font-extrabold text-teal">{s.code}</p>
              <p className="mt-3 text-sm text-graphite/65">{s.text[locale]}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-paper-2 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading title={QUALITY.certificates.title[locale]} lead={QUALITY.certificates.note[locale]} className="mb-12" />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QUALITY.certificates.items.map((c, i) => (
              <Reveal as="li" key={c.name} delay={i * 0.08} className="flex flex-col rounded-3xl bg-paper p-8">
                <div className="blueprint mb-6 grid aspect-[3/4] place-items-center rounded-xl bg-paper-2 text-steel">
                  <span className="font-display text-xl font-bold text-graphite/40">{c.name}</span>
                </div>
                <p className="font-bold">{c.name}</p>
                <p className="mt-1 text-sm text-graphite/60">{c.text[locale]}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x grid gap-12 py-24 lg:grid-cols-2 lg:py-32">
        <SectionHeading title={QUALITY.safety.title[locale]} />
        <ul className="space-y-5">
          {QUALITY.safety.items.map((it, i) => (
            <Reveal as="li" key={i} delay={i * 0.06} className="flex gap-4 border-b border-graphite/10 pb-5">
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <span className="text-lg">{it[locale]}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
