export const contacto = {
  direccion: "Don Carlos 2939, Oficina 805",
  comuna: "Las Condes, Santiago, Chile",
  telefono: "+56 2 3264 5076",
  telefonoHref: "tel:+56232645076",
  email: "secretaria@keycapitalchile.cl",
  mapaUrl:
    "https://www.google.com/maps/search/?api=1&query=Don+Carlos+2939+Las+Condes+Santiago",
  redes: [
    { nombre: "LinkedIn", url: "https://www.linkedin.com/company/key-capital-chile" },
    { nombre: "Instagram", url: "https://www.instagram.com/keycapitalchile/" },
    { nombre: "X / Twitter", url: "https://twitter.com/keycapitalchile" },
    { nombre: "Facebook", url: "https://www.facebook.com/keycapitalchile.keycapital" },
  ],
};

export const servicios = [
  {
    titulo: "Compra y venta de empresas",
    descripcion:
      "Acompañamos a accionistas en procesos de M&A de principio a fin: valorización, búsqueda de contrapartes, negociación y cierre.",
  },
  {
    titulo: "Reestructuración de pasivos",
    descripcion:
      "Rediseñamos la estructura de deuda de largo plazo para dar holgura financiera y sostener el crecimiento del negocio.",
  },
  {
    titulo: "Valoraciones",
    descripcion:
      "Opiniones de valor independientes y objetivas para transacciones, arbitrajes, asociaciones y decisiones estratégicas.",
  },
  {
    titulo: "Financiamientos especiales y de proyectos",
    descripcion:
      "Estructuramos créditos sindicados, de largo plazo y de capital de trabajo junto a la banca local e internacional.",
  },
] as const;

export const pilares = [
  {
    titulo: "Asesoría especializada",
    descripcion:
      "Servicios a la medida para medianas y grandes empresas, y sus accionistas, en sus principales desafíos de negocio.",
  },
  {
    titulo: "Más de 20 años de experiencia",
    descripcion:
      "Trayectoria en banca de inversión, finanzas corporativas y M&A en Banedwards, Banchile Asesoría Financiera y Banchile Citibank, y desde 2010 como equipo senior independiente.",
  },
  {
    titulo: "Cobertura internacional",
    descripcion:
      "Acuerdos de trabajo con bancas de inversión en Latinoamérica, Asia, Europa y Estados Unidos.",
  },
] as const;

/** Distinción destacada al entrar. Es la categoría real de KeyCapital en el ranking: no cambiarla sin verificar. */
export const ranking = {
  categoria: "Muy recomendado",
  organizacion: "Leaders League",
  anio: 2027,
  detalle: "Banco de inversión · Fusiones y adquisiciones · Firmas locales · Chile",
  url: "https://www.leadersleague.com/es/rankings/fusiones-y-adquisiciones-firmas-locales-banco-de-inversion-chile-2027",
};

export const valores = ["Creatividad", "Objetividad", "Análisis", "Profesionalismo"] as const;

export const equipo = [
  {
    nombre: "Cristián Mandiola Silva",
    cargo: "Director Ejecutivo",
    foto: "/equipo/Cristian_Mandiola.png",
    email: "cristian.mandiola@keycapitalchile.com",
    formacion: "Ingeniero Comercial, MBA",
    bio: "Más de 35 años en el sistema financiero chileno, más de dos décadas de ellos en banca de inversión y finanzas corporativas. Fue Gerente General de Banchile Citibank Global Markets hasta 2010 y en marzo de ese año fundó KeyCapital, boutique de M&A y finanzas corporativas.",
  },
  {
    nombre: "Jaime Barriga Sotta",
    cargo: "Director Comercial",
    foto: "/equipo/Jaime_Barriga.png",
    email: "jaime.barriga@keycapitalchile.com",
    formacion: "Ingeniero Comercial",
    bio: "Cinco años de experiencia en banca comercial y más de 20 en banca de inversión. Ingresó a Banedwards en 1992 y fue Gerente General de Banchile Asesoría Financiera entre 2001 y 2008.",
  },
  {
    nombre: "Iván González Echanez",
    cargo: "Director de Estudios",
    foto: "/equipo/Ivan_Gonzalez.png",
    email: "ivan.gonzalez@keycapitalchile.com",
    formacion: "Ingeniero Comercial, Contador Auditor, MBA",
    bio: "Más de 19 años de experiencia en finanzas corporativas. Ha sido profesor universitario de finanzas y contabilidad durante cerca de 10 años.",
  },
] as const;

