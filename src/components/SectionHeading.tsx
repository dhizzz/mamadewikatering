import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  dark?: boolean;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, desc, dark = false, center = false }: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`inline-flex items-center gap-3 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.24em] ${
          dark ? "text-sunny-400" : "text-brand-600"
        }`}
      >
        <span className={`h-[3px] w-8 rounded-full ${dark ? "bg-sunny-400" : "bg-brand-500"}`} />
        {eyebrow}
        {center && <span className={`h-[3px] w-8 rounded-full ${dark ? "bg-sunny-400" : "bg-brand-500"}`} />}
      </p>
      <h2
        className={`mt-4 font-display text-3xl sm:text-4xl lg:text-[2.7rem] font-black leading-[1.12] ${
          dark ? "text-cream-50" : "text-cocoa-900"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-cocoa-200" : "text-cocoa-500"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
