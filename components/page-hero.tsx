import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
  fondo,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  /** Foto opcional de fondo, tenue bajo el azul, con su crédito abajo a la derecha. */
  fondo?: { src: string; credito?: string };
}) {
  return (
    <section className="hero-vivo rounded-b-2xl bg-ink text-white">
      {fondo && (
        <div aria-hidden="true" className="hero-fondo">
          <Image src={fondo.src} alt="" fill priority sizes="100vw" className="object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
        </div>
      )}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="label entrada text-brand-light">{eyebrow}</p>
        <h1 className="entrada entrada-2 mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-balance md:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="entrada entrada-3 mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/70">{children}</div>
        )}
        {fondo?.credito && (
          <p className="absolute right-6 bottom-4 left-6 text-xs text-white/45 sm:left-auto lg:right-10">
            {fondo.credito}
          </p>
        )}
      </div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`label ${light ? "text-brand-light" : "text-brand"}`}>{children}</p>;
}
