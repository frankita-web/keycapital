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
      <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -top-40 right-0 size-[36rem] rounded-full bg-brand/30 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-20 lg:px-10 lg:pt-48 lg:pb-28">
        <p className="text-xs font-semibold tracking-[0.25em] text-brand-light uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
          {title}
        </h1>
        {children && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">{children}</div>}
      </div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase ${
        light ? "text-brand-light" : "text-brand"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-brand-light" : "bg-brand"}`} />
      {children}
    </p>
  );
}
