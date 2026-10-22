"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

const KEY = "zka-cookie-consent";

/** Records the visitor's choice in localStorage. Load analytics only when it is "all". */
export function CookieBanner() {
  const t = useTranslations("cookie");
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const id = setTimeout(() => setShow(true), 3500);
        return () => clearTimeout(id);
      }
    } catch {}
  }, []);

  const choose = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookies"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl bg-graphite p-5 text-sm text-paper/80 shadow-2xl sm:right-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
        >
          <p>
            {t("text")}{" "}
            <Link href="/legal/cookies" className="text-teal underline-offset-4 hover:underline">
              {t("more")}
            </Link>
          </p>
          <div className="mt-4 flex gap-3">
            <button type="button" onClick={() => choose("all")} className="btn-primary !py-2">
              {t("accept")}
            </button>
            <button type="button" onClick={() => choose("essential")} className="btn-ghost !py-2 text-paper">
              {t("decline")}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
