import type { Localized } from "@/lib/i18n";

/**
 * Page copy for TR and EN.
 * TODO(ZKA): review all copy, especially history, values and certifications.
 */

type L = Localized;
type Item = { title: L; text: L };

export const HOME = {
  meta: {
    title: {
      tr: "ZKA Investment | KKTC Çelik Yapı, İnşaat & Anahtar Teslim Projeler",
      en: "ZKA Investment | Steel Construction & Turnkey Projects in North Cyprus",
    } as L,
    description: {
      tr: "KKTC'de mimari tasarım, statik proje, çelik yapı ve anahtar teslim inşaat. Fikirden anahtara, tek ekip.",
      en: "Architectural design, structural engineering, steel construction and turnkey building in North Cyprus. One team, from idea to keys.",
    } as L,
  },
  hero: {
    eyebrow: { tr: "Kuzey Kıbrıs · 2010’dan beri", en: "North Cyprus · Since 2010" } as L,
    title: { tr: "Tasarla. Hesapla. İnşa et.", en: "Design. Engineer. Build." } as L,
    lead: {
      tr: "Mimari tasarımdan statik hesaplara, çelik yapıdan anahtar teslim projelere; yapınızın her katmanında tek bir güvenilir ekip.",
      en: "From architectural design and structural calculations to steel construction and turnkey delivery: one trusted team for every layer of your building.",
    } as L,
    primary: { tr: "Projelerimizi inceleyin", en: "Explore our projects" } as L,
    secondary: { tr: "Teklif alın", en: "Get a quote" } as L,
    scroll: { tr: "Kaydırın", en: "Scroll" } as L,
  },
  intro: {
    eyebrow: { tr: "Biz kimiz", en: "Who we are" } as L,
    title: {
      tr: "Mühendislik disipliniyle, mimari incelikle inşa ediyoruz.",
      en: "We build with engineering discipline and architectural finesse.",
    } as L,
    text: {
      tr: "ZKA Investment Ltd., Kuzey Kıbrıs'ta tasarım, mühendislik ve inşaatı tek çatı altında buluşturan bir yapı şirketidir. Çelik yapı uzmanlığımızı; mimari, statik ve proje yönetimi yetkinliklerimizle birleştirerek, villalardan endüstriyel tesislere kadar uzun ömürlü yapılar üretiyoruz.",
      en: "ZKA Investment Ltd. is a construction company in Northern Cyprus that brings design, engineering and building under one roof. We combine our steel construction expertise with architecture, structural engineering and project management to deliver long-lasting buildings, from private villas to industrial facilities.",
    } as L,
  },
  servicesHeading: {
    eyebrow: { tr: "Hizmetlerimiz", en: "Our services" } as L,
    title: { tr: "Arsadan anahtara, uçtan uca uzmanlık.", en: "End-to-end expertise, from plot to keys." } as L,
  },
  projectsHeading: {
    eyebrow: { tr: "Seçili projeler", en: "Selected work" } as L,
    title: { tr: "İz bırakan yapılar.", en: "Buildings that leave a mark." } as L,
  },
  processHeading: {
    eyebrow: { tr: "Nasıl çalışıyoruz", en: "How we work" } as L,
    title: { tr: "Net bir süreç, öngörülebilir sonuçlar.", en: "A clear process, predictable results." } as L,
  },
  stats: [
    { key: "years", suffix: "+", label: { tr: "Yıllık deneyim", en: "Years of experience" } as L },
    { key: "projects", suffix: "+", label: { tr: "Tamamlanan proje", en: "Projects delivered" } as L },
    { key: "squareMeters", suffix: " m²", label: { tr: "İnşa edilen alan", en: "Built area" } as L },
    { key: "steelTons", suffix: " t", label: { tr: "İşlenen çelik", en: "Steel fabricated" } as L },
  ] as const,
  why: {
    eyebrow: { tr: "Neden ZKA", en: "Why ZKA" } as L,
    title: { tr: "Tek ekip. Tek sorumluluk. Tam şeffaflık.", en: "One team. One responsibility. Full transparency." } as L,
    items: [
      {
        title: { tr: "Entegre ekip", en: "Integrated team" },
        text: { tr: "Mimar, mühendis ve şantiye ekipleri aynı çatı altında çalışır; bilgi kaybolmaz.", en: "Architects, engineers and site crews work under one roof, so nothing gets lost between teams." },
      },
      {
        title: { tr: "Çelik uzmanlığı", en: "Steel expertise" },
        text: { tr: "Kendi atölyemizde imalat; hassas, hızlı ve kontrollü montaj.", en: "Fabrication in our own workshop, with precise, fast and controlled erection on site." },
      },
      {
        title: { tr: "Deprem güvenliği", en: "Seismic safety" },
        text: { tr: "Güncel yönetmeliklere göre hesaplanmış, belgelenmiş taşıyıcı sistemler.", en: "Documented structural systems calculated to current seismic codes." },
      },
      {
        title: { tr: "Yatırımcı odaklı", en: "Investor-focused" },
        text: { tr: "Yurt dışındaki müşterilerimiz için düzenli raporlama ve uzaktan proje takibi.", en: "Regular reporting and remote project tracking for overseas clients." },
      },
    ] as Item[],
  },
};

