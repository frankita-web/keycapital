import {
  categorias,
  equipo,
  medios,
  pilares,
  ranking,
  servicios,
  transacciones,
  valores,
  type Categoria,
  type Transaccion,
} from "@/lib/data";
import type { Idioma } from "@/lib/i18n";

const ingles = {
  servicios: [
    {
      titulo: "Sale and purchase of companies",
      descripcion:
        "We guide shareholders through M&A processes from start to finish: valuation, search for counterparties, negotiation and closing.",
    },
    {
      titulo: "Long-term debt restructuring",
      descripcion:
        "We redesign long-term debt structures to provide financial headroom and sustain business growth.",
    },
    {
      titulo: "Valuations",
      descripcion:
        "Independent, objective opinions of value for transactions, arbitrations, partnerships and strategic decisions.",
    },
    {
      titulo: "Special and project financing",
      descripcion:
        "We structure syndicated, long-term and working capital loans with local and international banks.",
    },
  ],
  pilares: [
    {
      titulo: "Specialized advisory services",
      descripcion:
        "Tailored services for medium and large companies, and their shareholders, in their main business challenges.",
    },
    {
      titulo: "Over 20 years of experience",
      descripcion:
        "A track record in investment banking, corporate finance and M&A at Banedwards, Banchile Asesoría Financiera and Banchile Citibank, and since 2010 as an independent senior team.",
    },
    {
      titulo: "International coverage",
      descripcion:
        "Working agreements with investment banks in Latin America, Asia, Europe and the United States.",
    },
  ],
  valores: ["Creativity", "Objectivity", "Analysis", "Professionalism"],
  // Cargos y formación según el sitio en inglés de KeyCapital.
  equipo: [
    {
      cargo: "Executive Director",
      formacion: "B.A. in Business, MBA",
      bio: "Over 35 years in the Chilean financial system, more than two decades of them in investment banking and corporate finance. General Manager of Banchile Citibank Global Markets until 2010; founded KeyCapital, an M&A and corporate finance boutique, in March of that year.",
    },
    {
      cargo: "Commercial Director",
      formacion: "B.A. in Business",
      bio: "Five years of experience in commercial banking and over 20 in investment banking. Joined Banedwards in 1992 and served as General Manager of Banchile Asesoría Financiera from 2001 to 2008.",
    },
    {
      cargo: "Director of Studies",
      formacion: "B.A. in Business, Accountant Auditor, MBA",
      bio: "Over 19 years of experience in corporate finance. University professor of finance and accounting for nearly 10 years.",
    },
  ],
  categorias: {
    venta: "M&A (sell side)",
    compra: "M&A (buy side)",
    financiamiento: "Financing and debt restructuring",
    valoracion: "Valuations",
  } satisfies Record<Categoria, string>,
  ranking: {
    categoria: "Highly recommended",
    detalle: "Investment banking · Mergers & acquisitions · Local firms · Chile",
    url: "https://www.leadersleague.com/en/rankings/fusiones-y-adquisiciones-firmas-locales-banco-de-inversion-chile-2027",
  },
  fuentes: { Prensa: "Press", "Hecho esencial": "Material fact" } as Record<string, string>,
  fechas: { "Dic 2025": "Dec 2025", "Dic 2016": "Dec 2016" } as Record<string, string>,
};

/** "Ch$ 3.600 millones" → "Ch$ 3,600 million" */
const montoEnIngles = (monto: string) =>
  monto.replace(/[.,]/g, (signo) => (signo === "." ? "," : ".")).replace("millones", "million");

/** Todo el contenido del sitio en el idioma pedido. */
export function contenido(idioma: Idioma) {
  if (idioma === "es") {
    return {
      servicios,
      pilares,
      valores,
      equipo,
      categorias,
      ranking,
      transacciones,
      medios: medios.map((m) => ({ titulo: m.titulo as string, fuente: m.fuente as string, fecha: m.fecha as string, imagen: m.imagen as string })),
    };
  }
  return {
    servicios: ingles.servicios,
    pilares: ingles.pilares,
    valores: ingles.valores,
    equipo: equipo.map((p, i) => ({ ...p, ...ingles.equipo[i] })),
    categorias: categorias.map((c) => ({ id: c.id, label: ingles.categorias[c.id] })),
    ranking: { ...ranking, ...ingles.ranking },
    transacciones: transacciones.map(
      (t): Transaccion => ({
        ...t,
        cliente: t.clienteEn ?? t.cliente,
        detalle: t.detalleEn,
        monto: t.monto && montoEnIngles(t.monto),
      }),
    ),
    medios: medios.map((m) => ({
      titulo: m.tituloEn as string,
      fuente: (ingles.fuentes[m.fuente] ?? m.fuente) as string,
      fecha: (ingles.fechas[m.fecha] ?? m.fecha) as string,
      imagen: m.imagen as string,
    })),
  };
}
