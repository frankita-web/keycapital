"use client";

import { useEffect } from "react";

const DURACION = 900;

/** Al recargar la página vuelve arriba con una animación, en vez de quedarse donde estaba. */
export function VolverArriba() {
  useEffect(() => {
    const [navegacion] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (navegacion?.type !== "reload") return;

    let cuadro = 0;
    function detener() {
      cancelAnimationFrame(cuadro);
      window.removeEventListener("wheel", detener);
      window.removeEventListener("touchstart", detener);
    }

    // Se espera a que el navegador recupere la posición anterior.
    const espera = setTimeout(() => {
      const desde = window.scrollY;
      if (desde === 0) return;
      window.addEventListener("wheel", detener, { passive: true });
      window.addEventListener("touchstart", detener, { passive: true });
      let inicio: number | null = null;
      function paso(ahora: number) {
        inicio ??= ahora;
        const avance = Math.min(1, (ahora - inicio) / DURACION);
        window.scrollTo(0, desde * (1 - avance) ** 3);
        if (avance < 1) cuadro = requestAnimationFrame(paso);
        else detener();
      }
      cuadro = requestAnimationFrame(paso);
    }, 250);

    return () => {
      clearTimeout(espera);
      detener();
    };
  }, []);

  return null;
}
