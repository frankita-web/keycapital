import Link from "next/link";
import { contacto } from "@/lib/data";

export function CtaBand() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-20">
        <div>
          <h2 className="font-display text-3xl leading-tight text-balance md:text-4xl">
            ¿Evaluando vender, comprar o financiar tu empresa?
          </h2>
          <p className="mt-3 text-muted">
            Conversemos con total confidencialidad. Teléfono{" "}
            <a href={contacto.telefonoHref} className="text-ink underline-offset-4 hover:underline">
              {contacto.telefono}
            </a>
            .
          </p>
        </div>
        <Link href="/contacto" className="btn shrink-0 bg-ink text-white hover:bg-brand">
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
