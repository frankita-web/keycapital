"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  categorias,
  clientes,
  nombrePorLogo,
  slugLogo,
  transacciones,
  type Categoria,
  type Transaccion,
} from "@/lib/data";

/** Lee ?tipo= (pestaña) y ?empresa= (los logos del inicio enlazan aquí). */
export function DealExplorer() {
  const params = useSearchParams();
  const tipo = categorias.find((c) => c.id === params.get("tipo"))?.id ?? null;
  const empresa = clientes.find((c) => slugLogo(c.logo) === params.get("empresa")) ?? null;
  return <DealExplorerView tipo={tipo} empresa={empresa} />;
}

export function DealExplorerView({
  tipo,
  empresa,
}: {
  tipo: Categoria | null;
  empresa: { nombre: string; logo: string } | null;
}) {
  if (empresa) {
    const casos = transacciones
      .filter((t) => t.logos?.includes(empresa.logo))
      .sort((a, b) => b.anio - a.anio);
    return (
      <div>
        <div className="flex flex-wrap items-center gap-6 border-b border-line pb-8">
          <div className="flex h-16 w-32 items-center">
            <Image
              src={`/clientes/${empresa.logo}`}
              alt={empresa.nombre}
              width={160}
              height={96}
              className="max-h-16 w-auto object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex-1">
            <p className="label text-brand">Transacciones relacionadas</p>
            <h2 className="mt-2 font-display text-3xl">{empresa.nombre}</h2>
          </div>
          <Link href="/experiencia" scroll={false} className="btn border border-ink/20 hover:border-ink">
            Ver toda la experiencia
          </Link>
        </div>
        <ListaCasos casos={casos} mostrarCategoria />
      </div>
    );
  }

  const activa = tipo ?? categorias[0].id;
  const casos = transacciones.filter((t) => t.categoria === activa).sort((a, b) => b.anio - a.anio);

  return (
    <div>
      <nav
        className="flex flex-wrap gap-x-8 gap-y-2 shadow-[inset_0_-1px_0_var(--color-line)]"
        aria-label="Tipos de transacción"
      >
        {categorias.map((c) => {
          const total = transacciones.filter((t) => t.categoria === c.id).length;
          const esActiva = c.id === activa;
          return (
            <Link
              key={c.id}
              href={`/experiencia?tipo=${c.id}`}
              scroll={false}
              aria-current={esActiva ? "page" : undefined}
              className={`flex items-baseline gap-2 border-b-2 pb-3 transition-colors md:pb-4 ${
                esActiva ? "border-ink text-ink" : "border-transparent text-ink/50 hover:text-ink"
              }`}
            >
              <span className="font-display text-lg md:text-2xl">{c.label}</span>
              <span className="text-xs tabular-nums text-ink/40">{total}</span>
            </Link>
          );
        })}
      </nav>
      <ListaCasos casos={casos} />
    </div>
  );
}

const etiqueta = Object.fromEntries(categorias.map((c) => [c.id, c.label]));

function ListaCasos({ casos, mostrarCategoria = false }: { casos: Transaccion[]; mostrarCategoria?: boolean }) {
  return (
    <ul className="divide-y divide-line border-b border-line">
      {casos.map((t) => (
        <li
          key={`${t.categoria}-${t.cliente}-${t.anio}`}
          className="grid grid-cols-[3.5rem_1fr] gap-x-6 gap-y-3 py-6 md:grid-cols-[4rem_8rem_1fr_11rem] md:items-center md:gap-x-8"
        >
          <span className="text-sm text-muted tabular-nums">{t.anio}</span>
          <div className="hidden h-12 items-center gap-3 md:flex">
            {t.logos?.slice(0, 2).map((logo) => (
              <Image
                key={logo}
                src={`/clientes/${logo}`}
                alt={nombrePorLogo[logo] ?? ""}
                width={120}
                height={72}
                className="max-h-12 w-auto max-w-16 object-contain mix-blend-multiply"
              />
            ))}
          </div>
          <div className="col-start-2 md:col-start-auto">
            {mostrarCategoria && <p className="label mb-1 text-brand">{etiqueta[t.categoria]}</p>}
            <h3 className="font-display text-xl leading-snug">{t.cliente}</h3>
            <p className="mt-1 text-sm leading-relaxed text-pretty text-muted">{t.detalle}</p>
          </div>
          <p className="col-start-2 text-sm font-semibold text-ink md:col-start-auto md:text-right">
            {t.monto ?? ""}
          </p>
        </li>
      ))}
    </ul>
  );
}
