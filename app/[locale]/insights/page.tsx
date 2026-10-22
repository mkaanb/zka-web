import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { ARTICLES } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

const COPY = {
  title: { tr: "Yapı dünyasından notlar.", en: "Notes from the world of building." },
  lead: {
    tr: "KKTC'de inşaat, çelik yapı ve yatırım üzerine rehberler ve görüşler.",
    en: "Guides and perspectives on construction, steel and investment in North Cyprus.",
  },
  description: {
    tr: "ZKA Investment blog: KKTC'de inşaat ruhsatı, çelik yapı, anahtar teslim projeler ve yatırım rehberleri.",
    en: "ZKA Investment insights: guides on building permits, steel construction, turnkey projects and investing in North Cyprus.",
  },
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const nav = await getTranslations({ locale, namespace: "nav" });
  return buildMetadata({ locale, path: "/insights", title: nav("insights"), description: COPY.description[locale] });
}

export default async function InsightsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");
  const t = await getTranslations("common");
  const df = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", { dateStyle: "long" });
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("insights"), path: "/insights" }])} />
      <PageHero
        eyebrow={nav("insights")}
        title={COPY.title[locale]}
        lead={COPY.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("insights"), href: "/insights" }]}
      />
      <section className="container-x py-24">
        <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 0.08}>
              <Link href={`/insights/${a.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <Placeholder seed={i + 1} />
                  </div>
                </div>
                <p className="mt-5 text-xs text-graphite/50">
                  <time dateTime={a.date}>{df.format(new Date(a.date))}</time> · {a.readMinutes} {t("minRead")}
                </p>
                <h2 className="mt-2 text-xl leading-snug font-bold transition-colors group-hover:text-teal">{a.title[locale]}</h2>
                <p className="mt-3 text-sm leading-relaxed text-graphite/65">{a.excerpt[locale]}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  {t("readArticle")} <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
