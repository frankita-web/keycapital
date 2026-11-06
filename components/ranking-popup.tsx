"use client";

import { useEffect, useRef, useState } from "react";

const CLAVE = "keycapital-popup-ranking-visto";

/** Pop up del ranking: aparece al entrar a Inicio, una vez por visita. */
export function RankingPopup({
  categoria,
  organizacion,
  anio,
  intro,
  detalle,
  url,
  accion,
  cerrar,
}: {
  categoria: string;
  organizacion: string;
  anio: number;
  intro: string;
  detalle: string;
  url: string;
  accion: string;
  cerrar: string;
}) {
  const [abierto, setAbierto] = useState(false);
  const botonCerrar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(CLAVE)) return;
    } catch {
      // Sin acceso al almacenamiento del navegador: se muestra igual.
    }
    const espera = setTimeout(() => setAbierto(true), 500);
    return () => clearTimeout(espera);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    botonCerrar.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    try {
      sessionStorage.setItem(CLAVE, "1");
    } catch {
      // Sin acceso al almacenamiento: volverá a aparecer en la próxima carga.
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [abierto]);

  if (!abierto) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/60 p-4 sm:p-6"
      onClick={() => setAbierto(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-ranking-titulo"
        className="relative w-full max-w-md bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-center px-8 py-14 text-center sm:px-12">
          <p className="label text-brand">
            {organizacion} · {anio}
          </p>
          <h2 id="popup-ranking-titulo" className="mt-4 font-display text-4xl leading-tight text-balance">
            {categoria}
          </h2>
          <p className="mt-4 leading-relaxed text-pretty text-muted">{intro}</p>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{detalle}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-7 w-full bg-ink text-white hover:bg-brand"
          >
            {accion}
          </a>
        </div>

        <button
          ref={botonCerrar}
          type="button"
          onClick={() => setAbierto(false)}
          aria-label={cerrar}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
