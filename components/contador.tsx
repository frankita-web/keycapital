"use client";

import { useEffect, useState } from "react";

/** Cifra que sube desde cero al entrar: "+20", "66", "4". Otros textos quedan igual. */
export function Contador({ valor }: { valor: string }) {
  const partes = /^(\+?)(\d+)$/.exec(valor);
  const objetivo = partes ? Number(partes[2]) : 0;
  const [actual, setActual] = useState<number | null>(null);

  useEffect(() => {
    if (!partes) return;
    const duracion = 1400;
    let inicio: number | null = null;
    let cuadro = 0;
    function paso(ahora: number) {
      inicio ??= ahora;
      const avance = Math.min(1, (ahora - inicio) / duracion);
      setActual(Math.round(objetivo * (1 - (1 - avance) ** 3)));
      if (avance < 1) cuadro = requestAnimationFrame(paso);
    }
    cuadro = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(cuadro);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objetivo]);

  if (!partes || actual === null) return <>{valor}</>;
  return (
    <>
      {partes[1]}
      {actual}
    </>
  );
}
