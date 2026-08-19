import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data";
import { MSG, waLink } from "../lib/wa";
import { IconBurger, IconClose, IconPot, IconWhatsApp } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 160;
      let current = "beranda";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= pos) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream-50/95 shadow-card backdrop-blur-sm" : "bg-cream-50"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#beranda" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 text-cream-50 shadow-card transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <IconPot className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-black text-cocoa-900">Dapur Berkah</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
              Mama Dewi Catering
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-sm font-bold transition-colors ${
                active === item.id ? "text-brand-600" : "text-cocoa-600 hover:text-brand-600"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-500 transition-all duration-300 ${
                  active === item.id ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
            </a>
          ))}
          <a
            href={waLink(MSG.umum)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-wa-500 px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-wa-600 hover:shadow-lift active:scale-95"
          >
            <IconWhatsApp className="h-4 w-4" />
            Pesan Sekarang
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-cocoa-200 text-cocoa-800 transition-colors hover:border-brand-400 hover:text-brand-600 lg:hidden"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconBurger className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="animate-fade-in border-t border-cream-200 bg-cream-50 px-5 pb-6 pt-3 shadow-lift lg:hidden">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`border-b border-cream-200/70 py-3.5 text-[15px] font-bold transition-colors ${
                  active === item.id ? "text-brand-600" : "text-cocoa-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink(MSG.umum)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-wa-500 px-5 py-3.5 text-sm font-bold text-white shadow-card transition-all hover:bg-wa-600 active:scale-95"
          >
            <IconWhatsApp className="h-5 w-5" />
            Pesan via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