export const PROCESS_STEPS: (Item & { duration: L })[] = [
  {
    title: { tr: "Keşif & Danışmanlık", en: "Discovery & Consultation" },
    text: {
      tr: "İhtiyaçlarınızı, bütçenizi ve arsanızı dinliyor; imar koşullarını ve fizibiliteyi değerlendiriyoruz.",
      en: "We listen to your needs, budget and plot, and assess the zoning conditions and feasibility.",
    },
    duration: { tr: "1–2 hafta", en: "1–2 weeks" },
  },
  {
    title: { tr: "Mimari Tasarım", en: "Architectural Design" },
    text: {
      tr: "Konsept ve avan projeyi birlikte geliştiriyor, 3B görsellerle kararlarınızı netleştiriyoruz.",
      en: "We develop the concept and schematic design with you, using 3D visuals to make decisions clear.",
    },
    duration: { tr: "3–6 hafta", en: "3–6 weeks" },
  },
  {
    title: { tr: "Statik & Mühendislik", en: "Structural Engineering" },
    text: {
      tr: "Statik hesaplar, çelik detayları ve tesisat projeleri hazırlanır; ruhsat dosyası oluşturulur.",
      en: "We prepare the structural calculations, steel details and MEP drawings, and assemble the permit file.",
    },
    duration: { tr: "3–5 hafta", en: "3–5 weeks" },
  },
  {
    title: { tr: "Ruhsat & Planlama", en: "Permits & Planning" },
    text: {
      tr: "Belediye ve oda onayları alınır; detaylı iş programı ve sabit bütçe paylaşılır.",
      en: "We obtain municipal and chamber approvals and share a detailed programme with a fixed budget.",
    },
    duration: { tr: "4–8 hafta", en: "4–8 weeks" },
  },
  {
    title: { tr: "İmalat & İnşaat", en: "Fabrication & Construction" },
    text: {
      tr: "Çelik elemanlar atölyede imal edilir, sahada monte edilir; ince işler titizlikle tamamlanır.",
      en: "Steel members are fabricated in the workshop and erected on site, and finishing works are completed with care.",
    },
    duration: { tr: "Projeye göre", en: "Project-dependent" },
  },
  {
    title: { tr: "Teslim & Destek", en: "Handover & Aftercare" },
    text: {
      tr: "İskân alınır, anahtar teslim edilir. Teslim sonrası garanti ve bakım desteği sürer.",
      en: "We obtain the occupancy certificate and hand over the keys. Warranty and maintenance support continue after handover.",
    },
    duration: { tr: "Süresiz", en: "Ongoing" },
  },
];

export const PROCESS_PAGE = {
  meta: {
    title: { tr: "Çalışma Sürecimiz", en: "Our Process" } as L,
    description: {
      tr: "Keşiften anahtar teslimine ZKA Investment proje süreci: tasarım, statik, ruhsat, inşaat ve teslim.",
      en: "The ZKA Investment project process, from discovery to handover: design, engineering, permits, construction and aftercare.",
    } as L,
  },
  eyebrow: { tr: "Süreç", en: "Process" } as L,
  lead: {
    tr: "Her projede aynı disiplinle ilerliyoruz: şeffaf adımlar, net teslim tarihleri ve tek bir muhatap.",
    en: "Every project follows the same discipline: transparent steps, clear deadlines and a single point of contact.",
  } as L,
  promise: {
    title: { tr: "Süreç boyunca size sözümüz", en: "Our promise throughout" } as L,
    items: [
      { tr: "Haftalık fotoğraflı ilerleme raporu", en: "Weekly progress reports with photos" },
      { tr: "Sabit, kalem kalem açıklanmış bütçe", en: "A fixed, itemised budget" },
      { tr: "Tek proje yöneticisi, tek telefon numarası", en: "One project manager, one phone number" },
      { tr: "Yurt dışından uzaktan takip imkânı", en: "Remote tracking from abroad" },
    ] as L[],
  },
};

