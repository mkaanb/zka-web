import { getTranslations } from "next-intl/server";
import { RoofOutline } from "@/components/brand/Motifs";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";

export async function CtaBand() {
  const t = await getTranslations("cta");
  return (
    <section className="container-x pt-8 pb-32">
      <Reveal className="relative overflow-hidden rounded-3xl bg-teal px-8 py-14 text-white sm:px-14 lg:py-20">
        <RoofOutline className="pointer-events-none absolute -right-10 -bottom-16 w-[520px] max-w-[80%] text-white/25" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">{t("title")}</h2>
          <p className="mt-5 text-lg text-white/85">{t("text")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn bg-graphite text-white hover:bg-graphite-2">
              {t("primary")} <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/40 hover:bg-white/10"
            >
              {t("secondary")}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
