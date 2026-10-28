import Image from "next/image";
import Link from "next/link";
import { clientes, slugLogo, tieneTransacciones } from "@/lib/data";

const celda = "group flex h-28 w-48 shrink-0 items-center justify-center border-r border-line bg-white px-7";

/** Logos de clientes en movimiento continuo; se pausa al pasar el mouse. */
export function ClientMarquee() {
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
                  className="max-h-14 w-auto object-contain opacity-60 mix-blend-multiply grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              );
              return (
                <li key={`${c.logo}-${j}`} aria-hidden={duplicado} className="contents">
                  {tieneTransacciones(c.logo) ? (
                    <Link
                      href={`/experiencia?empresa=${slugLogo(c.logo)}`}
                      tabIndex={duplicado ? -1 : undefined}
                      title={`Ver transacciones de ${c.nombre}`}
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