export const ABOUT = {
  meta: {
    title: { tr: "Hakkımızda", en: "About Us" } as L,
    description: {
      tr: "ZKA Investment Ltd.: KKTC merkezli tasarım, mühendislik ve çelik yapı şirketi. Hikâyemiz, değerlerimiz ve ekibimiz.",
      en: "ZKA Investment Ltd.: a design, engineering and steel construction company based in North Cyprus. Our story, values and team.",
    } as L,
  },
  eyebrow: { tr: "Hakkımızda", en: "About us" } as L,
  title: { tr: "Sağlam temeller, zamansız yapılar.", en: "Solid foundations, timeless buildings." } as L,
  lead: {
    tr: "Kıbrıs'ın ışığı ve toprağıyla uyumlu, mühendislik disipliniyle inşa edilmiş yapılar üretiyoruz.",
    en: "We create buildings in harmony with Cyprus's light and land, built with engineering discipline.",
  } as L,
  story: {
    title: { tr: "Hikâyemiz", en: "Our story" } as L,
    paragraphs: [
      {
        tr: "ZKA Investment, Kuzey Kıbrıs'ta güvenilir, hızlı ve estetik yapılara duyulan ihtiyaçtan doğdu. Küçük bir mühendislik ofisi olarak başlayan yolculuğumuz; bugün mimari tasarım, statik proje, çelik imalat ve anahtar teslim inşaatı kapsayan entegre bir yapı şirketine dönüştü.",
        en: "ZKA Investment grew out of the need for reliable, fast and beautiful buildings in Northern Cyprus. What began as a small engineering office has become an integrated construction company covering architectural design, structural engineering, steel fabrication and turnkey building.",
      },
      {
        tr: "Logomuzdaki çatı parçaları gibi, her disiplin bir diğerini tamamlar: tasarım, hesap ve uygulama bir araya geldiğinde güçlü bir bütün ortaya çıkar.",
        en: "Like the roof pieces in our logo, each discipline completes the next: when design, calculation and construction come together, they form a strong whole.",
      },
    ] as L[],
  },
  values: {
    eyebrow: { tr: "Değerlerimiz", en: "Our values" } as L,
    title: { tr: "Bizi biz yapan ilkeler.", en: "The principles that define us." } as L,
    items: [
      { title: { tr: "Güvenlik", en: "Safety" }, text: { tr: "Yapının ve şantiyedeki her insanın güvenliği pazarlık konusu değildir.", en: "The safety of every building, and every person on site, is non-negotiable." } },
      { title: { tr: "Dürüstlük", en: "Integrity" }, text: { tr: "Şeffaf bütçeler, açık iletişim ve verilen söze sadakat.", en: "Transparent budgets, open communication and keeping our word." } },
      { title: { tr: "Kalite", en: "Quality" }, text: { tr: "Her detayda standartların ötesine geçen bir işçilik.", en: "Workmanship that goes beyond the standards in every detail." } },
      { title: { tr: "Sürdürülebilirlik", en: "Sustainability" }, text: { tr: "Geri dönüştürülebilir malzemeler ve verimli tasarım çözümleri.", en: "Recyclable materials and efficient design solutions." } },
    ] as Item[],
  },
  timeline: {
    eyebrow: { tr: "Kilometre taşları", en: "Milestones" } as L,
    items: [
      { year: "2010", text: { tr: "Mühendislik ve proje ofisi olarak kuruluş.", en: "Founded as an engineering and design office." } },
      { year: "2014", text: { tr: "Çelik imalat atölyesinin açılışı.", en: "Opened our steel fabrication workshop." } },
      { year: "2018", text: { tr: "İlk anahtar teslim villa projesinin tamamlanması.", en: "Completed our first turnkey villa project." } },
      { year: "2022", text: { tr: "Endüstriyel ve kamu projelerine genişleme.", en: "Expanded into industrial and public projects." } },
      { year: "2026", text: { tr: "100+ proje ve yeni nesil yapı teknolojileri.", en: "Over 100 projects and next-generation building technology." } },
    ] as { year: string; text: L }[],
  },
  team: {
    eyebrow: { tr: "Ekibimiz", en: "Our team" } as L,
    title: { tr: "Yapının arkasındaki insanlar.", en: "The people behind the buildings." } as L,
    members: [
      { name: "Ad Soyad", role: { tr: "Kurucu & Genel Müdür", en: "Founder & Managing Director" } },
      { name: "Ad Soyad", role: { tr: "Mimari Tasarım Lideri", en: "Head of Architecture" } },
      { name: "Ad Soyad", role: { tr: "Statik Proje Müdürü", en: "Structural Engineering Lead" } },
      { name: "Ad Soyad", role: { tr: "Şantiye & Çelik İmalat Müdürü", en: "Site & Fabrication Manager" } },
    ] as { name: string; role: L }[],
  },
};

