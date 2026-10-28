import type { Metadata } from "next";
import { Suspense } from "react";
import { DealExplorer, DealExplorerView } from "@/components/deal-explorer";
import { PageHero } from "@/components/page-hero";
import { transacciones } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Transacciones de M&A, financiamiento, reestructuración de pasivos y valoración asesoradas por KeyCapital.",
};

export default function ExperienciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiencia"
        title={
          <>
            Experiencia que da confianza.
          </>
        }
      >
        {transacciones.length} transacciones asesoradas en venta y compra de empresas,
        financiamiento, reestructuración de pasivos y valoración.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Suspense fallback={<DealExplorerView empresa={null} />}>
          <DealExplorer />
        </Suspense>
      </section>
    </>
  );
}
