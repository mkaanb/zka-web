"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Props =
  | { mode: "contact"; services: { value: string; label: string }[] }
  | { mode: "careers"; positions: { value: string; label: string }[] };

/**
 * Contact / application form posting to Web3Forms (works with a static export).
 * Without NEXT_PUBLIC_WEB3FORMS_KEY it falls back to opening the visitor's mail client.
 */
export function ContactForm(props: Props) {
  const t = useTranslations("form");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // honeypot

    if (!ACCESS_KEY) {
      const body = [...data.entries()]
        .filter(([k]) => k !== "botcheck" && k !== "consent")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Web: " + props.mode)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    data.append("access_key", ACCESS_KEY);
    data.append("subject", props.mode === "contact" ? "ZKA web – new enquiry" : "ZKA web – job application");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-graphite/15 bg-paper px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-graphite/35 focus:border-teal";
  const options = props.mode === "contact" ? props.services : props.positions;

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="grid gap-2 text-sm font-medium">
        {t("name")} *
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        {t("email")} *
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        {t("phone")}
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        {props.mode === "contact" ? t("service") : t("position")}
        <select name={props.mode === "contact" ? "service" : "position"} className={field} defaultValue="">
          <option value="" disabled>
            {t("selectService")}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.label}>
              {o.label}
            </option>
          ))}
          <option value={props.mode === "contact" ? t("other") : t("general")}>
            {props.mode === "contact" ? t("other") : t("general")}
          </option>
        </select>
      </label>
      {props.mode === "careers" && (
        <label className="grid gap-2 text-sm font-medium sm:col-span-2">
          {t("cvLink")}
          <input name="cv" type="url" placeholder="https://" className={field} />
        </label>
      )}
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        {t("message")} *
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      <label className="flex items-start gap-3 text-xs text-graphite/65 sm:col-span-2">
        <input name="consent" type="checkbox" required className="mt-0.5 accent-teal" />
        {t("consent")}
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? t("sending") : t("submit")}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "ok" && <span className="text-teal-dark">{t("success")}</span>}
          {status === "error" && <span className="text-red-700">{t("error")}</span>}
        </p>
      </div>
    </form>
  );
}
