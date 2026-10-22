import type { Localized } from "@/lib/i18n";

/** Article body blocks. Kept as data so both languages live side by side. */
export type Block = { h2: string } | { p: string } | { ul: string[] };

export type Article = {
  slug: string;
  date: string; // ISO
  readMinutes: number;
  title: Localized;
  excerpt: Localized;
  body: Localized<Block[]>;
};

export const ARTICLES: Article[] = [
  {
    slug: "steel-vs-concrete-villas",
    date: "2026-09-15",
    readMinutes: 5,
    title: {
      tr: "Çelik mi Betonarme mi? Kıbrıs'ta Villa İnşasında Doğru Seçim",
      en: "Steel or Concrete? Choosing the Right Frame for a Villa in Cyprus",
    },
    excerpt: {
      tr: "Hız, maliyet, deprem performansı ve tasarım özgürlüğü açısından iki sistemi karşılaştırıyoruz.",
      en: "We compare the two systems on speed, cost, seismic performance and design freedom.",
    },
    body: {
      tr: [
        { p: "Kuzey Kıbrıs'ta villa yaptırmak isteyen yatırımcıların en sık sorduğu soru, taşıyıcı sistemin çelik mi yoksa betonarme mi olması gerektiğidir. İki sistemin de güçlü yanları vardır; doğru seçim projenin önceliklerine bağlıdır." },
        { h2: "İnşaat süresi" },
        { p: "Çelik elemanlar atölyede imal edilip sahada monte edildiği için kaba inşaat süresi genellikle %30–50 oranında kısalır. Kalıp ve priz bekleme süreleri ortadan kalkar." },
        { h2: "Deprem performansı" },
        { p: "Çeliğin sünek yapısı, deprem enerjisini kırılmadan sönümlemesini sağlar. Daha hafif bir yapı, daha düşük deprem yükü demektir." },
        { h2: "Tasarım özgürlüğü" },
        { ul: ["Geniş, kolonsuz yaşam alanları", "Konsol teraslar ve ince profiller", "Gelecekte kolay genişletme ve değişiklik"] },
        { h2: "Sonuç" },
        { p: "Hız, geniş açıklıklar ve deprem güvenliği önceliğinizse çelik öne çıkar. ZKA Investment olarak her iki sistemde de tasarım ve uygulama yapıyor, projeniz için en uygun çözümü birlikte belirliyoruz." },
      ],
      en: [
        { p: "The question investors ask most often when building a villa in Northern Cyprus is whether the frame should be steel or reinforced concrete. Both systems have real strengths, and the right choice depends on the project's priorities." },
        { h2: "Build time" },
        { p: "Steel members are fabricated in the workshop and erected on site, so the structural phase is typically 30–50% shorter. There is no formwork to build and no waiting for concrete to cure." },
        { h2: "Seismic performance" },
        { p: "Steel's ductility lets it absorb earthquake energy without fracturing. A lighter building also attracts lower seismic loads." },
        { h2: "Design freedom" },
        { ul: ["Wide, column-free living spaces", "Cantilevered terraces and slender profiles", "Easy to extend or adapt later"] },
        { h2: "The verdict" },
        { p: "If speed, wide spans and seismic safety are your priorities, steel stands out. At ZKA Investment we design and build in both systems, and we will help you choose the best fit for your project." },
      ],
    },
  },
  {
    slug: "building-permits-in-trnc",
    date: "2026-08-20",
    readMinutes: 6,
    title: {
      tr: "KKTC'de İnşaat Ruhsatı Süreci: Adım Adım Rehber",
      en: "Building Permits in the TRNC: A Step-by-Step Guide",
    },
    excerpt: {
      tr: "Arsa alımından iskân belgesine kadar izin süreçlerinin genel bir haritası.",
      en: "An overview of the approvals you need, from buying land to the occupancy certificate.",
    },
    body: {
      tr: [
        { p: "Kuzey Kıbrıs'ta inşaat izin süreci, doğru planlandığında öngörülebilir bir yoldur. Aşağıda genel adımları özetliyoruz. Her proje için güncel mevzuatın ilgili kurumlardan teyit edilmesi gerekir." },
        { h2: "1. Arsa ve imar durumu" },
        { p: "Tapu kontrolü ve imar durumu belgesiyle arsanın yapılaşma koşulları (emsal, kat adedi, çekme mesafeleri) netleştirilir." },
        { h2: "2. Proje hazırlığı" },
        { ul: ["Mimari proje", "Statik proje", "Elektrik ve mekanik projeler"] },
        { h2: "3. Belediye ve oda onayları" },
        { p: "Projeler ilgili meslek odaları ve belediyenin onayına sunulur; onay sonrası inşaat ruhsatı düzenlenir." },
        { h2: "4. Denetim ve iskân" },
        { p: "İnşaat boyunca yapılan denetimlerin ardından, tamamlanan yapı için iskân (oturma izni) belgesi alınır." },
        { p: "Anahtar teslim projelerimizde bu sürecin tamamını sizin adınıza yönetiyoruz." },
      ],
      en: [
        { p: "Getting building approval in Northern Cyprus is a predictable process when it is planned properly. Below we outline the general steps. Current regulations should always be confirmed with the relevant authorities for each project." },
        { h2: "1. Land and zoning" },
        { p: "A title check and a zoning certificate confirm what can be built on the plot: floor-area ratio, number of storeys and setbacks." },
        { h2: "2. Design documents" },
        { ul: ["Architectural drawings", "Structural drawings", "Electrical and mechanical drawings"] },
        { h2: "3. Chamber and municipal approval" },
        { p: "The drawings go to the relevant professional chambers and the municipality, and the building permit is issued once they approve them." },
        { h2: "4. Inspection and occupancy" },
        { p: "After inspections during construction, the finished building receives its occupancy certificate." },
        { p: "On our turnkey projects, we manage this whole process on your behalf." },
      ],
    },
  },
  {
    slug: "turnkey-project-guide",
    date: "2026-07-10",
    readMinutes: 4,
    title: {
      tr: "Anahtar Teslim Proje Nedir? Yatırımcılar İçin Rehber",
      en: "What Is a Turnkey Project? A Guide for Investors",
    },
    excerpt: {
      tr: "Tek sözleşme ile tasarımdan teslime: avantajları ve dikkat edilmesi gerekenler.",
      en: "From design to handover under one contract: the benefits and what to look out for.",
    },
    body: {
      tr: [
        { p: "Anahtar teslim modelde, yüklenici firma tasarımdan inşaata ve teslime kadar tüm süreci tek bir sözleşme altında üstlenir. Yatırımcı için bu, tek muhatap ve net bir bütçe anlamına gelir." },
        { h2: "Avantajları" },
        { ul: ["Tek sözleşme, tek sorumluluk", "Sabit bütçe ve teslim tarihi", "Tasarım ve inşaatın paralel yürütülmesi", "Yurt dışından yönetilebilir süreç"] },
        { h2: "Dikkat edilmesi gerekenler" },
        { p: "Sözleşme kapsamının, malzeme şartnamesinin ve ödeme planının açıkça tanımlanması kritik önemdedir. Düzenli ilerleme raporları ve şantiye ziyaretleri güveni pekiştirir." },
      ],
      en: [
        { p: "In a turnkey model, the contractor takes on the whole process, from design through construction to handover, under a single contract. For the investor, that means one point of contact and a clear budget." },
        { h2: "Benefits" },
        { ul: ["One contract, one point of responsibility", "Fixed budget and handover date", "Design and construction run in parallel", "A process you can manage from abroad"] },
        { h2: "What to look out for" },
        { p: "It is critical that the contract scope, the material specification and the payment schedule are clearly defined. Regular progress reports and site visits build trust." },
      ],
    },
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
