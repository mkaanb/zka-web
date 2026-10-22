import { getTranslations, setRequestLocale } from "next-intl/server";
import { Shard } from "@/components/brand/Motifs";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { HOME, PROCESS_PAGE, PROCESS_STEPS } from "@/content/pages";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/process",
    title: PROCESS_PAGE.meta.title[locale],
    description: PROCESS_PAGE.meta.description[locale],
  });
}

export default async function ProcessPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("process"), path: "/process" }])} />
      <PageHero
        eyebrow={PROCESS_PAGE.eyebrow[locale]}
        title={HOME.processHeading.title[locale]}
        lead={PROCESS_PAGE.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("process"), href: "/process" }]}
      />

      <section className="container-x py-24 lg:py-32">
        <ol className="relative mx-auto max-w-4xl">
          <span className="absolute top-0 bottom-0 left-6 w-px bg-graphite/10 lg:left-1/2" aria-hidden="true" />
          {PROCESS_STEPS.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal as="li" key={i} className="relative mb-16 grid gap-4 pl-20 last:mb-0 lg:grid-cols-2 lg:gap-16 lg:pl-0">
                <span className="absolute top-0 left-0 grid h-12 w-12 place-items-center rounded-full bg-graphite font-display text-sm font-bold text-paper lg:left-1/2 lg:-translate-x-1/2">
                  0{i + 1}
                </span>
                <div className={`${right ? "lg:col-start-2" : "lg:text-right"} lg:pt-1`}>
                  <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">{s.duration[locale]}</p>
                  <h2 className="mt-2 text-2xl font-bold">{s.title[locale]}</h2>
                  <p className="mt-3 leading-relaxed text-graphite/70">{s.text[locale]}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </section>

      <section className="relative overflow-hidden bg-graphite py-24 text-paper">
        <Shard className="absolute -top-10 -right-10 h-64 w-64 text-teal/10" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2">
          <h2 className="text-3xl font-bold lg:text-4xl">{PROCESS_PAGE.promise.title[locale]}</h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            {PROCESS_PAGE.promise.items.map((it, i) => (
              <Reveal as="li" key={i} delay={i * 0.06} className="flex gap-3">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span className="text-paper/80">{it[locale]}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="h-24" />
      <CtaBand />
    </>
  );
}
