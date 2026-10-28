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
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute -top-40 right-0 size-[36rem] rounded-full bg-brand/30 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 lg:px-10 lg:pt-36 lg:pb-20">
        <p className="text-xs font-semibold tracking-[0.25em] text-brand-light uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl text-balance">
          {title}
        </h1>
        {children && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 text-pretty">{children}</div>}
      </div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.2em] uppercase ${
        light ? "text-brand-light" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}
