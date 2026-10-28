import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { MediaGallery } from "@/components/media-gallery";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Medios",
  description: "KeyCapital en la prensa: transacciones, entrevistas y rankings.",
};

export default function MediosPage() {
  return (
    <>
      <PageHero
        eyebrow="Medios"
        title={
          <>
            KeyCapital en la <span className="text-brand-light">prensa</span>.
          </>
        }
      >
        Transacciones, entrevistas y reconocimientos publicados en Diario Financiero, Emol y
        Leaders League.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <MediaGallery />
      </section>

      <CtaBand />
    </>
  );
}
