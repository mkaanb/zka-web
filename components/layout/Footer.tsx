import { getLocale, getTranslations } from "next-intl/server";
import { LogoMark } from "@/components/brand/LogoMark";
import { ArcDivider } from "@/components/brand/Motifs";
import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/content/services";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { COMPANY_NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-graphite text-paper/70">
      <ArcDivider className="absolute -top-10 text-graphite sm:-top-16 lg:-top-20" />
      <div className="container-x grid gap-12 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <LogoMark variant="full" tone="dark" className="w-36" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{t("tagline")}</p>
          <div className="mt-6 flex gap-4 text-xs font-semibold uppercase tracking-widest">
            {Object.entries(SITE.social).map(([k, href]) => (
              <a key={k} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
                {k}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-paper">{t("company")}</h2>
          <ul className="space-y-2.5 text-sm">
            {COMPANY_NAV.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-teal">{nav(i.key)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-paper">{t("servicesTitle")}</h2>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-teal">{s.title[locale]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-paper">{t("contactTitle")}</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="h-5 w-5 shrink-0 text-teal" />
              <span>
                {SITE.address.street}, {SITE.address.city}
                <br />
                {SITE.address.countryName[locale]}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-teal" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-teal">{SITE.phone}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-teal" />
              <a href={`mailto:${SITE.email}`} className="hover:text-teal">{SITE.email}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="h-5 w-5 shrink-0 text-teal" />
              <span>{SITE.hours[locale]}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name} {t("rights")}</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-teal">{t("privacy")}</Link>
            <Link href="/legal/cookies" className="hover:text-teal">{t("cookies")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
