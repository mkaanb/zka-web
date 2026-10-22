import { LOGO_SHAPES } from "./logoData";
import { MARK_VIEWBOX } from "./LogoMark";

const roof = LOGO_SHAPES.filter((s) => s.id !== "arc");
const arc = LOGO_SHAPES.find((s) => s.id === "arc")!;

/** Curved section edge echoing the logo's base arc. Place at the top of a section. */
export function ArcDivider({ className = "text-graphite", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 lg:h-20 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path d="M0 90 C 420 -10 1020 -10 1440 90 Z" fill="currentColor" />
    </svg>
  );
}

/** Outline of the roof mark, used as a large faint background graphic. */
export function RoofOutline({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={className} aria-hidden="true" fill="none">
      {roof.map((s) => (
        <path key={s.id} d={s.d} stroke="currentColor" strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
      ))}
      <path d={arc.d} stroke="currentColor" strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** A single roof shard, handy as a small accent (bullets, card corners). */
export function Shard({ id = "tealPeak", className = "" }: { id?: string; className?: string }) {
  const s = LOGO_SHAPES.find((x) => x.id === id) ?? roof[0];
  const viewBox: Record<string, string> = {
    tealPeak: "760 125 450 525",
    greyTop: "300 315 420 340",
    tealUpper: "765 335 425 370",
  };
  return (
    <svg viewBox={viewBox[s.id] ?? MARK_VIEWBOX} className={className} aria-hidden="true">
      <path d={s.d} fill="currentColor" />
    </svg>
  );
}

/** Thin rule with a teal tick, echoing the line under "INVESTMENT". */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0 ${className}`} aria-hidden="true">
      <span className="h-[2px] w-10 bg-teal" />
      <span className="h-px flex-1 bg-current opacity-15" />
    </div>
  );
}
