import Link from "next/link";
import type { ReactNode } from "react";

/** Etiqueta de sección con una línea vertical a la izquierda. */
export function Etiqueta({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`border-l pl-3 text-base leading-tight ${
        light ? "border-brand-light/50 text-brand-light" : "border-brand/40 text-brand"
      }`}
    >
      {children}
    </p>
  );
}

/** Enlace de texto con una rayita a la derecha que se alarga al pasar el mouse. */
export function EnlaceRaya({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 text-base transition-colors ${
        light ? "text-brand-light hover:text-white" : "text-brand hover:text-ink"
      }`}
    >
      {children}
      <span aria-hidden="true" className="h-px w-10 bg-current transition-all duration-300 group-hover:w-16" />
    </Link>
  );
}
