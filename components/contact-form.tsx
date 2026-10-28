"use client";

import { useState, type FormEvent } from "react";
import { contacto, servicios } from "@/lib/data";

const campo =
  "w-full border border-line bg-white px-4 py-3.5 text-base outline-none transition placeholder:text-muted/70 focus:border-ink";

export function ContactForm() {
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
      `Nombre: ${nombre}`,
      `Empresa: ${empresa}`,
      `Email: ${data.get("email")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Interés: ${interes}`,
      "",
      String(data.get("mensaje") ?? ""),
    ].join("\n");
    const asunto = `Contacto web: ${nombre}${empresa ? ` (${empresa})` : ""}`;
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <h2 className="font-display text-3xl text-balance">Escríbenos</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Nombre *</span>
          <input name="nombre" required autoComplete="name" className={campo} placeholder="Nombre y apellido" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Empresa</span>
          <input name="empresa" autoComplete="organization" className={campo} placeholder="Razón social" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Email *</span>
          <input name="email" type="email" required autoComplete="email" className={campo} placeholder="nombre@empresa.cl" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Teléfono</span>
          <input name="telefono" type="tel" autoComplete="tel" className={campo} placeholder="+56 9 ..." />
        </label>
      </div>
      <fieldset>
        <legend className="mb-3 text-sm font-medium">¿En qué podemos ayudarte?</legend>
        <div className="flex flex-wrap gap-2">
          {servicios.map((s) => (
            <label key={s.titulo} className="cursor-pointer">
              <input type="radio" name="interes" value={s.titulo} className="peer sr-only" />
              <span className="block border border-line px-4 py-2 text-sm transition peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand hover:border-ink/40">
                {s.titulo}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Mensaje *</span>
        <textarea name="mensaje" required rows={5} className={campo} placeholder="Cuéntanos brevemente tu situación" />
      </label>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Tu información se trata con total confidencialidad.</p>
        <button
          type="submit"
          className="btn bg-ink text-white hover:bg-brand"
        >
          Enviar mensaje
        </button>
      </div>
      {enviado && (
        <p className="border border-line bg-paper px-5 py-4 text-sm text-ink" role="status">
          Abrimos tu aplicación de correo con el mensaje listo. Si no se abrió, escríbenos a{" "}
          <a href={`mailto:${contacto.email}`} className="underline">
            {contacto.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