export const MISSION_VISION = {
  meta: {
    title: { tr: "Misyon & Vizyon", en: "Mission & Vision" } as L,
    description: {
      tr: "ZKA Investment'ın misyonu ve vizyonu: Kuzey Kıbrıs'ta güvenli, sürdürülebilir ve estetik yapılar.",
      en: "The mission and vision of ZKA Investment: safe, sustainable and beautiful buildings in North Cyprus.",
    } as L,
  },
  eyebrow: { tr: "Misyon & Vizyon", en: "Mission & Vision" } as L,
  title: { tr: "Neden varız, nereye gidiyoruz.", en: "Why we exist, and where we're going." } as L,
  mission: {
    label: { tr: "Misyonumuz", en: "Our mission" } as L,
    text: {
      tr: "Tasarım, mühendislik ve inşaatı tek çatı altında birleştirerek; müşterilerimize güvenli, sürdürülebilir ve estetik yapıları zamanında, bütçesinde ve tam şeffaflıkla teslim etmek.",
      en: "To bring design, engineering and construction together under one roof, and deliver safe, sustainable and beautiful buildings to our clients on time, on budget and with full transparency.",
    } as L,
  },
  vision: {
    label: { tr: "Vizyonumuz", en: "Our vision" } as L,
    text: {
      tr: "Çelik yapı ve anahtar teslim projelerde Kuzey Kıbrıs'ın en güvenilir ve yenilikçi yapı şirketi olmak; bölgenin yapılı çevresine kalıcı değer katmak.",
      en: "To be the most trusted and innovative construction company in Northern Cyprus for steel and turnkey projects, adding lasting value to the region's built environment.",
    } as L,
  },
  pillars: [
    { title: { tr: "İnsan", en: "People" }, text: { tr: "Ekibimizin gelişimine ve iş güvenliğine yatırım.", en: "Investing in our team's growth and their safety." } },
    { title: { tr: "Teknoloji", en: "Technology" }, text: { tr: "BIM, 3B modelleme ve modern imalat yöntemleri.", en: "BIM, 3D modelling and modern fabrication methods." } },
    { title: { tr: "Çevre", en: "Environment" }, text: { tr: "Geri dönüştürülebilir çelik ve enerji verimli tasarım.", en: "Recyclable steel and energy-efficient design." } },
  ] as Item[],
};

