export const whatsappProjectUrl =
  "https://wa.me/905326066599?text=Merhaba,%20Avc%C4%B1lar%20M.Kemal%20Pa%C5%9Fa%20Mahallesi%20Konut%20Projesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export const whatsappGeneralUrl =
  "https://wa.me/905326066599?text=Merhaba,%20Metakent%20%C4%B0n%C5%9Faat%20projeleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const projectImages = [
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

const project = (
  name: string,
  info: string,
  location: string,
  description: string,
  imageIndex: number
) => ({
  name,
  info,
  location,
  description,
  image: projectImages[imageIndex % projectImages.length],
  mapUrl: mapUrl(location),
  status: "Tamamlandı",
  statusDetail: "Tamamlanan referans proje"
});

export const site = {
  brand: "Metakent İnşaat",
  logo: "/logo-white.png",
  fallbackLogo: "/logo-web.png",
  hero: {
    title: "Metakent İnşaat",
    subtitle:
      "Güvenilir yapılar, modern yaşam alanları ve geleceğe değer katan projeler.",
    description:
      "Metakent İnşaat; konut, kamu ve özel sektör projelerinde kalite, güven ve estetik değerleri bir araya getiren modern bir yapı markasıdır.",
    image: "/hero-building.jpeg"
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
  completedProjects: {
    title: "Biten Projeler",
    id: "biten-projeler",
    sections: [
      {
        title: "Konut Projeleri",
        id: "konut-projeleri",
        groups: [
          {
            title: "Toplu Konut ve Yaşam Projeleri",
            id: "toplu-konut-ve-yasam-projeleri",
            projects: [
              project("İstanbul Beylikdüzü Kavaklı Yasemin Evleri", "84 daire, 19 dükkan - 25.000 m2", "Beylikdüzü / İstanbul", "Karma kullanımlı konut ve ticari alanlarıyla şehir yaşamına değer katan toplu konut projesi.", 0),
              project("İstanbul Mimaroba Balkaya Evleri", "29 daire - 5.250 m2", "Mimaroba / İstanbul", "Aile yaşamına uygun ölçekli, fonksiyonel planları ve modern mimari diliyle öne çıkan konut projesi.", 1),
              project("İstanbul Bahçeşehir City Court Evleri", "78 daire, 9 villa - 19.000 m2", "Bahçeşehir / İstanbul", "Daire ve villa yaşamını aynı konseptte buluşturan prestijli yaşam projesi.", 2),
              project("Antalya Konyaaltı Armina Konakları", "60 daire ve dükkanlar - 20.000 m2", "Konyaaltı / Antalya", "Konut ve ticari birimleriyle yüksek yaşam konforu sunan modern yapı projesi.", 3),
              project("Antalya Konyaaltı Tria Konutları", "73 daire - 15.000 m2", "Konyaaltı / Antalya", "Modern cephe dili ve fonksiyonel daire planlarıyla geliştirilen toplu konut projesi.", 4),
              project("Antalya Konyaaltı Greenspring 1", "24 daire - 3.500 m2", "Konyaaltı / Antalya", "Kompakt ölçekli, kaliteli yaşam alanlarına odaklanan konut projesi.", 5),
              project("Antalya Konyaaltı Greenspring 2", "30 daire - 4.500 m2", "Hurma Konyaaltı / Antalya", "Greenspring yaşam yaklaşımını sürdüren modern konut referansı.", 6)
            ]
          },
          {
            title: "Villa Projeleri",
            id: "villa-projeleri",
            projects: [
              project("Antalya Konyaaltı Yasemin Villaları", "12 villa", "Konyaaltı / Antalya", "Villa yaşamını modern mimari ve güçlü peyzaj yaklaşımıyla buluşturan özel proje.", 7),
              project("Çanakkale Küçükkuyu Görsen Yapı Kooperatifi", "20 villa ve sosyal tesis", "Küçükkuyu / Çanakkale", "Sosyal tesisleriyle birlikte planlanan nitelikli villa yaşam projesi.", 8),
              project("Sapanca Davos Villaları", "11 villa", "Sapanca / Sakarya", "Doğa ile temas kuran, müstakil yaşamı güçlendiren özel villa projesi.", 9),
              project("Antalya Hurma Sporland Villaları", "16 villa - 4.800 m2", "Hurma / Antalya", "Villa ölçeğinde konfor, mahremiyet ve modern dış cephe yaklaşımı sunan proje.", 0)
            ]
          },
          {
            title: "Müstakil Konut Projeleri",
            id: "mustakil-konut-projeleri",
            projects: [
              project("Güzelce Naif Yavuztürk Konutu", "Müstakil konut - 650 m2", "Güzelce / İstanbul", "Kişiye özel yaşam beklentilerine göre planlanan müstakil konut projesi.", 1),
              project("Halil Almaca Apartmanı", "Apartman projesi - 1.200 m2", "Avcılar / İstanbul", "Kentsel yaşam ihtiyaçlarına uygun planlanan ölçekli konut referansı.", 2),
              project("Döşemealtı Gül-Özgür Şahintürk Konutu", "Müstakil konut - 190 m2", "Döşemealtı / Antalya", "Fonksiyonel planlama ve sade mimari yaklaşımla geliştirilen müstakil konut.", 3)
            ]
          }
        ]
      },
      {
        title: "Ticari Yapılar ve İş Merkezleri",
        id: "ticari-yapilar-ve-is-merkezleri",
        groups: [
          {
            title: "İş Merkezi Projeleri",
            id: "is-merkezi-projeleri",
            projects: [
              project("İstanbul Kıraç Hüseyin Ağgül - Cihan Doğan Yılmaz İş Merkezi", "3.600 m2", "Kıraç / İstanbul", "Ticari kullanım ve ofis işlevlerini destekleyen iş merkezi projesi.", 4),
              project("Avcılar Parseller Almaca İş Merkezi", "4.200 m2", "Avcılar / İstanbul", "İş yaşamına uygun planlanan, merkezi konumlu ticari yapı projesi.", 5),
              project("İstanbul Esenyurt İbrahim Balkaya İş Merkezi", "12.000 m2", "Esenyurt / İstanbul", "Geniş ticari kullanım kapasitesine sahip iş merkezi referansı.", 6)
            ]
          },
          {
            title: "Depo ve Endüstriyel Yapılar",
            id: "depo-ve-endustriyel-yapilar",
            projects: [
              project("İstanbul Karınca Taşımacılık Gürpınar Tesisleri Deposu", "7.000 m2", "Gürpınar / İstanbul", "Lojistik ve depolama ihtiyaçlarına göre planlanan endüstriyel yapı projesi.", 7)
            ]
          }
        ]
      },
      {
        title: "Eğitim ve Kamu Yapıları",
        id: "egitim-ve-kamu-yapilari",
        groups: [
          {
            title: "Eğitim Yapıları",
            id: "egitim-yapilari",
            projects: [
              project("İstanbul Sefaköy Çağdaş Bilimler Koleji", "7.200 m2", "Sefaköy / İstanbul", "Eğitim yapısı ihtiyaçlarına uygun fonksiyonel ve güvenli yapı referansı.", 8),
              project("İstanbul Bahçeşehir Serhat-Arıkan Eğitim Hizmetleri Okulu", "52.000 m2", "Bahçeşehir / İstanbul", "Büyük ölçekli eğitim yapısı ve kampüs kullanımlarına uygun proje.", 9)
            ]
          },
          {
            title: "Kamu Yapıları",
            id: "kamu-yapilari",
            projects: [
              project("Avcılar Belediyesi Cihangir Kent Evi", "Kamu yapısı", "Cihangir Avcılar / İstanbul", "Kamusal kullanım ihtiyaçları için geliştirilen kent evi referansı.", 0),
              project("Avcılar Belediyesi Yolcu Aktarma İstasyonu", "Otobüs terminali", "Avcılar / İstanbul", "Yolcu dolaşımı ve aktarma senaryolarına uygun kamu ulaşım yapısı.", 1),
              project("Avcılar Belediyesi Şehit Er Dursun Bakan Parkı", "Park yapım işi", "Avcılar / İstanbul", "Kamusal açık alan ve sosyal kullanım odaklı çevre düzenleme projesi.", 2)
            ]
          }
        ]
      },
      {
        title: "Otel ve Turizm Projeleri",
        id: "otel-ve-turizm-projeleri",
        groups: [
          {
            title: "Turizm Yapıları",
            id: "turizm-yapilari",
            projects: [
              project("Antalya Beldibi Carelta Beach Otel", "215 oda - 12.000 m2", "Beldibi / Antalya", "Turizm ve konaklama ihtiyaçları için geliştirilen otel yapı referansı.", 3),
              project("Antalya Konyaaltı Kaf Otelcilik Oteli", "10.000 m2", "Konyaaltı / Antalya", "Kaba inşaat ve yapı uygulama deneyimini yansıtan otel projesi.", 4)
            ]
          }
        ]
      },
      {
        title: "Altyapı ve Çevre Düzenleme",
        id: "altyapi-ve-cevre-duzenleme",
        groups: [
          {
            title: "Peyzaj ve Çevre Düzenleme",
            id: "peyzaj-ve-cevre-duzenleme",
            projects: [
              project("İstanbul Beylikdüzü ÖKOP Konutları", "35.000 m2", "Beylikdüzü / İstanbul", "Geniş ölçekli konut çevre düzenleme ve peyzaj uygulaması.", 5),
              project("İstanbul Çekmeköy ÖKOP Konutları", "27.500 m2", "Çekmeköy / İstanbul", "Konut çevresi yaşam kalitesini artıran peyzaj ve imalat referansı.", 6)
            ]
          },
          {
            title: "Altyapı ve Kamu Çalışmaları",
            id: "altyapi-ve-kamu-calismalari",
            projects: [
              project("Marmara Ereğlisi BOTAŞ LNG İşletmeleri", "Çevre düzenleme", "Marmara Ereğlisi / Tekirdağ", "Endüstriyel tesis çevresi için düzenleme ve iyileştirme çalışması.", 7),
              project("Şehit Er Dursun Bakan Parkı", "Park ve çevre düzenleme", "Avcılar / İstanbul", "Kamusal açık alan düzenleme ve kullanım kalitesi odaklı referans.", 8),
              project("Yolcu Aktarma Merkezi", "Kamu ulaşım alanı", "Avcılar / İstanbul", "Ulaşım ve bekleme alanlarını destekleyen kamusal düzenleme projesi.", 9)
            ]
          }
        ]
      },
      {
        title: "Proje Tasarım ve Müşavirlik",
        id: "proje-tasarim-ve-musavirlik",
        groups: [
          {
            title: "Mimari ve Statik Projeler",
            id: "mimari-ve-statik-projeler",
            projects: [
              project("Türkmenistan Aşkabat Camii ve Kültür Merkezi", "Statik proje", "Aşkabat / Türkmenistan", "Kültür ve ibadet yapısı ölçeğinde teknik proje deneyimi.", 0),
              project("İstanbul Bahçeşehir Aqua Dolphin Su Oyunları Merkezi", "Ortak girişim", "Bahçeşehir / İstanbul", "Eğlence ve sosyal kullanım alanlarına yönelik proje geliştirme referansı.", 1),
              project("Çekmeköy Öğretmenler Kooperatifi Konutları", "240 konut", "Çekmeköy / İstanbul", "Toplu konut ölçeğinde proje tasarım ve teknik koordinasyon deneyimi.", 2),
              project("Beylikdüzü Kardeşkent 3 Konutları", "120 konut", "Beylikdüzü / İstanbul", "Konut üretimi için teknik proje ve planlama referansı.", 3),
              project("İstanbul Yenibosna AK-EL Vakfı Yönetim Merkezi", "Yönetim merkezi", "Yenibosna / İstanbul", "Kurumsal yönetim ve ticaret işlevlerini destekleyen proje çalışması.", 4)
            ]
          },
          {
            title: "Kontrollük ve Danışmanlık",
            id: "kontrolluk-ve-danismanlik",
            projects: [
              project("Gürpınar Yavuztürk Fabrika ve Çiftlik Evi", "Kontrollük ve müşavirlik", "Gürpınar / İstanbul", "Fabrika ve konut kullanımlarında danışmanlık ve kontrollük hizmeti.", 5),
              project("Çeşitli Konut ve Tesis Müşavirlik Hizmetleri", "Müşavirlik hizmetleri", "İstanbul", "Farklı ölçeklerde konut ve tesis projeleri için teknik danışmanlık.", 6)
            ]
          }
        ]
      },
      {
        title: "Dış Cephe Uygulamaları",
        id: "dis-cephe-uygulamalari",
        groups: [
          {
            title: "Konut Projeleri",
            id: "dis-cephe-konut-projeleri",
            projects: [
              project("Eston Barışkent 1-2 Etap", "Isı yalıtımı ve boya", "İstanbul", "Konut yapılarında dış cephe iyileştirme ve uygulama referansı.", 7),
              project("Armina Konakları", "Dış cephe uygulaması", "Konyaaltı / Antalya", "Konut cephesinde ısı yalıtımı ve boya uygulaması.", 8),
              project("Greenspring Konutları", "Dış cephe uygulaması", "Konyaaltı / Antalya", "Modern konut cephesi için yalıtım ve boya çalışması.", 9),
              project("Hasbahçe", "Dış cephe uygulaması", "İstanbul", "Konut ölçeğinde dış cephe yenileme referansı.", 0),
              project("Özferah", "Dış cephe uygulaması", "İstanbul", "Konut cephesinde koruma, yalıtım ve boya uygulaması.", 1),
              project("Lider Sitesi", "Dış cephe uygulaması", "İstanbul", "Site ölçeğinde dış cephe uygulama referansı.", 2),
              project("Kavaklıkent Projeleri", "Dış cephe uygulaması", "İstanbul", "Konut projelerinde yalıtım ve boya uygulamaları.", 3)
            ]
          },
          {
            title: "Ticari ve Endüstriyel Yapılar",
            id: "dis-cephe-ticari-ve-endustriyel",
            projects: [
              project("Ali Alagöz Fabrikası", "Endüstriyel dış cephe", "İstanbul", "Endüstriyel yapı cephesinde uygulama ve bakım referansı.", 4),
              project("Thin-Pak Fabrikası", "Endüstriyel dış cephe", "İstanbul", "Fabrika yapısı dış cephe uygulama deneyimi.", 5)
            ]
          },
          {
            title: "Kamu ve Resmi Yapılar",
            id: "dis-cephe-kamu-ve-resmi",
            projects: [
              project("Avcılar Kaymakamlık Binası", "Resmi yapı dış cephe", "Avcılar / İstanbul", "Resmi yapı ölçeğinde dış cephe uygulama referansı.", 6),
              project("Tekirdağ Ordu Evi ve Lojmanları", "Lojman dış cephe", "Tekirdağ", "Kamu ve lojman yapılarında dış cephe uygulaması.", 7)
            ]
          }
        ]
      }
    ]
  },
  ongoingProjects: {
    title: "Devam Eden Projelerimiz",
    id: "devam-eden-projeler",
    projects: [
      {
        name: "Avcılar M.Kemal Paşa Mahallesi Konut Projesi",
        info: "2+1 94 m2, 3+1 120 m2 daire seçenekleri",
        location: "Mustafa Kemal Paşa / Avcılar / İstanbul",
        description:
          "Ulaşım akslarına yakın konumu, aile yaşamına uygun planlaması, modern cephe dili ve güvenli yapı standardıyla geliştirilen özel konut projesi.",
        image: "/avcilar-konut-projesi.jpeg",
        mapUrl: mapUrl("Mustafa Kemal Paşa Avcılar İstanbul"),
        status: "Devam Ediyor",
        statusDetail: "Devam Eden Proje / 2028 Aralık"
      }
    ]
  },
  featuredProject: {
    name: "Avcılar M.Kemal Paşa Mahallesi Konut Projesi",
    description:
      "Avcılar M.Kemal Paşa Mahallesi Konut Projesi, şehir yaşamının merkezinde konforlu, güvenli ve modern bir yaşam alanı sunmak üzere tasarlanmıştır. Fonksiyonel daire planları, güçlü mimari dili, ulaşım akslarına yakınlığı ve aile yaşamını destekleyen çevresel olanaklarıyla bölgeye değer katmayı hedefleyen özel bir konut projesidir.",
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
      "/avcilar-konut-projesi.jpeg",
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
