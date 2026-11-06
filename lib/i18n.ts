import type { Metadata } from "next";

export type Idioma = "es" | "en";

const rutas = {
  inicio: { es: "/", en: "/en" },
  equipo: { es: "/equipo", en: "/en/team" },
  experiencia: { es: "/experiencia", en: "/en/experience" },
  medios: { es: "/medios", en: "/en/media" },
  contacto: { es: "/contacto", en: "/en/contact" },
} as const;

export type Pagina = keyof typeof rutas;

export const ruta = (idioma: Idioma, pagina: Pagina) => rutas[pagina][idioma];

/** La misma página en el otro idioma (para el botón ES / EN). */
export function rutaEquivalente(pathname: string, idioma: Idioma) {
  const pagina = (Object.keys(rutas) as Pagina[]).find(
    (p) => rutas[p].es === pathname || rutas[p].en === pathname,
  );
  return rutas[pagina ?? "inicio"][idioma];
}

const paginasMenu: Pagina[] = ["inicio", "equipo", "experiencia", "medios", "contacto"];

export const navegacion = (idioma: Idioma) =>
  paginasMenu.map((p) => ({ href: ruta(idioma, p), label: textos[idioma].menu[p] }));

export const textos = {
  es: {
    menu: { inicio: "Inicio", equipo: "Equipo", experiencia: "Experiencia", medios: "Medios", contacto: "Contacto" },
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
      lema: ["Independencia,", "creatividad", "y resultados concretos."],
      sitio: "Compañía",
      oficina: "Oficina",
      siguenos: "Síguenos",
      derechos: "Todos los derechos reservados.",
      ubicacion: "Asesores financieros · Santiago, Chile",
    },
    inicio: {
      eyebrow: "Asesores financieros",
      titulo: "Confianza en un equipo senior con resultados concretos.",
      bajada:
        "Servicios de asesoría en compra y venta de empresas, reestructuración de pasivos de largo plazo, valoraciones y financiamientos especiales y de proyectos. Independencia y creatividad.",
      verExperiencia: "Ver experiencia",
      verRanking: "Ver ranking",
      verMedios: "Ver todos los medios",
      rankingIntro: "KeyCapital aparece en el ranking de Leaders League de banca de inversión en Chile.",
      cerrar: "Cerrar",
      cifraAnios: "Años en banca de inversión",
      cifraTransacciones: "Transacciones asesoradas",
      cifraContinentes: "Continentes con socios de cobertura",
      cifraDesde: "Desde 2010",
      cifraIndependiente: "Equipo independiente",
      clientesEyebrow: "Clientes",
      clientesTitulo: "Empresas que han confiado en nosotros",
      verTransacciones: "Ver todas las transacciones",
      serviciosEyebrow: "Servicios",
      serviciosTitulo: "Asesoría especializada en las decisiones clave de una empresa.",
      serviciosBajada:
        "Servicios especializados a medianas y grandes empresas, incluidos sus accionistas, en sus desafíos de negocio.",
      porQue: "Por qué KeyCapital",
      y: "y",
      experienciaEyebrow: "Experiencia",
      recientes: "Transacciones recientes",
      verLasTransacciones: (n: number) => `Ver las ${n} transacciones`,
      equipoEyebrow: "Equipo",
      equipoTitulo: "Un equipo senior con más de 20 años de trayectoria",
      conocerEquipo: "Conocer al equipo",
      verTransaccionesDe: (nombre: string) => `Ver transacciones de ${nombre}`,
    },
    equipo: {
      eyebrow: "Equipo",
      titulo: "Un equipo senior con resultados concretos.",
      bajada: "Más de 20 años en banca de inversión, finanzas corporativas y M&A.",
    },
    experiencia: {
      eyebrow: "Experiencia",
      titulo: "Experiencia que da confianza.",
      bajada: (n: number) =>
        `${n} transacciones asesoradas en venta y compra de empresas, financiamiento, reestructuración de pasivos y valoración.`,
      relacionadas: "Transacciones relacionadas",
      verToda: "Ver toda la experiencia",
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
      telefono: "Teléfono",
      correo: "Email",
    },
  },
  en: {
    menu: { inicio: "Home", equipo: "Team", experiencia: "Experience", medios: "Media", contacto: "Contact" },
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
      lema: ["Independence,", "creativity", "and proven results."],
      sitio: "Company",
      oficina: "Office",
      siguenos: "Follow us",
      derechos: "All rights reserved.",
      ubicacion: "Financial advisors · Santiago, Chile",
    },
    inicio: {
      eyebrow: "Financial advisors",
      titulo: "Trust in a senior team with proven results.",
      bajada:
        "Advisory services in the sale and purchase of companies, long-term debt restructuring, valuations, and special and project financing. Independence and creativity.",
      verExperiencia: "View experience",
      verRanking: "View ranking",
      verMedios: "View all media",
      rankingIntro: "KeyCapital is listed in the Leaders League investment banking ranking for Chile.",
      cerrar: "Close",
      cifraAnios: "Years in investment banking",
      cifraTransacciones: "Transactions advised",
      cifraContinentes: "Continents with coverage partners",
      cifraDesde: "Since 2010",
      cifraIndependiente: "Independent team",
      clientesEyebrow: "Clients",
      clientesTitulo: "Companies that have trusted us",
      verTransacciones: "View all transactions",
      serviciosEyebrow: "Services",
      serviciosTitulo: "Specialized advice on a company's key decisions.",
      serviciosBajada:
        "Specialized services for medium and large companies, and their shareholders, in their business challenges.",
      porQue: "Why KeyCapital",
      y: "and",
      experienciaEyebrow: "Experience",
      recientes: "Recent transactions",
      verLasTransacciones: (n: number) => `View all ${n} transactions`,
      equipoEyebrow: "Team",
      equipoTitulo: "A senior team with over 20 years of experience",
      conocerEquipo: "Meet the team",
      verTransaccionesDe: (nombre: string) => `View ${nombre} transactions`,
    },
    equipo: {
      eyebrow: "Team",
      titulo: "A senior team with proven results.",
      bajada: "Over 20 years in investment banking, corporate finance and M&A.",
    },
    experiencia: {
      eyebrow: "Experience",
      titulo: "Experience that builds trust.",
      bajada: (n: number) =>
        `${n} transactions advised in the sale and purchase of companies, financing, debt restructuring and valuation.`,
      relacionadas: "Related transactions",
      verToda: "View all experience",
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
      telefono: "Phone",
      correo: "Email",
    },
  },
} as const;

const metadatos: Record<Exclude<Pagina, "inicio">, Record<Idioma, Metadata>> = {
  equipo: {
    es: {
      title: "Equipo",
      description: "Un equipo senior con más de 20 años en banca de inversión, finanzas corporativas y M&A.",
    },
    en: {
      title: "Team",
      description: "A senior team with over 20 years in investment banking, corporate finance and M&A.",
    },
  },
  experiencia: {
    es: {
      title: "Experiencia",
      description:
        "Transacciones de M&A, financiamiento, reestructuración de pasivos y valoración asesoradas por KeyCapital.",
    },
    en: {
      title: "Experience",
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
