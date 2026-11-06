"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Ventana emergente común: fondo oscurecido, X redonda y cierre con Escape o clic afuera. */
export function Modal({
  abierto,
  onCerrar,
  tituloId,
  cerrar,
  children,
}: {
  abierto: boolean;
  onCerrar: () => void;
  tituloId: string;
  cerrar: string;
  children: ReactNode;
}) {
  const botonCerrar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!abierto) return;
    botonCerrar.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [abierto, onCerrar]);

  if (!abierto) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/60 p-4 sm:p-6"
      onClick={onCerrar}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        className="relative my-auto w-full max-w-md bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          ref={botonCerrar}
          type="button"
          onClick={onCerrar}
          aria-label={cerrar}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
