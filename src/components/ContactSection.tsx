"use client";

import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import type { ReactNode } from "react";
import { FormEvent, useState } from "react";
import { site, whatsappGeneralUrl } from "@/data/site";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const contact = site.contact;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="iletisim" className="bg-[#06070b] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-ember">
            İletişim
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-white sm:text-5xl">
            İletişim
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Projelerimiz hakkında detaylı bilgi almak veya bizimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <ContactCard
              title="OFİS"
              text={contact.office}
              actionText="Haritada Aç"
              href={contact.officeMap}
              icon={<MapPin size={22} />}
            />
            <ContactCard
              title="ŞUBE"
              text={contact.branch}
              actionText="Haritada Aç"
              href={contact.branchMap}
              icon={<MapPin size={22} />}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={contact.phoneHref}
                className="glass-panel flex items-center gap-4 rounded-md p-5 transition hover:border-ember/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ember/10 text-ember">
                  <Phone size={21} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                    GSM
                  </span>
                  <span className="mt-1 block font-semibold text-white">{contact.phone}</span>
                </span>
              </a>
              <a
                href={contact.emailHref}
                className="glass-panel flex items-center gap-4 rounded-md p-5 transition hover:border-ember/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ember/10 text-ember">
                  <Mail size={21} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                    E-posta
                  </span>
                  <span className="mt-1 block truncate font-semibold text-white">
                    {contact.email}
                  </span>
                </span>
              </a>
            </div>

            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-500"
            >
              <MessageCircle size={19} />
              WhatsApp ile Yazın
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <MapCard title="OFİS Haritası" address={contact.office} href={contact.officeMap} />
              <MapCard title="ŞUBE Haritası" address={contact.branch} href={contact.branchMap} />
            </div>
          </div>

          <form onSubmit={submit} className="glass-panel rounded-md p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white">Bilgi Talep Formu</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Formu doldurun, proje danışmanlığı için en kısa sürede size dönüş yapalım.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Ad Soyad" name="name" required />
              <Field label="Telefon" name="phone" type="tel" required />
              <Field label="E-posta" name="email" type="email" />
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-white/75">Mesaj</span>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full resize-none rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-ember"
                  placeholder="Proje hakkında bilgi almak istiyorum."
                  required
                />
              </label>
            </div>

            {sent ? (
              <div className="mt-5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-100">
                Mesajınız alınmıştır. En kısa sürede sizinle iletişime geçilecektir.
              </div>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ember px-6 py-3 text-sm font-bold text-white transition hover:bg-red-600 sm:w-auto"
            >
              <Send size={18} />
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold text-white/75">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-ember"
        placeholder={label}
      />
    </label>
  );
}

function ContactCard({
  title,
  text,
  actionText,
  href,
  icon
}: {
  title: string;
  text: string;
  actionText: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <div className="glass-panel rounded-md p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ember/10 text-ember">
          {icon}
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{title}</p>
          <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-ember hover:bg-ember"
          >
            {actionText}
          </a>
        </div>
      </div>
    </div>
  );
}

function MapCard({
  title,
  address,
  href
}: {
  title: string;
  address: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative min-h-44 overflow-hidden rounded-md border border-white/10 bg-[#11131b] p-5 transition hover:border-ember/50"
    >
      <div className="absolute inset-0 opacity-30 transition group-hover:opacity-50">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>
      <div className="relative">
        <MapPin className="text-ember" size={25} />
        <h4 className="mt-5 text-lg font-bold text-white">{title}</h4>
        <p className="mt-2 text-sm leading-6 text-white/60">{address}</p>
        <span className="mt-4 inline-block text-sm font-bold text-ember">Google Maps ile Aç</span>
      </div>
    </a>
  );
}
