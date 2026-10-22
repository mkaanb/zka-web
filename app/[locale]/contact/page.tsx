import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/content/pages";
import { SERVICES } from "@/content/services";
import type { Locale } from "@/i18n/routing";
import { breadcrumbLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, path: "/contact", title: CONTACT.meta.title[locale], description: CONTACT.meta.description[locale] });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");
  const cta = await getTranslations("cta");
  const L = CONTACT.labels;

  const info = [
    { icon: "pin" as const, label: L.address[locale], value: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.countryName[locale]}` },
    { icon: "phone" as const, label: L.phone[locale], value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    { icon: "mail" as const, label: L.email[locale], value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: "clock" as const, label: L.hours[locale], value: SITE.hours[locale] },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, [{ name: nav("home"), path: "" }, { name: nav("contact"), path: "/contact" }])} />
      <PageHero
        eyebrow={CONTACT.eyebrow[locale]}
        title={CONTACT.title[locale]}
        lead={CONTACT.lead[locale]}
        crumbs={[{ name: nav("home"), href: "/" }, { name: nav("contact"), href: "/contact" }]}
      />

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1.4fr_1fr] lg:py-28">
        <Reveal>
          <h2 className="mb-8 text-2xl font-bold">{CONTACT.formTitle[locale]}</h2>
          <ContactForm mode="contact" services={SERVICES.map((s) => ({ value: s.slug, label: s.title[locale] }))} />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-graphite p-8 text-paper lg:p-10">
            <h2 className="mb-8 text-2xl font-bold">{CONTACT.infoTitle[locale]}</h2>
            <ul className="space-y-6">
              {info.map((i) => (
                <li key={i.label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-paper/15 text-teal">
                    <Icon name={i.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.2em] text-paper/45 uppercase">{i.label}</span>
                    {i.href ? (
                      <a href={i.href} className="hover:text-teal">{i.value}</a>
                    ) : (
                      <span>{i.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 w-full"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> {cta("secondary")}
            </a>
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-32">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-graphite/10 sm:aspect-[21/9]">
          <iframe
            title={L.address[locale]}
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
            className="h-full w-full grayscale-[0.6] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
