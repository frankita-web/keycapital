import {
  categorias,
  equipo,
  medios,
  pilares,
  ranking,
  servicios,
  transacciones,
  type Categoria,
  type Pilar,
  type Servicio,
  type Transaccion,
} from "@/lib/data";
import type { Idioma } from "@/lib/i18n";

const ingles = {
  servicios: [
    {
      id: "venta",
      titulo: "Sell-side M&A",
      resumen: "Competitive sale processes, from preparing the company to negotiation and closing.",
      parrafos: [
        "We design and run competitive sale processes for shareholders and business families — from valuation and preparation to negotiation and closing — to maximise value and deal certainty.",
        "Every process is led by the partners. We reach strategic and financial buyers in Chile and abroad through our network of partner investment banks, and protect confidentiality at every stage.",
      ],
      alcance: [
        { titulo: "Valuation", descripcion: "We estimate the company's value and set the objectives of the process with the shareholders." },
        { titulo: "Buyer search", descripcion: "We identify and approach strategic and financial buyers, in Chile and abroad." },
        { titulo: "Negotiation", descripcion: "We lead the negotiation of price, structure and terms, alongside legal counsel." },
        { titulo: "Closing", descripcion: "We guide the buyer's due diligence and signing, through to closing." },
      ],
    },
    {
      id: "adquisiciones",
      titulo: "Buy-side M&A",
      resumen: "We identify, evaluate and negotiate acquisitions aligned with our clients' growth strategy.",
      parrafos: [
        "We identify, evaluate and negotiate acquisition opportunities aligned with our clients' growth strategy, in Chile and abroad.",
        "We support the acquiring company throughout the process, from sourcing and valuing opportunities to negotiation and closing, with the direct involvement of the partners.",
      ],
      alcance: [
        { titulo: "Sourcing", descripcion: "We identify companies and assets that fit the client's strategy." },
        { titulo: "Valuation", descripcion: "We value each opportunity to define how much it makes sense to offer." },
        { titulo: "Negotiation and closing", descripcion: "We negotiate price and terms, and see the transaction through to closing." },
      ],
    },
    {
      id: "financiamiento",
      titulo: "Debt advisory & restructuring",
      resumen: "Syndicated loans, project finance and the restructuring of long-term liabilities.",
      parrafos: [
        "We arrange project finance, club deals and syndicated loans, and restructure long-term liabilities with one or several lenders.",
        "We work with local and international banks to achieve the structure and maturities that provide financial headroom and sustain business growth.",
      ],
      alcance: [
        { titulo: "Syndicated loans and club deals", descripcion: "Financing with several local and international banks." },
        { titulo: "Project finance", descripcion: "Financing structures for investment projects." },
        { titulo: "Working capital and long-term loans", descripcion: "Credit for operations and business growth." },
        { titulo: "Debt restructuring", descripcion: "We redesign long-term debt to provide financial headroom." },
      ],
    },
    {
      id: "valoraciones",
      titulo: "Valuations",
      resumen: "Independent valuations for transactions, boards, shareholders and arbitration.",
      parrafos: [
        "We provide independent valuations of companies, assets and business units for transactions, boards, shareholders and planning.",
        "We also issue fairness opinions that support shareholders and the parties in arbitration proceedings, with the objectivity that comes from having no conflicts of interest.",
      ],
      alcance: [
        { titulo: "Company valuation", descripcion: "Companies, assets and business units, to buy, sell or plan." },
        { titulo: "Fairness opinions", descripcion: "Independent support for shareholder and board decisions." },
        { titulo: "Arbitration", descripcion: "Valuations and fairness opinions for the parties in arbitration." },
      ],
    },
  ] satisfies Servicio[],
  pilares: [
    {
      etiqueta: "Partner attention",
      titulo: "The partners, from the first meeting to closing.",
      descripcion: "Every mandate is led personally by the partners, with direct involvement at every stage.",
    },
    {
      etiqueta: "Independence",
      titulo: "No ties to banks or business groups.",
      descripcion: "We belong to no bank or business group — your agenda is our only agenda.",
    },
    {
      etiqueta: "Focus",
      titulo: "Only a company's key financial decisions.",
      descripcion: "Selling, buying, financing, restructuring and valuing: that is all we do.",
    },
    {
      etiqueta: "Confidentiality",
      titulo: "Discretion at every stage.",
      descripcion: "We handle every process with the discretion that selling or buying a company demands.",
    },
  ] satisfies Pilar[],
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
