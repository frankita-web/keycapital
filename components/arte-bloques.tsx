import type { ServicioId } from "@/lib/data";

type Bloque = {
  /** grid-area: fila inicio / columna inicio / fila fin / columna fin */
  area: string;
  fondo: string;
  /** Esquina redondeada, como el bloque azul de la "K" del logo. */
  redondeado?: boolean;
};

const tinta = "var(--color-ink)";
const tinta2 = "var(--color-ink-2)";
const azul = "var(--color-brand)";
const celeste = "var(--color-brand-light)";
const arena = "var(--color-paper)";
const bronce = "var(--color-bronce)";

/**
 * Composiciones de bloques en los colores de la marca, una por servicio.
 * Primera versión hecha en código: se pueden reemplazar por imágenes diseñadas en Illustrator.
 */
const COMPOSICIONES: Record<ServicioId, { columnas: string; filas: string; bloques: Bloque[] }> = {
  venta: {
    columnas: "3fr 2fr",
    filas: "1fr 1fr",
    bloques: [
      { area: "1 / 1 / 3 / 2", fondo: `linear-gradient(180deg, ${tinta} 0%, ${azul} 100%)` },
      { area: "1 / 2 / 2 / 3", fondo: `linear-gradient(135deg, ${celeste} 0%, ${azul} 100%)`, redondeado: true },
      { area: "2 / 2 / 3 / 3", fondo: `linear-gradient(135deg, ${arena} 0%, ${bronce} 100%)` },
    ],
  },
  adquisiciones: {
    columnas: "1fr 1fr",
    filas: "2fr 3fr",
    bloques: [
      { area: "1 / 1 / 2 / 3", fondo: `linear-gradient(90deg, ${tinta2} 0%, ${azul} 100%)` },
      { area: "2 / 1 / 3 / 2", fondo: `linear-gradient(160deg, ${arena} 0%, ${celeste} 100%)`, redondeado: true },
      { area: "2 / 2 / 3 / 3", fondo: `linear-gradient(200deg, ${tinta2} 0%, ${tinta} 100%)` },
    ],
  },
  financiamiento: {
    columnas: "1fr 2fr 1fr",
    filas: "1fr",
    bloques: [
      { area: "1 / 1 / 2 / 2", fondo: `linear-gradient(180deg, ${celeste} 0%, ${azul} 100%)` },
      { area: "1 / 2 / 2 / 3", fondo: `linear-gradient(0deg, ${tinta} 0%, ${tinta2} 60%, ${azul} 100%)`, redondeado: true },
      { area: "1 / 3 / 2 / 4", fondo: `linear-gradient(180deg, ${bronce} 0%, ${arena} 100%)` },
    ],
  },
  valoraciones: {
    columnas: "2fr 1fr",
    filas: "2fr 1fr",
    bloques: [
      { area: "1 / 1 / 2 / 2", fondo: `linear-gradient(135deg, ${tinta} 0%, ${azul} 100%)`, redondeado: true },
      { area: "1 / 2 / 3 / 3", fondo: `linear-gradient(180deg, ${bronce} 0%, ${arena} 100%)` },
      { area: "2 / 1 / 3 / 2", fondo: `linear-gradient(90deg, ${celeste} 0%, ${arena} 100%)` },
    ],
  },
};

export function ArteBloques({ id, className = "" }: { id: ServicioId; className?: string }) {
  const c = COMPOSICIONES[id];
  return (
    <div
      aria-hidden="true"
      className={`grid ${className}`}
      style={{ gridTemplateColumns: c.columnas, gridTemplateRows: c.filas }}
    >
      {c.bloques.map((b) => (
        <div
          key={b.area}
          style={{ gridArea: b.area, background: b.fondo, borderTopLeftRadius: b.redondeado ? "2.5rem" : undefined }}
        />
      ))}
    </div>
  );
}
