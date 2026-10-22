import type { Localized } from "@/lib/i18n";

/** TODO(ZKA): replace with real openings, or leave empty to show only the general application. */
export type Role = {
  id: string;
  title: Localized;
  location: Localized;
  type: Localized;
  summary: Localized;
};

export const ROLES: Role[] = [
  {
    id: "site-engineer",
    title: { tr: "Şantiye Mühendisi (İnşaat)", en: "Site Engineer (Civil)" },
    location: { tr: "Lefkoşa / Saha", en: "Nicosia / On site" },
    type: { tr: "Tam zamanlı", en: "Full-time" },
    summary: {
      tr: "Konut ve çelik yapı şantiyelerinde planlama, koordinasyon ve kalite kontrolü.",
      en: "Planning, coordination and quality control on residential and steel construction sites.",
    },
  },
  {
    id: "steel-detailer",
    title: { tr: "Çelik Detay Teknikeri", en: "Steel Detailer" },
    location: { tr: "Lefkoşa", en: "Nicosia" },
    type: { tr: "Tam zamanlı", en: "Full-time" },
    summary: {
      tr: "Tekla / Advance Steel ile imalat ve montaj çizimlerinin hazırlanması.",
      en: "Preparing fabrication and erection drawings in Tekla or Advance Steel.",
    },
  },
  {
    id: "architect",
    title: { tr: "Mimar", en: "Architect" },
    location: { tr: "Girne", en: "Kyrenia" },
    type: { tr: "Tam zamanlı", en: "Full-time" },
    summary: {
      tr: "Konut ve ticari projelerde konseptten uygulama projesine tasarım.",
      en: "Design for residential and commercial projects, from concept to construction drawings.",
    },
  },
];
