import { REASONS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconChef, IconClock, IconLeaf, IconTag } from "./Icons";

const ICONS = {
  leaf: IconLeaf,
  tag: IconTag,
  clock: IconClock,
  chef: IconChef,
};

export default function WhyUs() {
  return (
    <section id="keunggulan" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Kenapa Pilih Kami"
              title={
                <>
                  Masakan rumahan yang
                  <span className="italic text-brand-600"> bikin nagih</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-cocoa-500 lg:text-right">
              Bukan sekadar katering — ini masakan yang dibuat dengan hati, seperti masakan ibu di rumah.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => {
            const Icon = ICONS[r.icon];
            return (
              <Reveal key={r.title} delay={i * 100}>
                <div
                  className={`group relative h-full overflow-hidden rounded-[1.4rem] ${r.tint} border border-white/60 p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift`}
                >
                  <span className="pointer-events-none absolute -right-3 -top-6 font-display text-[5.5rem] font-black leading-none text-cocoa-900/5 transition-colors duration-300 group-hover:text-cocoa-900/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-xl ${r.iconBox} shadow-card transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-cocoa-900">{r.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cocoa-500">{r.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
