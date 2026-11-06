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
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="label text-ink">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1.02] text-balance text-brand md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {children && (
          <div className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{children}</div>
        )}
      </div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`label ${light ? "text-brand-light" : "text-brand"}`}>{children}</p>;
}
