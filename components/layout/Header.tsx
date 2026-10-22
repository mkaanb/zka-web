"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";
import { Link, usePathname } from "@/i18n/navigation";
import { MAIN_NAV } from "@/lib/nav";
import { LangSwitch } from "./LangSwitch";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled && !open;
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-paper/85 text-graphite shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md" : "bg-transparent text-paper"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-teal focus:px-4 focus:py-2 focus:text-white">
        {t("skip")}
      </a>
      <div className={`container-x flex items-center justify-between transition-all duration-500 ${solid ? "h-16" : "h-20 lg:h-24"}`}>
        <Link href="/" className="flex items-center gap-3" aria-label="ZKA Investment">
          <span data-header-logo className="block w-12 lg:w-14">
            <LogoMark tone={solid ? "light" : "dark"} className="block h-auto w-full" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-tight text-teal">ZKA</span>
            <span className={`block text-[9px] font-semibold tracking-[0.35em] ${solid ? "text-earth" : "text-earth-light"}`}>
              INVESTMENT
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium transition-colors hover:text-teal ${isActive(item.href) ? "text-teal" : ""}`}
            >
              {t(item.key)}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-teal transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LangSwitch className="hidden sm:flex" />
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            {t("quote")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("close") : t("menu")}
          >
            <span className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 -z-10 flex flex-col bg-graphite px-6 pt-28 pb-10 text-paper lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {MAIN_NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.04 }}
                >
                  <Link href={item.href} className="block py-2 font-display text-3xl font-bold hover:text-teal">
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex items-center justify-between">
              <LangSwitch className="text-sm" />
              <Link href="/contact" className="btn-primary">
                {t("quote")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
