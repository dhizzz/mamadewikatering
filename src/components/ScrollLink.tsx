import { ReactNode } from "react";

type Props = {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

/**
 * Anchor ke section dalam halaman yang aman dipakai bersama HashRouter:
 * mencegah perubahan hash route, lalu scroll halus ke section tujuan.
 */
export function ScrollLink({ to, className, children, onClick }: Props) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </a>
  );
}
