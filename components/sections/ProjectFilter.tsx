"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

/** Client-side category filter over pre-rendered project cards. */
export function ProjectFilter({
  categories,
  allLabel,
  items,
}: {
  categories: { id: string; label: string }[];
  allLabel: string;
  items: { id: string; category: string; node: ReactNode }[];
}) {
  const [active, setActive] = useState<string>("all");
  const visible = items.filter((i) => active === "all" || i.category === active);
  const used = new Set(items.map((i) => i.category));

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2">
        {[{ id: "all", label: allLabel }, ...categories.filter((c) => used.has(c.id))].map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={active === c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              active === c.id
                ? "border-graphite bg-graphite text-paper"
                : "border-graphite/15 hover:border-teal hover:text-teal"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <motion.ul layout className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((i) => (
            <motion.li
              key={i.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
            >
              {i.node}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
