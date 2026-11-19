import Image from "next/image";
import { Etiqueta } from "@/components/etiqueta";
import { PageHero } from "@/components/page-hero";
import { contenido } from "@/lib/contenido";
import { textos, type Idioma } from "@/lib/i18n";

/** Quiénes somos: la firma, cómo trabajamos (pilares), los socios y reconocimientos. */
export function EquipoPage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].equipo;
  const { equipo, pilares, ranking } = contenido(idioma);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.titulo}>
        {t.bajada}
      </PageHero>

      {/* Cómo trabajamos */}
      <section className="bg-brand-light/15">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">{t.comoTrabajamos}</h2>
          <div className="mt-14 grid gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {pilares.map((p, i) => (
              <div
                key={p.etiqueta}
                // Línea vertical entre columnas: 2 columnas en tablet, 4 en escritorio.
                className={[
                  "md:px-8",
                  i % 2 === 0 ? "md:pl-0" : "md:border-l md:border-ink/15",
                  i === 0 ? "" : "lg:border-l lg:border-ink/15 lg:pl-8",
                ].join(" ")}
              >
                <Etiqueta>{p.etiqueta}</Etiqueta>
                <h3 className="mt-6 font-display text-3xl leading-[1.15] text-balance">{p.titulo}</h3>
                <p className="mt-5 leading-relaxed text-pretty text-muted">{p.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Socios */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <Etiqueta>{t.socios}</Etiqueta>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.sociosTitulo}</h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {equipo.map((p) => (
            <article key={p.nombre} className="grid gap-8 py-12 md:grid-cols-12 md:gap-10 lg:py-16">
              <div className="flex items-center gap-6 md:col-span-4 md:flex-col md:items-start">
                <Image
                  src={p.foto}
                  alt={p.nombre}
                  width={170}
                  height={170}
                  className="size-24 rounded-full lg:size-32"
                />
                <div>
                  <h3 className="font-display text-2xl leading-tight text-balance">{p.nombre}</h3>
                  <p className="mt-1 text-sm text-brand">{p.cargo}</p>
                </div>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="label text-muted">{p.formacion}</p>
                <p className="mt-4 text-lg leading-relaxed text-pretty text-ink/80">{p.bio}</p>
                <a
                  href={`mailto:${p.email}`}
                  className="mt-6 inline-block text-sm text-ink underline underline-offset-4 hover:text-brand"
                >
                  {p.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-end lg:px-10 lg:py-20">
          <div>
            <Etiqueta>{t.reconocimientos}</Etiqueta>
            <p className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              {ranking.categoria} · {ranking.organizacion} {ranking.anio}
            </p>
            <p className="mt-3 text-muted">{ranking.detalle}</p>
          </div>
          <a
            href={ranking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-4 text-base text-brand transition-colors hover:text-ink"
          >
            {t.verRanking}
            <span aria-hidden="true" className="h-px w-10 bg-current transition-all duration-300 group-hover:w-16" />
          </a>
        </div>
      </section>
    </>
  );
}
