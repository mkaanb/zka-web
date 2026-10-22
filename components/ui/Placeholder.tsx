import { RoofOutline } from "@/components/brand/Motifs";

const TONES = [
  "from-graphite to-steel",
  "from-steel to-graphite-3",
  "from-earth to-graphite",
  "from-graphite-3 to-teal-dark",
] as const;

/**
 * Architectural placeholder used until real photography is supplied.
 * Pass `src` to show a real image instead.
 */
export function Placeholder({
  label,
  seed = 0,
  src,
  alt = "",
  className = "",
}: {
  label?: string;
  seed?: number;
  src?: string;
  alt?: string;
  className?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} loading="lazy" />;
  }
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${TONES[seed % TONES.length]} ${className}`}
      role="img"
      aria-label={alt || label}
    >
      <div className="blueprint absolute inset-0 text-white/60" />
      <RoofOutline className="absolute -right-[10%] -bottom-[15%] w-[85%] text-white/20" />
      {label && (
        <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
          {label}
        </span>
      )}
    </div>
  );
}
