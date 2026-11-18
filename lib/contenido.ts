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
      titulo: "Economic valuations",
      descripcion: "Independent, objective valuations for transactions, partnerships and strategic decisions.",
    },
    {
      titulo: "Fairness opinions for shareholders and arbitrations",
      descripcion:
        "Independent opinions of value supporting shareholders and the parties in arbitration proceedings.",
    },
    {
      titulo: "Special, syndicated and project financing",
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
      titulo: "Over 30 years of experience",
      descripcion:
        "In investment banking, with a successful track record in corporate finance and M&A at Banedwards, Banchile Asesoría Financiera, Banchile Citibank and now, independently, at KeyCapital. A senior team in these areas and in market analysis, with excellent results for our clients.",
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
      bio: "Five years of experience in commercial banking at Banco de Chile, Chemical Bank and Banco Edwards. Over 30 years in investment banking, at Banedwards from 1992 and later at Banchile Asesoría Financiera. General Manager of Banchile Asesoría Financiera S.A., the investment bank of Banco de Chile, from 2001 to 2008. Involved in major M&A and corporate finance transactions.",
    },
    {
      cargo: "Director of Studies",
      formacion: "B.A. in Business, Accountant Auditor and MBA, Pontificia Universidad Católica de Chile",
      bio: "Professional and academic experience in corporate finance since 1992. Before joining KeyCapital in 2010, Senior Associate at Banchile-Citi Asesorías Financieras (2004-2009), Manager and Financial Advisor at Costanera S.A.C.I. (1999-2003), Financial Advisor to the General Management of Flores y Kersting (1998) and Research Engineer at Chilgener (1992-1997). Between 1994 and 2004 also taught Finance and Accounting at Universidad Tecnológica Metropolitana, Universidad del Pacífico, Pontificia Universidad Católica de Chile, Universidad Gabriela Mistral and Universidad Diego Portales.",
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
