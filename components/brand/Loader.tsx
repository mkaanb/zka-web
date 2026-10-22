"use client";

import { motion, useAnimate, type AnimationSequence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { INVESTMENT_GLYPHS, LOGO_RULE, LOGO_SHAPES, ZKA_GLYPHS } from "./logoData";
import { FULL_VIEWBOX, logoPalette, recolor } from "./LogoMark";

import { INTRO_KEY } from "./intro";

/** Order the roof shards land in: bottom-up, alternating wings, peak last. */
const DROP_ORDER = ["greyBase", "tealBase", "greyMid", "tealMid", "greyTop", "tealUpper", "tealPeak"];
const START_TILT: Record<string, number> = {
  greyBase: -6, tealBase: 6, greyMid: -9, tealMid: 8, greyTop: -5, tealUpper: 7, tealPeak: -4,
};
// Start well above the viewport (SVG user units; the logo is ~420px for 1300 units).
const DROP_FROM = -4200;
const shards = LOGO_SHAPES.filter((s) => s.id !== "arc");
const arc = LOGO_SHAPES.find((s) => s.id === "arc")!;

// Height of the viewBox (FULL_VIEWBOX) and the offset of the roof mark inside it,
// used to fly the logo into the header (whose mark uses MARK_VIEWBOX).
const FULL_H = 1180;
const MARK_TOP_OFFSET = 10;

/**
 * Intro animation: the base arc draws in, the roof shards fall from the top
 * of the screen and stack into the ZKA roof, then the wordmark appears and
 * the logo flies into the header. Shown once per browser session.
 */
export function Loader({ skipLabel }: { skipLabel: string }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [done, setDone] = useState(false);
  const skipped = useRef(false);
  const p = logoPalette("light");

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

    const build: AnimationSequence = [
      ["[data-arc-line]", { pathLength: [0, 1] }, { duration: 0.55, ease: "easeInOut" }],
      ["[data-arc-fill]", { opacity: [0, 1] }, { duration: 0.3, at: "-0.15" }],
      ...DROP_ORDER.map(
        (id, i) =>
          [
            `[data-shard="${id}"]`,
            { y: [DROP_FROM, 0, -22, 0], rotate: [START_TILT[id], 0, 0, 0] },
            {
              duration: 0.8,
              times: [0, 0.62, 0.8, 1],
              ease: ["easeIn", "easeOut", "easeIn"],
              at: 0.45 + i * 0.1,
            },
          ] as AnimationSequence[number],
      ),
      ["[data-roof]", { scaleY: [1, 0.975, 1] }, { duration: 0.28, at: 1.55, ease: "easeOut" }],
      ["[data-arc-line]", { opacity: 0 }, { duration: 0.2, at: 1.5 }],
      ["[data-zka]", { opacity: [0, 1], y: [40, 0] }, { duration: 0.45, at: 1.6, ease: [0.16, 1, 0.3, 1] }],
      ["[data-rule]", { scaleX: [0, 1] }, { duration: 0.45, at: 1.8, ease: [0.16, 1, 0.3, 1] }],
      ["[data-inv]", { opacity: [0, 1], x: 0 }, { duration: 0.5, at: 1.9, ease: [0.16, 1, 0.3, 1] }],
    ];

    (async () => {
      await animate(build);
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
        <svg
          viewBox={FULL_VIEWBOX}
          className="w-[min(78vw,420px)] overflow-visible"
          style={{ transformOrigin: "0 0" }}
        >
          <motion.path
            data-arc-line
            d={arc.d}
            fill="none"
            stroke={p.earth}
            strokeWidth={4}
            initial={{ pathLength: 0 }}
          />
          <motion.path data-arc-fill d={arc.d} fill={p.earth} initial={{ opacity: 0 }} />
          <motion.g data-roof style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}>
            {shards.map((s) => (
              <motion.path
                key={s.id}
                data-shard={s.id}
                d={s.d}
                fill={recolor(s.fill, "light")}
                initial={{ y: DROP_FROM, rotate: START_TILT[s.id] ?? 0 }}
                style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
              />
            ))}
          </motion.g>
          <motion.g data-zka fill={p.teal} initial={{ opacity: 0 }}>
            {ZKA_GLYPHS.map((g, i) => (
              <path key={i} d={g.d} transform={`translate(${g.x} ${g.y})`} />
            ))}
          </motion.g>
          <motion.line
            data-rule
            x1={LOGO_RULE.x1}
            x2={LOGO_RULE.x2}
            y1={LOGO_RULE.y}
            y2={LOGO_RULE.y}
            stroke={p.earth}
            strokeWidth={3}
            initial={{ scaleX: 0 }}
            style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}
          />
          {INVESTMENT_GLYPHS.map((g, i) => (
            <g key={i} transform={`translate(${g.x} ${g.y})`}>
              <motion.path
                data-inv
                d={g.d}
                fill={p.earth}
                initial={{ opacity: 0, x: (i - 4.5) * -14 }}
              />
            </g>
          ))}
        </svg>
      </div>
      <p className="absolute bottom-8 left-0 right-0 text-center text-xs uppercase tracking-[0.3em] text-steel/60">
        {skipLabel}
      </p>
    </div>
  );
}
