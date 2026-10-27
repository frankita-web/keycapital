"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contacto, navegacion } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-black/5 bg-white/85 shadow-[0_1px_24px_rgba(7,21,35,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="relative z-10 mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="Key Capital, inicio" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solid ? "/logo.svg" : "/logo-white.svg"}
            alt="Key Capital"
            width={176}
            height={36}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navegacion.slice(1, -1).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "text-brand"
                      : "text-ink/70 hover:text-ink"
                    : active
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={contacto.sitioIngles}
            className={`ml-2 px-2 text-xs font-semibold tracking-widest ${
              solid ? "text-ink/50 hover:text-ink" : "text-white/50 hover:text-white"
            }`}
          >
            EN
          </a>
          <Link
            href="/contacto"
            className={`ml-3 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              solid
                ? "bg-ink text-white hover:bg-brand"
                : "bg-white text-ink hover:bg-brand-light"
            }`}
          >
            Conversemos
          </Link>
        </nav>

        <button
          type="button"
          className={`flex size-11 items-center justify-center rounded-full md:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 bg-ink transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8" aria-label="Móvil">
          {navegacion.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-display text-5xl ${
                pathname === item.href ? "text-brand-light" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-10 space-y-1 text-sm text-white/60">
            <a href={contacto.telefonoHref} className="block">
              {contacto.telefono}
            </a>
            <a href={`mailto:${contacto.email}`} className="block">
              {contacto.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
