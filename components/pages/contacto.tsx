import { ContactoPopup } from "@/components/contacto-popup";
import { PageHero } from "@/components/page-hero";
import { contacto } from "@/lib/data";
import { textos, type Idioma } from "@/lib/i18n";

const enlace = "underline underline-offset-4 transition-colors hover:text-brand";

export function ContactoPage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].contacto;
  const fila = "grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4";

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.titulo}>
        {t.bajada}
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="max-w-2xl rounded-2xl border border-line bg-white p-8 lg:p-12">
          <p className="font-display text-3xl leading-tight text-balance md:text-4xl">{t.pregunta}</p>
          <p className="font-display text-3xl leading-tight text-balance text-muted md:text-4xl">{t.respuesta}</p>

          <dl className="mt-10 space-y-4 text-lg">
            <div className={fila}>
              <dt className="text-muted">{t.correo}</dt>
              <dd>
                <a href={`mailto:${contacto.email}`} className={`break-all ${enlace}`}>
                  {contacto.email}
                </a>
              </dd>
            </div>
            <div className={fila}>
              <dt className="text-muted">{t.telefono}</dt>
              <dd>
                <a href={contacto.telefonoHref} className={enlace}>
                  {contacto.telefono}
                </a>
              </dd>
            </div>
            <div className={fila}>
              <dt className="text-muted">{t.oficina}</dt>
              <dd>
                <a href={contacto.mapaUrl} target="_blank" rel="noreferrer" className={enlace}>
                  {t.direccion}, {contacto.comuna}
                </a>
              </dd>
            </div>
          </dl>

          <ContactoPopup idioma={idioma} />
        </div>
      </section>
    </>
  );
}
