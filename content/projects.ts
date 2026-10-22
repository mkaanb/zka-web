import type { Localized } from "@/lib/i18n";

/**
 * Project portfolio.
 * TODO(ZKA): these are sample entries. Replace them with real projects and add
 * photos under /public/projects/<slug>/ (then set `images` to their paths).
 */
export type ProjectCategory = "villa" | "residential" | "commercial" | "industrial" | "public";

export type Project = {
  slug: string;
  category: ProjectCategory;
  featured?: boolean;
  year: number;
  location: Localized;
  title: Localized;
  summary: Localized;
  description: Localized<string[]>;
  scope: string[]; // service slugs
  area: number; // m²
  steelTons?: number;
  status: "completed" | "ongoing";
  images: string[];
};

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: Localized }[] = [
  { id: "villa", label: { tr: "Villa", en: "Villa" } },
  { id: "residential", label: { tr: "Konut", en: "Residential" } },
  { id: "commercial", label: { tr: "Ticari", en: "Commercial" } },
  { id: "industrial", label: { tr: "Endüstriyel", en: "Industrial" } },
  { id: "public", label: { tr: "Kamu", en: "Public" } },
];

export const PROJECTS: Project[] = [
  {
    slug: "kyrenia-hillside-villas",
    category: "villa",
    featured: true,
    year: 2025,
    location: { tr: "Girne, KKTC", en: "Kyrenia, TRNC" },
    title: { tr: "Girne Yamaç Villaları", en: "Kyrenia Hillside Villas" },
    summary: {
      tr: "Akdeniz manzaralı, çelik taşıyıcılı 8 lüks villa, anahtar teslim.",
      en: "Eight steel-framed luxury villas overlooking the Mediterranean, delivered turnkey.",
    },
    description: {
      tr: [
        "Eğimli bir arazide konumlanan proje, her villanın denize kesintisiz bakmasını sağlayacak şekilde kademeli olarak tasarlandı.",
        "Çelik taşıyıcı sistem sayesinde geniş açıklıklı yaşam alanları ve konsol teraslar mümkün oldu; inşaat süresi geleneksel yönteme göre yaklaşık %40 kısaldı.",
      ],
      en: [
        "Set on a sloping site, the scheme steps down the hillside so that every villa has an uninterrupted sea view.",
        "The steel frame made wide-span living spaces and cantilevered terraces possible, and it cut the build time by around 40% compared with conventional construction.",
      ],
    },
    scope: ["architectural-design", "structural-engineering", "steel-construction", "turnkey-projects"],
    area: 3200,
    steelTons: 280,
    status: "completed",
    images: [],
  },
  {
    slug: "nicosia-logistics-centre",
    category: "industrial",
    featured: true,
    year: 2024,
    location: { tr: "Lefkoşa, KKTC", en: "Nicosia, TRNC" },
    title: { tr: "Lefkoşa Lojistik Merkezi", en: "Nicosia Logistics Centre" },
    summary: {
      tr: "36 m açıklıklı, kolonsuz çelik depo ve ofis binası.",
      en: "A column-free 36 m span steel warehouse with an office block.",
    },
    description: {
      tr: [
        "Yüksek raf sistemlerine uygun, 36 metre kolonsuz açıklığa sahip bir çelik depo ve iki katlı idari bina.",
        "Atölyede imal edilen tüm elemanlar 11 haftada sahada monte edildi.",
      ],
      en: [
        "A steel warehouse with a 36-metre column-free span for high-bay racking, plus a two-storey office building.",
        "Every member was fabricated in our workshop and erected on site in 11 weeks.",
      ],
    },
    scope: ["structural-engineering", "steel-construction", "general-contracting"],
    area: 7400,
    steelTons: 610,
    status: "completed",
    images: [],
  },
  {
    slug: "famagusta-residences",
    category: "residential",
    featured: true,
    year: 2025,
    location: { tr: "Gazimağusa, KKTC", en: "Famagusta, TRNC" },
    title: { tr: "Mağusa Rezidans", en: "Famagusta Residences" },
    summary: {
      tr: "48 daireli, deprem performansı yüksek modern konut projesi.",
      en: "A modern 48-apartment residential block with high seismic performance.",
    },
    description: {
      tr: [
        "Sosyal alanları, kapalı otoparkı ve peyzajlı avlusuyla bütüncül bir yaşam projesi.",
        "Kompozit taşıyıcı sistemle hafif ve deprem performansı yüksek bir yapı elde edildi.",
      ],
      en: [
        "A complete living project with shared amenities, covered parking and a landscaped courtyard.",
        "A composite structural system kept the building light while giving it high seismic performance.",
      ],
    },
    scope: ["architectural-design", "structural-engineering", "general-contracting"],
    area: 5600,
    status: "ongoing",
    images: [],
  },
  {
    slug: "iskele-beach-pavilion",
    category: "commercial",
    year: 2023,
    location: { tr: "İskele, KKTC", en: "Iskele, TRNC" },
    title: { tr: "İskele Sahil Pavyonu", en: "Iskele Beach Pavilion" },
    summary: {
      tr: "Hafif çelik çatılı, sahil restoranı ve etkinlik alanı.",
      en: "A beachfront restaurant and event space under a light steel roof.",
    },
    description: {
      tr: ["Tuzlu deniz ortamına dayanıklı, galvaniz ve özel boya sistemiyle korunan zarif bir çelik çatı."],
      en: ["An elegant steel roof protected by galvanising and a marine-grade coating system to withstand the salty coastal air."],
    },
    scope: ["architectural-design", "steel-construction"],
    area: 900,
    steelTons: 64,
    status: "completed",
    images: [],
  },
  {
    slug: "guzelyurt-school-extension",
    category: "public",
    year: 2023,
    location: { tr: "Güzelyurt, KKTC", en: "Morphou, TRNC" },
    title: { tr: "Güzelyurt Okul Ek Binası", en: "Morphou School Extension" },
    summary: {
      tr: "Yaz tatilinde tamamlanan 12 derslikli çelik ek bina.",
      en: "A 12-classroom steel extension completed during the summer break.",
    },
    description: {
      tr: ["Eğitim takvimini aksatmamak için tüm imalat ve montaj yaz tatili içinde tamamlandı."],
      en: ["All fabrication and erection were finished within the summer holidays so the school year was not disrupted."],
    },
    scope: ["structural-engineering", "steel-construction", "general-contracting"],
    area: 1800,
    steelTons: 140,
    status: "completed",
    images: [],
  },
  {
    slug: "lapta-boutique-hotel",
    category: "commercial",
    year: 2026,
    location: { tr: "Lapta, KKTC", en: "Lapithos, TRNC" },
    title: { tr: "Lapta Butik Otel", en: "Lapithos Boutique Hotel" },
    summary: {
      tr: "Taş cephe ile çelik iskeletin buluştuğu 32 odalı butik otel.",
      en: "A 32-room boutique hotel where a stone façade meets a steel frame.",
    },
    description: {
      tr: ["Yerel taş dokusunu modern çelik strüktürle birleştiren, anahtar teslim bir turizm yatırımı."],
      en: ["A turnkey tourism investment that pairs local stonework with a modern steel structure."],
    },
    scope: ["architectural-design", "structural-engineering", "steel-construction", "turnkey-projects", "project-management"],
    area: 4100,
    steelTons: 330,
    status: "ongoing",
    images: [],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
