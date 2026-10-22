import type { Locale } from "@/i18n/routing";

/** A string (or any value) provided in every site language. */
export type Localized<T = string> = Record<Locale, T>;

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
