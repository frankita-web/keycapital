import { Suspense } from "react";
import { DealExplorer, DealExplorerView } from "@/components/deal-explorer";
import { PageHero } from "@/components/page-hero";
import { transacciones } from "@/lib/data";
import { textos, type Idioma } from "@/lib/i18n";

export function ExperienciaPage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].experiencia;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.titulo}>
        {t.bajada(transacciones.length)}
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <Suspense fallback={<DealExplorerView idioma={idioma} tipo={null} empresa={null} />}>
          <DealExplorer idioma={idioma} />
        </Suspense>
      </section>
    </>
  );
}
