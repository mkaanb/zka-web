import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Blocks } from "@/components/ui/Blocks";
import { Icon } from "@/components/ui/Icon";
import { ARTICLES, getArticle } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { articleLd, breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => ARTICLES.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({ locale, path: `/insights/${slug}`, title: a.title[locale], description: a.excerpt[locale], type: "article" });
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const a = getArticle(slug);
  if (!a) notFound();
  const nav = await getTranslations("nav");
  const t = await getTranslations("common");
  const df = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", { dateStyle: "long" });
  const path = `/insights/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleLd(locale, { title: a.title[locale], description: a.excerpt[locale], path, date: a.date }),
          breadcrumbLd(locale, [
            { name: nav("home"), path: "" },
            { name: nav("insights"), path: "/insights" },
            { name: a.title[locale], path },
          ]),
        ]}
      />
      <PageHero
        eyebrow={`${df.format(new Date(a.date))} · ${a.readMinutes} ${t("minRead")}`}
        title={a.title[locale]}
        lead={a.excerpt[locale]}
        crumbs={[
          { name: nav("home"), href: "/" },
          { name: nav("insights"), href: "/insights" },
          { name: a.title[locale], href: path },
        ]}
      />
      <article className="container-x max-w-3xl py-20 text-lg">
        <Blocks blocks={a.body[locale]} />
        <Link href="/insights" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-teal">
          <Icon name="arrow" className="h-4 w-4 rotate-180" /> {t("back")}
        </Link>
      </article>
      <CtaBand />
    </>
  );
}
