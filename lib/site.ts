/**
 * Company facts used across the site, footer, contact page and JSON-LD.
 * TODO(ZKA): replace every placeholder below with real details before launch.
 */
export const SITE = {
  name: "ZKA Investment Ltd.",
  shortName: "ZKA Investment",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zkainvestment.com").replace(/\/$/, ""),
  foundingYear: 2010,
  phone: "+90 548 000 00 00",
  whatsapp: "905480000000",
  email: "info@zkainvestment.com",
  address: {
    street: "Placeholder Cad. No: 1",
    city: "Lefkoşa",
    region: "KKTC",
    country: "CY",
    countryName: { tr: "Kuzey Kıbrıs Türk Cumhuriyeti", en: "Northern Cyprus (TRNC)" },
  },
  geo: { lat: 35.1856, lng: 33.3823 },
  mapQuery: "Lefkoşa, Kuzey Kıbrıs",
  hours: { tr: "Pazartesi – Cuma, 08:00 – 17:30", en: "Monday – Friday, 08:00 – 17:30" },
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
  },
  stats: {
    years: new Date().getFullYear() - 2010,
    projects: 120,
    squareMeters: 85000,
    steelTons: 6500,
  },
} as const;
