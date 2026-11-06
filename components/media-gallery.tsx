"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { contenido } from "@/lib/contenido";
import { textos, type Idioma } from "@/lib/i18n";

export function MediaGallery({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].medios;
  const { medios } = contenido(idioma);
  const total = medios.length;
  const [abierto, setAbierto] = useState<number | null>(null);

  const cerrar = useCallback(() => setAbierto(null), []);
  const mover = useCallback(
    (paso: number) =>
      setAbierto((i) => (i === null ? null : (i + paso + total) % total)),
    [total],
  );

  useEffect(() => {
    if (abierto === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [abierto, cerrar, mover]);

  const actual = abierto === null ? null : medios[abierto];

  return (
    <>
      <div className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
        {medios.map((m, i) => (
          <button
            key={m.imagen}
            type="button"
            onClick={() => setAbierto(i)}
            className="group relative block w-full border-r border-b border-line bg-white p-5 text-left transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper">
              <Image
                src={m.imagen}
                alt={m.titulo}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-end justify-between gap-4 pt-5">
              <div>
                <p className="label text-brand">{m.fuente}</p>
                <h3 className="mt-2 font-display text-lg leading-snug text-balance group-hover:text-brand">{m.titulo}</h3>
              </div>
              {m.fecha && <span className="shrink-0 text-xs text-muted tabular-nums">{m.fecha}</span>}
            </div>
          </button>
        ))}
      </div>

      {actual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actual.titulo}
          className="fixed inset-0 z-[60] flex flex-col bg-ink"
          onClick={cerrar}
        >
          <div className="flex items-center justify-between px-6 py-5 text-white">
            <div>
              <p className="text-xs text-brand-light">{actual.fuente}</p>
              <p className="font-display text-xl text-balance">{actual.titulo}</p>
            </div>
            <button
              type="button"
              onClick={cerrar}
              className="btn border border-white/30 hover:border-white"
            >
              {t.cerrar}
            </button>
          </div>
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={actual.imagen} alt={actual.titulo} fill sizes="100vw" className="object-contain p-4" />
          </div>
          <div className="flex justify-center gap-3 py-5" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => mover(-1)}
              className="btn border border-white/30 text-white hover:border-white"
            >
              {t.anterior}
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              className="btn border border-white/30 text-white hover:border-white"
            >
              {t.siguiente}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
