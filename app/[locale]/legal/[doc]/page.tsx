import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Blocks } from "@/components/ui/Blocks";
import { LEGAL } from "@/content/pages";
import { routing, type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";

type Doc = keyof typeof LEGAL;
type Props = { params: Promise<{ locale: Locale; doc: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => Object.keys(LEGAL).map((doc) => ({ locale, doc })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, doc } = await params;
  const d = LEGAL[doc as Doc];
  if (!d) return {};
  return buildMetadata({ locale, path: `/legal/${doc}`, title: d.title[locale], description: d.description[locale] });
}

export default async function LegalPage({ params }: Props) {
  const { locale, doc } = await params;
  setRequestLocale(locale);
  const d = LEGAL[doc as Doc];
  if (!d) notFound();
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHero title={d.title[locale]} crumbs={[{ name: nav("home"), href: "/" }, { name: d.title[locale], href: `/legal/${doc}` }]} />
      <article className="container-x max-w-3xl py-20 pb-32">
        <Blocks blocks={d.body[locale]} />
      </article>
    </>
  );
}
