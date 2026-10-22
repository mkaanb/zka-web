import type { Block } from "@/content/insights";

/** Renders article / legal body blocks with the site's prose styles. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-zka">
      {blocks.map((b, i) => {
        if ("h2" in b) return <h2 key={i}>{b.h2}</h2>;
        if ("ul" in b)
          return (
            <ul key={i}>
              {b.ul.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          );
        return <p key={i}>{b.p}</p>;
      })}
    </div>
  );
}
