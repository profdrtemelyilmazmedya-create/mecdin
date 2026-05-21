"use client";

import { ArrowUpRight, CheckCircle2, MapPin, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { SafeImage } from "./SafeImage";

type Project = (typeof site.projectCategories)[number]["projects"][number];
type ProjectCategory = (typeof site.projectCategories)[number];

function buildGroups(category: ProjectCategory) {
  const map = new Map<string, { superCategory: string; group: string; projects: Project[] }>();

  category.projects.forEach((project) => {
    const key = `${project.superCategory}__${project.group}`;
    if (!map.has(key)) {
      map.set(key, {
        superCategory: project.superCategory,
        group: project.group,
        projects: []
      });
    }
    map.get(key)?.projects.push(project);
  });

  return Array.from(map.values());
}

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

        <div className="mt-12 space-y-16">
          {site.projectCategories.map((category) => (
            <div key={category.title} id={category.id}>
              <div className="mb-7 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/35">
                    Metakent Referansları
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                    {category.title}
                  </h3>
                </div>
                <span className="hidden text-sm text-white/50 sm:block">
                  Detaylı proje vitrini
                </span>
              </div>

              <div className="space-y-10">
                {buildGroups(category).map((group) => (
                  <div key={`${group.superCategory}-${group.group}`}>
                    <div className="mb-4">
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-ember">
                        {group.superCategory}
                      </p>
                      <h4 className="mt-1 text-xl font-bold text-white/90">{group.group}</h4>
                    </div>

                    <div className="hide-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 pt-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                      {group.projects.map((project) => (
                        <ProjectCard
                          key={project.name}
                          project={project}
                          onSelect={() => setSelectedProject(project)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
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

function ProjectCard({ project, onSelect }: { project: Project; onSelect: () => void }) {
  const isOngoing = project.status === "Devam Ediyor";

  return (
    <article className="group w-[84vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-md border border-white/10 bg-[#11141b] shadow-cinematic transition duration-300 hover:z-10 hover:scale-[1.025] hover:border-white/20 hover:shadow-2xl sm:w-[390px]">
      <div className="relative h-56 overflow-hidden bg-graphite">
        <SafeImage
          src={project.image}
          alt={project.name}
          sizes="(max-width: 640px) 84vw, 390px"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded px-3 py-1 text-xs font-bold text-white ${
            isOngoing ? "bg-emerald-600" : "bg-ember"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/42">
          {project.superCategory}
        </p>
        <h5 className="mt-2 min-h-[4.5rem] text-2xl font-black leading-tight text-white sm:text-3xl">
          {project.name}
        </h5>
        <a
          href={project.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition hover:text-white"
        >
          <MapPin size={15} className={isOngoing ? "text-emerald-400" : "text-ember"} />
          {project.location}
        </a>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/68 transition group-hover:text-white/90">
          {project.description}
        </p>
        <button
          type="button"
          onClick={onSelect}
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:border-ember/50 hover:bg-ember"
        >
          Projeyi İncele
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
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
            <a
              href={project.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-white/75 transition hover:text-white"
            >
              <MapPin size={18} className={isOngoing ? "text-emerald-400" : "text-ember"} />
              {project.location}
            </a>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
              Proje Hakkında
            </p>
            <p className="mt-4 text-base leading-8 text-white/72">{project.description}</p>
            <p className="mt-4 text-base leading-8 text-white/72">
              {project.name}, Metakent İnşaat'ın kalite, güvenlik ve teknik disiplin
              yaklaşımını yansıtan referans çalışmalarından biridir. Projede konum
              avantajı, fonksiyonel planlama, güçlü yapı standardı ve uzun vadeli
              kullanım değeri ön planda tutulmuştur.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Kategori", `${project.superCategory} / ${project.group}`],
              ["Konum", project.location],
              ["Durum", project.statusDetail],
              ["Yapı Yaklaşımı", isOngoing ? "Modern konut geliştirme" : "Tamamlanan referans çalışma"],
              ["Kullanım", isOngoing ? "Aile yaşamı" : project.group]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.055] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  {label}
                </p>
                {label === "Konum" ? (
                  <a
                    href={project.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex font-semibold text-white underline decoration-ember/60 underline-offset-4 transition hover:text-ember"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-2 font-semibold text-white">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {project.specs.map((item) => (
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
