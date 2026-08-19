import { STEPS } from "../data";
import { MSG, waLink } from "../lib/wa";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconChat, IconClock, IconUtensils, IconWallet, IconWhatsApp } from "./Icons";

const ICONS = {
  chat: IconChat,
  utensils: IconUtensils,
  wallet: IconWallet,
};

export default function HowToOrder() {
  return (
    <section id="cara-pesan" className="relative overflow-hidden bg-cocoa-900 py-20 sm:py-24">
      <div className="bg-dots-dark absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45rem_45rem_at_50%_120%,#4b341e_0%,transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            center
            dark
            eyebrow="Cara Pesan"
            title={
              <>
                Cuma 3 langkah, <span className="italic text-sunny-400">beres!</span>
              </>
            }
            desc="Nggak perlu ribet isi formulir panjang. Semua urusan katering cukup lewat satu chat WhatsApp."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Connector line */}
          <div
            className="absolute left-[18%] right-[18%] top-9 hidden border-t-2 border-dashed border-cocoa-600 md:block"
            aria-hidden
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {STEPS.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal key={s.title} delay={i * 140}>
                  <div className="group relative text-center">
                    <div className="relative mx-auto inline-block">
                      <span
                        className={`grid h-[72px] w-[72px] place-items-center rounded-full ${s.circle} shadow-lift ring-4 ring-cocoa-800 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105`}
                      >
                        <Icon className="h-8 w-8" />
                      </span>
                      <span className="absolute -right-1.5 -top-1.5 grid h-7 w-7 place-items-center rounded-full border-2 border-cocoa-900 bg-cream-50 font-display text-xs font-black text-cocoa-900">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-cream-50">{s.title}</h3>
                    <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-cocoa-200">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href={waLink(MSG.umum)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-wa-500 px-9 py-4 text-lg font-extrabold text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-wa-600 hover:shadow-[0_36px_70px_-20px_rgb(37_211_102/0.45)] active:scale-95"
            >
              <IconWhatsApp className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              Mulai Langkah Pertama
            </a>
            <p className="flex items-center gap-2 text-sm font-semibold text-cocoa-300">
              <IconClock className="h-4 w-4 text-sunny-400" />
              Fast response — biasanya dibalas kurang dari 10 menit
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
