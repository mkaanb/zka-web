import { getTranslations, setRequestLocale } from "next-intl/server";
import { Shard } from "@/components/brand/Motifs";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MISSION_VISION } from "@/content/pages";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/about/mission-vision",
    title: MISSION_VISION.meta.title[locale],
    description: MISSION_VISION.meta.description[locale],
  });
}

export default async function MissionVisionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale, [
          { name: nav("home"), path: "" },
          { name: nav("about"), path: "/about" },
          { name: nav("missionVision"), path: "/about/mission-vision" },
        ])}
      />
      <PageHero
        eyebrow={MISSION_VISION.eyebrow[locale]}
        title={MISSION_VISION.title[locale]}
        crumbs={[
          { name: nav("home"), href: "/" },
          { name: nav("about"), href: "/about" },
          { name: nav("missionVision"), href: "/about/mission-vision" },
        ]}
      />

      <section className="container-x space-y-24 py-24 lg:py-32">
        {[MISSION_VISION.mission, MISSION_VISION.vision].map((m, i) => (
          <Reveal key={i} className={`grid items-start gap-8 lg:grid-cols-[220px_1fr] ${i === 1 ? "lg:pl-24" : ""}`}>
            <div className="flex items-center gap-4">
              <Shard id={i === 0 ? "tealPeak" : "greyTop"} className={`h-12 w-12 ${i === 0 ? "text-teal" : "text-steel"}`} />
              <h2 className="text-sm font-semibold tracking-[0.25em] uppercase">{m.label[locale]}</h2>
            </div>
            <p className="font-display text-3xl leading-snug font-semibold text-graphite lg:text-4xl">{m.text[locale]}</p>
          </Reveal>
        ))}
      </section>

      <section className="bg-paper-2 py-24">
        <ul className="container-x grid gap-10 md:grid-cols-3">
          {MISSION_VISION.pillars.map((p, i) => (
            <Reveal as="li" key={i} delay={i * 0.08}>
              <span className="mb-5 block h-[2px] w-10 bg-teal" />
              <h3 className="text-xl font-bold">{p.title[locale]}</h3>
              <p className="mt-3 text-graphite/65">{p.text[locale]}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <div className="h-24" />
      <CtaBand />
    </>
  );
}
