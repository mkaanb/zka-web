import { getTranslations } from "next-intl/server";
import { ComingSoonLogo } from "@/components/brand/ComingSoonLogo";
import { RoofOutline } from "@/components/brand/Motifs";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/i18n/routing";
import { SITE } from "@/lib/site";
import { LangSwitch } from "./LangSwitch";

/** Shown on every route of the production domain until launch (see lib/launch.ts). */
export async function UnderConstruction({ locale }: { locale: Locale }) {
  const t = await getTranslations("construction");
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-graphite text-paper">
      <div className="blueprint absolute inset-0 text-paper/40" aria-hidden="true" />
      <RoofOutline className="pointer-events-none absolute -right-32 -bottom-32 w-[720px] max-w-[110vw] text-teal/10" />

      <header className="container-x relative flex items-center justify-end py-6">
        <LangSwitch className="text-sm" />
      </header>

      <main id="main" className="container-x relative flex flex-1 flex-col items-center justify-center py-10 text-center">
        <h1 className="sr-only">{SITE.name}</h1>
        <ComingSoonLogo />
        <p className="eyebrow mt-12">{t("eyebrow")}</p>
        <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-extrabold sm:text-5xl">{t("title")}</h2>
        <p className="mt-6 max-w-xl leading-relaxed text-paper/65">{t("text")}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Icon name="whatsapp" className="h-5 w-5" /> {t("whatsapp")}
          </a>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="btn-ghost text-paper">
            <Icon name="phone" className="h-4 w-4" /> {t("call")}
          </a>
        </div>

        <ul className="mt-10 flex flex-col items-center gap-2 text-sm text-paper/60 sm:flex-row sm:gap-6">
          <li>
            <a href={`mailto:${SITE.email}`} className="hover:text-teal">{SITE.email}</a>
          </li>
          <li>{SITE.phone}</li>
          <li>
            {SITE.address.city}, {SITE.address.countryName[locale]}
          </li>
        </ul>
      </main>

      <footer className="container-x relative flex flex-col items-center gap-2 py-6 text-xs text-paper/40 sm:flex-row sm:justify-between">
        <p>{t("services")}</p>
        <p>© {year} {SITE.name}</p>
      </footer>
    </div>
  );
}
