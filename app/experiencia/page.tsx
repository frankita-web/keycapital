import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { DealExplorer } from "@/components/deal-explorer";
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
            Experiencia que da <span className="text-brand-light">confianza</span>.
          </>
        }
      >
        {transacciones.length} transacciones asesoradas en venta y compra de empresas,
        financiamiento, reestructuración de pasivos y valoración.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <DealExplorer />
      </section>

      <CtaBand />
    </>
  );
}
