import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { equipo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipo",
  description: "Un equipo senior con más de 20 años en banca de inversión, finanzas corporativas y M&A.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title={
          <>
            Experiencia senior, <em className="text-brand-light">dedicación</em> personal.
          </>
        }
      >
        Socios con más de dos décadas en banca de inversión que lideran cada mandato de principio
        a fin.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="divide-y divide-line border-y border-line">
          {equipo.map((p, i) => (
            <Reveal key={p.nombre}>
              <article className="grid gap-8 py-14 md:grid-cols-12 md:gap-10 lg:py-20">
                <div className="flex items-start gap-6 md:col-span-5">
                  <span className="font-display text-xl text-brand">0{i + 1}</span>
                  <div>
                    <Image
                      src={p.foto}
                      alt={p.nombre}
                      width={170}
                      height={170}
                      className="size-32 rounded-full lg:size-36"
                    />
                    <h2 className="mt-8 font-display text-4xl leading-tight lg:text-5xl">{p.nombre}</h2>
                    <p className="mt-2 font-medium text-brand">{p.cargo}</p>
                  </div>
                </div>
                <div className="md:col-span-6 md:col-start-7 md:pt-12">
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">{p.formacion}</p>
                  <p className="mt-5 text-xl leading-relaxed text-ink/80">{p.bio}</p>
                  <a
                    href={`mailto:${p.email}`}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium transition hover:border-ink hover:bg-ink hover:text-white"
                  >
                    {p.email}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
