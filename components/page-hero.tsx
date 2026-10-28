import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="label text-brand-light">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-balance md:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/70">{children}</div>
        )}
      </div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`label ${light ? "text-brand-light" : "text-brand"}`}>{children}</p>;
}
