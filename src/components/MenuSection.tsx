import { useState } from "react";
import { Category, DISHES, MENU_CATS } from "../data";
import { MSG, waLink } from "../lib/wa";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconArrowRight, IconStar, IconWhatsApp } from "./Icons";

const CAT_STYLE: Record<Category, { chip: string; dot: string }> = {
  "Lauk Pauk": { chip: "bg-brand-100 text-brand-700", dot: "bg-brand-500" },
  "Sayur & Tumis": { chip: "bg-leaf-100 text-leaf-600", dot: "bg-leaf-500" },
  "Nasi & Pendamping": { chip: "bg-sunny-100 text-sunny-600", dot: "bg-sunny-500" },
  "Minuman & Dessert": { chip: "bg-chili-100 text-chili-600", dot: "bg-chili-500" },
};

export default function MenuSection() {
  const [cat, setCat] = useState<string>("Semua");
  const filtered = cat === "Semua" ? DISHES : DISHES.filter((d) => d.cat === cat);

  return (
    <section id="menu" className="relative bg-cream-100/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Menu Andalan"
            title={
              <>
                Rasa bintang lima, <span className="italic text-brand-600">harga kaki lima</span>
              </>
            }
            desc="Semua menu dimasak fresh di hari H. Harga di bawah adalah harga per porsi — bisa dinegosiasikan sesuai jumlah order dan budget acaramu."
          />
        </Reveal>

        {/* Filter chips */}
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {["Semua", ...MENU_CATS].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 active:scale-95 ${
                  cat === c
                    ? "bg-cocoa-900 text-cream-50 shadow-card"
                    : "border border-cocoa-200 bg-white text-cocoa-600 hover:border-brand-400 hover:text-brand-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Menu list */}
        <div key={cat} className="animate-fade-in mt-10 grid gap-x-14 gap-y-7 md:grid-cols-2">
          {filtered.map((d, i) => {
            const style = CAT_STYLE[d.cat];
            return (
              <Reveal key={d.name} delay={(i % 6) * 60}>
                <div className="group flex items-start gap-4">
                  <span
                    className={`mt-0.5 grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg font-black ${style.chip} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                  >
                    {d.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="whitespace-nowrap font-extrabold text-cocoa-900 transition-colors group-hover:text-brand-600">
                        {d.name}
                      </h3>
                      {d.best && (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-sunny-200 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-cocoa-800">
                          <IconStar className="h-2.5 w-2.5 text-sunny-600" />
                          Best Seller
                        </span>
                      )}
                      <span className="leader-dots" aria-hidden />
                      <span className="whitespace-nowrap font-display text-lg font-black text-brand-600">
                        Rp {d.price.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <p className="mt-1 flex items-center gap-2 text-sm text-cocoa-400">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
                      {d.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[1.4rem] border-2 border-dashed border-brand-300 bg-white/70 p-6 sm:flex-row sm:items-center sm:p-7">
            <div>
              <p className="font-display text-lg font-bold text-cocoa-900 sm:text-xl">
                Nggak nemu menu yang dicari?
              </p>
              <p className="mt-1 text-sm text-cocoa-500">
                Kami punya 60+ menu lain: masakan Sunda, Jawa, Padang, sampai menu anak. Minta daftar lengkapnya,
                gratis!
              </p>
            </div>
            <a
              href={waLink(MSG.menuLengkap)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-extrabold text-cream-50 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lift active:scale-95"
            >
              <IconWhatsApp className="h-4 w-4" />
              Minta Daftar Menu
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
