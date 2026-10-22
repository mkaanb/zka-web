"use client";

import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AssemblingLogoSvg, BUILD_SEQUENCE } from "./AssemblingLogo";
import { INTRO_KEY } from "./intro";

// Height of the viewBox (FULL_VIEWBOX) and the offset of the roof mark inside it,
// used to fly the logo into the header (whose mark uses MARK_VIEWBOX).
const FULL_H = 1180;
const MARK_TOP_OFFSET = 10;

/**
 * Intro animation: the logo assembles (see BUILD_SEQUENCE), then the roof
 * flies into the header logo. Shown once per browser session.
 */
export function Loader({ skipLabel }: { skipLabel: string }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [done, setDone] = useState(false);
  const skipped = useRef(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      setDone(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const finish = () => {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {}
      document.documentElement.setAttribute("data-intro-seen", "");
      document.documentElement.style.overflow = "";
      setDone(true);
    };

    (async () => {
      await animate(BUILD_SEQUENCE);
      if (skipped.current) return;
      await new Promise((r) => setTimeout(r, 250));
      if (skipped.current) return;

      // Fly the roof mark into the header logo slot.
      const svg = scope.current?.querySelector("svg");
      const target = document.querySelector("[data-header-logo]");
      const fades: Promise<unknown>[] = [
        animate("[data-overlay]", { opacity: 0 }, { duration: 0.6, ease: "easeInOut" }).finished,
        animate("[data-zka], [data-rule], [data-inv]", { opacity: 0 }, { duration: 0.25 }).finished,
      ];
      if (svg && target) {
        const from = svg.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        const s = to.width / from.width;
        const tx = to.left - from.left;
        const ty = to.top - from.top - (from.height * MARK_TOP_OFFSET * s) / FULL_H;
        fades.push(
          animate(svg, { x: tx, y: ty, scale: s }, { duration: 0.7, ease: [0.65, 0, 0.35, 1] }).finished,
        );
      }
      await Promise.all(fades);
      finish();
    })();

    const onSkip = () => {
      if (skipped.current) return;
      skipped.current = true;
      animate(scope.current, { opacity: 0 }, { duration: 0.3 }).then(finish);
    };
    const el = scope.current;
    el?.addEventListener("click", onSkip);
    window.addEventListener("keydown", onSkip);
    return () => {
      el?.removeEventListener("click", onSkip);
      window.removeEventListener("keydown", onSkip);
      document.documentElement.style.overflow = "";
    };
  }, [animate, scope]);

  if (done) return null;

  return (
    <div ref={scope} className="zka-loader fixed inset-0 z-[100] cursor-pointer" aria-hidden="true">
      <div data-overlay className="blueprint absolute inset-0 bg-paper text-steel" />
      <div className="absolute inset-0 grid place-items-center">
        <AssemblingLogoSvg />
      </div>
      <p className="absolute bottom-8 left-0 right-0 text-center text-xs uppercase tracking-[0.3em] text-steel/60">
        {skipLabel}
      </p>
    </div>
  );
}
