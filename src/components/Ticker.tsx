import { TICKER_ITEMS } from "../data";
import { IconSpark } from "./Icons";

export default function Ticker() {
  return (
    <div className="group relative z-10 -rotate-1 border-y-4 border-brand-500 bg-cocoa-900 py-3.5 shadow-lift">
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-cream-100 sm:text-base"
          >
            <IconSpark className="h-4 w-4 shrink-0 text-sunny-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
