import { ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { SafeImage } from "./SafeImage";

export function ProjectsSection() {
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
            Metakent İnşaat, tamamlanan ve devam eden projeleriyle yaşam alanlarına, kamusal yapılara ve şehir dokusuna değer katar.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {site.projectCategories.map((category) => (
            <div key={category.title} id={category.id}>
              <div className="mb-5 flex items-end justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <span className="hidden text-sm text-white/50 sm:block">
                  12 seçili referans proje
                </span>
              </div>

              <div className="hide-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 pt-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                {category.projects.map((project) => (
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
                        <span className="rounded bg-ember px-2.5 py-1 text-xs font-bold text-white">
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
                        <MapPin size={15} className="text-ember" />
                        {project.location}
                      </p>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70 transition group-hover:text-white/90">
                        {project.description}
                      </p>
                      <a
                        href="#avcilar-konut-projesi"
                        className="mt-5 inline-flex translate-y-2 items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white opacity-90 backdrop-blur transition group-hover:translate-y-0 group-hover:border-ember/50 group-hover:bg-ember group-hover:opacity-100"
                      >
                        Projeyi İncele
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