export const WHY_STEEL = {
  meta: {
    title: { tr: "Neden Çelik Yapı?", en: "Why Build with Steel?" } as L,
    description: {
      tr: "Çelik yapının avantajları: hızlı inşaat, deprem dayanımı, tasarım özgürlüğü ve sürdürülebilirlik. KKTC'de çelik villa ve endüstriyel yapılar.",
      en: "The advantages of steel construction: speed, earthquake resilience, design freedom and sustainability. Steel villas and industrial buildings in North Cyprus.",
    } as L,
  },
  eyebrow: { tr: "Neden çelik", en: "Why steel" } as L,
  title: { tr: "Geleceğin yapı malzemesi bugün burada.", en: "The building material of the future is here today." } as L,
  lead: {
    tr: "Çelik; hızı, dayanımı ve zarafeti tek bir malzemede birleştirir. Kıbrıs'ın iklimi ve deprem gerçekliği için akıllı bir tercihtir.",
    en: "Steel combines speed, strength and elegance in a single material. It is a smart choice for Cyprus's climate and seismic reality.",
  } as L,
  benefits: [
    { metric: "%40", title: { tr: "Daha hızlı inşaat", en: "Faster construction" }, text: { tr: "Atölyede hazırlanan elemanlar sahada hızla monte edilir; hava koşullarından daha az etkilenir.", en: "Workshop-made members are erected quickly on site and are less affected by the weather." } },
    { metric: "%100", title: { tr: "Geri dönüştürülebilir", en: "Recyclable" }, text: { tr: "Çelik, özelliklerini kaybetmeden sonsuz kez geri dönüştürülebilir.", en: "Steel can be recycled indefinitely without losing its properties." } },
    { metric: "↓", title: { tr: "Daha hafif yapı", en: "Lighter structure" }, text: { tr: "Daha hafif bina, daha küçük temeller ve daha düşük deprem yükleri demektir.", en: "A lighter building means smaller foundations and lower seismic loads." } },
    { metric: "∞", title: { tr: "Tasarım özgürlüğü", en: "Design freedom" }, text: { tr: "Geniş açıklıklar, konsollar ve ince profillerle mimari sınırlar genişler.", en: "Wide spans, cantilevers and slender profiles push architectural limits further." } },
  ] as (Item & { metric: string })[],
  seismic: {
    title: { tr: "Depreme karşı sünek davranış", en: "Ductile behaviour in earthquakes" } as L,
    text: {
      tr: "Çelik, yük altında aniden kırılmak yerine esneyerek enerji sönümler. Doğru tasarlanmış bağlantılarla, deprem sırasında yapının ayakta kalmasını ve can güvenliğini sağlar. Tüm projelerimiz güncel deprem yönetmeliklerine göre hesaplanır.",
      en: "Instead of breaking suddenly under load, steel bends and absorbs energy. With properly designed connections, it keeps a building standing and its occupants safe during an earthquake. All our projects are calculated to current seismic regulations.",
    } as L,
  },
  compare: {
    title: { tr: "Çelik ve betonarme karşılaştırması", en: "Steel vs. reinforced concrete" } as L,
    head: { tr: ["Kriter", "Çelik", "Betonarme"], en: ["Criterion", "Steel", "Concrete"] } as Localized<string[]>,
    rows: [
      { tr: ["Kaba inşaat süresi", "Kısa", "Uzun"], en: ["Structural build time", "Short", "Long"] },
      { tr: ["Yapı ağırlığı", "Hafif", "Ağır"], en: ["Building weight", "Light", "Heavy"] },
      { tr: ["Kolonsuz açıklık", "Geniş", "Sınırlı"], en: ["Column-free span", "Wide", "Limited"] },
      { tr: ["Geri dönüşüm", "%100", "Kısıtlı"], en: ["Recyclability", "100%", "Limited"] },
      { tr: ["Sonradan değişiklik", "Kolay", "Zor"], en: ["Later modifications", "Easy", "Difficult"] },
    ] as Localized<string[]>[],
  },
  uses: {
    title: { tr: "Çelik ile neler inşa ediyoruz?", en: "What we build in steel" } as L,
    items: [
      { tr: "Villa ve müstakil konutlar", en: "Villas and detached homes" },
      { tr: "Depo ve lojistik merkezleri", en: "Warehouses and logistics centres" },
      { tr: "Fabrika ve endüstriyel tesisler", en: "Factories and industrial plants" },
      { tr: "Otel, restoran ve ticari yapılar", en: "Hotels, restaurants and commercial buildings" },
      { tr: "Okul, spor salonu ve kamu binaları", en: "Schools, sports halls and public buildings" },
      { tr: "Kat ilavesi ve güçlendirme", en: "Storey additions and strengthening" },
    ] as L[],
  },
};

