import { getTranslations, setRequestLocale } from "next-intl/server";
import { RoofOutline } from "@/components/brand/Motifs";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { WHY_STEEL } from "@/content/pages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/why-steel",
    title: WHY_STEEL.meta.title[locale],
    description: WHY_STEEL.meta.description[locale],
    keywords: locale === "tr" ? ["çelik yapı avantajları", "çelik villa KKTC", "çelik konstrüksiyon Kıbrıs"] : ["steel construction benefits", "steel villa North Cyprus", "steel frame house Cyprus"],
  });
}

export default async function WhySteelPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");
  const t = await getTranslations("common");
  const c = WHY_STEEL.compare;

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("whySteel"), path: "/why-steel" }])} />
      <PageHero
        eyebrow={WHY_STEEL.eyebrow[locale]}
        title={WHY_STEEL.title[locale]}
        lead={WHY_STEEL.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("whySteel"), href: "/why-steel" }]}
      />

      <section className="container-x py-24 lg:py-32">
        <ul className="grid gap-px overflow-hidden rounded-3xl bg-graphite/10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_STEEL.benefits.map((b, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="bg-paper p-8 lg:p-10">
              <p className="font-display text-5xl font-extrabold text-teal">{b.metric}</p>
              <h2 className="mt-6 text-xl font-bold">{b.title[locale]}</h2>
              <p className="mt-3 text-sm leading-relaxed text-graphite/65">{b.text[locale]}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-graphite py-24 text-paper lg:py-32">
        <RoofOutline className="absolute top-1/2 -left-20 w-[600px] -translate-y-1/2 text-teal/10" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2">
          <div />
          <Reveal>
            <h2 className="text-3xl font-bold lg:text-4xl">{WHY_STEEL.seismic.title[locale]}</h2>
            <p className="mt-6 text-lg leading-relaxed text-paper/70">{WHY_STEEL.seismic.text[locale]}</p>
            <Link href="/services/structural-engineering" className="mt-8 inline-flex items-center gap-2 font-semibold text-teal">
              {t("learnMore")} <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <SectionHeading title={c.title[locale]} className="mb-12" />
        <Reveal className="overflow-x-auto rounded-3xl border border-graphite/10">
          <table className="w-full min-w-[520px] text-left">
            <thead className="bg-paper-2 text-xs tracking-[0.2em] uppercase">
              <tr>
                {c.head[locale].map((h, i) => (
                  <th key={h} scope="col" className={`px-6 py-5 font-semibold ${i === 1 ? "text-teal" : ""}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-graphite/10">
              {c.rows.map((r) => (
                <tr key={r[locale][0]}>
                  <th scope="row" className="px-6 py-5 font-medium">{r[locale][0]}</th>
                  <td className="px-6 py-5 font-semibold text-teal">{r[locale][1]}</td>
                  <td className="px-6 py-5 text-graphite/60">{r[locale][2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      <section className="bg-paper-2 py-24">
        <div className="container-x">
          <SectionHeading title={WHY_STEEL.uses.title[locale]} className="mb-12" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_STEEL.uses.items.map((u, i) => (
              <Reveal as="li" key={i} delay={i * 0.05} className="flex items-center gap-4 rounded-2xl bg-paper p-6">
                <Icon name="beam" className="h-6 w-6 shrink-0 text-teal" />
                <span className="font-medium">{u[locale]}</span>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12">
            <Link href="/services/steel-construction" className="btn-primary">
              {nav("services")}: {locale === "tr" ? "Çelik Yapı" : "Steel Construction"} <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="h-24" />
      <CtaBand />
    </>
  );
}
