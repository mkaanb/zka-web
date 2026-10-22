import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { PROJECT_CATEGORIES, type Project } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function ProjectCard({
  project,
  locale,
  index = 0,
  placeholderLabel,
  large = false,
}: {
  project: Project;
  locale: Locale;
  index?: number;
  placeholderLabel: string;
  large?: boolean;
}) {
  const cat = PROJECT_CATEGORIES.find((c) => c.id === project.category);
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className={`relative overflow-hidden rounded-2xl ${large ? "aspect-[4/3] lg:aspect-[21/9]" : "aspect-[4/3]"}`}>
        <div className="ease-out-expo h-full w-full transition-transform duration-[1200ms] group-hover:scale-105">
          <Placeholder seed={index} src={project.images[0]} alt={project.title[locale]} label={placeholderLabel} />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold tracking-wider text-graphite uppercase backdrop-blur">
          {cat?.label[locale]}
        </span>
        <span className="absolute right-4 bottom-4 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-teal text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Icon name="arrow" className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold transition-colors group-hover:text-teal">{project.title[locale]}</h3>
          <p className="mt-1 text-sm opacity-60">{project.location[locale]}</p>
        </div>
        <span className="font-display text-sm opacity-40">{project.year}</span>
      </div>
    </Link>
  );
}
