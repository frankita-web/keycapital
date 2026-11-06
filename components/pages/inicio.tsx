import Image from "next/image";
import Link from "next/link";
import { ClientMarquee } from "@/components/client-marquee";
import { DealCard } from "@/components/deal-card";
import { LineaTiempo, type Paso } from "@/components/linea-tiempo";
import { Eyebrow } from "@/components/page-hero";
import { contenido } from "@/lib/contenido";
import { ruta, textos, type Idioma } from "@/lib/i18n";

export function InicioPage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].inicio;
  const { equipo, pilares, ranking, servicios, transacciones, valores } = contenido(idioma);
  const experiencia = ruta(idioma, "experiencia");
  const paginaEquipo = ruta(idioma, "equipo");
  const recientes = [...transacciones].sort((a, b) => b.anio - a.anio).slice(0, 6);
  const cifras = [
    { valor: "+20", label: t.cifraAnios },
    { valor: "4", label: t.cifraContinentes },
    { valor: t.cifraDesde, label: t.cifraIndependiente },
  ];

  const paginas = textos[idioma];
  const pasos: Paso[] = [
    {
      id: "equipo",
      etiqueta: paginas.menu.equipo,
      titulo: paginas.equipo.titulo,
      texto: paginas.equipo.bajada,
      href: paginaEquipo,
      accion: t.conocerEquipo,
    },
    {
      id: "experiencia",
      etiqueta: paginas.menu.experiencia,
      titulo: paginas.experiencia.titulo,
      texto: paginas.experiencia.bajada(transacciones.length),
      href: experiencia,
      accion: t.verExperiencia,
    },
    {
      id: "medios",
      etiqueta: paginas.menu.medios,
      titulo: paginas.medios.titulo,
      texto: paginas.medios.bajada,
      href: ruta(idioma, "medios"),
      accion: t.verMedios,
    },
    {
      id: "contacto",
      etiqueta: paginas.menu.contacto,
      titulo: paginas.contacto.titulo,
      texto: paginas.contacto.bajada,
      href: ruta(idioma, "contacto"),
      accion: paginas.general.contactanos,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white">
        {/* Ranking destacado */}
        <div className="border-b border-white/10">
          <a
            href={ranking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto flex max-w-7xl flex-col gap-x-8 gap-y-2 px-6 py-6 lg:flex-row lg:items-center lg:px-10"
          >
            <p className="font-display text-3xl whitespace-nowrap">{ranking.categoria}</p>
            <div className="lg:border-l lg:border-white/20 lg:pl-8">
              <p className="text-sm font-semibold">
                {ranking.organizacion} · Ranking {ranking.anio}
              </p>
              <p className="mt-1 text-sm text-white/70">{ranking.detalle}</p>
            </div>
            <span className="text-sm text-white/70 underline underline-offset-4 group-hover:text-white lg:ml-auto">
              {t.verRanking}
            </span>
          </a>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 lg:px-10 lg:pt-24 lg:pb-20">
          <h1 className="font-display text-2xl leading-snug italic md:text-4xl">
            <span className="block text-brand-light">{t.titulo[0]}</span>
            <span className="block">{t.titulo[1]}</span>
          </h1>

          <div className="mt-14 flex flex-col gap-x-10 gap-y-4 md:flex-row md:items-end lg:mt-20">
            <p className="font-display text-[12rem] leading-[0.8] tracking-[-0.04em] text-brand-light sm:text-[17rem] lg:text-[26rem]">
              {transacciones.length}
            </p>
            <p className="font-display text-5xl leading-[1.05] md:text-6xl lg:pb-4 lg:text-7xl">
              <span className="block">{t.cifraPrincipal[0]}</span>
              <span className="block text-brand-light">{t.cifraPrincipal[1]}</span>
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="text-lg leading-relaxed text-pretty text-white/70">{t.bajada}</p>
              <p className="mt-5 font-display text-2xl text-brand-light italic">{t.cierre}</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:col-span-5 lg:col-start-8 lg:justify-end">
              <Link href={ruta(idioma, "contacto")} className="btn bg-white text-ink hover:bg-brand-light">
                {textos[idioma].general.contactanos}
              </Link>
              <Link href={experiencia} className="btn border border-white/30 text-white hover:border-white">
                {t.verExperiencia}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <dl className="mx-auto grid max-w-7xl px-6 sm:grid-cols-3 lg:px-10">
            {cifras.map((c, i) => (
              <div
                key={c.label}
                className={`py-8 sm:px-8 sm:first:pl-0 ${i > 0 ? "sm:border-l sm:border-white/10" : ""}`}
              >
                <dd className="font-display text-4xl whitespace-nowrap tabular-nums lg:text-5xl">{c.valor}</dd>
                <dt className="mt-2 text-sm text-white/55">{c.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Línea de tiempo por los ítems del menú */}
      <LineaTiempo titulo={t.lineaTitulo} pasos={pasos} />

      {/* Clientes */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 sm:flex-row sm:items-end lg:px-10">
          <div>
            <Eyebrow>{t.clientesEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.clientesTitulo}</h2>
          </div>
          <Link href={experiencia} className="text-sm text-ink underline underline-offset-4 hover:text-brand">
            {t.verTransacciones}
          </Link>
        </div>
        <div className="mt-10">
          <ClientMarquee idioma={idioma} />
        </div>
      </section>

      {/* Servicios */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>{t.serviciosEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.serviciosTitulo}</h2>
            </div>
            <p className="text-lg leading-relaxed text-pretty text-muted lg:col-span-6 lg:col-start-7 lg:self-end">
              {t.serviciosBajada}
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {servicios.map((s, i) => (
              <div key={s.titulo} className="border-t border-ink pt-6">
                <p className="text-sm text-brand tabular-nums">0{i + 1}</p>
                <h3 className="mt-4 font-display text-2xl leading-snug text-balance">{s.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{s.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué KeyCapital */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-44 lg:col-span-5 lg:self-start">
            <Eyebrow>{t.porQue}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">
              {valores.join(", ").replace(/, ([^,]+)$/, ` ${t.y} $1`)}.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {pilares.map((p, i) => (
              <article
                key={p.titulo}
                className="flex min-h-[24rem] flex-col border border-line bg-paper p-8 lg:sticky lg:min-h-[28rem] lg:p-10"
                style={{ top: `${10 + i * 2}rem` }}
              >
                <h3 className="font-display text-3xl leading-tight text-balance md:text-4xl">{p.titulo}</h3>
                <p className="mt-5 leading-relaxed text-pretty text-muted">{p.descripcion}</p>
                <p className="mt-auto self-end pt-8 font-display text-8xl leading-none text-brand lg:text-9xl">
                  0{i + 1}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transacciones recientes */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{t.experienciaEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.recientes}</h2>
            </div>
            <Link href={experiencia} className="text-sm text-ink underline underline-offset-4 hover:text-brand">
              {t.verLasTransacciones(transacciones.length)}
            </Link>
          </div>
          <div className="mt-10 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
            {recientes.map((d) => (
              <DealCard key={`${d.cliente}-${d.anio}`} deal={d} idioma={idioma} />
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{t.equipoEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.equipoTitulo}</h2>
            </div>
            <Link href={paginaEquipo} className="text-sm text-ink underline underline-offset-4 hover:text-brand">
              {t.conocerEquipo}
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {equipo.map((p) => (
              <Link key={p.nombre} href={paginaEquipo} className="group border-t border-line pt-8">
                <Image
                  src={p.foto}
                  alt={p.nombre}
                  width={170}
                  height={170}
                  className="size-24 rounded-full grayscale transition group-hover:grayscale-0"
                />
                <p className="mt-6 font-display text-2xl group-hover:text-brand">{p.nombre}</p>
                <p className="mt-1 text-sm text-muted">{p.cargo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
