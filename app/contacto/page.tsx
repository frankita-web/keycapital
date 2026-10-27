import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { contacto } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Conversemos sobre la venta, compra o financiamiento de su empresa.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Conversemos sobre su <em className="text-brand-light">próximo paso</em>.
          </>
        }
      >
        Cuéntenos brevemente su situación. Un socio le responderá personalmente y con total
        confidencialidad.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-7">
          <div className="rounded-[2rem] border border-line bg-white p-8 lg:p-12">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-4 lg:col-span-4 lg:col-start-9">
          <a
            href={contacto.mapaUrl}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-3xl bg-ink p-8 text-white transition hover:bg-ink-2"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-light uppercase">Oficina</p>
            <p className="mt-4 font-display text-3xl leading-tight">{contacto.direccion}</p>
            <p className="mt-1 text-white/60">{contacto.comuna}</p>
            <p className="mt-6 text-sm text-white/70 group-hover:text-white">Ver en Google Maps →</p>
          </a>
          <a
            href={contacto.telefonoHref}
            className="block rounded-3xl border border-line bg-white p-8 transition hover:border-brand"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Teléfono</p>
            <p className="mt-4 font-display text-3xl">{contacto.telefono}</p>
          </a>
          <a
            href={`mailto:${contacto.email}`}
            className="block rounded-3xl border border-line bg-white p-8 transition hover:border-brand"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Correo</p>
            <p className="mt-4 font-display text-2xl break-all">{contacto.email}</p>
          </a>
        </aside>
      </section>
    </>
  );
}
