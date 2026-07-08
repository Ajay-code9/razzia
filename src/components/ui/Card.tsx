import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-2xl border border-line-100 bg-white p-6 shadow-[0_10px_30px_rgba(20,20,20,0.04)] ${className}`}
    >
      {children}
    </article>
  );
}
