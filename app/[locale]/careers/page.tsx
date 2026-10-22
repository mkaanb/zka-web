import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBand } from "@/components/sections/CtaBand";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ROLES } from "@/content/careers";
import { CAREERS } from "@/content/pages";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, path: "/careers", title: CAREERS.meta.title[locale], description: CAREERS.meta.description[locale] });
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("careers"), path: "/careers" }])} />
      <PageHero
        eyebrow={CAREERS.eyebrow[locale]}
        title={CAREERS.title[locale]}
        lead={CAREERS.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("careers"), href: "/careers" }]}
      />

      <section className="container-x py-20">
        <ul className="grid gap-10 md:grid-cols-3">
          {CAREERS.perks.map((p, i) => (
            <Reveal as="li" key={i} delay={i * 0.08}>
              <span className="mb-5 block h-[2px] w-10 bg-teal" />
              <h2 className="text-xl font-bold">{p.title[locale]}</h2>
              <p className="mt-2 text-graphite/65">{p.text[locale]}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-x pb-24">
        <SectionHeading title={CAREERS.openTitle[locale]} className="mb-10" />
        <ul className="divide-y divide-graphite/10 border-y border-graphite/10">
          {ROLES.map((r, i) => (
            <Reveal as="li" key={r.id} delay={i * 0.05}>
              <a href="#apply" className="group grid gap-3 py-7 md:grid-cols-[1.2fr_1.6fr_auto] md:items-center md:gap-10">
                <span>
                  <span className="block text-xl font-bold transition-colors group-hover:text-teal">{r.title[locale]}</span>
                  <span className="text-sm text-graphite/55">
                    {r.location[locale]} · {r.type[locale]}
                  </span>
                </span>
                <span className="text-sm text-graphite/70">{r.summary[locale]}</span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  {CAREERS.apply[locale]} <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="apply" className="scroll-mt-24 bg-paper-2 py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading title={CAREERS.generalTitle[locale]} lead={CAREERS.generalText[locale]} />
          <ContactForm mode="careers" positions={ROLES.map((r) => ({ value: r.id, label: r.title[locale] }))} />
        </div>
      </section>

      <div className="h-24" />
      <CtaBand />
    </>
  );
}
