import Link from "next/link";
import { Etiqueta } from "@/components/etiqueta";
import { contacto } from "@/lib/data";
import { ruta, textos, type Idioma } from "@/lib/i18n";

/** Cierre de página antes del pie: confidencialidad y un botón a Contacto. */
export function CierreContacto({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].inicio;
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-7">
          <Etiqueta>{t.cierreEyebrow}</Etiqueta>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.cierreTitulo}</h2>
        </div>
        <div className="flex flex-col justify-end gap-8 lg:col-span-4 lg:col-start-9">
          <p className="text-lg leading-relaxed text-pretty text-muted">{t.cierreTexto}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href={ruta(idioma, "contacto")} className="btn bg-ink text-white hover:bg-brand">
              {t.conversemos}
            </Link>
            <a href={contacto.telefonoHref} className="text-sm text-ink underline-offset-4 hover:underline">
              {contacto.telefono}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
