import Link from "next/link";
import { LOGO_SHAPES } from "@/components/brand/logoData";
import { MARK_VIEWBOX, recolor } from "@/components/brand/LogoMark";
import { inter, manrope } from "@/lib/fonts";
import en from "@/messages/en.json";
import tr from "@/messages/tr.json";
import "./globals.css";

// Served as out/404.html. The locale is unknown here, so it is shown in both languages.
const MISSING = "tealUpper";

export default function NotFound() {
  return (
    <html lang="tr" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-graphite text-paper">
        <main className="blueprint relative grid min-h-svh place-items-center px-6 text-paper/90">
          <div className="max-w-xl text-center">
            <svg viewBox={MARK_VIEWBOX} className="mx-auto w-64" aria-hidden="true">
              {LOGO_SHAPES.map((s) =>
                s.id === MISSING ? (
                  <path key={s.id} d={s.d} fill="none" stroke="#1ea896" strokeWidth={4} strokeDasharray="14 12" />
                ) : (
                  <path key={s.id} d={s.d} fill={recolor(s.fill, "dark")} />
                ),
              )}
            </svg>
            <p className="mt-10 font-display text-7xl font-extrabold text-teal">404</p>
            <h1 className="mt-4 text-3xl font-bold">{tr.notFound.title}</h1>
            <p className="mt-2 text-paper/60">{tr.notFound.text}</p>
            <p className="mt-6 text-lg font-semibold text-paper/80">{en.notFound.title}</p>
            <p className="text-sm text-paper/50">{en.notFound.text}</p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/tr/" className="btn-primary">{tr.notFound.home}</Link>
              <Link href="/en/" className="btn-ghost">{en.notFound.home}</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
