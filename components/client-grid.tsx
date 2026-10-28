import Image from "next/image";
import Link from "next/link";
import { clientes, slugLogo, tieneTransacciones } from "@/lib/data";

const celda = "group flex h-28 items-center justify-center bg-white px-6";

export function ClientGrid() {
  return (
    <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4 lg:grid-cols-8">
      {clientes.map((c) => {
        const logo = (
          <Image
            src={`/clientes/${c.logo}`}
            alt={c.nombre}
            width={160}
            height={96}
            className="max-h-14 w-auto object-contain opacity-60 mix-blend-multiply grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          />
        );
        return (
          <li key={c.logo} className="contents">
            {tieneTransacciones(c.logo) ? (
              <Link
                href={`/experiencia?empresa=${slugLogo(c.logo)}`}
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
  );
}
