import Image from "next/image";
import Link from "next/link";
import { ClientMarquee } from "@/components/client-marquee";
import { Contador } from "@/components/contador";
import { DealCard } from "@/components/deal-card";
import { Flecha } from "@/components/flecha";
import { Eyebrow } from "@/components/page-hero";
import { RankingPopup } from "@/components/ranking-popup";
import { contenido } from "@/lib/contenido";
import { ruta, textos, type Idioma } from "@/lib/i18n";

export function InicioPage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].inicio;
  const { equipo, medios, pilares, ranking, servicios, transacciones, valores } = contenido(idioma);
  const experiencia = ruta(idioma, "experiencia");
  const paginaEquipo = ruta(idioma, "equipo");
  const paginaMedios = ruta(idioma, "medios");
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
      <section className="hero-vivo flex flex-col rounded-b-2xl bg-ink text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:py-[clamp(1.5rem,7vh,4.5rem)] lg:px-10">
          <div className="entrada flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <Eyebrow light>{t.eyebrow}</Eyebrow>
            {/* Ranking destacado */}
            <a
              href={ranking.url}
              target="_blank"
              rel="noopener noreferrer"
              title={ranking.detalle}
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pr-3 pl-4 text-sm transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 fill-brand-light">
                <path d="m12 2.5 2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8z" />
              </svg>
              <span className="font-display text-base leading-none">{ranking.categoria}</span>
              <span className="h-3.5 w-px bg-white/20" />
              <span className="text-white/70">
                {ranking.organizacion} {ranking.anio}
              </span>
              <span className="sr-only">{t.verRanking}</span>
              <span className="text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                <Flecha className="size-4" />
              </span>
            </a>
          </div>
          <h1 className="entrada entrada-2 mt-5 max-w-6xl font-display text-[2.75rem] leading-[1.05] text-balance sm:text-6xl md:text-[clamp(2.5rem,7.5vh,4.5rem)]">
            {t.titulo}
          </h1>
          <p className="entrada entrada-3 mt-5 max-w-4xl text-lg leading-relaxed text-pretty text-white/70 md:text-base lg:text-lg">{t.bajada}</p>
          <div className="entrada entrada-4 mt-8 flex flex-wrap gap-4">
            <Link href={ruta(idioma, "contacto")} className="btn bg-white text-ink hover:bg-brand-light">
              {textos[idioma].general.contactanos}
            </Link>
            <Link href={experiencia} className="btn border border-white/30 text-white hover:border-white">
              {t.verExperiencia}
            </Link>
          </div>
        </div>

        <div className="entrada entrada-5 border-t border-white/10">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 px-6 md:grid-cols-4 md:gap-x-0 lg:px-10">
            {cifras.map((c, i) => (
              <div
                key={c.label}
                className={`py-6 md:px-8 md:py-4 md:first:pl-0 ${i > 0 ? "md:border-l md:border-white/10" : ""}`}
              >
                <dd className="font-display text-4xl whitespace-nowrap tabular-nums">
                  <Contador valor={c.valor} />
                </dd>
                <dt className="mt-2 text-sm text-white/55">{c.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Clientes */}
      <section className="pt-4 pb-8">
        <div className="mx-auto flex max-w-7xl items-baseline justify-between gap-4 px-6 lg:px-10">
          <h2 className="text-sm text-muted">{t.clientesTitulo}</h2>
          <Link
              href={experiencia}
              aria-label={t.verTransacciones}
              title={t.verTransacciones}
              className="hidden sm:inline-flex w-fit text-ink transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-brand"
            >
              <Flecha />
            </Link>
        </div>
        <div className="mt-4">
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

      {/* Equipo */}
      <section data-menu={paginaEquipo} className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{t.equipoEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.equipoTitulo}</h2>
            </div>
            <Link
              href={paginaEquipo}
              aria-label={t.conocerEquipo}
              title={t.conocerEquipo}
              className="inline-flex w-fit text-ink transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-brand"
            >
              <Flecha />
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
                  className="size-24 rounded-full grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <p className="mt-6 font-display text-2xl group-hover:text-brand">{p.nombre}</p>
                <p className="mt-1 text-sm text-muted">{p.cargo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Transacciones recientes */}
      <section data-menu={experiencia} className="border-t border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{t.experienciaEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.recientes}</h2>
            </div>
            <Link
              href={experiencia}
              aria-label={t.verLasTransacciones(transacciones.length)}
              title={t.verLasTransacciones(transacciones.length)}
              className="inline-flex w-fit text-ink transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-brand"
            >
              <Flecha />
            </Link>
          </div>
          <div className="mt-10 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
            {recientes.map((d) => (
              <DealCard key={`${d.cliente}-${d.anio}`} deal={d} idioma={idioma} />
            ))}
          </div>
        </div>
      </section>

      {/* Medios */}
      <section data-menu={paginaMedios} className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{textos[idioma].medios.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">
                {textos[idioma].medios.titulo}
              </h2>
            </div>
            <Link
              href={paginaMedios}
              aria-label={t.verMedios}
              title={t.verMedios}
              className="inline-flex w-fit text-ink transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-brand"
            >
              <Flecha />
            </Link>
          </div>
          <div className="mt-10 grid border-t border-l border-line md:grid-cols-3">
            {medios.slice(0, 3).map((m) => (
              <Link key={m.imagen} href={paginaMedios} className="group relative border-r border-b border-line bg-white p-5 transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper">
                  <Image
                    src={m.imagen}
                    alt={m.titulo}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="label mt-5 text-brand">{m.fuente}</p>
                <h3 className="mt-2 font-display text-lg leading-snug text-balance group-hover:text-brand">{m.titulo}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
