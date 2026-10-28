import Link from "next/link";
import { contacto, navegacion } from "@/lib/data";

async function anioActual() {
  "use cache";
  return new Date().getFullYear();
}

const linkColumna = "text-lg text-white/55 transition-colors hover:text-white";

export async function Footer() {
  const anio = await anioActual();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.svg" alt="KeyCapital" width={196} height={40} className="h-9 w-auto" />
            <p className="mt-16 font-display text-5xl leading-[1.05] lg:text-6xl">
              <span className="block text-white/35">Independencia,</span>
              <span className="block text-white/65">creatividad</span>
              <span className="block">y resultados concretos.</span>
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/contacto" className="btn bg-white text-ink hover:bg-brand-light">
                Contáctanos
              </Link>
              <a href={contacto.telefonoHref} className="text-white/55 hover:text-white">
                {contacto.telefono}
              </a>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-[2fr_3fr] lg:col-span-5 lg:pt-1">
            <div>
              <h3 className="text-lg">Sitio</h3>
              <ul className="mt-6 space-y-3">
                {navegacion.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkColumna}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-lg">Oficina</h3>
                <address className="mt-6 space-y-3 not-italic">
                  <a href={contacto.mapaUrl} target="_blank" rel="noreferrer" className={`block ${linkColumna}`}>
                    {contacto.direccion.split(", ").map((linea) => (
                      <span key={linea} className="block">
                        {linea}
                      </span>
                    ))}
                    {contacto.comuna}
                  </a>
                  <a href={`mailto:${contacto.email}`} className={`block ${linkColumna}`}>
                    {contacto.email}
                  </a>
                </address>
              </div>
              <div>
                <h3 className="text-lg">Síguenos</h3>
                <ul className="mt-6 space-y-3">
                  {contacto.redes.map((r) => (
                    <li key={r.nombre}>
                      <a href={r.url} target="_blank" rel="noreferrer" className={linkColumna}>
                        {r.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {anio} KeyCapital. Todos los derechos reservados.</p>
          <p>Asesores financieros · Santiago, Chile</p>
        </div>
      </div>
    </footer>
  );
}
