import { GALLERY } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="galeri" className="relative bg-cream-100/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Galeri"
              title={
                <>
                  Bukti masakan kami <span className="italic text-brand-600">di berbagai acara</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-sm font-semibold text-cocoa-400 lg:text-right">
              Dari syukuran kecil sampai wedding 800 porsi — semua kami kerjakan dengan standar rasa yang sama.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[180px] md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.caption} delay={(i % 4) * 90} className={g.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl shadow-card">
                <img
                  src={g.img}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-cream-50/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cocoa-800 backdrop-blur-sm">
                  {g.tag}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/85 via-cocoa-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 w-full translate-y-3 p-4 text-sm font-bold text-cream-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
