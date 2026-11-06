"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navegacion, ruta, rutaEquivalente, textos, type Idioma } from "@/lib/i18n";

export function Header({ idioma }: { idioma: Idioma }) {
  const pathname = usePathname();
  const t = textos[idioma].general;
  const menu = navegacion(idioma);
  const [open, setOpen] = useState(false);
  const inicio = ruta(idioma, "inicio");
  const [seccion, setSeccion] = useState<string>(inicio);
  // En Inicio la rayita sigue a la sección que se está viendo; en el resto, a la página.
  const marcado = pathname === inicio ? seccion : pathname;

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

  return (
    <header className="sticky top-0 z-50">
      {/* Barra superior */}
      <div className="bg-ink text-white/70">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-6 px-6 text-xs lg:px-10">
          <Link
            href={ruta(idioma, "contacto")}
            aria-label={textos[idioma].menu.contacto}
            title={textos[idioma].menu.contacto}
            className="text-white/60 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-4">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3.5 7 8.5 6 8.5-6" />
            </svg>
          </Link>
          <span className="flex gap-3 font-semibold tracking-widest">
            {(["es", "en"] as const).map((i) =>
              i === idioma ? (
                <span key={i} className="text-white">
                  {i.toUpperCase()}
                </span>
              ) : (
                <a key={i} href={rutaEquivalente(pathname, i)} lang={i} className="text-white/35 transition-colors hover:text-white">
                  {i.toUpperCase()}
                </a>
              ),
            )}
          </span>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href={ruta(idioma, "inicio")} aria-label={t.inicioAria} onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.svg" alt="KeyCapital" width={196} height={40} className="h-9 w-auto" />
          </Link>

          <nav className="hidden h-full items-stretch gap-8 lg:flex" aria-label={t.menuPrincipal}>
            {menu.map((item) => {
              const active = marcado === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`flex items-center border-b-2 pt-0.5 text-sm transition-colors ${
                    active
                      ? "border-white text-white"
                      : "border-transparent text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex size-11 items-center justify-center text-white lg:hidden"
            aria-label={open ? t.cerrarMenu : t.abrirMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav
          className="fixed inset-x-0 top-[7.25rem] bottom-0 overflow-y-auto bg-ink px-6 lg:hidden"
          aria-label={t.menuMovil}
        >
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
        </nav>
      )}
    </header>
  );
}
