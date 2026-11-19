import type { Metadata } from "next";
import type { ServicioId } from "@/lib/data";

export type Idioma = "es" | "en";

const rutas = {
  inicio: { es: "/", en: "/en" },
  // "equipo" es la página Quiénes somos: la firma, cómo trabajamos y los socios.
  equipo: { es: "/quienes-somos", en: "/en/about" },
  experiencia: { es: "/experiencia", en: "/en/experience" },
  medios: { es: "/medios", en: "/en/media" },
  contacto: { es: "/contacto", en: "/en/contact" },
} as const;

export type Pagina = keyof typeof rutas;

export const ruta = (idioma: Idioma, pagina: Pagina) => rutas[pagina][idioma];

/** Página de cada servicio: /que-hacemos/<slug> y /en/what-we-do/<slug>. */
const baseServicios = { es: "/que-hacemos", en: "/en/what-we-do" } as const;
const slugsServicio: Record<ServicioId, Record<Idioma, string>> = {
  venta: { es: "venta-de-empresas", en: "sell-side" },
  adquisiciones: { es: "adquisiciones", en: "buy-side" },
  financiamiento: { es: "financiamiento-y-reestructuracion", en: "debt-advisory" },
  valoraciones: { es: "valoraciones", en: "valuations" },
};
export const servicioIds = Object.keys(slugsServicio) as ServicioId[];
export const slugServicio = (idioma: Idioma, id: ServicioId) => slugsServicio[id][idioma];
export const rutaServicio = (idioma: Idioma, id: ServicioId) => `${baseServicios[idioma]}/${slugServicio(idioma, id)}`;
export const servicioPorSlug = (idioma: Idioma, slug: string) =>
  servicioIds.find((id) => slugsServicio[id][idioma] === slug);
export const esRutaServicio = (pathname: string, idioma: Idioma) => pathname.startsWith(`${baseServicios[idioma]}/`);

/** La misma página en el otro idioma (para el botón ES / EN). */
export function rutaEquivalente(pathname: string, idioma: Idioma) {
  const servicio = servicioIds.find((id) => (["es", "en"] as const).some((i) => rutaServicio(i, id) === pathname));
  if (servicio) return rutaServicio(idioma, servicio);
  const pagina = (Object.keys(rutas) as Pagina[]).find(
    (p) => rutas[p].es === pathname || rutas[p].en === pathname,
  );
  return rutas[pagina ?? "inicio"][idioma];
}

/** Sección de servicios dentro de Inicio. */
export const rutaQueHacemos = (idioma: Idioma) => `${ruta(idioma, "inicio")}#que-hacemos`;

const paginasMenu: Pagina[] = ["experiencia", "equipo", "medios", "contacto"];

export const navegacion = (idioma: Idioma) => [
  { href: ruta(idioma, "inicio"), label: textos[idioma].menu.inicio },
  { href: rutaQueHacemos(idioma), label: textos[idioma].inicio.serviciosEyebrow },
  ...paginasMenu.map((p) => ({ href: ruta(idioma, p), label: textos[idioma].menu[p] })),
];

