"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { esRutaServicio, navegacion, ruta, rutaEquivalente, rutaQueHacemos, textos, type Idioma } from "@/lib/i18n";

/** Encabezado fijo y minimalista: logo, cinco enlaces, "ES | EN" en texto y Contacto destacado. */
export function Header({ idioma }: { idioma: Idioma }) {
  const pathname = usePathname();
  const t = textos[idioma].general;
  const inicio = ruta(idioma, "inicio");
  const contacto = ruta(idioma, "contacto");
  // El logo lleva al inicio y Contacto va como botón aparte: el menú son los demás enlaces.
  const menu = navegacion(idioma).filter((item) => item.href !== inicio && item.href !== contacto);
  const [open, setOpen] = useState(false);
  const [seccion, setSeccion] = useState<string>(inicio);
  // En Inicio la rayita sigue a la sección que se está viendo; en el resto, a la página.
  // En la página de un servicio se marca "Qué hacemos".
  const marcado =
    pathname === inicio ? seccion : esRutaServicio(pathname, idioma) ? rutaQueHacemos(idioma) : pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (pathname !== inicio) return;
    function medir() {
      let actual: string = inicio;
      document.querySelectorAll<HTMLElement>("[data-menu]").forEach((el) => {
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.6) actual = el.dataset.menu ?? actual;
      });
      setSeccion(actual);
    }
    medir();
    window.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      window.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, [pathname, inicio]);

  const idiomas = (
    <span className="flex items-center gap-2 text-xs font-semibold tracking-widest">
      {(["es", "en"] as const).map((i, n) => (
        <span key={i} className="flex items-center gap-2">
          {n > 0 && <span className="text-white/25">|</span>}
          {i === idioma ? (
            <span className="text-white">{i.toUpperCase()}</span>
          ) : (
            <a href={rutaEquivalente(pathname, i)} lang={i} className="text-white/40 transition-colors hover:text-white">
              {i.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </span>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href={inicio} aria-label={t.inicioAria} onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="KeyCapital" width={196} height={40} className="h-9 w-auto" />
        </Link>

        <div className="hidden h-full items-stretch gap-10 lg:flex">
          <nav className="flex items-stretch gap-8" aria-label={t.menuPrincipal}>
            {menu.map((item) => {
              const active = marcado === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`flex items-center border-b-2 pt-0.5 text-sm transition-colors ${
                    active ? "border-white text-white" : "border-transparent text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-8">
            {idiomas}
            <Link
              href={contacto}
              aria-current={pathname === contacto ? "page" : undefined}
              className="btn bg-white px-5 py-2.5 text-sm text-ink hover:bg-brand-light"
            >
              {textos[idioma].menu.contacto}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          {idiomas}
          <button
            type="button"
            className="flex size-11 items-center justify-center text-white"
            aria-label={open ? t.cerrarMenu : t.abrirMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-ink px-6 lg:hidden" aria-label={t.menuMovil}>
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-white/10 py-5 text-lg ${
                pathname === item.href ? "text-brand-light" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={contacto} onClick={() => setOpen(false)} className="btn mt-8 w-full bg-white text-ink">
            {textos[idioma].menu.contacto}
          </Link>
        </nav>
      )}
    </header>
  );
}
