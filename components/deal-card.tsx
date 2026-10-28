import { categorias, type Transaccion } from "@/lib/data";

const etiqueta = Object.fromEntries(categorias.map((c) => [c.id, c.label]));

export function DealCard({ deal }: { deal: Transaccion }) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_48px_-24px_rgba(10,113,179,0.35)]">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium tracking-wide text-muted">{etiqueta[deal.categoria]}</span>
        <span className="rounded-full bg-paper px-3 py-1 font-semibold tabular-nums text-ink">{deal.anio}</span>
      </div>
      <h3 className="mt-8 font-display text-2xl leading-tight text-ink">{deal.cliente}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{deal.detalle}</p>
      <div className="mt-auto pt-8">
        <div className="h-px w-full bg-line transition-colors group-hover:bg-brand/30" />
        <p className="mt-4 text-sm font-semibold text-brand">{deal.monto ?? "Asesor financiero"}</p>
      </div>
    </article>
  );
}
