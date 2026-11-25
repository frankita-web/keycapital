import { PageHero } from "@/components/page-hero";
import { type Idioma } from "@/lib/i18n";
import { privacidad } from "@/lib/privacidad";

export function PrivacidadPage({ idioma }: { idioma: Idioma }) {
  const t = privacidad[idioma];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.titulo}>
        {t.bajada}
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm text-muted">{t.actualizada}</p>
          {t.secciones.map((s) => (
            <div key={s.titulo} className="mt-12">
              <h2 className="font-display text-2xl leading-snug text-balance md:text-3xl">{s.titulo}</h2>
              {s.parrafos.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-pretty text-graphite">
                  {p}
                </p>
              ))}
              {s.lista && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed text-graphite marker:text-bronce">
                  {s.lista.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
