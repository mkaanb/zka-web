"use client";

import { motion, type AnimationSequence } from "framer-motion";
import { INVESTMENT_GLYPHS, LOGO_RULE, LOGO_SHAPES, ZKA_GLYPHS } from "./logoData";
import { FULL_VIEWBOX, logoPalette, recolor, type LogoTone } from "./LogoMark";

/** Order the roof shards land in: bottom-up, alternating wings, peak last. */
const DROP_ORDER = ["greyBase", "tealBase", "greyMid", "tealMid", "greyTop", "tealUpper", "tealPeak"];
const START_TILT: Record<string, number> = {
  greyBase: -6, tealBase: 6, greyMid: -9, tealMid: 8, greyTop: -5, tealUpper: 7, tealPeak: -4,
};
// Start well above the viewport (SVG user units; the logo is ~420px for 1300 units).
const DROP_FROM = -4200;
const shards = LOGO_SHAPES.filter((s) => s.id !== "arc");
const arc = LOGO_SHAPES.find((s) => s.id === "arc")!;

/**
 * The base arc draws in, the roof shards fall and stack into the ZKA roof,
 * then the wordmark appears. Run it with `useAnimate` on a scope containing
 * <AssemblingLogoSvg />.
 */
export const BUILD_SEQUENCE: AnimationSequence = [
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

/** Full stacked logo, rendered disassembled, with every part addressable by BUILD_SEQUENCE. */
export function AssemblingLogoSvg({
  tone = "light",
  className = "w-[min(78vw,420px)]",
}: {
  tone?: LogoTone;
  className?: string;
}) {
  const p = logoPalette(tone);
  return (
    <svg viewBox={FULL_VIEWBOX} className={`overflow-visible ${className}`} style={{ transformOrigin: "0 0" }} aria-hidden="true">
      <motion.path data-arc-line d={arc.d} fill="none" stroke={p.earth} strokeWidth={4} initial={{ pathLength: 0 }} />
      <motion.path data-arc-fill d={arc.d} fill={p.earth} initial={{ opacity: 0 }} />
      <motion.g data-roof style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}>
        {shards.map((s) => (
          <motion.path
            key={s.id}
            data-shard={s.id}
            d={s.d}
            fill={recolor(s.fill, tone)}
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
          <motion.path data-inv d={g.d} fill={p.earth} initial={{ opacity: 0, x: (i - 4.5) * -14 }} />
        </g>
      ))}
    </svg>
  );
}
