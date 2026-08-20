import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../data";
import { MSG, WA_DISPLAY, waLink } from "../lib/wa";
import { IconClipboard, IconClock, IconHeart, IconInstagram, IconPin, IconPot, IconWhatsApp } from "./Icons";
import { ScrollLink } from "./ScrollLink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-cocoa-950 text-cocoa-200">
      <div className="bg-dots-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <ScrollLink to="beranda" className="group inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-cream-50 transition-transform duration-300 group-hover:-rotate-6">
                <IconPot className="h-7 w-7" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl font-black text-cream-50">Dapur Berkah</span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-sunny-400">
                  Mama Dewi Catering
                </span>
              </span>
            </ScrollLink>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Katering rumahan dengan cinta sejak 2012. Enak, halal, dan bersahabat untuk semua acara — dari
              arisan RT sampai wedding impian.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/dapurberkah.mamadewi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Dapur Berkah Mama Dewi"
                className="grid h-11 w-11 place-items-center rounded-full border border-cocoa-700 text-cocoa-200 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:bg-brand-500 hover:text-cream-50"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
              <a
                href={waLink(MSG.umum)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Dapur Berkah Mama Dewi"
                className="grid h-11 w-11 place-items-center rounded-full border border-cocoa-700 text-cocoa-200 transition-all duration-300 hover:-translate-y-1 hover:border-wa-500 hover:bg-wa-500 hover:text-cream-50"
              >
                <IconWhatsApp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-widest text-cream-50">Menu Cepat</h4>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-sunny-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-4 group-hover:rounded-sm" />
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <Link
                  to="/request-quote"
                  className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-sunny-400"
                >
                  <IconClipboard className="h-3.5 w-3.5 text-brand-500 transition-transform duration-300 group-hover:-rotate-6" />
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-widest text-cream-50">
              Hubungi Kami
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span>Jl. Kenanga No. 12, Sukagalih, Sukajadi, Bandung, Jawa Barat</span>
              </li>
              <li className="flex items-start gap-3">
                <IconWhatsApp className="mt-0.5 h-5 w-5 shrink-0 text-wa-400" />
                <a
                  href={waLink(MSG.umum)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-cream-50 transition-colors hover:text-wa-400"
                >
                  {WA_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-sunny-400" />
                <span>Senin – Sabtu: 07.00 – 17.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cocoa-800 pt-7 text-xs font-semibold text-cocoa-400 sm:flex-row">
          <p>© {year} Dapur Berkah Mama Dewi Catering. Semua hak dilindungi.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan
            <IconHeart className="h-3.5 w-3.5 text-chili-500" />
            dan bumbu rahasia Mama Dewi
          </p>
        </div>
      </div>
    </footer>
  );
}
