import { MSG, waLink } from "../lib/wa";
import { IconWhatsApp } from "./Icons";

export default function FloatingWA() {
  return (
    <a
      href={waLink(MSG.umum)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Dapur Berkah Mama Dewi"
      className="group fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none absolute right-full top-1/2 mr-4 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-cocoa-900 px-4 py-2.5 text-sm font-bold text-cream-50 opacity-0 shadow-lift transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 sm:block">
        Chat Mama Dewi, yuk!
        <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-cocoa-900" />
      </span>
      <span className="relative block">
        <span className="absolute inset-0 animate-ping rounded-full bg-wa-500/40" />
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-wa-500 text-white shadow-lift transition-all duration-300 group-hover:scale-110 group-hover:bg-wa-600 group-active:scale-95 sm:h-16 sm:w-16">
          <IconWhatsApp className="h-7 w-7 sm:h-8 sm:w-8" />
        </span>
      </span>
    </a>
  );
}
