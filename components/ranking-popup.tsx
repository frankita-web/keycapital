"use client";

import { useCallback, useEffect, useState } from "react";
import { Modal } from "@/components/modal";

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
  const cerrarPopup = useCallback(() => setAbierto(false), []);

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
    try {
      sessionStorage.setItem(CLAVE, "1");
    } catch {
      // Sin acceso al almacenamiento: volverá a aparecer en la próxima carga.
    }
  }, [abierto]);

  return (
    <Modal abierto={abierto} onCerrar={cerrarPopup} tituloId="popup-ranking-titulo" cerrar={cerrar}>
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
    </Modal>
  );
}
