"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contacto, navegacion } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Barra superior */}
      <div className="bg-ink text-white/70">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-6 px-6 text-xs lg:px-10">
          <a href={contacto.telefonoHref} className="hidden hover:text-white sm:block">
            {contacto.telefono}
          </a>
          <a href={`mailto:${contacto.email}`} className="hidden hover:text-white sm:block">
            {contacto.email}
          </a>
          <span className="flex gap-3 font-semibold tracking-widest">
            <span className="text-white">ES</span>
            <a href={contacto.sitioIngles} className="hover:text-white">
              EN
            </a>
          </span>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" aria-label="KeyCapital, inicio" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="KeyCapital" width={196} height={40} className="h-9 w-auto" />
          </Link>

          <nav className="hidden h-full items-stretch gap-8 md:flex" aria-label="Principal">
            {navegacion.map((item) => {
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
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
          aria-label="Móvil"
        >
          {navegacion.map((item) => (
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