export const QUALITY = {
  meta: {
    title: { tr: "Kalite & Belgeler", en: "Quality & Certifications" } as L,
    description: {
      tr: "ZKA Investment kalite, iş güvenliği ve standartlar: Eurocode, TS, ISO belgeleri ve KTMMOB üyelikleri.",
      en: "Quality, safety and standards at ZKA Investment: Eurocode, TS, ISO certifications and professional chamber memberships.",
    } as L,
  },
  eyebrow: { tr: "Kalite", en: "Quality" } as L,
  title: { tr: "Standartlarla tanımlanmış güven.", en: "Trust, defined by standards." } as L,
  lead: {
    tr: "Tasarımdan montaja her aşama; uluslararası standartlar, belgelenmiş prosedürler ve bağımsız kontrollerle yürütülür.",
    en: "Every stage, from design to erection, follows international standards, documented procedures and independent checks.",
  } as L,
  standards: {
    title: { tr: "Uyguladığımız standartlar", en: "Standards we work to" } as L,
    items: [
      { code: "Eurocode 3", text: { tr: "Çelik yapıların tasarımı", en: "Design of steel structures" } },
      { code: "Eurocode 8", text: { tr: "Depreme dayanıklı yapı tasarımı", en: "Earthquake-resistant design" } },
      { code: "EN 1090", text: { tr: "Çelik yapı imalatı ve montajı", en: "Execution of steel structures" } },
      { code: "TS 500 / TBDY", text: { tr: "Betonarme ve deprem yönetmelikleri", en: "Concrete and seismic regulations" } },
    ] as { code: string; text: L }[],
  },
  certificates: {
    title: { tr: "Belgeler & üyelikler", en: "Certifications & memberships" } as L,
    note: { tr: "Belge görselleri yakında eklenecektir.", en: "Certificate images will be added soon." } as L,
    items: [
      { name: "ISO 9001", text: { tr: "Kalite Yönetim Sistemi", en: "Quality Management System" } },
      { name: "ISO 45001", text: { tr: "İş Sağlığı ve Güvenliği", en: "Occupational Health & Safety" } },
      { name: "ISO 14001", text: { tr: "Çevre Yönetim Sistemi", en: "Environmental Management" } },
      { name: "KTMMOB", text: { tr: "Kıbrıs Türk Mühendis ve Mimar Odaları Birliği", en: "Union of Cyprus Turkish Chambers of Engineers & Architects" } },
    ] as { name: string; text: L }[],
  },
  safety: {
    title: { tr: "İş güvenliği politikamız", en: "Our safety policy" } as L,
    items: [
      { tr: "Her şantiyede sıfır kaza hedefi", en: "A zero-accident target on every site" },
      { tr: "Düzenli İSG eğitimleri ve tatbikatlar", en: "Regular health & safety training and drills" },
      { tr: "Sertifikalı kaynakçılar ve montaj ekipleri", en: "Certified welders and erection crews" },
      { tr: "Malzeme sertifikaları ve izlenebilirlik", en: "Material certificates and full traceability" },
    ] as L[],
  },
};

export const CONTACT = {
  meta: {
    title: { tr: "İletişim", en: "Contact" } as L,
    description: {
      tr: "ZKA Investment ile iletişime geçin: KKTC'de çelik yapı, inşaat ve anahtar teslim projeleriniz için ücretsiz görüşme.",
      en: "Contact ZKA Investment for a free consultation on your steel construction, building or turnkey project in North Cyprus.",
    } as L,
  },
  eyebrow: { tr: "İletişim", en: "Contact" } as L,
  title: { tr: "Projenizi konuşalım.", en: "Let's talk about your project." } as L,
  lead: {
    tr: "Formu doldurun, en geç bir iş günü içinde size dönüş yapalım. Dilerseniz WhatsApp veya telefonla da ulaşabilirsiniz.",
    en: "Fill in the form and we'll get back to you within one business day. You can also reach us on WhatsApp or by phone.",
  } as L,
  formTitle: { tr: "Bize yazın", en: "Send us a message" } as L,
  infoTitle: { tr: "İletişim bilgileri", en: "Contact details" } as L,
  labels: {
    address: { tr: "Adres", en: "Address" } as L,
    phone: { tr: "Telefon", en: "Phone" } as L,
    email: { tr: "E-posta", en: "Email" } as L,
    hours: { tr: "Çalışma saatleri", en: "Working hours" } as L,
  },
};

