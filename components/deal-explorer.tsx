"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contenido } from "@/lib/contenido";
import { clientes, nombrePorLogo, slugLogo, type Categoria, type Transaccion } from "@/lib/data";
import { ruta, textos, type Idioma } from "@/lib/i18n";

/** Lee ?tipo= (pestaña) y ?empresa= (los logos del inicio enlazan aquí). */
export function DealExplorer({ idioma }: { idioma: Idioma }) {
  const params = useSearchParams();
  const { categorias } = contenido(idioma);
  const tipo = categorias.find((c) => c.id === params.get("tipo"))?.id ?? null;
  const empresa = clientes.find((c) => slugLogo(c.logo) === params.get("empresa")) ?? null;
  return <DealExplorerView idioma={idioma} tipo={tipo} empresa={empresa} />;
}

export function DealExplorerView({
  idioma,
  tipo,
  empresa,
}: {
  idioma: Idioma;
  tipo: Categoria | null;
  empresa: { nombre: string; logo: string } | null;
}) {
  const t = textos[idioma].experiencia;
  const experiencia = ruta(idioma, "experiencia");
  const { categorias, transacciones } = contenido(idioma);
  const etiqueta = Object.fromEntries(categorias.map((c) => [c.id, c.label]));

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
            <p className="label text-brand">{t.relacionadas}</p>
            <h2 className="mt-2 font-display text-3xl">{empresa.nombre}</h2>
          </div>
          <Link href={experiencia} scroll={false} className="btn border border-ink/20 hover:border-ink">
            {t.verToda}
          </Link>
        </div>
        <ListaCasos key={empresa.logo} casos={casos} etiqueta={etiqueta} mostrarCategoria />
      </div>
    );
  }

  const activa = tipo ?? categorias[0].id;
  const casos = transacciones.filter((t) => t.categoria === activa).sort((a, b) => b.anio - a.anio);

  return (
    <div>
      <nav
        className="flex flex-wrap gap-x-8 gap-y-2 shadow-[inset_0_-1px_0_var(--color-line)]"
        aria-label={t.tipos}
      >
        {categorias.map((c) => {
          const total = transacciones.filter((t) => t.categoria === c.id).length;
          const esActiva = c.id === activa;
          return (
            <Link
              key={c.id}
              href={`${experiencia}?tipo=${c.id}`}
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
      <ListaCasos key={activa} casos={casos} etiqueta={etiqueta} />
    </div>
  );
}

/** Línea de tiempo vertical: se va llenando a medida que se baja por la página. */
function ListaCasos({
  casos,
  etiqueta,
  mostrarCategoria = false,
}: {
  casos: Transaccion[];
  etiqueta: Record<string, string>;
  mostrarCategoria?: boolean;
}) {
  const lista = useRef<HTMLUListElement>(null);
  const [avance, setAvance] = useState(0);
  const [marcados, setMarcados] = useState(0);

  useEffect(() => {
    function medir() {
      const el = lista.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const llenado = Math.min(height, Math.max(0, window.innerHeight * 0.6 - top));
      const filas = Array.from(el.querySelectorAll<HTMLElement>("[data-caso]"));
      setAvance(height ? llenado / height : 0);
      setMarcados(filas.filter((f) => f.offsetTop + 30 <= llenado).length);
    }
    medir();
    window.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      window.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, []);

  return (
    <ul ref={lista} className="relative mt-4 pl-7 md:pl-10">
      <li aria-hidden="true" className="absolute inset-y-0 left-[3.5px] w-px bg-line">
        <span className="block w-full bg-brand" style={{ height: `${avance * 100}%` }} />
      </li>
      {casos.map((t, i) => {
        const marcado = i < marcados;
        return (
          <li
            key={`${t.categoria}-${t.cliente}-${t.anio}`}
            data-caso
            className="group relative grid grid-cols-[1fr] gap-y-1 py-5 md:grid-cols-[4.5rem_6rem_1fr_9rem] md:gap-x-6 md:py-6"
          >
            <span
              aria-hidden="true"
              className={`absolute top-[30px] -left-7 size-2 rounded-full transition-colors md:top-[34px] md:-left-10 ${
                marcado ? "bg-brand" : "bg-line"
              }`}
            />
            <span
              className={`font-display text-xl leading-7 tabular-nums transition-colors ${
                marcado ? "text-ink" : "text-ink/35"
              }`}
            >
              {t.anio}
            </span>
            <div className="hidden h-8 items-center gap-2 md:flex">
              {t.logos?.slice(0, 2).map((logo) => (
                <Image
                  key={logo}
                  src={`/clientes/${logo}`}
                  alt={nombrePorLogo[logo] ?? ""}
                  width={120}
                  height={72}
                  className="max-h-8 w-auto max-w-20 object-contain mix-blend-multiply"
                />
              ))}
            </div>
            <div className="origin-left transition-transform duration-300 group-hover:scale-[1.03]">
              {mostrarCategoria && <p className="label mb-1 text-muted">{etiqueta[t.categoria]}</p>}
              <h3 className="font-display text-lg leading-7">{t.cliente}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-pretty text-muted">{t.detalle}</p>
            </div>
            <p className="text-sm leading-7 text-ink/70 md:text-right">{t.monto ?? ""}</p>
          </li>
        );
      })}
    </ul>
  );
}
