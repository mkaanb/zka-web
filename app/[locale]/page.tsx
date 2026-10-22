import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArcDivider, Rule } from "@/components/brand/Motifs";
import { CtaBand } from "@/components/sections/CtaBand";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Counter } from "@/components/ui/Counter";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { HOME, PROCESS_STEPS } from "@/content/pages";
import { PROJECTS } from "@/content/projects";
import { SERVICES } from "@/content/services";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    ...buildMetadata({ locale, title: HOME.meta.title[locale], description: HOME.meta.description[locale] }),
    title: { absolute: HOME.meta.title[locale] },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("common");
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-graphite pt-28 pb-24 text-paper">
        <div className="blueprint absolute inset-0 text-paper/40" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-graphite to-transparent" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">{HOME.hero.eyebrow[locale]}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl leading-[0.98] font-extrabold sm:text-6xl lg:text-7xl xl:text-8xl">
                {HOME.hero.title[locale].split(". ").map((w, i, arr) => (
                  <span key={i} className={`block ${i === arr.length - 1 ? "text-teal" : ""}`}>
                    {w}
                    {i < arr.length - 1 ? "." : ""}
                  </span>
                ))}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">{HOME.hero.lead[locale]}</p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                {HOME.hero.primary[locale]} <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost text-paper">
                {HOME.hero.secondary[locale]}
              </Link>
            </Reveal>
          </div>
          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <HeroVisual />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.3em] text-paper/40 uppercase sm:flex">
          {HOME.hero.scroll[locale]}
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-teal to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-graphite pb-24 text-paper">
        <div className="container-x">
          <Rule className="mb-14 text-paper" />
          <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {HOME.stats.map((s, i) => (
              <Reveal key={s.key} delay={i * 0.08} className="flex flex-col-reverse">
                <dt className="mt-2 text-sm text-paper/55">{s.label[locale]}</dt>
                <dd className="font-display text-4xl font-extrabold text-paper sm:text-5xl">
                  <Counter value={SITE.stats[s.key]} suffix={s.suffix} locale={locale} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
      <ArcDivider className="-mt-px rotate-180 text-graphite" />

      {/* Intro */}
      <section className="container-x grid gap-12 py-24 lg:grid-cols-2 lg:py-32">
        <SectionHeading eyebrow={HOME.intro.eyebrow[locale]} title={HOME.intro.title[locale]} />
        <Reveal delay={0.1} className="lg:pt-10">
          <p className="text-lg leading-relaxed text-graphite/75">{HOME.intro.text[locale]}</p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-teal hover:gap-3">
            {t("learnMore")} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="container-x pb-24 lg:pb-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={HOME.servicesHeading.eyebrow[locale]} title={HOME.servicesHeading.title[locale]} />
          <Link href="/services" className="btn-ghost">
            {t("viewAll")}
          </Link>
        </div>
        <ServiceGrid services={SERVICES} locale={locale} />
      </section>

      {/* Featured projects */}
      <section className="bg-paper-2 py-24 lg:py-32">
        <div className="container-x">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={HOME.projectsHeading.eyebrow[locale]} title={HOME.projectsHeading.title[locale]} />
            <Link href="/projects" className="btn-ghost">
              {t("viewAll")}
            </Link>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {featured[0] && (
              <Reveal className="lg:col-span-2">
                <ProjectCard project={featured[0]} locale={locale} index={0} placeholderLabel={t("placeholderImage")} large />
              </Reveal>
            )}
            {featured.slice(1).map((p, i) => (
              <Reveal key={p.slug} delay={0.1 * (i + 1)}>
                <ProjectCard project={p} locale={locale} index={i + 1} placeholderLabel={t("placeholderImage")} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow={HOME.processHeading.eyebrow[locale]} title={HOME.processHeading.title[locale]} className="mb-14" />
        <ol className="grid gap-px overflow-hidden rounded-3xl bg-graphite/10 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal as="li" key={i} delay={(i % 3) * 0.08} className="group bg-paper p-8 lg:p-10">
              <span className="font-display text-5xl font-extrabold text-graphite/10 transition-colors group-hover:text-teal">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/65">{s.text[locale]}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link href="/process" className="inline-flex items-center gap-2 font-semibold text-teal">
            {t("learnMore")} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why ZKA */}
      <section className="relative overflow-hidden bg-graphite py-24 text-paper lg:py-32">
        <div className="blueprint absolute inset-0 text-paper/30" aria-hidden="true" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow={HOME.why.eyebrow[locale]} title={HOME.why.title[locale]} />
          <ul className="grid gap-10 sm:grid-cols-2">
            {HOME.why.items.map((it, i) => (
              <Reveal as="li" key={i} delay={i * 0.08}>
                <span className="mb-5 block h-[2px] w-10 bg-teal" />
                <h3 className="text-xl font-bold">{it.title[locale]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{it.text[locale]}</p>
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
