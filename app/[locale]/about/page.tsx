import { getTranslations, setRequestLocale } from "next-intl/server";
import { LogoMark } from "@/components/brand/LogoMark";
import { Rule } from "@/components/brand/Motifs";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT, MISSION_VISION } from "@/content/pages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, path: "/about", title: ABOUT.meta.title[locale], description: ABOUT.meta.description[locale] });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");
  const t = await getTranslations("common");

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("about"), path: "/about" }])} />
      <PageHero
        eyebrow={ABOUT.eyebrow[locale]}
        title={ABOUT.title[locale]}
        lead={ABOUT.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("about"), href: "/about" }]}
      />

      {/* Story */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Placeholder seed={2} label={t("placeholderImage")} />
        </Reveal>
        <div>
          <SectionHeading eyebrow={ABOUT.story.title[locale]} title={ABOUT.title[locale]} />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-graphite/75">
            {ABOUT.story.paragraphs.map((p, i) => (
              <p key={i}>{p[locale]}</p>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex items-center gap-6">
            <LogoMark className="w-20" />
            <Rule className="flex-1" />
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision summary */}
      <section id="mission-vision" className="bg-graphite py-24 text-paper lg:py-32">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {[MISSION_VISION.mission, MISSION_VISION.vision].map((m, i) => (
            <Reveal key={i} delay={i * 0.1} className="rounded-3xl border border-paper/10 p-10 lg:p-14">
              <p className="eyebrow mb-6">{m.label[locale]}</p>
              <p className="font-display text-2xl leading-snug font-semibold lg:text-3xl">{m.text[locale]}</p>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-10">
          <Link href="/about/mission-vision" className="inline-flex items-center gap-2 font-semibold text-teal">
            {nav("missionVision")} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow={ABOUT.values.eyebrow[locale]} title={ABOUT.values.title[locale]} className="mb-14" />
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.values.items.map((v, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="border-t border-graphite/15 pt-6">
              <span className="font-display text-sm text-teal">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{v.title[locale]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/65">{v.text[locale]}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section className="bg-paper-2 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={ABOUT.timeline.eyebrow[locale]} title={ABOUT.lead[locale]} className="mb-16" />
          <ol className="relative grid gap-10 border-l border-graphite/15 pl-8 lg:grid-cols-5 lg:border-t lg:border-l-0 lg:pt-10 lg:pl-0">
            {ABOUT.timeline.items.map((it, i) => (
              <Reveal as="li" key={it.year} delay={i * 0.08} className="relative">
                <span className="absolute top-2 -left-[37px] h-2.5 w-2.5 rounded-full bg-teal ring-4 ring-paper-2 lg:-top-[45px] lg:left-0" />
                <p className="font-display text-3xl font-extrabold">{it.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-graphite/65">{it.text[locale]}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow={ABOUT.team.eyebrow[locale]} title={ABOUT.team.title[locale]} className="mb-14" />
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.team.members.map((m, i) => (
            <Reveal as="li" key={i} delay={i * 0.08}>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <Placeholder seed={i} />
              </div>
              <h3 className="mt-5 font-bold">{m.name}</h3>
              <p className="text-sm text-graphite/60">{m.role[locale]}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
