import Image from "next/image";
import Link from "next/link";
import { ClientMarquee } from "@/components/client-marquee";
import { DealCard } from "@/components/deal-card";
import { Eyebrow } from "@/components/page-hero";
import { RankingPopup } from "@/components/ranking-popup";
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
    { valor: `${transacciones.length}`, label: t.cifraTransacciones },
    { valor: "4", label: t.cifraContinentes },
    { valor: t.cifraDesde, label: t.cifraIndependiente },
  ];

  return (
    <>
      <RankingPopup
        categoria={ranking.categoria}
        organizacion={ranking.organizacion}
        anio={ranking.anio}
        intro={t.rankingIntro}
        detalle={ranking.detalle}
        url={ranking.url}
        accion={t.verRanking}
        cerrar={t.cerrar}
      />

      {/* Hero */}
      <section className="rounded-b-[2rem] bg-ink text-white lg:rounded-b-[3rem]">
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

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-20">
          <Eyebrow light>{t.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[2.75rem] leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            {t.titulo}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/70">{t.bajada}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={ruta(idioma, "contacto")} className="btn bg-white text-ink hover:bg-brand-light">
              {textos[idioma].general.contactanos}
            </Link>
            <Link href={experiencia} className="btn border border-white/30 text-white hover:border-white">
              {t.verExperiencia}
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 px-6 md:grid-cols-4 md:gap-x-0 lg:px-10">
            {cifras.map((c, i) => (
              <div
                key={c.label}
                className={`py-8 md:px-8 md:first:pl-0 ${i > 0 ? "md:border-l md:border-white/10" : ""}`}
              >
                <dd className="font-display text-4xl whitespace-nowrap tabular-nums lg:text-5xl">{c.valor}</dd>
                <dt className="mt-2 text-sm text-white/55">{c.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

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
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <Eyebrow>{t.porQue}</Eyebrow>
        <h2 className="mt-4 max-w-4xl font-display text-4xl leading-[1.1] text-balance md:text-5xl">
          {valores.join(", ").replace(/, ([^,]+)$/, ` ${t.y} $1`)}.
        </h2>
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {pilares.map((p) => (
            <div key={p.titulo} className="border-t border-line pt-6">
              <h3 className="text-base font-semibold text-balance">{p.titulo}</h3>
              <p className="mt-3 leading-relaxed text-pretty text-muted">{p.descripcion}</p>
            </div>
          ))}
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
