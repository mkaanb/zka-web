import { INVESTMENT_GLYPHS, LOGO_COLORS, LOGO_RULE, LOGO_SHAPES, ZKA_GLYPHS } from "./logoData";

export type LogoTone = "light" | "dark";

/** Colours for the logo on a light (paper) or dark (graphite) background. */
export function logoPalette(tone: LogoTone) {
  return tone === "dark"
    ? { steel: "#8a9696", teal: LOGO_COLORS.teal, earth: "#b9a79d" }
    : { ...LOGO_COLORS };
}

export function recolor(fill: string, tone: LogoTone) {
  const p = logoPalette(tone);
  if (fill === LOGO_COLORS.steel) return p.steel;
  if (fill === LOGO_COLORS.earth) return p.earth;
  return p.teal;
}

/** viewBox of the roof + arc only, and of the full stacked logo. */
export const MARK_VIEWBOX = "100 120 1300 760";
export const FULL_VIEWBOX = "100 110 1300 1180";

type Props = {
  variant?: "mark" | "full";
  tone?: LogoTone;
  className?: string;
  title?: string;
};

/** Static ZKA logo, rendered from the original SVG paths. */
export function LogoMark({ variant = "mark", tone = "light", className, title = "ZKA Investment" }: Props) {
  const p = logoPalette(tone);
  return (
    <svg
      viewBox={variant === "mark" ? MARK_VIEWBOX : FULL_VIEWBOX}
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {LOGO_SHAPES.map((s) => (
        <path key={s.id} d={s.d} fill={recolor(s.fill, tone)} />
      ))}
      {variant === "full" && (
        <>
          <g fill={p.teal}>
            {ZKA_GLYPHS.map((g, i) => (
              <path key={i} d={g.d} transform={`translate(${g.x} ${g.y})`} />
            ))}
          </g>
          <line x1={LOGO_RULE.x1} x2={LOGO_RULE.x2} y1={LOGO_RULE.y} y2={LOGO_RULE.y} stroke={p.earth} strokeWidth={3} />
          <g fill={p.earth}>
            {INVESTMENT_GLYPHS.map((g, i) => (
              <path key={i} d={g.d} transform={`translate(${g.x} ${g.y})`} />
            ))}
          </g>
        </>
      )}
    </svg>
  );
}
