import type { Localized } from "@/lib/i18n";

export type Service = {
  slug: string;
  icon: "compass" | "calc" | "beam" | "crane" | "key" | "chart";
  title: Localized;
  short: Localized;
  intro: Localized;
  deliverables: Localized<string[]>;
  benefits: Localized<{ title: string; text: string }[]>;
  keywords: Localized<string[]>;
};

export const SERVICES: Service[] = [
  {
    slug: "architectural-design",
    icon: "compass",
    title: { tr: "Mimari Tasarım", en: "Architectural Design" },
    short: {
      tr: "Konseptten ruhsat projesine; işlevsel, estetik ve uygulanabilir tasarımlar.",
      en: "From concept to permit drawings: functional, refined and buildable design.",
    },
    intro: {
      tr: "Her proje, arsanın, iklimin ve yaşam biçiminin dikkatli bir okumasıyla başlar. Mimari ekibimiz; Kıbrıs'ın ışığını, rüzgârını ve yerel imar mevzuatını gözeterek, mühendislik ve şantiye ekiplerimizle aynı masada tasarlar. Böylece kâğıt üzerindeki fikir, sahada da aynı netlikle hayata geçer.",
      en: "Every project starts with a careful reading of the site, the climate and the way people will live and work in it. Our architects design around Cyprus's light, wind and local zoning rules, and they work at the same table as our engineering and site teams, so the idea on paper is built on site exactly as intended.",
    },
    deliverables: {
      tr: ["Konsept ve avan proje", "Ruhsat (uygulama) projeleri", "3B görselleştirme ve animasyon", "İç mimari ve detay çizimleri", "İmar ve belediye süreç danışmanlığı"],
      en: ["Concept and schematic design", "Permit and construction drawings", "3D visualisation and walkthroughs", "Interior and detail drawings", "Zoning and municipal permit support"],
    },
    benefits: {
      tr: [
        { title: "Uygulanabilir tasarım", text: "Statik ve şantiye ekiplerimiz ilk eskizden itibaren sürece dahildir." },
        { title: "Yerel mevzuat bilgisi", text: "KKTC imar ve ruhsat süreçlerine hâkim bir ekip." },
        { title: "Şeffaf maliyet", text: "Tasarım kararlarının bütçeye etkisini en baştan görürsünüz." },
      ],
      en: [
        { title: "Buildable by design", text: "Our structural and site teams are involved from the very first sketch." },
        { title: "Local expertise", text: "A team that knows TRNC zoning and permit procedures inside out." },
        { title: "Cost transparency", text: "You see the budget impact of every design decision from day one." },
      ],
    },
    keywords: {
      tr: ["KKTC mimarlık", "Kıbrıs mimari proje", "villa tasarımı"],
      en: ["North Cyprus architect", "architectural design TRNC", "villa design Cyprus"],
    },
  },
  {
    slug: "structural-engineering",
    icon: "calc",
    title: { tr: "Statik Proje & Hesaplar", en: "Structural Engineering" },
    short: {
      tr: "Deprem yönetmeliklerine uygun, optimize edilmiş statik hesap ve projeler.",
      en: "Optimised structural calculations and drawings, designed to seismic codes.",
    },
    intro: {
      tr: "Güvenli bir yapı, doğru hesapla başlar. Betonarme, çelik ve kompozit sistemlerde; Eurocode ve TS standartlarına ve deprem yönetmeliklerine uygun statik hesaplar yapıyoruz. Gereksiz malzemeden kaçınan optimize tasarımlarımız, güvenlikten ödün vermeden maliyeti düşürür.",
      en: "A safe building starts with the right numbers. We carry out structural analysis for reinforced concrete, steel and composite systems in line with Eurocode, TS standards and seismic regulations. Our designs avoid wasted material, which lowers cost without compromising safety.",
    },
    deliverables: {
      tr: ["Statik ve betonarme projeler", "Çelik yapı statik hesapları", "Deprem performans analizi", "Güçlendirme projeleri", "Bağlantı ve imalat detayları"],
      en: ["Structural and RC design", "Steel structure calculations", "Seismic performance analysis", "Retrofit and strengthening design", "Connection and fabrication details"],
    },
    benefits: {
      tr: [
        { title: "Deprem güvenliği", text: "Bölgenin sismik gerçekliğine göre tasarlanmış taşıyıcı sistemler." },
        { title: "Malzeme optimizasyonu", text: "Doğru kesit, doğru miktar: daha hafif ve ekonomik yapılar." },
        { title: "Belgelenmiş kalite", text: "Tüm hesaplar raporlanır ve denetime hazır teslim edilir." },
      ],
      en: [
        { title: "Seismic safety", text: "Load-bearing systems engineered for the region's seismic reality." },
        { title: "Material optimisation", text: "The right section in the right amount, for lighter and more economical structures." },
        { title: "Documented quality", text: "Every calculation is reported and delivered ready for inspection." },
      ],
    },
    keywords: {
      tr: ["statik proje KKTC", "statik hesap Kıbrıs", "deprem analizi"],
      en: ["structural engineer North Cyprus", "static calculations TRNC", "seismic design Cyprus"],
    },
  },
  {
    slug: "steel-construction",
    icon: "beam",
    title: { tr: "Çelik Yapı", en: "Steel Construction" },
    short: {
      tr: "İmalattan montaja; hızlı, hassas ve dayanıklı çelik yapı çözümleri.",
      en: "Fabrication to erection: fast, precise and durable steel structures.",
    },
    intro: {
      tr: "Çelik, hız ve dayanımın en zarif birleşimidir. Villa ve konutlardan endüstriyel tesislere, depolardan ticari yapılara kadar; çelik taşıyıcı sistemleri tasarlıyor, atölyemizde hassasiyetle imal ediyor ve uzman montaj ekiplerimizle sahada kuruyoruz.",
      en: "Steel is the most elegant combination of speed and strength. From villas and housing to industrial plants, warehouses and commercial buildings, we design steel frames, fabricate them precisely in our workshop and erect them on site with our specialist crews.",
    },
    deliverables: {
      tr: ["Çelik konut ve villa sistemleri", "Endüstriyel tesis ve depolar", "Çatı ve cephe çelik sistemleri", "Mezanin, köprü ve platformlar", "Atölye imalatı ve saha montajı"],
      en: ["Steel-framed homes and villas", "Industrial buildings and warehouses", "Roof and façade steelwork", "Mezzanines, bridges and platforms", "Workshop fabrication and site erection"],
    },
    benefits: {
      tr: [
        { title: "Hızlı inşa", text: "Atölyede hazırlanan elemanlar sayesinde inşaat süresi belirgin şekilde kısalır." },
        { title: "Yüksek dayanım", text: "Sünek çelik davranışı, depreme karşı üstün performans sağlar." },
        { title: "Sürdürülebilir", text: "Çelik %100 geri dönüştürülebilir ve şantiye atığını azaltır." },
      ],
      en: [
        { title: "Faster builds", text: "Workshop-prepared members shorten construction time significantly." },
        { title: "High resilience", text: "Steel's ductility gives superior performance in earthquakes." },
        { title: "Sustainable", text: "Steel is 100% recyclable and reduces waste on site." },
      ],
    },
    keywords: {
      tr: ["KKTC çelik yapı", "çelik villa Kıbrıs", "çelik konstrüksiyon"],
      en: ["steel construction North Cyprus", "steel frame villa Cyprus", "steel structures TRNC"],
    },
  },
  {
    slug: "general-contracting",
    icon: "crane",
    title: { tr: "İnşaat & Taahhüt", en: "General Contracting" },
    short: {
      tr: "Konut, ticari ve kamu projelerinde güvenilir genel yüklenicilik.",
      en: "Reliable general contracting for residential, commercial and public projects.",
    },
    intro: {
      tr: "Kaba inşaattan ince işlere, altyapıdan peyzaja kadar tüm inşaat süreçlerini tek bir sorumluluk altında yönetiyoruz. Deneyimli saha ekiplerimiz, güvenilir tedarikçi ağımız ve titiz iş güvenliği kültürümüzle projeleri zamanında ve bütçesinde teslim ediyoruz.",
      en: "We manage every stage of construction under a single point of responsibility, from the structural shell to finishing works, infrastructure and landscaping. With experienced site teams, a trusted supplier network and a strict safety culture, we deliver projects on time and on budget.",
    },
    deliverables: {
      tr: ["Kaba ve ince inşaat", "Altyapı ve saha işleri", "Mekanik ve elektrik koordinasyonu", "Renovasyon ve tadilat", "Peyzaj ve çevre düzenleme"],
      en: ["Structural and finishing works", "Infrastructure and site works", "MEP coordination", "Renovation and refurbishment", "Landscaping and external works"],
    },
    benefits: {
      tr: [
        { title: "Tek muhatap", text: "Tüm taşeron ve tedarikçiler tek bir sorumluluk altında yönetilir." },
        { title: "Zamanında teslim", text: "Detaylı iş programı ve haftalık ilerleme raporları." },
        { title: "İş güvenliği", text: "Her şantiyede sıfır kaza hedefiyle çalışırız." },
      ],
      en: [
        { title: "Single point of contact", text: "All subcontractors and suppliers are managed under one responsibility." },
        { title: "On-time delivery", text: "Detailed programmes and weekly progress reports." },
        { title: "Safety first", text: "Every site works towards a zero-accident target." },
      ],
    },
    keywords: {
      tr: ["KKTC inşaat firması", "Kıbrıs müteahhit", "inşaat taahhüt"],
      en: ["construction company North Cyprus", "contractor TRNC", "building contractor Cyprus"],
    },
  },
  {
    slug: "turnkey-projects",
    icon: "key",
    title: { tr: "Anahtar Teslim Projeler", en: "Turnkey Projects" },
    short: {
      tr: "Tasarımdan anahtar teslimine; tek sözleşme, tek sorumlu, sıfır sürpriz.",
      en: "Design through to handover: one contract, one team, no surprises.",
    },
    intro: {
      tr: "Anahtar teslim modelimizde; mimari tasarım, statik proje, ruhsat süreçleri, inşaat ve iç mekân uygulamaları tek bir çatı altında toplanır. Siz yalnızca hayalinizi anlatırsınız; biz anahtarı elinize teslim edene kadar her adımı yönetiriz.",
      en: "Our turnkey model brings architectural design, structural engineering, permits, construction and interiors under one roof. You tell us what you want to build, and we manage every step until we hand you the keys.",
    },
    deliverables: {
      tr: ["Arsa ve fizibilite analizi", "Tasarım ve tüm mühendislik projeleri", "Ruhsat ve izin süreçleri", "İnşaat ve iç mekân uygulaması", "İskân ve anahtar teslimi"],
      en: ["Site and feasibility studies", "Design and all engineering disciplines", "Permits and approvals", "Construction and interior fit-out", "Occupancy certificate and handover"],
    },
    benefits: {
      tr: [
        { title: "Sabit kapsam", text: "Net sözleşme, net bütçe ve net teslim tarihi." },
        { title: "Zaman kazancı", text: "Tasarım ve inşaatın paralel yürütülmesiyle daha kısa süreler." },
        { title: "Gönül rahatlığı", text: "Yurt dışındaki yatırımcılar için düzenli raporlama ve şeffaflık." },
      ],
      en: [
        { title: "Fixed scope", text: "A clear contract, a clear budget and a clear handover date." },
        { title: "Time saved", text: "Shorter programmes because design and construction run in parallel." },
        { title: "Peace of mind", text: "Regular reporting and full transparency for overseas investors." },
      ],
    },
    keywords: {
      tr: ["anahtar teslim villa KKTC", "anahtar teslim inşaat Kıbrıs"],
      en: ["turnkey villa North Cyprus", "turnkey construction Cyprus", "design and build TRNC"],
    },
  },
  {
    slug: "project-management",
    icon: "chart",
    title: { tr: "Proje Yönetimi & Danışmanlık", en: "Project Management & Consulting" },
    short: {
      tr: "Yatırımınızı fizibiliteden teslime kadar koruyan profesyonel yönetim.",
      en: "Professional management that protects your investment from feasibility to handover.",
    },
    intro: {
      tr: "Yatırımcılar ve arsa sahipleri adına projeyi uçtan uca yönetiyor; maliyet, zaman ve kaliteyi bağımsız bir gözle denetliyoruz. Fizibilite raporlarından ihale yönetimine, şantiye denetiminden hakediş kontrolüne kadar karar süreçlerinize güvenilir veri sağlıyoruz.",
      en: "We manage projects end to end on behalf of investors and landowners, keeping independent control of cost, time and quality. From feasibility reports and tendering to site supervision and payment certification, we give you reliable data to base your decisions on.",
    },
    deliverables: {
      tr: ["Fizibilite ve yatırım analizi", "Maliyet tahmini ve keşif", "İhale ve sözleşme yönetimi", "Şantiye denetimi ve raporlama", "Hakediş ve kalite kontrol"],
      en: ["Feasibility and investment analysis", "Cost estimating and bills of quantities", "Tender and contract management", "Site supervision and reporting", "Payment certification and quality control"],
    },
    benefits: {
      tr: [
        { title: "Bağımsız kontrol", text: "Yatırımınızın çıkarlarını her aşamada koruyan bir ekip." },
        { title: "Veriye dayalı kararlar", text: "Düzenli maliyet ve ilerleme raporları." },
        { title: "Risk yönetimi", text: "Sorunları oluşmadan önce tespit eden proaktif yaklaşım." },
      ],
      en: [
        { title: "Independent oversight", text: "A team that protects your interests at every stage." },
        { title: "Data-driven decisions", text: "Regular cost and progress reporting." },
        { title: "Risk management", text: "A proactive approach that catches issues before they happen." },
      ],
    },
    keywords: {
      tr: ["proje yönetimi KKTC", "inşaat danışmanlığı Kıbrıs"],
      en: ["project management North Cyprus", "construction consultancy TRNC"],
    },
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
