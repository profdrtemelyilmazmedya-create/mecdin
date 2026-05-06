import { ArrowRight, ShieldCheck } from "lucide-react";
import { site, whatsappGeneralUrl } from "@/data/site";
import { SafeImage } from "./SafeImage";

export function Hero() {
  return (
    <section id="anasayfa" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0">
        <SafeImage
          src={site.hero.image}
          alt="Modern konut ve mimari proje"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/60" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
            <ShieldCheck size={17} className="text-ember" />
            Premium konut, kamu ve özel sektör projeleri
          </div>
          <h1 className="text-5xl font-black leading-none tracking-normal text-white sm:text-6xl lg:text-8xl">
            {site.hero.title}
          </h1>
          <p className="mt-5 text-xl font-semibold text-white sm:text-2xl">
            {site.hero.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {site.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projeler"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ember px-6 py-3 text-sm font-bold text-white shadow-lg shadow-ember/25 transition hover:bg-red-600"
            >
              Projeleri İncele
              <ArrowRight size={18} />
            </a>
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-500"
            >
              İletişime Geç
            </a>
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Öne Çıkanlar
          </p>
          <div className="grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {site.highlights.map((item) => (
              <div
                key={item}
                className="glass-panel rounded-md px-3 py-3 text-xs font-semibold text-white/90 transition hover:-translate-y-1 hover:border-ember/40 hover:bg-white/10 sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
