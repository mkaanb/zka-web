import type { ReactNode } from "react";
import { RoofOutline } from "@/components/brand/Motifs";
import { Link } from "@/i18n/navigation";

/** Dark intro band at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: { name: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-graphite pt-36 pb-20 text-paper lg:pt-44 lg:pb-28">
      <div className="blueprint absolute inset-0 text-paper/50" aria-hidden="true" />
      <RoofOutline className="pointer-events-none absolute -right-24 -bottom-24 w-[640px] max-w-[90vw] text-teal/15" />
      <div className="container-x relative">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-paper/50">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.href} className="hover:text-teal">
                      {c.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-paper/80">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
