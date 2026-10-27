import Image from "next/image";
import { clientes } from "@/lib/data";

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
          {[...fila, ...fila].map((c, j) => (
            <div
              key={`${c.logo}-${j}`}
              aria-hidden={j >= fila.length}
              className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-6"
            >
              <Image
                src={`/clientes/${c.logo}`}
                alt={j >= fila.length ? "" : c.nombre}
                width={160}
                height={96}
                className="max-h-16 w-auto object-contain opacity-70 mix-blend-multiply grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
