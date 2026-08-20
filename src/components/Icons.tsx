import { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconPot = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 2.2c0 .9.7 1 .7 2M15 2.2c0 .9-.7 1-.7 2" />
    <path d="M12 5v3" />
    <path d="M4.5 8.5h15" />
    <path d="M6 8.5v6a4.5 4.5 0 0 0 4.5 4.5h3A4.5 4.5 0 0 0 18 14.5v-6" />
    <path d="M2.8 11h3.2M18 11h3.2" />
  </svg>
);

export const IconLeaf = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 19.5C4.5 10.5 11 4.5 20 4.5c0 9-6.5 15-15.5 15Z" />
    <path d="M4.5 19.5C7.5 14 12.5 9 19 5.5" />
  </svg>
);

export const IconTag = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 11.2V5.5a2 2 0 0 1 2-2h5.7a2 2 0 0 1 1.4.6l7.9 7.9a2 2 0 0 1 0 2.8l-5.7 5.7a2 2 0 0 1-2.8 0l-7.9-7.9a2 2 0 0 1-.6-1.4Z" />
    <circle cx="8" cy="8" r="1.3" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconChef = (p: P) => (
  <svg {...base} {...p}>
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} strokeWidth={2.4} {...p}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

export const IconChat = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.2 20.8l4.7-1.3A8.5 8.5 0 1 0 12 3.5Z" />
    <path d="M8.5 10.5h7M8.5 13.5h4.5" />
  </svg>
);

export const IconClipboard = (p: P) => (
  <svg {...base} {...p}>
    <rect x="5" y="3.5" width="14" height="17" rx="2" />
    <path d="M9 8h6M9 12h6M9 16h3.5" />
  </svg>
);

export const IconTruck = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2.5 6.5h10.5v10H2.5z" />
    <path d="M13 10h4.4l3.6 3.3v3.2h-2.3" />
    <path d="M8.8 16.5H13" />
    <circle cx="6.8" cy="16.5" r="1.8" />
    <circle cx="16.6" cy="16.5" r="1.8" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21.5S5.5 15.8 5.5 11a6.5 6.5 0 1 1 13 0c0 4.8-6.5 10.5-6.5 10.5Z" />
    <circle cx="12" cy="10.8" r="2.4" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5.2 3.8h3.2l1.6 4.1-2 1.6a12.5 12.5 0 0 0 5.5 5.5l1.6-2 4.1 1.6v3.2a1.9 1.9 0 0 1-2.1 1.9A16.9 16.9 0 0 1 3.3 5.9a1.9 1.9 0 0 1 1.9-2.1Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" />
    <path d="M4.5 7.5 12 13l7.5-5.5" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.2 6.8h.01" strokeWidth={2.6} />
  </svg>
);

export const IconWhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
    />
  </svg>
);

export const IconSpark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.5v17M4.7 7.75l14.6 8.5M19.3 7.75l-14.6 8.5" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 12h15M14 6.5l5.5 5.5-5.5 5.5" />
  </svg>
);

export const IconBurger = (p: P) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h9" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 19 5.8v5.4c0 4.4-2.9 8.3-7 9.3-4.1-1-7-4.9-7-9.3V5.8Z" />
    <path d="M9 11.5l2.1 2.1 4-4.2" />
  </svg>
);

export const IconUtensils = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

export const IconWallet = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.2" y="5.5" width="17.6" height="13.5" rx="2.5" />
    <path d="M3.2 9.5h17.6" />
    <path d="M14.5 14.5h3" />
  </svg>
);

export const IconBowl = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 11.5h16a8 8 0 0 1-5.5 7.2h-5A8 8 0 0 1 4 11.5Z" />
    <path d="M9 3.5c0 1-.8 1.2-.8 2.2M14.5 3.5c0 1-.8 1.2-.8 2.2" />
  </svg>
);

export const IconHeart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 20.2S4.7 15.6 3.2 11A5 5 0 0 1 12 7a5 5 0 0 1 8.8 4c-1.5 4.6-8.8 9.2-8.8 9.2Z" />
  </svg>
);

export const IconAlert = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 4.2 2.9 19.6h18.2Z" />
    <path d="M12 10v4.2M12 16.9h.01" />
  </svg>
);

export const IconUsers = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8.2" r="3.4" />
    <path d="M2.8 19.6a6.2 6.2 0 0 1 12.4 0" />
    <path d="M15.5 5.2a3.4 3.4 0 0 1 0 6" />
    <path d="M17.6 13.9a6.2 6.2 0 0 1 3.6 5.7" />
  </svg>
);
