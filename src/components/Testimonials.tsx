import { TESTIMONIALS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconStar } from "./Icons";

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_50rem_at_110%_10%,#ffe6cd_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Testimoni"
            title={
              <>
                Kata mereka yang <span className="italic text-brand-600">sudah pernah</span>
              </>
            }
            desc="Lebih dari 300 pelanggan kembali memesan untuk acara kedua, ketiga, dan seterusnya. Ini beberapa cerita mereka."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 130}>
              <figure
                className={`relative h-full rounded-[1.5rem] border border-cream-200 bg-white p-7 pt-9 shadow-card transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-lift ${t.rotate}`}
              >
                {/* Tape */}
                <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 rounded-sm bg-sunny-300/80 shadow-sm" />
                {/* Quote mark */}
                <span className="pointer-events-none absolute right-6 top-4 font-display text-7xl font-black leading-none text-brand-100">
                  &rdquo;
                </span>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, s) => (
                    <IconStar key={s} className="h-5 w-5 text-sunny-500" />
                  ))}
                </div>

                <blockquote className="relative mt-4 text-[15px] leading-relaxed text-cocoa-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-dashed border-cocoa-200 pt-5">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${t.color} font-display text-sm font-black text-cream-50 shadow-card`}
                  >
                    {t.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-extrabold text-cocoa-900">{t.name}</span>
                    <span className="block text-xs font-semibold text-cocoa-400">{t.role}</span>
                  </span>
                  <span className="shrink-0 rounded-full bg-cream-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-brand-700">
                    {t.note}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
