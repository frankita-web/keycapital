"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contacto } from "@/lib/data";
import { navegacion, ruta, rutaEquivalente, textos, type Idioma } from "@/lib/i18n";

export function Header({ idioma }: { idioma: Idioma }) {
  const pathname = usePathname();
  const t = textos[idioma].general;
  const menu = navegacion(idioma);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Barra superior */}
      <div className="border-b border-line bg-white text-muted">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-6 px-6 text-xs lg:px-10">
          <a href={contacto.telefonoHref} className="hidden hover:text-ink sm:block">
            {contacto.telefono}
          </a>
          <a href={`mailto:${contacto.email}`} className="hidden hover:text-ink sm:block">
            {contacto.email}
          </a>
          <span className="flex gap-3 font-semibold tracking-widest">
            {(["es", "en"] as const).map((i) =>
              i === idioma ? (
                <span key={i} className="text-brand">
                  {i.toUpperCase()}
                </span>
              ) : (
                <a key={i} href={rutaEquivalente(pathname, i)} lang={i} className="hover:text-ink">
                  {i.toUpperCase()}
                </a>
              ),
            )}
          </span>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href={ruta(idioma, "inicio")} aria-label={t.inicioAria} onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="KeyCapital" width={196} height={40} className="h-9 w-auto" />
          </Link>

          <nav className="hidden h-full items-stretch gap-8 md:flex" aria-label={t.menuPrincipal}>
            {menu.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center border-b-2 pt-0.5 text-sm transition-colors ${
                    active
                      ? "border-ink text-ink"
                      : "border-transparent text-ink/60 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex size-11 items-center justify-center text-ink md:hidden"
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
          className="fixed inset-x-0 top-[7.25rem] bottom-0 overflow-y-auto bg-white px-6 md:hidden"
          aria-label={t.menuMovil}
        >
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-line py-5 text-lg ${
                pathname === item.href ? "text-brand" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="space-y-1 py-8 text-sm text-muted">
            <a href={contacto.telefonoHref} className="block">
              {contacto.telefono}
            </a>
            <a href={`mailto:${contacto.email}`} className="block">
              {contacto.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