export const textos = {
  es: {
    menu: { inicio: "Inicio", equipo: "Quiénes somos", experiencia: "Transacciones", medios: "Medios", contacto: "Contacto" },
    general: {
      tituloSitio: "KeyCapital | Asesores financieros · M&A y finanzas corporativas",
      descripcionSitio:
        "Boutique independiente de banca de inversión en Chile. Compra y venta de empresas, reestructuración de pasivos, valoraciones y financiamientos especiales.",
      inicioAria: "KeyCapital, inicio",
      menuPrincipal: "Principal",
      menuMovil: "Móvil",
      abrirMenu: "Abrir menú",
      cerrarMenu: "Cerrar menú",
      contactanos: "Contáctanos",
    },
    footer: {
      lema: ["Cercanía,", "independencia", "y confidencialidad."],
      sitio: "Compañía",
      oficina: "Oficina",
      siguenos: "Síguenos",
      derechos: "Todos los derechos reservados.",
      ubicacion: "Asesores financieros · Santiago, Chile",
    },
    inicio: {
      eyebrow: "Corporate Finance · M&A",
      titulo: "Asesoría independiente en M&A y financiamiento para empresas y accionistas.",
      bajada:
        "Desde 2010 acompañamos a familias empresarias, accionistas y directorios en sus decisiones financieras más importantes: vender, comprar, financiar y reestructurar.",
      verExperiencia: "Ver transacciones",
      conversemos: "Conversemos de su transacción",
      verRanking: "Ver ranking",
      verMedios: "Ver todos los medios",
      rankingIntro: "KeyCapital aparece en el ranking de Leaders League de banca de inversión en Chile.",
      cerrar: "Cerrar",
      cifraAnios: "Años en banca de inversión",
      cifraTransacciones: "Transacciones asesoradas",
      cifraContinentes: "Continentes con socios de cobertura",
      cifraDesde: "Desde 2010",
      cifraIndependiente: "Equipo independiente",
      clientesTitulo: "Empresas que han confiado en nosotros",
      verTransacciones: "Ver todas las transacciones",
      serviciosEyebrow: "Qué hacemos",
      // Frase provisoria: la confirma Franca con su papá.
      serviciosTitulo: "Vender. Comprar. Financiar. Valorar.",
      serviciosBajada:
        "Acompañamos a accionistas y empresas medianas y grandes en las decisiones financieras que más pesan, de la primera conversación al cierre.",
      verServicio: "Ver más",
      manifiestoEyebrow: "Quiénes somos",
      // Borrador del manifiesto: lo confirma Franca con su papá.
      manifiestoTitulo: "Acompañamos las decisiones que una empresa toma una sola vez.",
      manifiestoComo:
        "Somos una firma independiente, liderada por socios que dirigieron la banca de inversión de Banchile. Cada mandato lo llevan ellos, de la primera reunión al cierre, con total confidencialidad.",
      manifiestoLogros: (n: number) =>
        `Desde 2010 hemos asesorado ${n} transacciones: ventas de empresas familiares de 80 y 100 años, fusiones y financiamientos, con compradores de Chile, Francia, Suiza y Canadá. Leaders League nos distingue como firma muy recomendada en banca de inversión en Chile.`,
      manifiestoEnlace: "Conozca la firma",
      cierreEyebrow: "Contacto",
      cierreTitulo: "Toda conversación comienza en confidencialidad.",
      cierreTexto: "Cuéntenos brevemente su situación. Un socio le responderá personalmente.",
      redEyebrow: "Red internacional",
      redTitulo: "Desde Santiago, con compradores e inversionistas en todo el mundo.",
      redTexto:
        "Mediante alianzas con bancos de inversión en Perú, Colombia, Argentina, Brasil, México, Centroamérica, Estados Unidos, Europa y Asia, llevamos cada proceso a los compradores e inversionistas correctos, estén donde estén.",
      redAliados: "Bancos aliados:",
      redAliadosLista: "Perú, Colombia, Argentina, Brasil, México, Centroamérica, Estados Unidos, Europa y Asia.",
      redCompradores: "Compradores en operaciones cerradas:",
      redCompradoresLista: "Francia, Suiza y Canadá.",
      y: "y",
      experienciaEyebrow: "Transacciones",
      recientes: "Transacciones recientes",
      verLasTransacciones: (n: number) => `Ver las ${n} transacciones`,
      verTransaccionesDe: (nombre: string) => `Ver transacciones de ${nombre}`,
    },
    equipo: {
      eyebrow: "Quiénes somos",
      titulo: "Experiencia de banca de inversión, con la independencia de una boutique.",
      bajada:
        "KeyCapital nació en 2010 y es liderada por ejecutivos que dirigieron Banchile Asesoría Financiera y Banchile Citibank Global Markets. Combinamos la disciplina y el rigor técnico de la gran banca con algo que ella rara vez ofrece: la atención directa y permanente de los socios en cada etapa de la transacción.",
      comoTrabajamos: "Cómo trabajamos",
      socios: "Socios",
      sociosTitulo: "Un equipo senior con más de 30 años de trayectoria.",
      reconocimientos: "Reconocimientos",
      verRanking: "Ver ranking",
    },
    servicio: {
      eyebrow: "Qué hacemos",
      alcance: "Alcance",
      transacciones: "Transacciones",
      transaccionesTitulo: "Operaciones asesoradas",
      verTodas: (n: number) => `Ver las ${n} transacciones de este tipo`,
      otros: "Otros servicios",
    },
    experiencia: {
      eyebrow: "Transacciones",
      titulo: "Transacciones que dan confianza.",
      bajada: (n: number) =>
        `${n} transacciones asesoradas en venta y compra de empresas, financiamiento, reestructuración de pasivos y valoración.`,
      relacionadas: "Transacciones relacionadas",
      verToda: "Ver todas las transacciones",
      tipos: "Tipos de transacción",
    },
    medios: {
      eyebrow: "Medios",
      titulo: "KeyCapital en los medios.",
      bajada: "Transacciones, entrevistas y reconocimientos publicados en Diario Financiero, Emol y Leaders League.",
      cerrar: "Cerrar ✕",
      anterior: "← Anterior",
      siguiente: "Siguiente →",
    },
    contacto: {
      eyebrow: "Contacto",
      titulo: "Conversemos.",
      bajada: "Cuéntanos brevemente tu situación. Un socio te responderá personalmente y con total confidencialidad.",
      oficina: "Oficina",
      direccion: "Don Carlos 2939, Oficina 805",
      pregunta: "¿Tienes preguntas?",
      respuesta: "Nos encantaría conversar.",
      formTitulo: "Escríbenos",
      formEncabezado: "Toda conversación comienza en confidencialidad.",
      formRespuesta: "Un socio le responderá en menos de 48 horas hábiles.",
      formNombre: "Nombre",
      formApellido: "Apellido(s)",
      formCorreo: "Correo electrónico",
      formMensaje: "Mensaje",
      formEnviar: "Enviar",
      formCerrar: "Cerrar",
      formAsunto: "Contacto web",
      formEnviado: "Abrimos tu correo con el mensaje listo. Si no se abrió, escríbenos a",
      telefono: "Teléfono",
      correo: "Email",
    },
  },
  en: {
    menu: { inicio: "Home", equipo: "About us", experiencia: "Transactions", medios: "Media", contacto: "Contact" },
    general: {
      tituloSitio: "KeyCapital | Financial advisors · M&A and corporate finance",
      descripcionSitio:
        "Independent investment banking boutique in Chile. Company sales and acquisitions, debt restructuring, valuations and special financing.",
      inicioAria: "KeyCapital, home",
      menuPrincipal: "Main",
      menuMovil: "Mobile",
      abrirMenu: "Open menu",
      cerrarMenu: "Close menu",
      contactanos: "Contact us",
    },
    footer: {
      lema: ["Partner attention,", "independence", "and confidentiality."],
      sitio: "Company",
      oficina: "Office",
      siguenos: "Follow us",
      derechos: "All rights reserved.",
      ubicacion: "Financial advisors · Santiago, Chile",
    },
    inicio: {
      eyebrow: "Corporate Finance · M&A",
      titulo: "Independent M&A and financing advice for companies and shareholders.",
      bajada:
        "Since 2010, we have advised business families, shareholders and boards on their most consequential financial decisions: selling, acquiring, financing and restructuring.",
      verExperiencia: "View transactions",
      conversemos: "Discuss your transaction",
      verRanking: "View ranking",
      verMedios: "View all media",
      rankingIntro: "KeyCapital is listed in the Leaders League investment banking ranking for Chile.",
      cerrar: "Close",
      cifraAnios: "Years in investment banking",
      cifraTransacciones: "Transactions advised",
      cifraContinentes: "Continents with coverage partners",
      cifraDesde: "Since 2010",
      cifraIndependiente: "Independent team",
      clientesTitulo: "Companies that have trusted us",
      verTransacciones: "View all transactions",
      serviciosEyebrow: "What we do",
      serviciosTitulo: "Sell. Buy. Finance. Value.",
      serviciosBajada:
        "We advise shareholders and mid-to-large companies on their most consequential financial decisions, from the first conversation to closing.",
      verServicio: "Learn more",
      manifiestoEyebrow: "About us",
      manifiestoTitulo: "We advise on the decisions a company makes only once.",
      manifiestoComo:
        "We are an independent firm, led by partners who ran Banchile's investment banking business. Every mandate is handled by them, from the first meeting to closing, in full confidence.",
      manifiestoLogros: (n: number) =>
        `Since 2010 we have advised on ${n} transactions: sales of 80- and 100-year-old family businesses, mergers and financings, with buyers from Chile, France, Switzerland and Canada. Leaders League ranks us as a highly recommended investment bank in Chile.`,
      manifiestoEnlace: "About the firm",
      cierreEyebrow: "Contact",
      cierreTitulo: "Every conversation starts in confidence.",
      cierreTexto: "Tell us briefly about your situation. A partner will reply to you personally.",
      redEyebrow: "International network",
      redTitulo: "From Santiago, to buyers and investors worldwide.",
      redTexto:
        "Through alliances with investment banks in Peru, Colombia, Argentina, Brazil, Mexico, Central America, the United States, Europe and Asia, we take each process to the right buyers and investors, wherever they are.",
      redAliados: "Partner investment banks:",
      redAliadosLista: "Peru, Colombia, Argentina, Brazil, Mexico, Central America, the United States, Europe and Asia.",
      redCompradores: "Buyers in closed deals:",
      redCompradoresLista: "France, Switzerland and Canada.",
      y: "and",
      experienciaEyebrow: "Transactions",
      recientes: "Recent transactions",
      verLasTransacciones: (n: number) => `View all ${n} transactions`,
      verTransaccionesDe: (nombre: string) => `View ${nombre} transactions`,
    },
    equipo: {
      eyebrow: "About us",
      titulo: "Investment banking experience, with the independence of a boutique.",
      bajada:
        "Founded in 2010, KeyCapital is led by executives who ran Banchile Asesoría Financiera and Banchile Citibank Global Markets. We combine the discipline and technical rigour of a large investment bank with something it rarely offers: the direct, continuous involvement of senior partners at every stage of a transaction.",
      comoTrabajamos: "How we work",
      socios: "Partners",
      sociosTitulo: "A senior team with over 30 years of experience.",
      reconocimientos: "Recognition",
      verRanking: "View ranking",
    },
    servicio: {
      eyebrow: "What we do",
      alcance: "Scope",
      transacciones: "Transactions",
      transaccionesTitulo: "Transactions advised",
      verTodas: (n: number) => `View all ${n} transactions of this type`,
      otros: "Other services",
    },
    experiencia: {
      eyebrow: "Transactions",
      titulo: "Transactions that build trust.",
      bajada: (n: number) =>
        `${n} transactions advised in the sale and purchase of companies, financing, debt restructuring and valuation.`,
      relacionadas: "Related transactions",
      verToda: "View all transactions",
      tipos: "Transaction types",
    },
    medios: {
      eyebrow: "Media",
      titulo: "KeyCapital in the media.",
      bajada: "Transactions, interviews and recognitions published in Diario Financiero, Emol and Leaders League.",
      cerrar: "Close ✕",
      anterior: "← Previous",
      siguiente: "Next →",
    },
    contacto: {
      eyebrow: "Contact",
      titulo: "Let's talk.",
      bajada: "Tell us briefly about your situation. A partner will reply to you personally and in full confidence.",
      oficina: "Office",
      direccion: "Don Carlos 2939, Office 805",
      pregunta: "Have questions?",
      respuesta: "We would be happy to talk.",
      formTitulo: "Write to us",
      formEncabezado: "Every conversation starts in confidence.",
      formRespuesta: "A partner will reply within two business days.",
      formNombre: "First name",
      formApellido: "Last name",
      formCorreo: "Email address",
      formMensaje: "Message",
      formEnviar: "Send",
      formCerrar: "Close",
      formAsunto: "Website contact",
      formEnviado: "We opened your email with the message ready. If it didn't open, write to us at",
      telefono: "Phone",
      correo: "Email",
    },
  },
} as const;

