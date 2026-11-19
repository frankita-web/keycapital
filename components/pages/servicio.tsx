import Link from "next/link";
import { ArteBloques } from "@/components/arte-bloques";
import { CierreContacto } from "@/components/cierre-contacto";
import { DealCard } from "@/components/deal-card";
import { Etiqueta } from "@/components/etiqueta";
import { Flecha } from "@/components/flecha";
import { contenido } from "@/lib/contenido";
import { categoriaDeServicio, type ServicioId } from "@/lib/data";
import { ruta, rutaServicio, textos, type Idioma } from "@/lib/i18n";

/** Página de un servicio: título y bloques, dos párrafos, alcance, transacciones de ese tipo y otros servicios. */
export function ServicioPage({ idioma, id }: { idioma: Idioma; id: ServicioId }) {
  const t = textos[idioma].servicio;
  const { servicios, transacciones } = contenido(idioma);
  const servicio = servicios.find((s) => s.id === id)!;
  const otros = servicios.filter((s) => s.id !== id);
  const categoria = categoriaDeServicio[id];
  const delTipo = transacciones.filter((d) => d.categoria === categoria).sort((a, b) => b.anio - a.anio);
  const verTodas = `${ruta(idioma, "experiencia")}?tipo=${categoria}`;

  return (
    <>
      {/* Título y bloques */}
      <section className="hero-vivo rounded-b-2xl bg-ink text-white">
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <div className="entrada">
              <Etiqueta light>{t.eyebrow}</Etiqueta>
            </div>
            <h1 className="entrada entrada-2 mt-5 font-display text-5xl leading-[1.05] text-balance md:text-6xl">
              {servicio.titulo}
            </h1>
            <p className="entrada entrada-3 mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/70">
              {servicio.resumen}
            </p>
          </div>
          <ArteBloques id={id} className="entrada entrada-3 aspect-[4/3] lg:col-span-5" />
        </div>
      </section>

      {/* Qué hacemos y cómo */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {servicio.parrafos.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-pretty text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Alcance */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">{t.alcance}</h2>
        <dl className="mt-10 border-t border-line">
          {servicio.alcance.map((a) => (
            <div key={a.titulo} className="grid gap-2 border-b border-line py-7 md:grid-cols-2 md:gap-10">
              <dt className="font-display text-2xl leading-snug">{a.titulo}</dt>
              <dd className="leading-relaxed text-pretty text-muted md:pt-1">{a.descripcion}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Transacciones de este tipo */}
      {delTipo.length > 0 && (
        <section className="border-t border-line bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <Etiqueta>{t.transacciones}</Etiqueta>
                <h2 className="mt-5 font-display text-4xl leading-[1.1] text-balance md:text-5xl">
                  {t.transaccionesTitulo}
                </h2>
              </div>
              <Link
                href={verTodas}
                aria-label={t.verTodas(delTipo.length)}
                title={t.verTodas(delTipo.length)}
                className="inline-flex w-fit text-ink transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-brand"
              >
                <Flecha />
              </Link>
            </div>
            <div className="mt-10 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
              {delTipo.slice(0, 6).map((d) => (
                <DealCard key={`${d.cliente}-${d.anio}-${d.detalle}`} deal={d} idioma={idioma} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Otros servicios */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Etiqueta>{t.otros}</Etiqueta>
          <div className="mt-8 grid border-t border-line md:grid-cols-3">
            {otros.map((s) => (
              <Link
                key={s.id}
                href={rutaServicio(idioma, s.id)}
                className="group flex items-center justify-between gap-6 border-b border-line py-6 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0"
              >
                <span className="font-display text-2xl leading-snug group-hover:text-brand">{s.titulo}</span>
                <Flecha className="size-5 shrink-0 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CierreContacto idioma={idioma} />
    </>
  );
}
