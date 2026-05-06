"use client";

import Image from "next/image";
import { Building2, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const menu = [
  { label: "Anasayfa", href: "#anasayfa" },
  {
    label: "Kurumsal",
    href: "#kurumsal",
    children: [
      { label: "Hakkımızda", href: "#kurumsal" },
      { label: "Vizyonumuz", href: "#kurumsal" },
      { label: "Misyonumuz", href: "#kurumsal" }
    ]
  },
  {
    label: "Projeler",
    href: "#projeler",
    children: [
      { label: "Biten Projelerimiz", href: "#biten-projeler" },
      { label: "Devam Eden Projelerimiz", href: "#devam-eden-projeler" },
      { label: "Kamu Projeleri", href: "#kamu-projeleri" }
    ]
  },
  { label: "Avcılar Konut Projesi", href: "#avcilar-konut-projesi" },
  { label: "İletişim", href: "#iletisim" }
];

function Logo() {
  const [imageFailed, setImageFailed] = useState(false);
  const [logoSrc, setLogoSrc] = useState(site.logo);

  return (
    <a href="#anasayfa" className="flex items-center gap-3" aria-label="Metakent İnşaat Anasayfa">
      {!imageFailed ? (
        <span className="relative h-16 w-44 overflow-hidden sm:h-20 sm:w-56">
          <Image
            src={logoSrc}
            alt="Metakent İnşaat Logo"
            fill
            sizes="160px"
            onError={() => {
              if (logoSrc !== site.fallbackLogo) {
                setLogoSrc(site.fallbackLogo);
                return;
              }
              setImageFailed(true);
            }}
            className="object-contain"
          />
        </span>
      ) : (
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ember/10 text-ember">
          <Building2 size={24} />
        </span>
      )}
      <span className="sr-only text-base font-semibold tracking-wide text-white sm:text-lg">
        {site.brand}
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050609]/90 shadow-2xl backdrop-blur-xl"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {menu.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
                {item.children ? <ChevronDown size={16} /> : null}
              </a>
              {item.children ? (
                <div className="invisible absolute left-0 top-full min-w-60 translate-y-2 rounded-md border border-white/10 bg-[#0b0d13]/95 p-2 opacity-0 shadow-cinematic backdrop-blur-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block rounded px-3 py-2 text-sm text-white/75 transition hover:bg-ember/20 hover:text-white"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#07080d]/95 px-4 pb-5 pt-2 backdrop-blur-xl lg:hidden">
          {menu.map((item) => (
            <div key={item.label} className="py-1">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-semibold text-white"
              >
                {item.label}
              </a>
              {item.children ? (
                <div className="ml-3 border-l border-white/10 pl-3">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-white/70"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
