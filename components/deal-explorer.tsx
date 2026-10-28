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
      <div className="sticky top-18 z-20 -mx-6 flex flex-col gap-4 border-b border-line bg-paper/90 px-6 py-4 backdrop-blur-xl lg:-mx-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:pb-0" role="tablist">
          {opciones.map((o) => {
            const activo = filtro === o.id;
            return (
              <button
                key={o.id}
                type="button"
                role="tab"
                aria-selected={activo}
                onClick={() => setFiltro(o.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  activo ? "bg-ink text-white" : "bg-white text-ink/70 ring-1 ring-line hover:text-ink"
                }`}
              >
                {o.label}
                <span className={`text-xs tabular-nums ${activo ? "text-white/50" : "text-ink/35"}`}>
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
          className="w-full rounded-full border border-line bg-white px-5 py-2.5 text-sm outline-none placeholder:text-muted focus:border-brand lg:w-72"
        />
      </div>

      {empresa && (
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-3xl border border-line bg-white p-4 pr-6">
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
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition hover:border-ink hover:bg-ink hover:text-white"
          >
            Ver todas
          </Link>
        </div>
      )}

      {visibles.length > 0 ? (
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
