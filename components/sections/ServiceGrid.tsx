import { getTranslations } from "next-intl/server";
import { Shard } from "@/components/brand/Motifs";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/content/services";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function ServiceGrid({ services, locale }: { services: Service[]; locale: Locale }) {
  const t = await getTranslations("common");
  return (
    <ul className="grid gap-px overflow-hidden rounded-3xl border border-graphite/10 bg-graphite/10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08} className="bg-paper">
          <Link
            href={`/services/${s.slug}`}
            className="group relative flex h-full flex-col overflow-hidden p-8 transition-colors duration-500 hover:bg-graphite hover:text-paper lg:p-10"
          >
            <Shard className="absolute -top-6 -right-6 h-28 w-28 text-teal opacity-0 transition-all duration-500 group-hover:-top-2 group-hover:-right-2 group-hover:opacity-20" />
            <span className="mb-8 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-current/15 text-teal">
                <Icon name={s.icon} />
              </span>
              <span className="font-display text-sm opacity-40">0{i + 1}</span>
            </span>
            <h3 className="text-xl font-bold">{s.title[locale]}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed opacity-70">{s.short[locale]}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal">
              {t("learnMore")}
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
