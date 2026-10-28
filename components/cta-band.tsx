import Link from "next/link";
import { contacto } from "@/lib/data";

export function CtaBand() {
  return (
    <section className="px-4 pb-4 lg:px-6 lg:pb-6">
      <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-brand text-white">
        <div className="absolute -right-24 -bottom-40 size-[30rem] rounded-full bg-brand-light/50 blur-[100px]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between lg:px-10 lg:py-28">
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            ¿Evaluando vender, comprar o financiar su empresa?
          </h2>
          <div className="flex shrink-0 flex-col gap-3">
            <Link
              href="/contacto"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Conversemos
            </Link>
            <a href={contacto.telefonoHref} className="text-center text-sm text-white/75 hover:text-white">
              o llámenos al {contacto.telefono}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
