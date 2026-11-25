import type { Idioma } from "@/lib/i18n";

/** Política de Privacidad (Ley 21.719). Una sección = título + párrafos y, opcional, una lista. */
type Seccion = { titulo: string; parrafos: string[]; lista?: string[] };

export const privacidad: Record<
  Idioma,
  { eyebrow: string; titulo: string; bajada: string; actualizada: string; secciones: Seccion[] }
> = {
  es: {
    eyebrow: "Legal",
    titulo: "Política de Privacidad",
    bajada:
      "Cómo tratamos los datos personales que nos entregas a través de este sitio, conforme a la Ley 19.628 y a la Ley 21.719 de protección de datos personales.",
    actualizada: "Última actualización: 25 de noviembre de 2026",
    secciones: [
      {
        titulo: "1. Quién es responsable de tus datos",
        parrafos: [
          "El responsable del tratamiento es KeyCapital, con domicilio en Don Carlos 2939, Oficina 805, Las Condes, Santiago, Chile. Para cualquier consulta sobre tus datos puedes escribirnos a secretaria@keycapitalchile.cl o llamarnos al +56 2 3264 5076.",
        ],
      },
      {
        titulo: "2. Qué datos recogemos",
        parrafos: ["Solo los datos que tú decides entregarnos cuando nos escribes:"],
        lista: [
          "Nombre y apellido.",
          "Correo electrónico.",
          "Teléfono, si lo indicas.",
          "El contenido de tu mensaje.",
        ],
      },
      {
        titulo: "3. Para qué los usamos",
        parrafos: [
          "Usamos tus datos únicamente para responder a tu consulta y, si corresponde, para conversar contigo sobre una posible asesoría. No los usamos para enviarte publicidad ni los vendemos o cedemos a terceros.",
          "La base que nos permite tratarlos es tu consentimiento, que entregas al marcar la casilla del formulario antes de enviarlo. Puedes retirarlo cuando quieras escribiéndonos, sin efecto retroactivo.",
        ],
      },
      {
        titulo: "4. Cómo llega tu mensaje",
        parrafos: [
          "El formulario no guarda tus datos en este sitio: al enviarlo se abre tu propio programa de correo con el mensaje listo, y nos llega como un correo normal a secretaria@keycapitalchile.cl. Desde ahí lo tratamos con la misma confidencialidad con que trabajamos cada transacción.",
        ],
      },
      {
        titulo: "5. Cuánto tiempo los guardamos",
        parrafos: [
          "Conservamos tu mensaje mientras dure la conversación o la relación profesional que surja de ella, y después solo el tiempo que exijan las obligaciones legales. Luego lo eliminamos.",
        ],
      },
      {
        titulo: "6. Cookies",
        parrafos: [
          "Este sitio no usa cookies de seguimiento, publicidad ni analítica, y no instala ninguna cookie en tu navegador. Por eso no te pedimos aceptarlas.",
          "El sitio está alojado en Vercel, que por razones de seguridad y funcionamiento puede registrar datos técnicos de la visita, como la dirección IP y el tipo de navegador.",
        ],
      },
      {
        titulo: "7. Tus derechos",
        parrafos: ["Puedes ejercer en cualquier momento, y sin costo, tus derechos de:"],
        lista: [
          "Acceso: saber qué datos tuyos tenemos.",
          "Rectificación: corregir datos inexactos o incompletos.",
          "Supresión: pedir que los eliminemos.",
          "Oposición: oponerte a un tratamiento determinado.",
          "Portabilidad: recibir tus datos en un formato de uso común.",
          "Bloqueo: pedir que suspendamos temporalmente su tratamiento.",
        ],
      },
      {
        titulo: "8. Cómo ejercerlos",
        parrafos: [
          "Escríbenos a secretaria@keycapitalchile.cl indicando tu nombre y qué derecho quieres ejercer. Te responderemos dentro de los plazos que fija la ley. Si no quedas conforme con nuestra respuesta, puedes reclamar ante la Agencia de Protección de Datos Personales.",
        ],
      },
      {
        titulo: "9. Seguridad",
        parrafos: [
          "Tomamos medidas técnicas y organizativas razonables para proteger tus datos frente a pérdida, acceso no autorizado o uso indebido. El sitio funciona siempre con conexión cifrada (HTTPS).",
        ],
      },
      {
        titulo: "10. Cambios a esta política",
        parrafos: [
          "Podemos actualizar esta política para reflejar cambios legales o en nuestra forma de trabajar. Publicaremos siempre la versión vigente en esta página, con su fecha de actualización.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    titulo: "Privacy Policy",
    bajada:
      "How we handle the personal data you share with us through this website, in accordance with Chilean Laws 19,628 and 21,719 on personal data protection.",
    actualizada: "Last updated: November 25, 2026",
    secciones: [
      {
        titulo: "1. Who is responsible for your data",
        parrafos: [
          "The data controller is KeyCapital, located at Don Carlos 2939, Office 805, Las Condes, Santiago, Chile. For any question about your data, write to secretaria@keycapitalchile.cl or call +56 2 3264 5076.",
        ],
      },
      {
        titulo: "2. What data we collect",
        parrafos: ["Only the data you choose to give us when you write to us:"],
        lista: ["First and last name.", "Email address.", "Phone number, if you provide it.", "The content of your message."],
      },
      {
        titulo: "3. What we use it for",
        parrafos: [
          "We use your data only to reply to your inquiry and, where relevant, to discuss a possible engagement with you. We do not use it for marketing, and we do not sell or share it with third parties.",
          "Our legal basis is your consent, which you give by ticking the box on the form before sending it. You may withdraw it at any time by writing to us; withdrawal does not affect prior processing.",
        ],
      },
      {
        titulo: "4. How your message reaches us",
        parrafos: [
          "The form does not store your data on this website: when you send it, your own email program opens with the message ready, and it reaches us as a regular email at secretaria@keycapitalchile.cl. From then on we treat it with the same confidentiality we apply to every transaction.",
        ],
      },
      {
        titulo: "5. How long we keep it",
        parrafos: [
          "We keep your message for as long as the conversation or any resulting professional relationship lasts, and afterwards only as long as legal obligations require. We then delete it.",
        ],
      },
      {
        titulo: "6. Cookies",
        parrafos: [
          "This website does not use tracking, advertising or analytics cookies, and does not place any cookies in your browser. That is why we do not ask you to accept them.",
          "The website is hosted on Vercel, which may log technical data about your visit, such as your IP address and browser type, for security and operational purposes.",
        ],
      },
      {
        titulo: "7. Your rights",
        parrafos: ["You may exercise the following rights at any time, free of charge:"],
        lista: [
          "Access: know what data we hold about you.",
          "Rectification: correct inaccurate or incomplete data.",
          "Erasure: ask us to delete it.",
          "Objection: object to a specific use of your data.",
          "Portability: receive your data in a commonly used format.",
          "Blocking: ask us to temporarily suspend its processing.",
        ],
      },
      {
        titulo: "8. How to exercise them",
        parrafos: [
          "Write to secretaria@keycapitalchile.cl with your name and the right you wish to exercise. We will reply within the time limits set by law. If you are not satisfied with our reply, you may file a complaint with the Chilean Personal Data Protection Agency (Agencia de Protección de Datos Personales).",
        ],
      },
      {
        titulo: "9. Security",
        parrafos: [
          "We take reasonable technical and organizational measures to protect your data against loss, unauthorized access or misuse. The website always runs over an encrypted connection (HTTPS).",
        ],
      },
      {
        titulo: "10. Changes to this policy",
        parrafos: [
          "We may update this policy to reflect legal changes or changes in the way we work. The current version, with its update date, will always be published on this page.",
        ],
      },
    ],
  },
};
