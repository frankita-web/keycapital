import Image from "next/image";
import Link from "next/link";
import { ClientMarquee } from "@/components/client-marquee";
import { DealCard } from "@/components/deal-card";
import { Eyebrow } from "@/components/page-hero";
import { equipo, pilares, servicios, transacciones, valores } from "@/lib/data";

const recientes = [...transacciones].sort((a, b) => b.anio - a.anio).slice(0, 6);

const cifras = [
  { valor: "+20", label: "Años en banca de inversión" },
  { valor: `${transacciones.length}`, label: "Transacciones asesoradas" },
  { valor: "4", label: "Continentes con socios de cobertura" },
  { valor: "Desde 2010", label: "Equipo independiente" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-20">
          <Eyebrow light>Asesores financieros</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[2.75rem] leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            Confianza en un equipo senior con resultados concretos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/70">
            Servicios de asesoría en compra y venta de empresas, reestructuración de pasivos de
            largo plazo, valoraciones y financiamientos especiales y de proyectos. Independencia y
            creatividad.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contacto" className="btn bg-white text-ink hover:bg-brand-light">
              Contáctanos
            </Link>
            <Link href="/experiencia" className="btn border border-white/30 text-white hover:border-white">
              Ver experiencia
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
            <Eyebrow>Clientes</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">
              Empresas que han confiado en nosotros
            </h2>
          </div>
          <Link href="/experiencia" className="text-sm text-ink underline underline-offset-4 hover:text-brand">
            Ver todas las transacciones
          </Link>
        </div>
        <div className="mt-10">
          <ClientMarquee />
        </div>
      </section>

      {/* Servicios */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Servicios</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">
                Asesoría especializada en las decisiones clave de una empresa.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-pretty text-muted lg:col-span-6 lg:col-start-7 lg:self-end">
              Servicios especializados a medianas y grandes empresas, incluidos sus accionistas, en
              sus desafíos de negocio.
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
        <Eyebrow>Por qué KeyCapital</Eyebrow>
        <h2 className="mt-4 max-w-4xl font-display text-4xl leading-[1.1] text-balance md:text-5xl">
          {valores.join(", ").replace(/, ([^,]+)$/, " y $1")}.
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
              <Eyebrow>Experiencia</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">
                Transacciones recientes
              </h2>
            </div>
            <Link href="/experiencia" className="text-sm text-ink underline underline-offset-4 hover:text-brand">
              Ver las {transacciones.length} transacciones
            </Link>
          </div>
          <div className="mt-10 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
            {recientes.map((d) => (
              <DealCard key={`${d.cliente}-${d.anio}`} deal={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Equipo</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">
                Un equipo senior con más de 20 años de trayectoria
              </h2>
            </div>
            <Link href="/equipo" className="text-sm text-ink underline underline-offset-4 hover:text-brand">
              Conocer al equipo
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {equipo.map((p) => (
              <Link key={p.nombre} href="/equipo" className="group border-t border-line pt-8">
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
