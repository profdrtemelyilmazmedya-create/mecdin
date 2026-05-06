import { CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";

export function CorporateSection() {
  return (
    <section id="kurumsal" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-ember">
            Kurumsal
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-white sm:text-5xl">
            Kurumsal
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Metakent İnşaat, her projede mühendislik gücünü, estetik bakış açısını ve güvenilir yapı anlayışını bir araya getirir.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {site.corporateCards.map((card, index) => (
            <article
              key={card.title}
              className={`glass-panel rounded-md p-6 transition duration-300 hover:-translate-y-1 hover:border-ember/50 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-ember/10 text-ember">
                <CheckCircle2 size={23} />
              </div>
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
