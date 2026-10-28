import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { equipo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipo",
  description: "Un equipo senior con más de 20 años en banca de inversión, finanzas corporativas y M&A.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHero eyebrow="Equipo" title="Un equipo senior con resultados concretos.">
        Más de 20 años en banca de inversión, finanzas corporativas y M&A.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="divide-y divide-line border-y border-line">
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
                  <h2 className="font-display text-2xl leading-tight text-balance">{p.nombre}</h2>
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
    </>
  );
}
