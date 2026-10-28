import Image from "next/image";
import Link from "next/link";
import { clientes, slugLogo, tieneTransacciones } from "@/lib/data";

const tile =
  "flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-6";

export function ClientMarquee() {
  const filas = [clientes.slice(0, 20), clientes.slice(20)];
  return (
    <div className="group space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {filas.map((fila, i) => (
        <div
          key={i}
          className="animate-marquee flex w-max gap-4"
          style={i === 1 ? { animationDirection: "reverse" } : undefined}
        >
          {[...fila, ...fila].map((c, j) => {
            const duplicado = j >= fila.length;
            const logo = (
              <Image
                src={`/clientes/${c.logo}`}
                alt={duplicado ? "" : c.nombre}
                width={160}
                height={96}
                className="max-h-16 w-auto object-contain opacity-70 mix-blend-multiply grayscale transition duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
              />
            );
            return tieneTransacciones(c.logo) ? (
              <Link
                key={`${c.logo}-${j}`}
                href={`/experiencia?empresa=${slugLogo(c.logo)}`}
                aria-hidden={duplicado}
                tabIndex={duplicado ? -1 : undefined}
                title={`Ver transacciones de ${c.nombre}`}
                className={`${tile} group/logo transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_12px_24px_-16px_rgba(10,113,179,0.5)]`}
              >
                {logo}
              </Link>
            ) : (
              <div key={`${c.logo}-${j}`} aria-hidden={duplicado} className={`${tile} group/logo`}>
                {logo}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
