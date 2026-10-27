import Image from "next/image";
import Link from "next/link";
import { ClientMarquee } from "@/components/client-marquee";
import { CtaBand } from "@/components/cta-band";
import { DealCard } from "@/components/deal-card";
import { Eyebrow } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { equipo, pilares, servicios, transacciones, valores } from "@/lib/data";

const recientes = [...transacciones].sort((a, b) => b.anio - a.anio).slice(0, 6);

const cifras = [
  { valor: "+20", label: "años en banca de inversión" },
  { valor: `${transacciones.length}`, label: "transacciones asesoradas" },
  { valor: "4", label: "continentes con socios de cobertura" },
  { valor: "2010", label: "como equipo independiente" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
        <div className="absolute -top-48 -right-32 size-[44rem] rounded-full bg-brand/35 blur-[140px]" />
        <div className="absolute bottom-0 -left-40 size-[28rem] rounded-full bg-brand-light/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pt-40 pb-16 lg:grid-cols-12 lg:px-10 lg:pt-52">
          <div className="lg:col-span-8">
            <Eyebrow light>Banca de inversión independiente</Eyebrow>
            <h1 className="mt-8 font-display text-[3.4rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[6.5rem]">
              Confianza en un equipo <em className="text-brand-light">senior</em> con resultados concretos.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
              Asesoramos a medianas y grandes empresas, y a sus accionistas, en compra y venta de
              compañías, financiamiento, reestructuración de pasivos y valoraciones. Con
              independencia y creatividad.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand-light"
              >
                Agendar una conversación
              </Link>
              <Link
                href="/experiencia"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Ver experiencia →
              </Link>
            </div>
          </div>

          {/* Tarjeta destacada */}
          <div className="hidden items-end lg:col-span-4 lg:flex">
            <div className="w-full rotate-2 rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition hover:rotate-0">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Última transacción</span>
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white">2025</span>
              </div>
              <p className="mt-10 font-display text-4xl leading-tight">NIBSA S.A.</p>
              <p className="mt-1 text-sm text-white/60">vendida a HOFFENS S.A.</p>
              <div className="mt-8 h-px bg-white/10" />
              <p className="mt-4 text-sm font-semibold text-brand-light">Asesor financiero de la transacción</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
            {cifras.map((c) => (
              <div key={c.label} className="bg-ink/90 p-6 lg:p-8">
                <dt className="sr-only">{c.label}</dt>
                <dd className="font-display text-5xl tabular-nums lg:text-6xl">{c.valor}</dd>
                <dd className="mt-2 text-sm text-white/55">{c.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Servicios</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Asesoría en las decisiones que definen una empresa.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7 lg:self-end" delay={100}>
            <p className="text-lg leading-relaxed text-muted">
              Cada mandato lo lidera personalmente un socio con más de dos décadas en banca de
              inversión. Sin estructuras pesadas ni conflictos de interés: solo foco en el
              resultado para nuestros clientes.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {servicios.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 transition duration-300 hover:border-ink hover:bg-ink lg:p-10">
                <span className="font-display text-xl text-brand transition-colors group-hover:text-brand-light">
                  0{i + 1}
                </span>
                <h3 className="mt-12 font-display text-4xl leading-tight transition-colors group-hover:text-white">
                  {s.titulo}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted transition-colors group-hover:text-white/65">
                  {s.descripcion}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Por qué Key Capital */}
      <section className="bg-ink-2 text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <Reveal>
            <Eyebrow light>Por qué Key Capital</Eyebrow>
            <p className="mt-8 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              {valores.map((v, i) => (
                <span key={v}>
                  <span className={i % 2 === 0 ? "text-white" : "text-white/40 italic"}>{v}</span>
                  {i < valores.length - 2 ? ", " : i === valores.length - 2 ? " y " : "."}
                </span>
              ))}
            </p>
          </Reveal>

          <div className="mt-20 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
            {pilares.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 100}>
                <h3 className="text-lg font-semibold">{p.titulo}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{p.descripcion}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transacciones recientes */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Experiencia</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Transacciones recientes
            </h2>
          </div>
          <Link
            href="/experiencia"
            className="shrink-0 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold transition hover:border-ink hover:bg-ink hover:text-white"
          >
            Ver las {transacciones.length} transacciones →
          </Link>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recientes.map((d, i) => (
            <Reveal key={`${d.cliente}-${d.anio}`} delay={(i % 3) * 80}>
              <DealCard deal={d} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section className="pb-28 lg:pb-36">
        <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-sm font-medium text-muted">
            Empresas que han confiado en nosotros
          </p>
        </Reveal>
        <div className="mt-10">
          <ClientMarquee />
        </div>
      </section>

      {/* Equipo */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Equipo</Eyebrow>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
                Socios que lideran cada mandato.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Ex gerentes generales de Banchile Citibank Global Markets y Banchile Asesoría
                Financiera, con trayectoria en Banedwards.
              </p>
              <Link
                href="/equipo"
                className="mt-10 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand"
              >
                Conocer al equipo
              </Link>
            </Reveal>
            <div className="divide-y divide-line lg:col-span-6 lg:col-start-7">
              {equipo.map((p, i) => (
                <Reveal key={p.nombre} delay={i * 80}>
                  <Link href="/equipo" className="group flex items-center gap-6 py-6">
                    <Image
                      src={p.foto}
                      alt={p.nombre}
                      width={170}
                      height={170}
                      className="size-20 rounded-full grayscale transition group-hover:grayscale-0"
                    />
                    <div className="flex-1">
                      <p className="font-display text-3xl leading-tight">{p.nombre}</p>
                      <p className="mt-1 text-sm text-muted">{p.cargo}</p>
                    </div>
                    <span className="text-2xl text-ink/30 transition group-hover:translate-x-1 group-hover:text-brand">
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