export type Categoria = "venta" | "compra" | "financiamiento" | "valoracion";

export const categorias: { id: Categoria; label: string }[] = [
  { id: "venta", label: "Venta de compañías" },
  { id: "compra", label: "Compra de empresas" },
  { id: "financiamiento", label: "Financiamiento y reestructuración" },
  { id: "valoracion", label: "Valoración" },
];

export type Transaccion = {
  anio: number;
  cliente: string;
  /** Solo si el nombre del cliente se traduce (nombres genéricos). */
  clienteEn?: string;
  detalle: string;
  detalleEn: string;
  monto?: string;
  categoria: Categoria;
  /** Archivos en /public/clientes asociados a la transacción */
  logos?: string[];
};

export const transacciones: Transaccion[] = [
  // Venta de compañías y activos
  { categoria: "venta", anio: 2025, cliente: "NIBSA S.A.", detalle: "Venta de la compañía, con más de 80 años de historia, a HOFFENS S.A.", detalleEn: "Sale of the company, with over 80 years of history, to HOFFENS S.A." },
  { categoria: "venta", anio: 2024, cliente: "Light E Holding Ltd.", detalle: "Venta del 95,504% de Bio Energía Los Pinos SpA a EBI (Canadá).", detalleEn: "Sale of 95.504% of Bio Energía Los Pinos SpA to EBI (Canada)." },
  { categoria: "venta", anio: 2024, cliente: "Cecinas Omeñaca S.A.", detalle: "Venta del 100% de las acciones de una compañía con más de 100 años.", detalleEn: "Sale of 100% of the shares of a company with over 100 years of history." },
  { categoria: "venta", anio: 2020, cliente: "Galletas Santiago", detalle: "Venta a Ecovida, unidad de negocios y marca de AEG Nutrición.", detalleEn: "Sale to Ecovida, a business unit and brand of AEG Nutrición.", logos: ["galletas_s.png", "ecovida_s.png", "aeg_s.png"] },
  { categoria: "venta", anio: 2020, cliente: "Quillayes S.A.", detalle: "Fusión con Surlat S.A. (Grupo Emmi).", detalleEn: "Merger with Surlat S.A. (Emmi Group)." },
  { categoria: "venta", anio: 2019, cliente: "Aldea Nativa", detalle: "Venta a La Tonada.", detalleEn: "Sale to La Tonada." },
  { categoria: "venta", anio: 2018, cliente: "Red Pacífico SpA", detalle: "Venta del 100% a GTD Teleductos.", detalleEn: "Sale of 100% to GTD Teleductos.", logos: ["redpacifico.jpg"] },
  { categoria: "venta", anio: 2018, cliente: "SNA FG", detalle: "Venta del 60% de FISA S.A. a GL Events.", detalleEn: "Sale of 60% of FISA S.A. to GL Events.", logos: ["fisa.png"] },
  { categoria: "venta", anio: 2017, cliente: "Grupo La Vaquita", detalle: "Venta del 100% a Parmalat (Lactalis).", detalleEn: "Sale of 100% to Parmalat (Lactalis).", logos: ["la_vaquita.png"] },
  { categoria: "venta", anio: 2017, cliente: "Lácteos del Sur S.A.", detalle: "Venta del 100% a Parmalat.", detalleEn: "Sale of 100% to Parmalat.", logos: ["mulpulmo.png"] },
  { categoria: "venta", anio: 2017, cliente: "Lácteos Kümey SpA", detalle: "Venta del 100% a Parmalat.", detalleEn: "Sale of 100% to Parmalat.", logos: ["kumey.png"] },
  { categoria: "venta", anio: 2016, cliente: "Química clínica y diagnóstico", clienteEn: "Clinical chemistry and diagnostics", detalle: "Venta de compañía con presencia en Chile y LatAm a Inversiones Alcántara S.A.", detalleEn: "Sale of a company with a presence in Chile and Latin America to Inversiones Alcántara S.A.", logos: ["valtek1.jpg"] },
  { categoria: "venta", anio: 2016, cliente: "Inversiones FH Engel S.A.", detalle: "Venta de los activos de las marcas Impeke y Tiki Taka a Virutex Ilko S.A.", detalleEn: "Sale of the assets of the Impeke and Tiki Taka brands to Virutex Ilko S.A.", logos: ["impeke.png", "virutex.jpg"] },
  { categoria: "venta", anio: 2015, cliente: "Tortillas y snacks mexicanos", clienteEn: "Mexican tortillas and snacks", detalle: "Venta del 100% de la compañía.", detalleEn: "Sale of 100% of the company.", logos: ["pancho_villa.png"] },
  { categoria: "venta", anio: 2014, cliente: "Compañía de congelados", clienteEn: "Frozen foods company", detalle: "Venta del 100% a un actor relevante de Chile y Perú.", detalleEn: "Sale of 100% to a major player in Chile and Peru.", logos: ["frutos.jpg", "watts.jpg"] },
  { categoria: "venta", anio: 2014, cliente: "Compañía de Food Service", clienteEn: "Food service company", detalle: "Venta del 100% a un actor mundial con base en Sudáfrica, Australia y Nueva Zelanda.", detalleEn: "Sale of 100% to a global player based in South Africa, Australia and New Zealand.", logos: ["common.jpg"] },
  { categoria: "venta", anio: 2014, cliente: "Marca y negocio", clienteEn: "Brand and business", detalle: "Venta a un actor relevante del mercado chileno.", detalleEn: "Sale to a major player in the Chilean market." },
  { categoria: "venta", anio: 2013, cliente: "Glasstech", detalle: "Venta del 100% en dos etapas, con parámetros según resultados.", detalleEn: "Sale of 100% in two stages, with terms tied to results.", monto: "US$ 80 millones", logos: ["glasstech.jpg"] },
  { categoria: "venta", anio: 2013, cliente: "Serviform", detalle: "Venta del 100% de los activos.", detalleEn: "Sale of 100% of the assets." },
  { categoria: "venta", anio: 2013, cliente: "Altamira América", detalle: "Venta de concesiones, biomasa y activos a Mejillones América.", detalleEn: "Sale of concessions, biomass and assets to Mejillones América." },
  { categoria: "venta", anio: 2013, cliente: "BEST", detalle: "Venta de participación al socio gestor.", detalleEn: "Sale of a stake to the managing partner." },
  { categoria: "venta", anio: 2013, cliente: "ATSA", detalle: "Venta de la división de insumos químicos (marca DyStar) a Anilinas MontBlanc.", detalleEn: "Sale of the chemical supplies division (DyStar brand) to Anilinas MontBlanc.", logos: ["atsa.jpg", "montblanc.jpg"] },
  { categoria: "venta", anio: 2012, cliente: "Uniformes corporativos", clienteEn: "Corporate uniforms", detalle: "Venta del 100% de la compañía a Hookipa.", detalleEn: "Sale of 100% of the company to Hookipa." },
  { categoria: "venta", anio: 2012, cliente: "Compañía de semillas", clienteEn: "Seed company", detalle: "Venta del 100% a SG2000.", detalleEn: "Sale of 100% to SG2000." },
  { categoria: "venta", anio: 2012, cliente: "Vendome y Glicenol", detalle: "Venta de las marcas y su negocio.", detalleEn: "Sale of the brands and their business." },

  // Compra de empresas
  { categoria: "compra", anio: 2025, cliente: "DCV S.A.", detalle: "Compra de RiskAmerica SpA: 100% de la Serie A y 74,4% de la Serie B, alcanzando el 94,88%.", detalleEn: "Acquisition of RiskAmerica SpA: 100% of Series A and 74.4% of Series B, reaching 94.88%." },
  { categoria: "compra", anio: 2019, cliente: "DESA", detalle: "Compra del 50% de Animal Brands SpA (Secreto Peruano, Virrey del Perú, Santa Margarita).", detalleEn: "Acquisition of 50% of Animal Brands SpA (Secreto Peruano, Virrey del Perú, Santa Margarita).", logos: ["desa.png", "secreto_peruano.png", "virrey_peru.png", "margarita.png"] },
  { categoria: "compra", anio: 2014, cliente: "Ebema", detalle: "Asociación entre Ebema y Wiener.", detalleEn: "Partnership between Ebema and Wiener." },
  { categoria: "compra", anio: 2013, cliente: "Alimentos El Globo", detalle: "Ingreso al mercado de galletas en retail.", detalleEn: "Entry into the retail cookie market.", logos: ["elglobo.jpg", "galletassantiago.jpg"] },
  { categoria: "compra", anio: 2013, cliente: "Construmart", detalle: "Compra del 100% del negocio MLA Centro Constructor, V Región.", detalleEn: "Acquisition of 100% of the MLA Centro Constructor business, Valparaíso Region." },
  { categoria: "compra", anio: 2012, cliente: "Bob Rental", detalle: "Incorporación de un socio con el 50%.", detalleEn: "Addition of a partner with a 50% stake." },

  // Financiamiento y reestructuración de pasivos
  { categoria: "financiamiento", anio: 2024, cliente: "PAC PAC S.A.", detalle: "Crédito de largo plazo con 3 bancos.", detalleEn: "Long-term loan with 3 banks." },
  { categoria: "financiamiento", anio: 2023, cliente: "Mauricio Kishinevsky Rosental S.A.", detalle: "Crédito sindicado con 7 bancos.", detalleEn: "Syndicated loan with 7 banks.", monto: "$ 7.381 millones" },
  { categoria: "financiamiento", anio: 2023, cliente: "Glasstech S.A.", detalle: "Crédito de largo plazo con 3 bancos.", detalleEn: "Long-term loan with 3 banks.", monto: "Ch$ 3.600 millones", logos: ["glasstech.jpg"] },
  { categoria: "financiamiento", anio: 2021, cliente: "Grupo Carmona", detalle: "Crédito a 15 años (Viento Sur) y capital de trabajo para West Rent A Car, La Serena.", detalleEn: "15-year loan (Viento Sur) and working capital for West Rent A Car, La Serena.", monto: "UF 178.987", logos: ["west_s.png"] },
  { categoria: "financiamiento", anio: 2020, cliente: "Compañía Minera San Gerónimo", detalle: "Crédito sindicado a 6 años con BCI, Itaú y Security.", detalleEn: "6-year syndicated loan with BCI, Itaú and Security.", monto: "US$ 23 millones", logos: ["minera_san_geronimo_2.jpg"] },
  { categoria: "financiamiento", anio: 2019, cliente: "EPC (Manufacturas de Cobre SpA)", detalle: "Financiamiento de capital de trabajo.", detalleEn: "Working capital financing." },
  { categoria: "financiamiento", anio: 2019, cliente: "Tavelli S.A.", detalle: "Crédito a 15 años con Banco Internacional.", detalleEn: "15-year loan with Banco Internacional.", monto: "UF 150.000", logos: ["tavelli.jpg"] },
  { categoria: "financiamiento", anio: 2018, cliente: "Patagonia Glass S.A.", detalle: "Crédito de largo plazo con 6 bancos.", detalleEn: "Long-term loan with 6 banks.", monto: "Ch$ 3.071 millones", logos: ["patagonia_glass.png"] },
  { categoria: "financiamiento", anio: 2017, cliente: "Vecchiola S.A.", detalle: "Crédito con CAT Financial.", detalleEn: "Loan with CAT Financial.", monto: "US$ 20,7 millones", logos: ["vecchiola.png"] },
  { categoria: "financiamiento", anio: 2017, cliente: "Grupo Vecchiola", detalle: "Créditos bancarios.", detalleEn: "Bank loans.", monto: "Ch$ 26.493 millones", logos: ["vecchiola.png"] },
  { categoria: "financiamiento", anio: 2017, cliente: "MOR Chile S.A.", detalle: "Reestructuración de leasing de largo plazo con Itaú.", detalleEn: "Restructuring of long-term leasing with Itaú.", monto: "UF 73.569", logos: ["mor-chile.png"] },
  { categoria: "financiamiento", anio: 2016, cliente: "Rambrands S.A.", detalle: "Crédito de largo plazo.", detalleEn: "Long-term loan.", monto: "Ch$ 4.626 millones", logos: ["ram2.jpg"] },
  { categoria: "financiamiento", anio: 2016, cliente: "Compañía Minera San Gerónimo", detalle: "US$ 25 millones de largo plazo y US$ 5,5 millones de capital de trabajo.", detalleEn: "US$ 25 million long-term and US$ 5.5 million working capital.", monto: "US$ 30,5 millones", logos: ["minera_san_geronimo_2.jpg"] },
  { categoria: "financiamiento", anio: 2015, cliente: "Grupo INMED", detalle: "Crédito de largo plazo con bancos.", detalleEn: "Long-term loan with banks.", monto: "Ch$ 6.091 millones", logos: ["imed_2.jpg"] },
  { categoria: "financiamiento", anio: 2015, cliente: "FastPack S.A.", detalle: "Ch$ 6.500 millones de largo plazo y Ch$ 3.000 millones de capital de trabajo.", detalleEn: "Ch$ 6,500 million long-term and Ch$ 3,000 million working capital.", monto: "Ch$ 9.500 millones", logos: ["fastpack_2.jpg"] },
  { categoria: "financiamiento", anio: 2015, cliente: "Libesa", detalle: "Crédito de largo plazo.", detalleEn: "Long-term loan.", monto: "Ch$ 5.700 millones", logos: ["libesa.jpg"] },
  { categoria: "financiamiento", anio: 2014, cliente: "Tavelli S.A.", detalle: "Crédito de largo plazo.", detalleEn: "Long-term loan.", monto: "UF 82.100", logos: ["tavelli.jpg"] },
  { categoria: "financiamiento", anio: 2014, cliente: "Edificio Kennedy 7.600", detalle: "Sale & lease back de oficinas en Vitacura.", detalleEn: "Sale and leaseback of offices in Vitacura.", monto: "UF 37.000" },
  { categoria: "financiamiento", anio: 2014, cliente: "Strip Center La Florida", detalle: "Financiamiento de construcción y reestructuración.", detalleEn: "Construction financing and restructuring.", monto: "UF 64.000" },
  { categoria: "financiamiento", anio: 2013, cliente: "Grupo Intertecno", detalle: "Crédito de largo plazo.", detalleEn: "Long-term loan.", monto: "Ch$ 2.268 millones" },
  { categoria: "financiamiento", anio: 2013, cliente: "Compañía Minera Linderos", detalle: "Crédito de largo plazo.", detalleEn: "Long-term loan.", monto: "US$ 15 millones" },
  { categoria: "financiamiento", anio: 2013, cliente: "Virutex Ilko", detalle: "Crédito de largo plazo.", detalleEn: "Long-term loan.", monto: "Ch$ 2.500 millones", logos: ["virutex.jpg"] },
  { categoria: "financiamiento", anio: 2013, cliente: "Inversiones Gibraltar", detalle: "Crédito de largo plazo.", detalleEn: "Long-term loan.", monto: "UF 320.000" },

  // Asesoría en valoración
  { categoria: "valoracion", anio: 2025, cliente: "SNA", detalle: "Evaluación económica de una oportunidad de inversión y posible asociación.", detalleEn: "Economic evaluation of an investment opportunity and potential partnership." },
  { categoria: "valoracion", anio: 2023, cliente: "Dellanatura", detalle: "Opinión de valor del negocio y la compañía.", detalleEn: "Fairness opinion on the business and the company." },
  { categoria: "valoracion", anio: 2016, cliente: "Mindugar", detalle: "Opinión de valor.", detalleEn: "Fairness opinion." },
  { categoria: "valoracion", anio: 2015, cliente: "Bautek", detalle: "Opinión de valor.", detalleEn: "Fairness opinion.", logos: ["bautek1.jpg"] },
  { categoria: "valoracion", anio: 2015, cliente: "Enersur", detalle: "Opinión de valor.", detalleEn: "Fairness opinion." },
  { categoria: "valoracion", anio: 2014, cliente: "Andesgear", detalle: "Opinión de valor.", detalleEn: "Fairness opinion.", logos: ["andesgear.jpg"] },
  { categoria: "valoracion", anio: 2014, cliente: "COLUN", detalle: "Valoración económica de BioNutrición (Cooperativa Bioleche).", detalleEn: "Economic valuation of BioNutrición (Cooperativa Bioleche).", logos: ["colun.jpg"] },
  { categoria: "valoracion", anio: 2014, cliente: "Oxiquim", detalle: "Opinión de valor para el Terminal Marítimo de Mejillones.", detalleEn: "Fairness opinion for the Mejillones Maritime Terminal." },
  { categoria: "valoracion", anio: 2013, cliente: "5àsec", detalle: "Opinión de valor y estudio para juicio arbitral con un franquiciado.", detalleEn: "Fairness opinion and study for arbitration with a franchisee.", logos: ["5asec.jpg"] },
  { categoria: "valoracion", anio: 2013, cliente: "EDYCE Corp", detalle: "Valoración del grupo de empresas.", detalleEn: "Valuation of the group of companies.", logos: ["edyce.jpg"] },
  { categoria: "valoracion", anio: 2012, cliente: "Agricamex", detalle: "Opinión de valor.", detalleEn: "Fairness opinion." },
  { categoria: "valoracion", anio: 2012, cliente: "Hogares Alemanes", detalle: "Estudio de modelo de negocio y necesidades de capital.", detalleEn: "Study of the business model and capital needs." },
];

