"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { Modal } from "@/components/modal";
import { contacto } from "@/lib/data";
import { textos, type Idioma } from "@/lib/i18n";

const campo =
  "w-full bg-white px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-ink/60 focus:bg-paper";

/** Formulario en pop up: se abre al llegar a Contacto y se reabre con el botón de la tarjeta. */
export function ContactoPopup({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].contacto;
  const [abierto, setAbierto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const cerrarPopup = useCallback(() => setAbierto(false), []);

  useEffect(() => {
    const espera = setTimeout(() => setAbierto(true), 350);
    return () => clearTimeout(espera);
  }, []);

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
      <button type="button" onClick={() => setAbierto(true)} className="btn mt-10 bg-ink text-white hover:bg-brand">
        {t.formTitulo}
      </button>

      <Modal abierto={abierto} onCerrar={cerrarPopup} tituloId="popup-contacto-titulo" cerrar={t.formCerrar}>
        <form onSubmit={onSubmit} className="px-6 py-10 sm:px-10">
          <p className="label text-center text-brand">KeyCapital</p>
          <h2 id="popup-contacto-titulo" className="mt-4 text-center font-display text-4xl leading-tight text-balance">
            {t.formTitulo}
          </h2>

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
