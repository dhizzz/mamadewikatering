import { IMAGES } from "../data";
import { MSG, waLink } from "../lib/wa";
import { Reveal } from "./Reveal";
import { IconArrowRight, IconChat, IconPot, IconShield, IconSpark, IconStar, IconWhatsApp } from "./Icons";

const AVATARS = [
  { initials: "RW", color: "bg-brand-400" },
  { initials: "AP", color: "bg-leaf-500" },
  { initials: "DS", color: "bg-sunny-500" },
  { initials: "BU", color: "bg-chili-500" },
];

const STATS = [
  { value: "12+", label: "Tahun Berdiri" },
  { value: "500+", label: "Acara Sukses" },
  { value: "75rb+", label: "Porsi Terhidang" },
];

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-[72px]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_88%_-12%,#ffe6cd_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(42rem_42rem_at_-12%_108%,#ffe6a3_0%,transparent_50%)]" />
        <div className="bg-dots absolute inset-0 opacity-70" />
        <IconSpark className="absolute left-[6%] top-28 h-8 w-8 text-sunny-400 animate-spin-slower" />
        <IconSpark className="absolute bottom-24 right-[4%] hidden h-10 w-10 text-brand-300 animate-spin-slower lg:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-16">
          {/* Copy */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white/80 px-4 py-2 shadow-card">
                <IconShield className="h-5 w-5 text-leaf-500" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-cocoa-700">
                  100% Halal & Higienis
                </span>
                <span className="h-1 w-1 rounded-full bg-brand-400" />
                <span className="text-xs font-bold text-brand-600">Sejak 2012</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-[2.6rem] font-black leading-[1.05] text-cocoa-900 sm:text-6xl lg:text-[4.2rem]">
                Katering Enak,
                <br />
                Harga{" "}
                <span className="relative inline-block italic text-brand-600">
                  Bersahabat
                  <svg
                    className="absolute -bottom-2 left-0 w-full sm:-bottom-3"
                    viewBox="0 0 220 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 9c40-6 80-6 107-3 30 3 70 2 107-4"
                      stroke="#F5AC1E"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-cocoa-500 sm:text-lg">
                Dapur Berkah Mama Dewi melayani nasi box, prasmanan, dan snack box untuk{" "}
                <strong className="font-bold text-cocoa-700">acara kantor, pernikahan, arisan, pengajian,</strong>{" "}
                sampai syukuran keluarga — dimasak fresh setiap hari dengan resep rumahan khas Mama Dewi.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={waLink(MSG.umum)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-wa-500 px-8 py-4 text-lg font-extrabold text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-wa-600 hover:shadow-[0_36px_70px_-20px_rgb(29_175_83/0.55)] active:scale-95"
                >
                  <IconWhatsApp className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                  Pesan via WhatsApp
                </a>
                <a
                  href="#menu"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-cocoa-900 px-7 py-[14px] text-base font-extrabold text-cocoa-900 transition-all duration-300 hover:-translate-y-1 hover:bg-cocoa-900 hover:text-cream-50 active:scale-95"
                >
                  Lihat Menu & Paket
                  <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-cocoa-400">
                <IconChat className="h-4 w-4 text-wa-600" />
                Gratis konsultasi menu & hitung budget acara
              </p>
            </Reveal>

            {/* Trust + stats */}
            <Reveal delay={400}>
              <div className="mt-9 border-t border-cocoa-200/60 pt-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex -space-x-3">
                    {AVATARS.map((a) => (
                      <span
                        key={a.initials}
                        className={`grid h-10 w-10 place-items-center rounded-full ${a.color} font-display text-[11px] font-bold text-cream-50 ring-[3px] ring-cream-50`}
                      >
                        {a.initials}
                      </span>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <IconStar key={i} className="h-4 w-4 text-sunny-500" />
                      ))}
                      <span className="ml-1 text-sm font-extrabold text-cocoa-900">4.9/5</span>
                    </div>
                    <p className="text-xs font-semibold text-cocoa-400">Dipercaya 300+ pelanggan setia</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-2xl font-black text-brand-600 sm:text-3xl">{s.value}</p>
                      <p className="text-xs font-semibold text-cocoa-500 sm:text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={200} className="relative mx-auto w-full max-w-[460px]">
            <div className="relative">
              {/* Offset frame */}
              <div className="absolute -right-4 top-6 h-full w-full rounded-b-[2.5rem] rounded-t-[999px] border-2 border-dashed border-brand-300" />
              <img
                src={IMAGES.hero}
                alt="Hidangan khas Dapur Berkah Mama Dewi: nasi kuning, ayam bakar, rendang, dan sate"
                className="relative aspect-[3/3.8] w-full rounded-b-[2.5rem] rounded-t-[999px] object-cover shadow-lift ring-8 ring-white"
                loading="eager"
              />

              {/* Floating chip: halal */}
              <div className="animate-float absolute -left-2 top-16 flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-lift sm:-left-8">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-leaf-100 text-leaf-600">
                  <IconShield className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-cocoa-900">Halal & Higienis</span>
                  <span className="block text-[11px] font-semibold text-cocoa-400">Dapur bersih terstandar</span>
                </span>
              </div>

              {/* Floating chip: rating */}
              <div className="animate-float-slow absolute -bottom-4 -right-2 rounded-xl bg-white px-4 py-3 shadow-lift sm:-right-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="h-4 w-4 text-sunny-500" />
                  ))}
                </div>
                <p className="mt-1 text-sm font-extrabold text-cocoa-900">
                  4.9/5 <span className="font-semibold text-cocoa-400">dari 320+ ulasan</span>
                </p>
              </div>

              {/* Rotating badge */}
              <div className="absolute -left-3 bottom-10 h-28 w-28 sm:-left-10 sm:h-32 sm:w-32">
                <svg viewBox="0 0 100 100" className="animate-spin-slower h-full w-full">
                  <defs>
                    <path id="heroCircle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" fill="none" />
                  </defs>
                  <circle cx="50" cy="50" r="49" fill="#fff5e0" />
                  <text
                    fill="#4b341e"
                    fontSize="10"
                    fontWeight="800"
                    letterSpacing="2.6"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    <textPath href="#heroCircle">MASAKAN RUMAHAN • PENUH CINTA •</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-cream-50 shadow-card">
                    <IconPot className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
