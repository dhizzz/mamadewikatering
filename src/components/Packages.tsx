import { PACKAGES } from "../data";
import { MSG, waLink } from "../lib/wa";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconCheck, IconHeart, IconPot, IconWhatsApp } from "./Icons";

export default function Packages() {
  return (
    <section id="paket" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Paket Katering"
            title={
              <>
                Pilih paket <span className="italic text-brand-600">sesuai acaramu</span>
              </>
            }
            desc="Tinggal klik, langsung terhubung ke WhatsApp dengan nama paket yang kamu pilih. Semua harga masih bisa nego untuk order jumlah besar."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 120}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-cream-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/40 via-transparent to-transparent" />
                  {pkg.badge && (
                    <span className="absolute left-4 top-4 -rotate-3 rounded-full bg-sunny-400 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-cocoa-900 shadow-card">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Price tag */}
                <div className="absolute right-5 top-44 rounded-xl bg-cocoa-900 px-4 py-2 text-cream-50 shadow-lift">
                  <p className="font-display text-lg font-black leading-none">
                    <span className="text-xs font-bold text-cream-200">Rp </span>
                    {pkg.price}
                  </p>
                  <p className="mt-0.5 text-[11px] font-bold text-sunny-400">{pkg.unit}</p>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7 pt-9">
                  <h3 className="font-display text-2xl font-black text-cocoa-900">{pkg.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-cocoa-400">{pkg.tagline}</p>

                  <ul className="mt-5 space-y-2.5">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-cocoa-600">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf-100 text-leaf-600">
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <a
                      href={waLink(MSG.paket(pkg.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-wa-500 px-5 py-3.5 font-extrabold text-white shadow-card transition-all duration-300 hover:bg-wa-600 hover:shadow-lift active:scale-95"
                    >
                      <IconWhatsApp className="h-5 w-5" />
                      Pesan Sekarang
                    </a>
                    <p className="mt-3 text-center text-xs font-semibold text-cocoa-400">
                      {pkg.minOrder} • Gratis ongkir area Bandung
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom package banner */}
        <Reveal delay={150}>
          <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-cocoa-900 p-8 shadow-lift sm:p-12">
            <div className="bg-dots-dark absolute inset-0" aria-hidden />
            <IconPot className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rotate-12 text-cream-50/5" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sunny-400">
                  <IconHeart className="h-3.5 w-3.5" />
                  Paket Spesial
                </p>
                <h3 className="mt-4 font-display text-3xl font-black leading-tight text-cream-50 sm:text-4xl">
                  Butuh paket custom? <span className="italic text-sunny-400">Bisa banget!</span>
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-cocoa-200">
                  Acara lamaran, gathering ribuan porsi, menu vegetarian, sampai tema tradisional — semua bisa
                  disusun sesuai budget. Konsultasi gratis, tanpa komitmen.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <a
                  href={waLink(MSG.custom)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-wa-500 px-8 py-4 text-lg font-extrabold text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-wa-600 active:scale-95"
                >
                  <IconWhatsApp className="h-6 w-6" />
                  Konsultasi Gratis
                </a>
                <p className="text-xs font-semibold text-cocoa-300 lg:text-right">
                  Free test food untuk min. order 200 porsi
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