export const CAREERS = {
  meta: {
    title: { tr: "Kariyer", en: "Careers" } as L,
    description: {
      tr: "ZKA Investment'ta kariyer: KKTC'de mimar, mühendis ve çelik yapı ustası açık pozisyonları.",
      en: "Careers at ZKA Investment: open roles for architects, engineers and steel professionals in North Cyprus.",
    } as L,
  },
  eyebrow: { tr: "Kariyer", en: "Careers" } as L,
  title: { tr: "Birlikte inşa edelim.", en: "Build with us." } as L,
  lead: {
    tr: "Tutkulu mimarlar, mühendisler ve ustalarla büyüyoruz. Güvenli, öğrenmeye açık ve üretken bir ortamda yer alın.",
    en: "We're growing with passionate architects, engineers and craftspeople. Join a safe, productive team that is always learning.",
  } as L,
  openTitle: { tr: "Açık pozisyonlar", en: "Open positions" } as L,
  apply: { tr: "Başvur", en: "Apply" } as L,
  generalTitle: { tr: "Aradığınız pozisyon yok mu?", en: "Don't see your role?" } as L,
  generalText: {
    tr: "Genel başvurunuzu gönderin; uygun bir pozisyon açıldığında sizinle iletişime geçelim.",
    en: "Send us a general application and we'll get in touch when a suitable role opens.",
  } as L,
  perks: [
    { title: { tr: "Gelişim", en: "Growth" }, text: { tr: "Eğitim bütçesi ve mentorluk.", en: "A training budget and mentoring." } },
    { title: { tr: "Güvenlik", en: "Safety" }, text: { tr: "Önceliğimiz her zaman insan.", en: "People always come first." } },
    { title: { tr: "Çeşitlilik", en: "Variety" }, text: { tr: "Villadan fabrikaya farklı projeler.", en: "Diverse projects, from villas to factories." } },
  ] as Item[],
};

export const LEGAL = {
  privacy: {
    title: { tr: "Gizlilik Politikası", en: "Privacy Policy" } as L,
    description: { tr: "ZKA Investment kişisel verilerin korunması ve gizlilik politikası.", en: "ZKA Investment privacy and personal data protection policy." } as L,
    body: {
      tr: [
        { h2: "Veri sorumlusu" },
        { p: "Bu web sitesi aracılığıyla toplanan kişisel verilerin sorumlusu ZKA Investment Ltd.'dir." },
        { h2: "Toplanan veriler" },
        { p: "İletişim ve başvuru formları aracılığıyla ad, e-posta, telefon ve mesaj içeriğinizi topluyoruz." },
        { h2: "İşleme amacı" },
        { p: "Verileriniz yalnızca taleplerinize yanıt vermek, teklif hazırlamak ve başvurularınızı değerlendirmek amacıyla işlenir; üçüncü kişilerle pazarlama amacıyla paylaşılmaz." },
        { h2: "Haklarınız" },
        { p: "Verilerinize erişme, düzeltme ve silinmesini talep etme hakkına sahipsiniz. Talepleriniz için bize e-posta ile ulaşabilirsiniz." },
        { p: "Bu metin bir şablondur ve yayından önce hukuki danışmanınız tarafından gözden geçirilmelidir." },
      ],
      en: [
        { h2: "Data controller" },
        { p: "ZKA Investment Ltd. is the controller of personal data collected through this website." },
        { h2: "Data we collect" },
        { p: "Through our contact and application forms we collect your name, email, phone number and message." },
        { h2: "Why we process it" },
        { p: "We process your data only to reply to your enquiry, prepare quotes and assess applications. We never share it with third parties for marketing." },
        { h2: "Your rights" },
        { p: "You have the right to access, correct and request deletion of your data. Email us to make a request." },
        { p: "This text is a template and should be reviewed by your legal adviser before publication." },
      ],
    },
  },
  cookies: {
    title: { tr: "Çerez Politikası", en: "Cookie Policy" } as L,
    description: { tr: "ZKA Investment web sitesi çerez kullanımı.", en: "How the ZKA Investment website uses cookies." } as L,
    body: {
      tr: [
        { h2: "Zorunlu çerezler" },
        { p: "Sitenin çalışması için gerekli tercihleri (dil, çerez onayı, giriş animasyonu) tarayıcınızda saklarız." },
        { h2: "Analiz çerezleri" },
        { p: "Yalnızca onay vermeniz halinde, siteyi geliştirmek amacıyla anonim kullanım istatistikleri toplanır." },
        { h2: "Tercihlerinizi değiştirme" },
        { p: "Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman silebilirsiniz." },
      ],
      en: [
        { h2: "Essential cookies" },
        { p: "We store the preferences the site needs to work (language, cookie consent, intro animation) in your browser." },
        { h2: "Analytics cookies" },
        { p: "Only with your consent, we collect anonymous usage statistics to improve the site." },
        { h2: "Changing your preferences" },
        { p: "You can clear cookies at any time from your browser settings." },
      ],
    },
  },
};
