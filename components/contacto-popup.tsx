"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { Modal } from "@/components/modal";
import { contacto } from "@/lib/data";
import { ruta, textos, type Idioma } from "@/lib/i18n";

const campo =
  "w-full bg-white px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-ink/60 focus:bg-paper";

/**
 * Formulario en pop up. En Contacto se abre solo al llegar y se reabre con el botón de la tarjeta;
 * con `flotante`, es el botón fijo abajo a la derecha que está en todas las demás páginas.
 */
export function ContactoPopup({ idioma, flotante = false }: { idioma: Idioma; flotante?: boolean }) {
  const t = textos[idioma].contacto;
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const cerrarPopup = useCallback(() => setAbierto(false), []);

  useEffect(() => {
    if (flotante) return;
    const espera = setTimeout(() => setAbierto(true), 350);
    return () => clearTimeout(espera);
  }, [flotante]);

  // En Contacto ya está el formulario: ahí no se muestra el botón flotante.
  if (flotante && pathname === ruta(idioma, "contacto")) return null;

  // Por ahora abre el correo de quien escribe con el mensaje listo.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = `${data.get("nombre") ?? ""} ${data.get("apellido") ?? ""}`.trim();
    const cuerpo = [
      `${t.formNombre}: ${nombre}`,
      `${t.correo}: ${data.get("correo")}`,
      `${t.telefono}: ${data.get("telefono")}`,
      "",
      String(data.get("mensaje") ?? ""),
    ].join("\n");
    const asunto = `${t.formAsunto}: ${nombre}`;
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  }

  return (
    <>
      {flotante ? (
        <button
          type="button"
          onClick={() => setAbierto(true)}
          aria-label={t.formTitulo}
          className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand p-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-ink sm:px-5 sm:py-3.5"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="size-5">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3.5 7 8.5 6 8.5-6" />
          </svg>
          <span className="hidden sm:inline">{t.formTitulo}</span>
        </button>
      ) : (
        <button type="button" onClick={() => setAbierto(true)} className="btn mt-10 bg-ink text-white hover:bg-brand">
          {t.formTitulo}
        </button>
      )}

      <Modal abierto={abierto} onCerrar={cerrarPopup} tituloId="popup-contacto-titulo" cerrar={t.formCerrar}>
        <form onSubmit={onSubmit} className="px-6 py-10 sm:px-10">
          <p className="label text-center text-brand">KeyCapital</p>
          <h2 id="popup-contacto-titulo" className="mt-4 text-center font-display text-3xl leading-tight text-balance">
            {t.formEncabezado}
          </h2>
          <p className="mt-3 text-center text-sm text-muted">{t.formRespuesta}</p>

          <div className="mt-7 grid grid-cols-2 gap-px border border-line bg-line">
            <input
              name="nombre"
              required
              autoComplete="given-name"
              aria-label={t.formNombre}
              placeholder={t.formNombre}
              className={campo}
            />
            <input
              name="apellido"
              autoComplete="family-name"
              aria-label={t.formApellido}
              placeholder={t.formApellido}
              className={campo}
            />
            <input
              name="correo"
              type="email"
              required
              autoComplete="email"
              aria-label={t.formCorreo}
              placeholder={t.formCorreo}
              className={`col-span-2 ${campo}`}
            />
            <input
              name="telefono"
              type="tel"
              autoComplete="tel"
              aria-label={t.telefono}
              placeholder={t.telefono}
              className={`col-span-2 ${campo}`}
            />
            <textarea
              name="mensaje"
              required
              rows={5}
              aria-label={t.formMensaje}
              placeholder={t.formMensaje}
              className={`col-span-2 resize-none ${campo}`}
            />
          </div>

          <button type="submit" className="btn mt-6 w-full bg-ink text-white hover:bg-brand">
            {t.formEnviar}
          </button>

          {enviado && (
            <p className="mt-4 text-center text-sm leading-relaxed text-pretty text-muted" role="status">
              {t.formEnviado}{" "}
              <a href={`mailto:${contacto.email}`} className="underline underline-offset-2">
                {contacto.email}
              </a>
            </p>
          )}
        </form>
      </Modal>
    </>
  );
}
