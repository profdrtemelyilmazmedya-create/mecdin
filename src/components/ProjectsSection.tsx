"use client";

import { ArrowUpRight, CheckCircle2, MapPin, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { SafeImage } from "./SafeImage";

type Project = (typeof site.projectCategories)[number]["projects"][number];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projeler" className="bg-[#07080d] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-ember">
            Projeler
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-white sm:text-5xl">
            Projeler
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Metakent İnşaat, tamamlanan ve devam eden projeleriyle yaşam alanlarına,
            kamusal yapılara ve şehir dokusuna değer katar.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {site.projectCategories.map((category) => (
            <div key={category.title} id={category.id}>
              <div className="mb-5 flex items-end justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <span className="hidden text-sm text-white/50 sm:block">
                  Detaylı proje vitrini
                </span>
              </div>

              <div className="hide-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 pt-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                {category.projects.map((project) => {
                  const isOngoing = project.status === "Devam Ediyor";

                  return (
                    <article
                      key={project.name}
                      className="group relative h-[420px] w-[82vw] max-w-[390px] shrink-0 snap-start overflow-hidden rounded-md bg-graphite shadow-cinematic transition duration-300 hover:z-10 hover:scale-[1.035] hover:shadow-2xl sm:w-[360px]"
                    >
                      <SafeImage
                        src={project.image}
                        alt={project.name}
                        sizes="(max-width: 640px) 82vw, 360px"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span
                            className={`rounded px-2.5 py-1 text-xs font-bold text-white ${
                              isOngoing ? "bg-emerald-600" : "bg-ember"
                            }`}
                          >
                            {project.status}
                          </span>
                          <span className="rounded bg-black/60 px-2.5 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                            {project.category}
                          </span>
                        </div>
                        <h4 className="text-2xl font-black leading-tight text-white">
                          {project.name}
                        </h4>
                        <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                          <MapPin
                            size={15}
                            className={isOngoing ? "text-emerald-400" : "text-ember"}
                          />
                          {project.location}
                        </p>
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70 transition group-hover:text-white/90">
                          {project.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="mt-5 inline-flex translate-y-2 items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white opacity-90 backdrop-blur transition group-hover:translate-y-0 group-hover:border-ember/50 group-hover:bg-ember group-hover:opacity-100"
                        >
                          Projeyi İncele
                          <ArrowUpRight size={17} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  );
}

function ProjectModal({
  project,
  onClose
}: {
  project: Project;
  onClose: () => void;
}) {
  const isOngoing = project.status === "Devam Ediyor";
  const isPublic = project.category === "Kamu Projeleri";

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-md">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-md border border-white/10 bg-[#0b0d13] shadow-cinematic">
        <div className="relative h-[320px] bg-graphite sm:h-[420px]">
          <SafeImage
            src={project.image}
            alt={project.name}
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d13] via-black/35 to-black/15" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-black/65 text-white transition hover:bg-ember"
            aria-label="Proje detayını kapat"
          >
            <X size={22} />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <span
              className={`inline-flex rounded px-3 py-1 text-xs font-bold text-white ${
                isOngoing ? "bg-emerald-600" : "bg-ember"
              }`}
            >
              {project.status}
            </span>
            <h3 className="mt-3 text-3xl font-black text-white sm:text-5xl">
              {project.name}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-white/75">
              <MapPin size={18} className={isOngoing ? "text-emerald-400" : "text-ember"} />
              {project.location}
            </p>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
              Proje Hakkında
            </p>
            <p className="mt-4 text-base leading-8 text-white/72">{project.description}</p>
            <p className="mt-4 text-base leading-8 text-white/72">
              {project.name}, Metakent İnşaat'ın kalite, güvenlik ve modern mimari
              yaklaşımını yansıtan referans projelerinden biridir. Projede konum
              avantajı, fonksiyonel planlama, güçlü yapı standardı ve uzun vadeli
              kullanım değeri ön planda tutulmuştur.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Kategori", project.category],
              ["Konum", project.location],
              ["Durum", project.status],
              ["Yapı Yaklaşımı", isOngoing ? "Modern proje geliştirme" : "Tamamlanan referans proje"],
              ["Öne Çıkan", "Güvenli yapı, estetik mimari"],
              ["Kullanım", isPublic ? "Kamusal kullanım" : "Yaşam alanı"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.055] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  {label}
                </p>
                <p className="mt-2 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {["Kaliteli malzeme", "Zamanında teslim", "Kurumsal süreç yönetimi"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-md bg-white/[0.055] px-4 py-3 text-sm font-semibold text-white/85"
              >
                <CheckCircle2
                  size={18}
                  className={isOngoing ? "text-emerald-400" : "text-ember"}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
