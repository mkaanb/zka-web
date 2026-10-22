import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { INTRO_KEY } from "@/components/brand/intro";
import { Loader } from "@/components/brand/Loader";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { routing, type Locale } from "@/i18n/routing";
import { inter, manrope } from "@/lib/fonts";
import { JsonLd, organizationLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: "#141717" };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = locale === "tr";
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: tr
        ? "ZKA Investment | KKTC Çelik Yapı, İnşaat & Anahtar Teslim Projeler"
        : "ZKA Investment | Steel Construction & Turnkey Projects in North Cyprus",
      template: "%s | ZKA Investment",
    },
    description: tr
      ? "ZKA Investment Ltd.: KKTC'de mimari tasarım, statik proje, çelik yapı ve anahtar teslim inşaat çözümleri."
      : "ZKA Investment Ltd.: architectural design, structural engineering, steel construction and turnkey projects in North Cyprus (TRNC).",
    icons: { icon: "/logo.svg" },
  };
}

// Runs before paint: hide the intro if it already played this session.
const introScript = `try{if(sessionStorage.getItem("${INTRO_KEY}")==="1")document.documentElement.setAttribute("data-intro-seen","")}catch(e){}`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("common");
  const cta = await getTranslations("cta");

  return (
    <html lang={locale} className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <noscript>
          <style>{`.zka-loader{display:none}`}</style>
        </noscript>
        <JsonLd data={organizationLd(locale as Locale)} />
      </head>
      <body>
        <NextIntlClientProvider>
          <Loader skipLabel={t("skipIntro")} />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFab label={cta("secondary")} />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
