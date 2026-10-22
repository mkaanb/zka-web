"use client";

import { useAnimate, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { AssemblingLogoSvg, BUILD_SEQUENCE } from "./AssemblingLogo";

/** Plays the logo assembly on every visit to the under-construction page. */
export function ComingSoonLogo() {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reduce = useReducedMotion();

  useEffect(() => {
    const controls = animate(BUILD_SEQUENCE);
    if (reduce) controls.complete(); // jump straight to the finished logo
  }, [animate, reduce]);

  return (
    <div ref={scope}>
      <AssemblingLogoSvg tone="dark" className="w-[min(70vw,340px)]" />
    </div>
  );
}
