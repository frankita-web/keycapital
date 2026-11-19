import Link from "next/link";
import { ArteBloques } from "@/components/arte-bloques";
import { CierreContacto } from "@/components/cierre-contacto";
import { ClientMarquee } from "@/components/client-marquee";
import { Contador } from "@/components/contador";
import { DealCard } from "@/components/deal-card";
import { EnlaceRaya, Etiqueta } from "@/components/etiqueta";
import { Flecha } from "@/components/flecha";
import { Eyebrow } from "@/components/page-hero";
import { RankingPopup } from "@/components/ranking-popup";
import { RedInternacional } from "@/components/red-internacional";
import { VideoFondo } from "@/components/video-fondo";
import { contenido } from "@/lib/contenido";
import { ruta, rutaQueHacemos, rutaServicio, textos, type Idioma } from "@/lib/i18n";

/** Portada: header y cifras · experiencia · quiénes somos · qué hacemos · red internacional · contacto. */
export function InicioPage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].inicio;
  const { ranking, servicios, transacciones } = contenido(idioma);
  const experiencia = ruta(idioma, "experiencia");
  const paginaEquipo = ruta(idioma, "equipo");
  const recientes = [...transacciones].sort((a, b) => b.anio - a.anio).slice(0, 6);
  const cifras = [
    { valor: "+30", label: t.cifraAnios },
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
        <div aria-hidden="true" className="hero-fondo">
          <VideoFondo src="/video/santiago-amanecer.mp4" poster="/video/santiago-amanecer.jpg" />
          {/* Tinte azul de la marca sobre el video (en blanco y negro) */}
          <div className="hero-tinte" />
          {/* Difuminado: más oscuro detrás del texto y abajo, en las cifras */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 to-transparent" />
        </div>

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
              {t.conversemos}
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
                <dd className="cifra-dorada font-display text-5xl whitespace-nowrap tabular-nums lg:text-[4rem] lg:leading-none">
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

      {/* Transacciones recientes (junto a los logos de clientes: la prueba primero) */}
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

      {/* Quiénes somos: manifiesto */}
      <section data-menu={paginaEquipo} className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Etiqueta>{t.manifiestoEyebrow}</Etiqueta>
          <h2 className="mt-5 max-w-5xl font-display text-4xl leading-[1.08] text-balance md:text-6xl">
            {t.manifiestoTitulo}
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-10">
            <p className="text-lg leading-relaxed text-pretty text-ink/80 lg:col-span-4 lg:col-start-5">
              {t.manifiestoComo}
            </p>
            <div className="lg:col-span-4">
              <p className="text-lg leading-relaxed text-pretty text-ink/80">
                {t.manifiestoLogros(transacciones.length)}
              </p>
              <div className="mt-10">
                <EnlaceRaya href={paginaEquipo}>{t.manifiestoEnlace}</EnlaceRaya>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hacemos: frase, bajada y una tarjeta por servicio */}
      <section
        id="que-hacemos"
        data-menu={rutaQueHacemos(idioma)}
        className="scroll-mt-20 border-t border-line bg-paper"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Etiqueta>{t.serviciosEyebrow}</Etiqueta>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-balance md:text-6xl">{t.serviciosTitulo}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{t.serviciosBajada}</p>

          <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {servicios.map((s) => (
              <Link key={s.id} href={rutaServicio(idioma, s.id)} className="group flex flex-col">
                <div className="overflow-hidden">
                  <ArteBloques
                    id={s.id}
                    className="aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:aspect-square"
                  />
                </div>
                <h3 className="mt-7 font-display text-2xl leading-snug text-balance decoration-1 underline-offset-[6px] group-hover:underline">
                  {s.titulo}
                </h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted">{s.resumen}</p>
                <span className="mt-auto inline-flex items-center gap-4 pt-6 text-brand">
                  <span className="sr-only">{t.verServicio}</span>
                  <Flecha className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Red internacional */}
      <RedInternacional idioma={idioma} />

      {/* Contacto */}
      <CierreContacto idioma={idioma} />
    </>
  );
}
