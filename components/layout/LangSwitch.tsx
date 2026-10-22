"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LangSwitch({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("common");
  return (
    <nav aria-label={t("language")} className={`flex items-center gap-1 text-xs font-semibold ${className}`}>
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-30">/</span>}
          <Link
            href={pathname}
            locale={l}
            aria-current={l === locale ? "true" : undefined}
            className={`uppercase transition-colors ${l === locale ? "text-teal" : "opacity-60 hover:opacity-100"}`}
          >
            {l}
          </Link>
        </span>
      ))}
    </nav>
  );
}
