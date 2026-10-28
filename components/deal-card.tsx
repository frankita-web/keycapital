import Image from "next/image";
import { categorias, nombrePorLogo, type Transaccion } from "@/lib/data";

const etiqueta = Object.fromEntries(categorias.map((c) => [c.id, c.label]));

/** Tombstone: aviso clásico de transacción de banca de inversión. */
export function DealCard({ deal }: { deal: Transaccion }) {
  return (
    <article className="flex h-full flex-col items-center border-r border-b border-line bg-white px-8 py-10 text-center">
      <p className="label text-muted">{etiqueta[deal.categoria]}</p>
      <div className="mt-8 flex h-14 items-center justify-center gap-5">
        {deal.logos ? (
          deal.logos.map((logo) => (
            <Image
              key={logo}
              src={`/clientes/${logo}`}
              alt={nombrePorLogo[logo] ?? ""}
              width={120}
              height={72}
              className="max-h-14 w-auto max-w-24 object-contain mix-blend-multiply"
            />
          ))
        ) : (
          <span className="h-px w-10 bg-line" />
        )}
      </div>
      <h3 className="mt-6 font-display text-xl leading-snug text-balance">{deal.cliente}</h3>
      <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{deal.detalle}</p>
      <div className="mt-auto w-full pt-8">
        {deal.monto && <p className="text-base font-semibold text-ink">{deal.monto}</p>}
        <p className="mt-4 border-t border-line pt-4 text-xs tracking-widest text-muted">
          KEYCAPITAL · {deal.anio}
        </p>
      </div>
    </article>
  );
}
