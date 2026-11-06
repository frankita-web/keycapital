import Link from "next/link";
import { contacto } from "@/lib/data";
import { navegacion, ruta, textos, type Idioma } from "@/lib/i18n";

async function anioActual() {
  "use cache";
  return new Date().getFullYear();
}

const titulo = "label text-white/45";
const lista = "mt-5 space-y-2.5 text-sm";
const enlace = "text-white/75 transition-colors hover:text-white";

export async function Footer({ idioma }: { idioma: Idioma }) {
  const anio = await anioActual();
  const t = textos[idioma].footer;
  const direccion = textos[idioma].contacto.direccion;

  return (
    <footer data-menu={ruta(idioma, "contacto")} className="rounded-t-2xl bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.svg" alt="KeyCapital" width={196} height={40} className="h-9 w-auto" />
            <p className="mt-6 max-w-md font-display text-2xl leading-snug text-balance lg:text-3xl">
              {t.lema.join(" ")}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-6">
            <a href={contacto.telefonoHref} className={`text-sm ${enlace}`}>
              {contacto.telefono}
            </a>
            <Link href={ruta(idioma, "contacto")} className="btn bg-white text-ink hover:bg-brand-light">
              {textos[idioma].general.contactanos}
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <h3 className={titulo}>{t.sitio}</h3>
            <ul className={lista}>
              {navegacion(idioma).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={enlace}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={titulo}>{t.siguenos}</h3>
            <ul className={lista}>
              {contacto.redes.map((r) => (
                <li key={r.nombre}>
                  <a href={r.url} target="_blank" rel="noreferrer" className={enlace}>
                    {r.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className={titulo}>{t.oficina}</h3>
            <address className={`${lista} not-italic`}>
              <a href={contacto.mapaUrl} target="_blank" rel="noreferrer" className={`block leading-relaxed ${enlace}`}>
                {direccion}
                <span className="block">{contacto.comuna}</span>
              </a>
              <a href={`mailto:${contacto.email}`} className={`block ${enlace}`}>
                {contacto.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {anio} KeyCapital. {t.derechos}
          </p>
          <p>{t.ubicacion}</p>
        </div>
      </div>
    </footer>
  );
}
