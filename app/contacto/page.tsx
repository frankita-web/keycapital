import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { contacto } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Conversemos sobre la venta, compra o financiamiento de tu empresa.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Conversemos.
          </>
        }
      >
        Cuéntanos brevemente tu situación. Un socio te responderá personalmente y con total
        confidencialidad.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-7">
          <div className="border border-line bg-white p-8 lg:p-12">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-4 lg:col-span-4 lg:col-start-9">
          <a
            href={contacto.mapaUrl}
            target="_blank"
            rel="noreferrer"
            className="group block bg-ink p-8 text-white"
          >
            <p className="label text-brand-light">Oficina</p>
            <p className="mt-4 font-display text-2xl leading-tight text-balance">{contacto.direccion}</p>
            <p className="mt-1 text-white/60">{contacto.comuna}</p>
            <p className="mt-6 text-sm text-white/70 group-hover:text-white">Ver en Google Maps →</p>
          </a>
          <a
            href={contacto.telefonoHref}
            className="block border border-line bg-white p-8 transition-colors hover:border-ink"
          >
            <p className="label text-muted">Teléfono</p>
            <p className="mt-4 font-display text-2xl text-balance">{contacto.telefono}</p>
          </a>
          <a
            href={`mailto:${contacto.email}`}
            className="block border border-line bg-white p-8 transition-colors hover:border-ink"
          >
            <p className="label text-muted">Correo</p>
            <p className="mt-4 font-display text-xl break-all text-balance">{contacto.email}</p>
          </a>
        </aside>
      </section>
    </>
  );
}