export const medios = [
  { titulo: "Hecho esencial: venta de NIBSA", tituloEn: "Material fact: sale of NIBSA", fuente: "Hecho esencial", fecha: "Dic 2025", imagen: "/medios/nibsa-hecho-esencial-2025.png" },
  { titulo: "Hoffens adquiere NIBSA", tituloEn: "Hoffens acquires NIBSA", fuente: "Diario Financiero", fecha: "2025", imagen: "/medios/hoffens-nibsa-df.png" },
  { titulo: "DCV adquiere RiskAmerica", tituloEn: "DCV acquires RiskAmerica", fuente: "Diario Financiero", fecha: "2025", imagen: "/medios/dcv-riskamerica-df.jpg" },
  { titulo: "El Grupo Hiller y su nueva apuesta", tituloEn: "Grupo Hiller and its new venture", fuente: "DF MAS", fecha: "", imagen: "/medios/grupo-hiller-dfmas.jpg" },
  { titulo: "Ranking Leaders League 2025", tituloEn: "Leaders League Ranking 2025", fuente: "Leaders League", fecha: "2025", imagen: "/medios/leaders-league-2025.jpg" },
  { titulo: "Entrevista a KeyCapital", tituloEn: "Interview with KeyCapital", fuente: "Diario Financiero", fecha: "2021", imagen: "/medios/entrevista-df-2021.jpg" },
  { titulo: "Ranking Leaders League", tituloEn: "Leaders League Ranking", fuente: "Leaders League", fecha: "", imagen: "/medios/leaders-league.jpg" },
  { titulo: "Venta de Galletas Santiago", tituloEn: "Sale of Galletas Santiago", fuente: "Diario Financiero", fecha: "2021", imagen: "/medios/galletas-santiago-df-2021.jpg" },
  { titulo: "Aviso de prensa", tituloEn: "Press notice", fuente: "KeyCapital", fecha: "2020", imagen: "/medios/aviso-prensa-2020.jpg" },
  { titulo: "Ranking de asesores", tituloEn: "Advisors ranking", fuente: "Ranking", fecha: "", imagen: "/medios/ranking.jpg" },
  { titulo: "Quillayes y Surlat se fusionan", tituloEn: "Quillayes and Surlat merge", fuente: "Emol", fecha: "2020", imagen: "/medios/emol-surlat.jpg" },
  { titulo: "Fusión Quillayes y Surlat", tituloEn: "Quillayes–Surlat merger", fuente: "Diario Financiero", fecha: "2020", imagen: "/medios/df-fusion-quillayes-surlat.jpg" },
  { titulo: "Fusión Quillayes y Surlat", tituloEn: "Quillayes–Surlat merger", fuente: "Prensa", fecha: "2020", imagen: "/medios/fusion-quillayes-surlat.jpg" },
  { titulo: "Fusión Quillayes y Surlat", tituloEn: "Quillayes–Surlat merger", fuente: "Diario Financiero", fecha: "2020", imagen: "/medios/fusion-quillayes-surlat-df.jpg" },
  { titulo: "SNA vende participación en FISA", tituloEn: "SNA sells its stake in FISA", fuente: "Emol", fecha: "2018", imagen: "/medios/sna-emol.jpg" },
  { titulo: "Lactalis", tituloEn: "Lactalis", fuente: "Prensa", fecha: "2017", imagen: "/medios/lactalis.png" },
  { titulo: "Parmalat", tituloEn: "Parmalat", fuente: "Prensa", fecha: "2017", imagen: "/medios/parmalat.png" },
  { titulo: "La Vaquita (II)", tituloEn: "La Vaquita (II)", fuente: "Prensa", fecha: "2017", imagen: "/medios/la-vaquita-2.jpg" },
  { titulo: "La Vaquita (I)", tituloEn: "La Vaquita (I)", fuente: "Prensa", fecha: "2017", imagen: "/medios/la-vaquita-1.jpg" },
  { titulo: "Cierre del negocio Valtek", tituloEn: "Closing of the Valtek deal", fuente: "Prensa", fecha: "Dic 2016", imagen: "/medios/valtek-2016.png" },
] as const;

