export const whatsappProjectUrl =
  "https://wa.me/905326066599?text=Merhaba,%20Avc%C4%B1lar%20M.Kemal%20Pa%C5%9Fa%20Mahallesi%20Konut%20Projesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export const whatsappGeneralUrl =
  "https://wa.me/905326066599?text=Merhaba,%20Metakent%20%C4%B0n%C5%9Faat%20projeleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const referenceImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80"
];

const mapUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const completedProject = (
  name: string,
  index: number,
  group: string,
  superCategory: string,
  location: string
) => ({
  name,
  category: "Biten Projelerimiz",
  group,
  superCategory,
  location,
  status: "Tamamlandı",
  statusDetail: "Tamamlanan referans proje",
  mapUrl: mapUrl(location),
  specs: [superCategory, group, "Referans proje", "Kurumsal deneyim"],
  description: `${group} kapsamında tamamlanan, Metakent İnşaat'ın teknik birikimini ve saha deneyimini yansıtan referans çalışması.`,
  image: referenceImages[index % referenceImages.length]
});

export const site = {
  brand: "Metakent İnşaat",
  logo: "/logo-white.png",
  fallbackLogo: "/logo.png",
  hero: {
    title: "Metakent İnşaat",
    subtitle:
      "Güvenilir yapılar, modern yaşam alanları ve geleceğe değer katan projeler.",
    description:
      "Metakent İnşaat; konut, kamu ve özel sektör projelerinde kalite, güven ve estetik değerleri bir araya getiren modern bir yapı markasıdır.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85"
  },
  highlights: [
    "Güvenilir Yapılar",
    "Modern Mimari",
    "Kaliteli Malzeme",
    "Zamanında Teslim",
    "Kurumsal Hizmet",
    "Yaşam Odaklı Projeler"
  ],
  corporateCards: [
    {
      title: "Hakkımızda",
      text: "Metakent İnşaat, güvenilir yapı anlayışı, kaliteli malzeme kullanımı ve modern mimari yaklaşımıyla yaşam alanları geliştiren bir inşaat firmasıdır. Konut, kamu ve özel sektör projelerinde estetik, dayanıklılık ve işlevselliği bir arada sunmayı hedefler."
    },
    {
      title: "Vizyonumuz",
      text: "Modern şehir yaşamına değer katan, güven veren ve sürdürülebilir projeler üreten öncü bir inşaat markası olmak."
    },
    {
      title: "Misyonumuz",
      text: "Kaliteli, güvenli ve yaşanabilir yapılar inşa ederek müşterilerimize uzun vadeli değer sunmak; her projede mühendislik, estetik ve güven ilkelerini ön planda tutmak."
    },
    {
      title: "Kalite Politikamız",
      text: "Her projede malzeme kalitesini, işçilik standardını ve mühendislik disiplinini ön planda tutarak uzun ömürlü yapılar üretmek."
    },
    {
      title: "Güvenli Yapı Anlayışımız",
      text: "Yapı güvenliği, teknik doğruluk ve yönetmeliklere uygunluk ilkeleriyle sağlam ve güven veren projeler geliştirmek."
    }
  ],
  projectCategories: [
    {
      title: "Biten Projelerimiz",
      id: "biten-projelerimiz",
      projects: [
        completedProject("Antalya Konyaaltı Yasemin Villaları - 12 villa (5.500 m2)", 0, "Villa Projeleri", "Konut Projeleri", "Konyaaltı / Antalya"),
        completedProject("Çanakkale Küçükkuyu S.S. Görsen Yapı Kooperatifi - 20 villa ve sosyal tesis", 1, "Villa Projeleri", "Konut Projeleri", "Küçükkuyu / Çanakkale"),
        completedProject("Sapanca Davos Villaları - 11 villa (5.500 m2)", 2, "Villa Projeleri", "Konut Projeleri", "Sapanca / Sakarya"),
        completedProject("Antalya Hurma Sporland Villaları - 16 villa (4.800 m2)", 3, "Villa Projeleri", "Konut Projeleri", "Hurma / Antalya"),
        completedProject("İstanbul Güzelce Naif Yavuztürk Konutu (650 m2)", 4, "Müstakil Konut Projeleri", "Konut Projeleri", "Güzelce / İstanbul"),
        completedProject("İstanbul Avcılar Halil Almaca Apartmanı (1.200 m2)", 5, "Müstakil Konut Projeleri", "Konut Projeleri", "Avcılar / İstanbul"),
        completedProject("Antalya Döşemealtı Gül-Özgür Şahintürk Konutu (190 m2)", 6, "Müstakil Konut Projeleri", "Konut Projeleri", "Döşemealtı / Antalya"),
        completedProject("Antalya Konyaaltı Armina Konakları - 60 daire ve dükkanlar (20.000 m2)", 7, "Toplu Konut ve Yaşam Projeleri", "Konut Projeleri", "Konyaaltı / Antalya"),
        completedProject("Antalya Konyaaltı Tria Konutları - 73 daire (15.000 m2)", 8, "Toplu Konut ve Yaşam Projeleri", "Konut Projeleri", "Konyaaltı / Antalya"),
        completedProject("Antalya Konyaaltı Greenspring 1 Konutları - 24 daire (3.500 m2)", 9, "Toplu Konut ve Yaşam Projeleri", "Konut Projeleri", "Konyaaltı / Antalya"),
        completedProject("Antalya Konyaaltı Hurma Greenspring 2 Konutları - 30 daire (4.500 m2)", 10, "Toplu Konut ve Yaşam Projeleri", "Konut Projeleri", "Hurma Konyaaltı / Antalya"),
        completedProject("İstanbul Kıraç Hüseyin Ağgül - Cihan Doğan Yılmaz İş Merkezi (3.600 m2)", 11, "İş Merkezi Projeleri", "Ticari Yapı ve İş Merkezleri", "Kıraç / İstanbul"),
        completedProject("Avcılar Parseller Almaca İş Merkezi (4.200 m2)", 12, "İş Merkezi Projeleri", "Ticari Yapı ve İş Merkezleri", "Avcılar / İstanbul"),
        completedProject("İstanbul Esenyurt İbrahim Balkaya İş Merkezi (12.000 m2)", 13, "İş Merkezi Projeleri", "Ticari Yapı ve İş Merkezleri", "Esenyurt / İstanbul"),
        completedProject("İstanbul Karınca Taşımacılık Gürpınar Tesisleri Deposu (7.000 m2)", 14, "Depo ve Endüstriyel Yapılar", "Ticari Yapı ve İş Merkezleri", "Gürpınar / İstanbul"),
        completedProject("İstanbul Sefaköy Çağdaş Bilimler Koleji (7.200 m2)", 15, "Eğitim Yapıları", "Eğitim ve Kamu Yapıları", "Sefaköy / İstanbul"),
        completedProject("İstanbul Bahçeşehir Serhat-Arıkan Eğitim Hizmetleri Okulu (52.000 m2)", 16, "Eğitim Yapıları", "Eğitim ve Kamu Yapıları", "Bahçeşehir / İstanbul"),
        completedProject("Avcılar Belediyesi Cihangir Kent Evi", 17, "Kamu Yapıları", "Eğitim ve Kamu Yapıları", "Cihangir Avcılar / İstanbul"),
        completedProject("Avcılar Belediyesi Yolcu Aktarma İstasyonu (Otobüs Terminali)", 18, "Kamu Yapıları", "Eğitim ve Kamu Yapıları", "Avcılar / İstanbul"),
        completedProject("Avcılar Belediyesi Şehit Er Dursun Bakan Parkı", 19, "Kamu Yapıları", "Eğitim ve Kamu Yapıları", "Avcılar / İstanbul"),
        completedProject("Antalya Beldibi Carelta Beach Otel - 215 oda (12.000 m2)", 20, "Otel ve Turizm Projeleri", "Otel ve Turizm Projeleri", "Beldibi / Antalya"),
        completedProject("Antalya Konyaaltı Kaf Otelcilik Oteli (10.000 m2)", 21, "Otel ve Turizm Projeleri", "Otel ve Turizm Projeleri", "Konyaaltı / Antalya"),
        completedProject("İstanbul Beylikdüzü ÖKOP Konutları (35.000 m2)", 22, "Peyzaj ve Çevre Düzenleme", "Altyapı ve Çevre Düzenleme Projeleri", "Beylikdüzü / İstanbul"),
        completedProject("İstanbul Çekmeköy ÖKOP Konutları (27.500 m2)", 23, "Peyzaj ve Çevre Düzenleme", "Altyapı ve Çevre Düzenleme Projeleri", "Çekmeköy / İstanbul"),
        completedProject("Marmara Ereğlisi BOTAŞ LNG İşletmeleri çevre düzenleme", 24, "Altyapı ve Kamu Çalışmaları", "Altyapı ve Çevre Düzenleme Projeleri", "Marmara Ereğlisi / Tekirdağ"),
        completedProject("Şehit Er Dursun Bakan Parkı", 25, "Altyapı ve Kamu Çalışmaları", "Altyapı ve Çevre Düzenleme Projeleri", "Avcılar / İstanbul"),
        completedProject("Yolcu Aktarma Merkezi", 26, "Altyapı ve Kamu Çalışmaları", "Altyapı ve Çevre Düzenleme Projeleri", "Avcılar / İstanbul"),
        completedProject("Türkmenistan Aşkabat Camii ve Kültür Merkezi", 27, "Mimari ve Statik Projeler", "Proje Tasarım ve Müşavirlik Hizmetleri", "Aşkabat / Türkmenistan"),
        completedProject("İstanbul Bahçeşehir Aqua Dolphin Su Oyunları Merkezi", 28, "Mimari ve Statik Projeler", "Proje Tasarım ve Müşavirlik Hizmetleri", "Bahçeşehir / İstanbul"),
        completedProject("Çekmeköy Öğretmenler Kooperatifi Konutları", 29, "Mimari ve Statik Projeler", "Proje Tasarım ve Müşavirlik Hizmetleri", "Çekmeköy / İstanbul"),
        completedProject("Beylikdüzü Kardeşkent 3 Konutları", 30, "Mimari ve Statik Projeler", "Proje Tasarım ve Müşavirlik Hizmetleri", "Beylikdüzü / İstanbul"),
        completedProject("İstanbul Yenibosna AK-EL Vakfı Yönetim Merkezi", 31, "Mimari ve Statik Projeler", "Proje Tasarım ve Müşavirlik Hizmetleri", "Yenibosna / İstanbul"),
        completedProject("Gürpınar Yavuztürk Fabrika ve Çiftlik Evi", 32, "Kontrollük ve Danışmanlık", "Proje Tasarım ve Müşavirlik Hizmetleri", "Gürpınar / İstanbul"),
        completedProject("Çeşitli konut ve tesis müşavirlik hizmetleri", 33, "Kontrollük ve Danışmanlık", "Proje Tasarım ve Müşavirlik Hizmetleri", "İstanbul"),
        completedProject("Eston Barışkent 1-2 Etap", 34, "Konut Projeleri", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "İstanbul"),
        completedProject("Armina Konakları", 35, "Konut Projeleri", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "Konyaaltı / Antalya"),
        completedProject("Greenspring Konutları", 36, "Konut Projeleri", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "Konyaaltı / Antalya"),
        completedProject("Hasbahçe", 37, "Konut Projeleri", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "İstanbul"),
        completedProject("Özferah", 38, "Konut Projeleri", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "İstanbul"),
        completedProject("Lider Sitesi", 39, "Konut Projeleri", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "İstanbul"),
        completedProject("Kavaklıkent projeleri", 40, "Konut Projeleri", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "İstanbul"),
        completedProject("Ali Alagöz Fabrikası", 41, "Ticari ve Endüstriyel Yapılar", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "İstanbul"),
        completedProject("Thin-Pak Fabrikası", 42, "Ticari ve Endüstriyel Yapılar", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "İstanbul"),
        completedProject("Avcılar Kaymakamlık Binası", 43, "Kamu ve Resmi Yapılar", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "Avcılar / İstanbul"),
        completedProject("Tekirdağ Ordu Evi ve Lojmanları", 44, "Kamu ve Resmi Yapılar", "Dış Cephe Isı Yalıtımı ve Boya Uygulamaları", "Tekirdağ")
      ]
    },
    {
      title: "Devam Eden Projelerimiz",
      id: "devam-eden-projeler",
      projects: [
        {
          name: "Avcılar M.Kemal Paşa Mahallesi Konut Projesi",
          category: "Devam Eden Projelerimiz",
          group: "Konut Projesi",
          superCategory: "Devam Eden Projelerimiz",
          location: "Mustafa Kemal Paşa / Avcılar / İstanbul",
          status: "Devam Ediyor",
          statusDetail: "Devam Eden Proje / 2028 Aralık",
          mapUrl: mapUrl("Mustafa Kemal Paşa Avcılar İstanbul"),
          specs: [
            "2+1 94 m2 daire seçeneği",
            "3+1 120 m2 daire seçeneği",
            "C30 beton",
            "Nervürlü inşaat demiri S420",
            "Ankastre mutfak altyapısı",
            "Laminat parke ve modern ıslak hacimler"
          ],
          description:
            "Avcılar M.Kemal Paşa Mahallesi Konut Projesi; ulaşım akslarına yakın konumu, aile yaşamına uygun daire planları, modern cephe dili ve güvenli yapı standardıyla geliştirilen özel bir konut projesidir.",
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    }
  ],
  featuredProject: {
    name: "Avcılar M.Kemal Paşa Mahallesi Konut Projesi",
    description:
      "Avcılar M.Kemal Paşa Mahallesi Konut Projesi, şehir yaşamının merkezinde konforlu, güvenli ve modern bir yaşam alanı sunmak üzere tasarlanmıştır. Fonksiyonel daire planları, güçlü mimari dili, ulaşım akslarına yakınlığı ve aile yaşamını destekleyen çevresel olanaklarıyla bölgeye değer katmayı hedefleyen özel bir konut projesidir. Proje; estetik görünüm, sağlam yapı anlayışı ve uzun vadeli yatırım değeriyle öne çıkar.",
    details: [
      ["Proje Tipi", "Konut"],
      ["Konum", "Mustafa Kemal Paşa / Avcılar / İstanbul"],
      ["Durum", "Devam Eden Proje / 2028 Aralık"],
      ["Kullanılan Malzemeler", "C30 beton, nervürlü inşaat demiri (S420)"],
      ["Beton Tedariki", "Onaylı hazır beton tesisinden proje standardına uygun tedarik"],
      ["Kullanım Amacı", "Aile yaşamı"]
    ],
    features: [
      "2+1 94 m2 daire seçeneği",
      "3+1 120 m2 daire seçeneği",
      "Ankastre mutfak altyapısı",
      "Laminat parke yaşam alanları",
      "Modern banyo ve ıslak hacimler",
      "Isı ve ses yalıtımı"
    ],
    mapUrl: mapUrl("Mustafa Kemal Paşa Avcılar İstanbul"),
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=80"
    ]
  },
  contact: {
    office:
      "Fatih, Rızaküçükoğlu Paşa Cad No:40, 34500 Büyükçekmece/İstanbul",
    branch: "Mustafa Kemal Paşa, Mareşal Cd. No:9, 34315 Avcılar/İstanbul",
    phone: "0 (532) 606 65 99",
    phoneHref: "tel:+905326066599",
    email: "insaatmetakent@gmail.com",
    emailHref: "mailto:insaatmetakent@gmail.com",
    officeMap:
      "https://www.google.com/maps/search/?api=1&query=Fatih%2C%20R%C4%B1zak%C3%BC%C3%A7%C3%BCko%C4%9Flu%20Pa%C5%9Fa%20Cad%20No%3A40%2C%2034500%20B%C3%BCy%C3%BCk%C3%A7ekmece%2F%C4%B0stanbul",
    branchMap:
      "https://www.google.com/maps/search/?api=1&query=Mustafa%20Kemal%20Pa%C5%9Fa%2C%20Mare%C5%9Fal%20Cd.%20No%3A9%2C%2034315%20Avc%C4%B1lar%2F%C4%B0stanbul"
  }
};
