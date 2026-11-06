import Image from "next/image";
import Link from "next/link";
import { clientes, slugLogo, tieneTransacciones } from "@/lib/data";
import { ruta, textos, type Idioma } from "@/lib/i18n";

const celda = "group flex h-28 w-48 shrink-0 items-center justify-center border-r border-line bg-white px-7";

/** Logos de clientes en movimiento continuo; se pausa al pasar el mouse. */
export function ClientMarquee({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].inicio;
  const filas = [clientes.slice(0, 20), clientes.slice(20)];
  return (
    <div className="marquee space-y-px border-y border-line bg-line">
      {filas.map((fila, i) => (
        <div key={i} className="overflow-hidden bg-white">
          <ul className={`marquee-track flex w-max ${i === 1 ? "marquee-reverse" : ""}`}>
            {[...fila, ...fila].map((c, j) => {
              const duplicado = j >= fila.length;
              const logo = (
                <Image
                  src={`/clientes/${c.logo}`}
                  alt={duplicado ? "" : c.nombre}
                  width={160}
                  height={96}
                  className="max-h-14 w-auto object-contain mix-blend-multiply grayscale transition duration-300 group-hover:grayscale-0"
                />
              );
              return (
                <li key={`${c.logo}-${j}`} aria-hidden={duplicado} className="contents">
                  {tieneTransacciones(c.logo) ? (
                    <Link
                      href={`${ruta(idioma, "experiencia")}?empresa=${slugLogo(c.logo)}`}
                      tabIndex={duplicado ? -1 : undefined}
                      title={t.verTransaccionesDe(c.nombre)}
                      className={celda}
                    >
                      {logo}
                    </Link>
                  ) : (
                    <div className={celda}>{logo}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
