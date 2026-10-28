"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { DealCard } from "@/components/deal-card";
import {
  categorias,
  clientes,
  nombrePorLogo,
  slugLogo,
  transacciones,
  type Categoria,
} from "@/lib/data";

type Filtro = Categoria | "todas";

/** Lee ?empresa= de la URL (los logos del inicio enlazan aquí). */
export function DealExplorer() {
  const slug = useSearchParams().get("empresa");
  const empresa = clientes.find((c) => slugLogo(c.logo) === slug) ?? null;
  return <DealExplorerView key={slug ?? ""} empresa={empresa} />;
}

export function DealExplorerView({
  empresa,
}: {
  empresa: { nombre: string; logo: string } | null;
}) {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [busqueda, setBusqueda] = useState("");

  const base = empresa ? transacciones.filter((t) => t.logos?.includes(empresa.logo)) : transacciones;

  const opciones: { id: Filtro; label: string; total: number }[] = [
    { id: "todas", label: "Todas", total: base.length },
    ...categorias.map((c) => ({
      ...c,
      total: base.filter((t) => t.categoria === c.id).length,
    })),
  ];

  const visibles = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return base
      .filter((t) => filtro === "todas" || t.categoria === filtro)
      .filter((t) => {
        if (!q) return true;
        const marcas = (t.logos ?? []).map((l) => nombrePorLogo[l]).join(" ");
        return `${t.cliente} ${t.detalle} ${t.anio} ${marcas}`.toLowerCase().includes(q);
      })
      .sort((a, b) => b.anio - a.anio);
  }, [base, filtro, busqueda]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line lg:flex-row lg:items-end lg:justify-between">
        <div className="-mb-px flex gap-8 overflow-x-auto" role="tablist">
          {opciones.filter((o) => o.total > 0).map((o) => {
            const activo = filtro === o.id;
            return (
              <button
                key={o.id}
                type="button"
                role="tab"
                aria-selected={activo}
                onClick={() => setFiltro(o.id)}
                className={`flex shrink-0 items-center gap-2 border-b-2 pb-4 text-sm transition-colors ${
                  activo ? "border-ink text-ink" : "border-transparent text-ink/55 hover:text-ink"
                }`}
              >
                {o.label}
                <span className="text-xs text-ink/40 tabular-nums">
                  {o.total}
                </span>
              </button>
            );
          })}
        </div>
        <input
          type="search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar empresa o año…"
          aria-label="Buscar transacción"
          className="mb-3 w-full border border-line bg-white px-4 py-2.5 text-sm outline-none placeholder:text-muted focus:border-ink lg:w-72"
        />
      </div>

      {empresa && (
        <div className="mt-8 flex flex-wrap items-center gap-4 border border-line bg-paper p-4 pr-6">
          <div className="flex h-14 w-24 items-center justify-center">
            <Image
              src={`/clientes/${empresa.logo}`}
              alt={empresa.nombre}
              width={120}
              height={72}
              className="max-h-14 w-auto object-contain mix-blend-multiply"
            />
          </div>
          <p className="flex-1 text-sm text-muted">
            Transacciones relacionadas con <strong className="font-semibold text-ink">{empresa.nombre}</strong>
          </p>
          <Link
            href="/experiencia"
            scroll={false}
            className="text-sm text-ink underline underline-offset-4 hover:text-brand"
          >
            Ver todas
          </Link>
        </div>
      )}

      {visibles.length > 0 ? (
        <div className="mt-10 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
          {visibles.map((d) => (
            <DealCard key={`${d.categoria}-${d.cliente}-${d.anio}`} deal={d} />
          ))}
        </div>
      ) : (
        <p className="py-24 text-center text-muted">No encontramos transacciones para “{busqueda}”.</p>
      )}
    </div>
  );
}
