"use client";

import { MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { site, whatsappProjectUrl } from "@/data/site";
import { SafeImage } from "./SafeImage";

export function FeaturedProject() {
  const project = site.featuredProject;
  const [activeImage, setActiveImage] = useState(project.gallery[0]);

  return (
    <section id="avcilar-konut-projesi" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(213,31,42,0.18),transparent_28rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.24em] text-ember">
              <Sparkles size={17} />
              Özel Proje
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-white sm:text-5xl">
              {project.name}
            </h2>
              <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.details.map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/[0.055] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                    {label}
                  </p>
                  <p className="mt-2 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-md border border-ember/25 bg-ember/10 px-4 py-3 text-sm font-semibold text-white/90"
                >
                  {feature}
                </div>
              ))}
            </div>

            <a
              href={whatsappProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-500"
            >
              <MessageCircle size={19} />
              WhatsApp ile Bilgi Al
            </a>
          </div>

          <div className="glass-panel rounded-md p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-graphite">
              <SafeImage
                src={activeImage}
                alt={`${project.name} galeri görseli`}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-sm font-bold text-white">Modern konut ve yaşam konsepti</p>
                <p className="mt-1 text-xs text-white/60">Avcılar’da konforlu ve güvenli yaşam.</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
              {project.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`relative aspect-square overflow-hidden rounded-md border transition ${
                    activeImage === image
                      ? "border-ember ring-2 ring-ember/30"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  aria-label={`${index + 1}. galeri görselini aç`}
                >
                  <SafeImage
                    src={image}
                    alt={`${project.name} küçük galeri ${index + 1}`}
                    sizes="110px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
