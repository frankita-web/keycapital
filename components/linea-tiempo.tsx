"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Paso = {
  id: string;
  etiqueta: string;
  titulo: string;
  texto: string;
  href: string;
  accion: string;
};

/** Línea de tiempo fija en pantalla: al bajar avanza por cada ítem del menú. */
export function LineaTiempo({ titulo, pasos }: { titulo: string; pasos: Paso[] }) {
  const seccion = useRef<HTMLElement>(null);
  const [avance, setAvance] = useState(0);
  const activo = Math.min(pasos.length - 1, Math.floor(avance * pasos.length));
  const paso = pasos[activo];

  useEffect(() => {
    function medir() {
      const el = seccion.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const recorrido = height - window.innerHeight;
      setAvance(Math.min(1, Math.max(0, -top / recorrido)));
    }
    medir();
    window.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      window.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, []);

  function irA(i: number) {
    const el = seccion.current;
    if (!el) return;
    const inicio = el.getBoundingClientRect().top + window.scrollY;
    const recorrido = el.offsetHeight - window.innerHeight;
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: inicio + ((i + 0.1) / pasos.length) * recorrido,
      behavior: quieto ? "auto" : "smooth",
    });
  }

  return (
    <section ref={seccion} className="bg-ink text-white" style={{ height: `${pasos.length * 100}vh` }}>
      <div className="sticky top-[7.25rem] flex h-[calc(100svh-7.25rem)] flex-col">
        <div className="border-y border-white/10">
          <div className="relative mx-auto flex max-w-7xl items-stretch px-6 lg:px-10">
            <p className="hidden items-center gap-3 border-r border-white/10 pr-10 text-sm lg:flex">
              <span className="size-1.5 rounded-full bg-brand-light" />
              {titulo}
            </p>
            <div className="relative grid flex-1 grid-cols-4">
              {pasos.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => irA(i)}
                  aria-current={i === activo ? "step" : undefined}
                  className={`py-5 text-center text-xs transition-colors sm:text-sm ${
                    i === activo ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {p.etiqueta}
                </button>
              ))}
              {/* Avance */}
              <span className="absolute inset-x-0 -bottom-px h-px bg-white/10" />
              <span
                className="absolute -bottom-px left-0 h-px bg-brand-light"
                style={{ width: `${avance * 100}%` }}
              />
              <span
                className="absolute -bottom-[3.5px] size-1.5 -translate-x-1/2 rounded-full bg-brand-light"
                style={{ left: `${avance * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto grid min-h-0 w-full max-w-7xl flex-1 grid-rows-[minmax(0,1fr)_auto] gap-6 px-6 py-6 md:grid-cols-2 md:grid-rows-1 md:gap-16 lg:px-10 lg:py-8">
          <div className="flex min-h-0 items-center justify-center bg-ink-2">
            <Grafico activo={activo} />
          </div>
          <div key={paso.id} className="self-center pb-2">
            <h2 className="font-display text-3xl leading-tight text-balance md:text-5xl">{paso.titulo}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-pretty text-white/70 md:text-lg">{paso.texto}</p>
            <Link href={paso.href} className="btn mt-6 bg-white text-ink hover:bg-brand-light md:mt-8">
              {paso.accion}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Círculos que se conectan: giran a medida que avanza la línea de tiempo. */
function Grafico({ activo }: { activo: number }) {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className="h-full max-h-[26rem] w-full p-4">
      <g
        className="transition-transform duration-1000 ease-in-out motion-reduce:transition-none"
        style={{ transform: `rotate(${activo * 120}deg)`, transformOrigin: "200px 200px" }}
      >
        {[
          [200, 125],
          [125, 255],
          [275, 255],
        ].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r="88" fill="none" className="stroke-brand-light/40" />
        ))}
        {[20, 55, 90, 125].map((giro) => (
          <ellipse
            key={giro}
            cx="200"
            cy="125"
            rx="88"
            ry="52"
            fill="none"
            className="stroke-brand-light/20"
            transform={`rotate(${giro} 200 125)`}
          />
        ))}
        <line x1="200" y1="125" x2="275" y2="255" className="stroke-white/70" />
        <circle cx="200" cy="125" r="5" className="fill-white" />
        <circle cx="275" cy="255" r="5" className="fill-white" />
      </g>
    </svg>
  );
}
