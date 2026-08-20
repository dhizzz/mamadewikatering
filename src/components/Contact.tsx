import { MSG, WA_DISPLAY, waLink } from "../lib/wa";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  IconArrowRight,
  IconChat,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconPot,
  IconTruck,
  IconWhatsApp,
} from "./Icons";

const INFO = [
  {
    icon: IconPin,
    label: "Alamat Dapur",
    value: "Jl. Kenanga No. 12, Sukagalih, Sukajadi, Bandung, Jawa Barat",
  },
  {
    icon: IconClock,
    label: "Jam Operasional",
    value: "Senin – Sabtu: 07.00 – 17.00 WIB • Minggu: dengan janji temu",
  },
  {
    icon: IconPhone,
    label: "WhatsApp",
    value: WA_DISPLAY,
    href: waLink(MSG.umum),
  },
  {
    icon: IconMail,
    label: "Email",
    value: "dapurberkah.mamadewi@gmail.com",
    href: "mailto:dapurberkah.mamadewi@gmail.com",
  },
  {
    icon: IconTruck,
    label: "Area Layanan",
    value: "Bandung & sekitarnya — gratis ongkir untuk min. order 50 porsi",
  },
];

export default function Contact() {
  return (
    <section id="kontak" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Info */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Kontak & Lokasi"
                title={
                  <>
                    Mampir ke dapur kami, <span className="italic text-brand-600">atau chat aja dulu</span>
                  </>
                }
                desc="Boleh main untuk lihat dapur, icip menu, atau langsung ngobrol via WhatsApp — cara paling cepat dan paling disukai pelanggan."
              />
            </Reveal>

            <div className="mt-10 space-y-4">
              {INFO.map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-cream-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-cocoa-400">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="mt-0.5 block break-words font-bold text-cocoa-800 transition-colors hover:text-brand-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="mt-0.5 block break-words font-bold text-cocoa-800">{item.value}</span>
                      )}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={450}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dapur+Catering+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-600 transition-colors hover:text-brand-700"
              >
                Lihat rute di Google Maps
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Big WA CTA card */}
          <Reveal delay={150} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-cocoa-900 p-8 shadow-lift sm:p-10">
              <div className="bg-dots-dark absolute inset-0" aria-hidden />
              <IconPot className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 -rotate-12 text-cream-50/5" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/15 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-sunny-400/10 blur-2xl" />

              <div className="relative flex flex-1 flex-col">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-cream-50 shadow-lift">
                  <IconChat className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-black leading-tight text-cream-50 sm:text-4xl">
                  Siap bikin acaramu <span className="italic text-sunny-400">berkesan?</span>
                </h3>
                <p className="mt-3 leading-relaxed text-cocoa-200">
                  Ceritakan acaramu — tanggal, jumlah tamu, budget. Mama Dewi sendiri yang bantu susun menunya.
                  Konsultasi & hitung budget, <strong className="font-bold text-cream-50">gratis!</strong>
                </p>

                <div className="mt-6 rounded-2xl border border-cocoa-700 bg-cocoa-800/60 p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-cocoa-300">
                    Simpan nomor kami
                  </p>
                  <a
                    href={waLink(MSG.umum)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 flex items-center gap-3 font-display text-2xl font-black text-cream-50 transition-colors hover:text-sunny-400"
                  >
                    <IconPhone className="h-6 w-6 text-wa-400" />
                    {WA_DISPLAY}
                  </a>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href={waLink(MSG.umum)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-wa-500 px-8 py-5 text-xl font-extrabold text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-wa-600 hover:shadow-[0_40px_80px_-24px_rgb(37_211_102/0.6)] active:scale-95"
                  >
                    <IconWhatsApp className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    Pesan via WhatsApp
                  </a>
                  <p className="mt-3 text-center text-xs font-semibold text-cocoa-300">
                    Buka setiap hari • Dibalas cepat di jam operasional
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
