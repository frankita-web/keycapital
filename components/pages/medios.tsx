import { MediaGallery } from "@/components/media-gallery";
import { PageHero } from "@/components/page-hero";
import { textos, type Idioma } from "@/lib/i18n";

export function MediosPage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].medios;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.titulo}>
        {t.bajada}
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <MediaGallery idioma={idioma} />
      </section>
    </>
  );
}