export const clientes = [
  { nombre: "Colún", logo: "colun.jpg" },
  { nombre: "Watts", logo: "watts.jpg" },
  { nombre: "Glasstech", logo: "glasstech.jpg" },
  { nombre: "5àsec", logo: "5asec.jpg" },
  { nombre: "La Vaquita", logo: "la_vaquita.png" },
  { nombre: "Tavelli", logo: "tavelli.jpg" },
  { nombre: "Virutex", logo: "virutex.jpg" },
  { nombre: "Anilinas MontBlanc", logo: "montblanc.jpg" },
  { nombre: "Red Pacífico", logo: "redpacifico.jpg" },
  { nombre: "Vecchiola", logo: "vecchiola.png" },
  { nombre: "Minera San Gerónimo", logo: "minera_san_geronimo_2.jpg" },
  { nombre: "FISA", logo: "fisa.png" },
  { nombre: "DESA", logo: "desa.png" },
  { nombre: "Patagonia Glass", logo: "patagonia_glass.png" },
  { nombre: "FastPack", logo: "fastpack_2.jpg" },
  { nombre: "IMED", logo: "imed_2.jpg" },
  { nombre: "Libesa", logo: "libesa.jpg" },
  { nombre: "Andesgear", logo: "andesgear.jpg" },
  { nombre: "ATSA", logo: "atsa.jpg" },
  { nombre: "Common", logo: "common.jpg" },
  { nombre: "EDYCE", logo: "edyce.jpg" },
  { nombre: "El Globo", logo: "elglobo.jpg" },
  { nombre: "Galletas Santiago", logo: "galletassantiago.jpg" },
  { nombre: "Frutos", logo: "frutos.jpg" },
  { nombre: "Pancho Villa", logo: "pancho_villa.png" },
  { nombre: "Impeke", logo: "impeke.png" },
  { nombre: "MOR Chile", logo: "mor-chile.png" },
  { nombre: "Rambrands", logo: "ram2.jpg" },
  { nombre: "Kümey", logo: "kumey.png" },
  { nombre: "Mulpulmo", logo: "mulpulmo.png" },
  { nombre: "Bautek", logo: "bautek1.jpg" },
  { nombre: "Valtek", logo: "valtek1.jpg" },
  { nombre: "Santo Mojito", logo: "santo_mojito.png" },
  { nombre: "Secreto Peruano", logo: "secreto_peruano.png" },
  { nombre: "Santa Margarita", logo: "margarita.png" },
  { nombre: "Virrey del Perú", logo: "virrey_peru.png" },
  { nombre: "West", logo: "west_s.png" },
  { nombre: "Ecovida", logo: "ecovida_s.png" },
  { nombre: "AEG", logo: "aeg_s.png" },
  { nombre: "Galletas", logo: "galletas_s.png" },
] as const;

/** Identificador de URL de un logo: "colun.jpg" → "colun" */
export const slugLogo = (logo: string) => logo.replace(/\.[a-z]+$/, "");

export const nombrePorLogo: Record<string, string> = Object.fromEntries(
  clientes.map((c) => [c.logo, c.nombre]),
);

export const tieneTransacciones = (logo: string) =>
  transacciones.some((t) => t.logos?.includes(logo));
