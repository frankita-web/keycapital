import Link from "next/link";
import { contacto, navegacion, servicios } from "@/lib/data";

async function anioActual() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const anio = await anioActual();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.svg" alt="KeyCapital" width={196} height={40} className="h-9 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60 text-pretty">
              Boutique independiente de banca de inversión. Un equipo senior al servicio de
              medianas y grandes empresas, y de sus accionistas, desde 2010.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label text-white/45">Sitio</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navegacion.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label text-white/45">Servicios</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {servicios.map((s) => (
                <li key={s.titulo}>{s.titulo}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label text-white/45">Oficina</h3>
            <address className="mt-5 space-y-3 text-sm not-italic text-white/75">
              <a href={contacto.mapaUrl} target="_blank" rel="noreferrer" className="block hover:text-white">
                {contacto.direccion}
                <br />
                {contacto.comuna}
              </a>
              <a href={contacto.telefonoHref} className="block hover:text-white">
                {contacto.telefono}
              </a>
              <a href={`mailto:${contacto.email}`} className="block hover:text-white">
                {contacto.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {anio} KeyCapital. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {contacto.redes.map((r) => (
              <li key={r.nombre}>
                <a href={r.url} target="_blank" rel="noreferrer" className="hover:text-white">
                  {r.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