const metadatos: Record<Exclude<Pagina, "inicio">, Record<Idioma, Metadata>> = {
  equipo: {
    es: {
      title: "Quiénes somos",
      description:
        "Firma independiente de M&A y financiamiento, liderada por socios con más de 30 años en banca de inversión.",
    },
    en: {
      title: "About us",
      description: "Independent M&A and financing firm, led by partners with over 30 years in investment banking.",
    },
  },
  experiencia: {
    es: {
      title: "Transacciones",
      description:
        "Transacciones de M&A, financiamiento, reestructuración de pasivos y valoración asesoradas por KeyCapital.",
    },
    en: {
      title: "Transactions",
      description: "M&A, financing, debt restructuring and valuation transactions advised by KeyCapital.",
    },
  },
  medios: {
    es: { title: "Medios", description: "KeyCapital en la prensa: transacciones, entrevistas y rankings." },
    en: { title: "Media", description: "KeyCapital in the press: transactions, interviews and rankings." },
  },
  contacto: {
    es: { title: "Contacto", description: "Conversemos sobre la venta, compra o financiamiento de tu empresa." },
    en: { title: "Contact", description: "Let's talk about the sale, purchase or financing of your company." },
  },
};

export const metaPagina = (idioma: Idioma, pagina: Exclude<Pagina, "inicio">) => metadatos[pagina][idioma];

export const metaSitio = (idioma: Idioma): Metadata => ({
  metadataBase: new URL("https://www.keycapitalchile.cl"),
  title: {
    default: textos[idioma].general.tituloSitio,
    template: "%s | KeyCapital",
  },
  description: textos[idioma].general.descripcionSitio,
  openGraph: {
    type: "website",
    locale: idioma === "es" ? "es_CL" : "en_US",
    siteName: "KeyCapital",
  },
});
