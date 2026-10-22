"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { LOGO_SHAPES } from "@/components/brand/logoData";
import { MARK_VIEWBOX, recolor } from "@/components/brand/LogoMark";

// How far each shard drifts apart as the hero scrolls away (SVG units).
const DRIFT: Record<string, [number, number]> = {
  greyBase: [-60, 40],
  greyMid: [-110, -40],
  greyTop: [-160, -140],
  tealBase: [60, 40],
  tealMid: [110, -40],
  tealUpper: [150, -130],
  tealPeak: [90, -260],
  arc: [0, 80],
};

function ShardPath({ id, d, fill, progress }: { id: string; d: string; fill: string; progress: MotionValue<number> }) {
  const [dx, dy] = DRIFT[id] ?? [0, 0];
  const x = useTransform(progress, [0, 1], [0, dx]);
  const y = useTransform(progress, [0, 1], [0, dy]);
  return <motion.path d={d} fill={fill} style={{ x, y }} />;
}

/** The roof mark, deconstructing gently into its shards as the hero scrolls away. */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <div ref={ref} className="relative aspect-[1300/760] w-full">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <svg viewBox={MARK_VIEWBOX} className="h-full w-full overflow-visible" aria-hidden="true">
          {LOGO_SHAPES.map((s) =>
            reduce ? (
              <path key={s.id} d={s.d} fill={recolor(s.fill, "dark")} />
            ) : (
              <ShardPath key={s.id} id={s.id} d={s.d} fill={recolor(s.fill, "dark")} progress={progress} />
            ),
          )}
        </svg>
      </motion.div>
    </div>
  );
}
