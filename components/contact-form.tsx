"use client";

import { useState, type FormEvent } from "react";
import { contenido } from "@/lib/contenido";
import { contacto } from "@/lib/data";
import { textos, type Idioma } from "@/lib/i18n";

const campo =
  "w-full border border-line bg-white px-4 py-3.5 text-base outline-none transition placeholder:text-muted/70 focus:border-ink";

export function ContactForm({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].formulario;
  const { servicios } = contenido(idioma);
  const [enviado, setEnviado] = useState(false);

  // Por ahora abre el cliente de correo con el mensaje prellenado.
  // Se puede conectar a un servicio de email (p. ej. Resend) más adelante.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const interes = String(data.get("interes") ?? "");
    const cuerpo = [
      `${t.nombre}: ${nombre}`,
      `${t.empresa}: ${empresa}`,
      `${t.email}: ${data.get("email")}`,
      `${t.telefono}: ${data.get("telefono")}`,
      `${t.interes}: ${interes}`,
      "",
      String(data.get("mensaje") ?? ""),
    ].join("\n");
    const asunto = `${t.asunto}: ${nombre}${empresa ? ` (${empresa})` : ""}`;
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <h2 className="font-display text-3xl text-balance">{t.titulo}</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">{t.nombre} *</span>
          <input name="nombre" required autoComplete="name" className={campo} placeholder={t.nombreEjemplo} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">{t.empresa}</span>
          <input name="empresa" autoComplete="organization" className={campo} placeholder={t.empresaEjemplo} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">{t.email} *</span>
          <input name="email" type="email" required autoComplete="email" className={campo} placeholder={t.emailEjemplo} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">{t.telefono}</span>
          <input name="telefono" type="tel" autoComplete="tel" className={campo} placeholder="+56 9 ..." />
        </label>
      </div>
      <fieldset>
        <legend className="mb-3 text-sm font-medium">{t.pregunta}</legend>
        <div className="flex flex-wrap gap-2">
          {servicios.map((s) => (
            <label key={s.titulo} className="cursor-pointer">
              <input type="radio" name="interes" value={s.titulo} className="peer sr-only" />
              <span className="block rounded-full border border-line px-4 py-2 text-sm transition peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand hover:border-ink/40">
                {s.titulo}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">{t.mensaje} *</span>
        <textarea name="mensaje" required rows={5} className={campo} placeholder={t.mensajeEjemplo} />
      </label>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">{t.confidencial}</p>
        <button
          type="submit"
          className="btn bg-ink text-white hover:bg-brand"
        >
          {t.enviar}
        </button>
      </div>
      {enviado && (
        <p className="border border-line bg-paper px-5 py-4 text-sm text-ink" role="status">
          {t.enviado}{" "}
          <a href={`mailto:${contacto.email}`} className="underline">
            {contacto.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
