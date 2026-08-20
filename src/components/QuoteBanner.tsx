import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { IconArrowRight, IconClipboard, IconClock, IconPot } from "./Icons";

export default function QuoteBanner() {
  return (
    <section className="relative py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-600 shadow-lift">
            <div className="bg-dots-dark absolute inset-0" aria-hidden />
            <IconPot className="pointer-events-none absolute -left-10 -top-12 h-56 w-56 -rotate-12 text-cream-50/10" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-sunny-400/20 blur-2xl" />

            <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-cocoa-900/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sunny-300">
                  <IconClipboard className="h-4 w-4" />
                  Penawaran Resmi
                </p>
                <h3 className="mt-4 font-display text-3xl font-black leading-tight text-cream-50 sm:text-4xl">
                  Acara besar butuh <span className="italic text-sunny-300">angka pasti?</span>
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-brand-100">
                  Isi form permintaan penawaran — gratis dan tanpa komitmen. Tim kami akan hitungkan paket
                  paling pas untuk budget acara Anda.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  to="/request-quote"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-cocoa-900 px-8 py-4 text-base font-extrabold text-cream-50 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-cocoa-800 active:scale-95 sm:text-lg"
                >
                  Request Penawaran
                  <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <p className="flex items-center gap-1.5 text-xs font-bold text-brand-100">
                  <IconClock className="h-3.5 w-3.5 text-sunny-300" />
                  Dibalas maksimal 1×24 jam
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
