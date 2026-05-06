import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";

const links = [
  ["Anasayfa", "#anasayfa"],
  ["Kurumsal", "#kurumsal"],
  ["Projeler", "#projeler"],
  ["Avcılar Konut Projesi", "#avcilar-konut-projesi"],
  ["İletişim", "#iletisim"]
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-xl font-black text-white">{site.brand}</h2>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Metakent İnşaat — Güvenilir yapılar, modern yaşam alanları.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">Menü</h3>
          <div className="mt-4 grid gap-2">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-white/60 transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">
            İletişim
          </h3>
          <div className="mt-4 space-y-3 text-sm text-white/60">
            <a href={site.contact.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone size={16} className="text-ember" />
              {site.contact.phone}
            </a>
            <a href={site.contact.emailHref} className="flex items-center gap-2 hover:text-white">
              <Mail size={16} className="text-ember" />
              {site.contact.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">
            Sosyal Medya
          </h3>
          <div className="mt-4 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#iletisim"
                aria-label="Sosyal medya bağlantısı"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-ember hover:bg-ember hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/40 sm:px-6 lg:px-8">
        © 2026 Metakent İnşaat. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
