"use client";

import { ArrowUpRight, CheckCircle2, MapPin, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/data/site";
import { SafeImage } from "./SafeImage";

type CompletedSection = (typeof site.completedProjects.sections)[number];
type ProjectGroup = CompletedSection["groups"][number];
type Project = ProjectGroup["projects"][number] | (typeof site.ongoingProjects.projects)[number];

export function ProjectsSection() {
  const sections = site.completedProjects.sections;
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);
  const [activeGroupBySection, setActiveGroupBySection] = useState<Record<string, string>>(() =>
    Object.fromEntries(sections.map((section) => [section.id, section.groups[0].id]))
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const applyHashSelection = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const sectionMatch = sections.find((section) => section.id === hash);
      if (sectionMatch) {
        setActiveSectionId(sectionMatch.id);
        return;
      }

      for (const section of sections) {
        const groupMatch = section.groups.find((group) => group.id === hash);
        if (groupMatch) {
          setActiveSectionId(section.id);
          setActiveGroupBySection((current) => ({
            ...current,
            [section.id]: groupMatch.id
          }));
          return;
        }
      }
    };

    applyHashSelection();
    window.addEventListener("hashchange", applyHashSelection);
    return () => window.removeEventListener("hashchange", applyHashSelection);
  }, [sections]);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeSectionId) ?? sections[0],
    [activeSectionId, sections]
  );
  const activeGroupId = activeGroupBySection[activeSection.id] ?? activeSection.groups[0].id;
  const activeGroup =
    activeSection.groups.find((group) => group.id === activeGroupId) ?? activeSection.groups[0];

  return (
    <section id="projeler" className="bg-[#07080d] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-ember">
            Projeler
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-white sm:text-5xl">
            {site.completedProjects.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Metakent İnşaat referansları; konut, ticari yapı, kamu, turizm,
            altyapı, müşavirlik ve dış cephe uygulamalarında kurumsal deneyimi
            tek vitrinde sunar.
          </p>
        </div>

        <div id={site.completedProjects.id} className="mt-10">
          <div className="hide-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {sections.map((section) => {
              const isActive = section.id === activeSection.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSectionId(section.id)}
                  className={`shrink-0 rounded-md border px-4 py-3 text-sm font-black uppercase tracking-[0.12em] transition ${
                    isActive
                      ? "border-ember bg-ember text-white shadow-lg shadow-ember/20"
                      : "border-white/10 bg-white/[0.055] text-white/68 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </div>

          <div id={activeSection.id} className="mt-8 rounded-md border border-white/10 bg-white/[0.035] p-4 sm:p-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                  Ana Kategori
                </p>
                <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  {activeSection.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeSection.groups.map((group) => {
                  const isActive = group.id === activeGroup.id;

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() =>
                        setActiveGroupBySection((current) => ({
                          ...current,
                          [activeSection.id]: group.id
                        }))
                      }
                      className={`rounded-md border px-3 py-2 text-sm font-bold transition ${
                        isActive
                          ? "border-gold bg-gold text-black"
                          : "border-white/10 bg-black/30 text-white/70 hover:border-gold/50 hover:text-white"
                      }`}
                    >
                      {group.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <ProjectRail
              group={activeGroup}
              onSelect={(project) => setSelectedProject(project)}
            />
          </div>
        </div>

        <div id={site.ongoingProjects.id} className="mt-16">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
              Aktif Proje
            </p>
            <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              {site.ongoingProjects.title}
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {site.ongoingProjects.projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  );
}

function ProjectRail({
  group,
  onSelect
}: {
  group: ProjectGroup;
  onSelect: (project: Project) => void;
}) {
  return (
    <div className="mt-7">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Alt Kategori
          </p>
          <h4 className="mt-1 text-2xl font-black text-white">{group.title}</h4>
        </div>
        <span className="hidden text-sm text-white/45 sm:block">
          {group.projects.length} referans
        </span>
      </div>

      <div className="hide-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 pt-1 sm:-mx-6 sm:px-6">
        {group.projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onSelect={() => onSelect(project)}
          />
        ))}
      </div>
    </div>
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded px-3 py-1 text-xs font-bold text-white ${
            isOngoing ? "bg-emerald-600" : "bg-ember"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="p-5">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">
          {project.info}
        </p>
        <h5 className="mt-3 min-h-[4.5rem] text-2xl font-black leading-tight text-white sm:text-3xl">
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
              {project.name}, Metakent İnşaat'ın kalite, güvenlik ve teknik
              disiplin yaklaşımını yansıtan referans çalışmalarından biridir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Proje Bilgisi", project.info],
              ["Konum", project.location],
              ["Durum", project.statusDetail],
              ["Yapı Yaklaşımı", isOngoing ? "Modern konut geliştirme" : "Tamamlanan referans çalışma"],
              ["Kullanım", isOngoing ? "Aile yaşamı" : "Kurumsal referans"]
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
            {["Kurumsal deneyim", "Teknik disiplin", "Referans proje"].map((item) => (
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
