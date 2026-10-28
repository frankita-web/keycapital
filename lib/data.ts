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
  sitioIngles: "http://www.english.keycapitalchile.cl/",
};

export const navegacion = [
  { href: "/", label: "Inicio" },
  { href: "/equipo", label: "Equipo" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/medios", label: "Medios" },
  { href: "/contacto", label: "Contacto" },
] as const;

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

export const valores = ["Creatividad", "Objetividad", "Análisis", "Profesionalismo"] as const;

export const equipo = [
  {
    nombre: "Cristián Mandiola Silva",
    cargo: "Director Ejecutivo",
    foto: "/equipo/Cristian_Mandiola.png",
    email: "cristian.mandiola@keycapitalchile.com",
    formacion: "Ingeniero Comercial, MBA",
    bio: "Más de 25 años en el sistema financiero chileno, más de dos décadas de ellos en banca de inversión y finanzas corporativas. Fue Gerente General de Banchile Citibank Global Markets hasta 2010 y en marzo de ese año fundó KeyCapital, boutique de M&A y finanzas corporativas.",
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
  detalle: string;
  monto?: string;
  categoria: Categoria;
};

export const transacciones: Transaccion[] = [
  // Venta de compañías y activos
  { categoria: "venta", anio: 2025, cliente: "NIBSA S.A.", detalle: "Venta de la compañía, con más de 80 años de historia, a HOFFENS S.A." },
  { categoria: "venta", anio: 2024, cliente: "Light E Holding Ltd.", detalle: "Venta del 95,504% de Bio Energía Los Pinos SpA a EBI (Canadá)." },
  { categoria: "venta", anio: 2024, cliente: "Cecinas Omeñaca S.A.", detalle: "Venta del 100% de las acciones de una compañía con más de 100 años." },
  { categoria: "venta", anio: 2020, cliente: "Galletas Santiago", detalle: "Venta a Ecovida, unidad de negocios y marca de AEG Nutrición." },
  { categoria: "venta", anio: 2020, cliente: "Quillayes S.A.", detalle: "Fusión con Surlat S.A. (Grupo Emmi)." },
  { categoria: "venta", anio: 2019, cliente: "Aldea Nativa", detalle: "Venta a La Tonada." },
  { categoria: "venta", anio: 2018, cliente: "Red Pacífico SpA", detalle: "Venta del 100% a GTD Teleductos." },
  { categoria: "venta", anio: 2018, cliente: "SNA FG", detalle: "Venta del 60% de FISA S.A. a GL Events." },
  { categoria: "venta", anio: 2017, cliente: "Grupo La Vaquita", detalle: "Venta del 100% a Parmalat (Lactalis)." },
  { categoria: "venta", anio: 2017, cliente: "Lácteos del Sur S.A.", detalle: "Venta del 100% a Parmalat." },
  { categoria: "venta", anio: 2017, cliente: "Lácteos Kümey SpA", detalle: "Venta del 100% a Parmalat." },
  { categoria: "venta", anio: 2016, cliente: "Química clínica y diagnóstico", detalle: "Venta de compañía con presencia en Chile y LatAm a Inversiones Alcántara S.A." },
  { categoria: "venta", anio: 2016, cliente: "Inversiones FH Engel S.A.", detalle: "Venta de los activos de las marcas Impeke y Tiki Taka a Virutex Ilko S.A." },
  { categoria: "venta", anio: 2015, cliente: "Tortillas y snacks mexicanos", detalle: "Venta del 100% de la compañía." },
  { categoria: "venta", anio: 2014, cliente: "Compañía de congelados", detalle: "Venta del 100% a un actor relevante de Chile y Perú." },
  { categoria: "venta", anio: 2014, cliente: "Compañía de Food Service", detalle: "Venta del 100% a un actor mundial con base en Sudáfrica, Australia y Nueva Zelanda." },
  { categoria: "venta", anio: 2014, cliente: "Marca y negocio", detalle: "Venta a un actor relevante del mercado chileno." },
  { categoria: "venta", anio: 2013, cliente: "Glasstech", detalle: "Venta del 100% en dos etapas, con parámetros según resultados.", monto: "US$ 80 millones" },
  { categoria: "venta", anio: 2013, cliente: "Serviform", detalle: "Venta del 100% de los activos." },
  { categoria: "venta", anio: 2013, cliente: "Altamira América", detalle: "Venta de concesiones, biomasa y activos a Mejillones América." },
  { categoria: "venta", anio: 2013, cliente: "BEST", detalle: "Venta de participación al socio gestor." },
  { categoria: "venta", anio: 2013, cliente: "ATSA", detalle: "Venta de la división de insumos químicos (marca DyStar) a Anilinas MontBlanc." },
  { categoria: "venta", anio: 2012, cliente: "Uniformes corporativos", detalle: "Venta del 100% de la compañía a Hookipa." },
  { categoria: "venta", anio: 2012, cliente: "Compañía de semillas", detalle: "Venta del 100% a SG2000." },
  { categoria: "venta", anio: 2012, cliente: "Vendome y Glicenol", detalle: "Venta de las marcas y su negocio." },

  // Compra de empresas
  { categoria: "compra", anio: 2025, cliente: "DCV S.A.", detalle: "Compra de RiskAmerica SpA: 100% de la Serie A y 74,4% de la Serie B, alcanzando el 94,88%." },
  { categoria: "compra", anio: 2019, cliente: "DESA", detalle: "Compra del 50% de Animal Brands SpA (Secreto Peruano, Virrey del Perú, Santa Margarita)." },
  { categoria: "compra", anio: 2014, cliente: "Ebema", detalle: "Asociación entre Ebema y Wiener." },
  { categoria: "compra", anio: 2013, cliente: "Alimentos El Globo", detalle: "Ingreso al mercado de galletas en retail." },
  { categoria: "compra", anio: 2013, cliente: "Construmart", detalle: "Compra del 100% del negocio MLA Centro Constructor, V Región." },
  { categoria: "compra", anio: 2012, cliente: "Bob Rental", detalle: "Incorporación de un socio con el 50%." },

  // Financiamiento y reestructuración de pasivos
  { categoria: "financiamiento", anio: 2024, cliente: "PAC PAC S.A.", detalle: "Crédito de largo plazo con 3 bancos." },
  { categoria: "financiamiento", anio: 2023, cliente: "Mauricio Kishinevsky Rosental S.A.", detalle: "Crédito sindicado con 7 bancos.", monto: "$ 7.381 millones" },
  { categoria: "financiamiento", anio: 2023, cliente: "Glasstech S.A.", detalle: "Crédito de largo plazo con 3 bancos.", monto: "Ch$ 3.600 millones" },
  { categoria: "financiamiento", anio: 2021, cliente: "Grupo Carmona", detalle: "Crédito a 15 años (Viento Sur) y capital de trabajo para West Rent A Car, La Serena.", monto: "UF 178.987" },
  { categoria: "financiamiento", anio: 2020, cliente: "Compañía Minera San Gerónimo", detalle: "Crédito sindicado a 6 años con BCI, Itaú y Security.", monto: "US$ 23 millones" },
  { categoria: "financiamiento", anio: 2019, cliente: "EPC (Manufacturas de Cobre SpA)", detalle: "Financiamiento de capital de trabajo." },
  { categoria: "financiamiento", anio: 2019, cliente: "Tavelli S.A.", detalle: "Crédito a 15 años con Banco Internacional.", monto: "UF 150.000" },
  { categoria: "financiamiento", anio: 2018, cliente: "Patagonia Glass S.A.", detalle: "Crédito de largo plazo con 6 bancos.", monto: "Ch$ 3.071 millones" },
  { categoria: "financiamiento", anio: 2017, cliente: "Vecchiola S.A.", detalle: "Crédito con CAT Financial.", monto: "US$ 20,7 millones" },
  { categoria: "financiamiento", anio: 2017, cliente: "Grupo Vecchiola", detalle: "Créditos bancarios.", monto: "Ch$ 26.493 millones" },
  { categoria: "financiamiento", anio: 2017, cliente: "MOR Chile S.A.", detalle: "Reestructuración de leasing de largo plazo con Itaú.", monto: "UF 73.569" },
  { categoria: "financiamiento", anio: 2016, cliente: "Rambrands S.A.", detalle: "Crédito de largo plazo.", monto: "Ch$ 4.626 millones" },
  { categoria: "financiamiento", anio: 2016, cliente: "Compañía Minera San Gerónimo", detalle: "US$ 25 millones de largo plazo y US$ 5,5 millones de capital de trabajo.", monto: "US$ 30,5 millones" },
  { categoria: "financiamiento", anio: 2015, cliente: "Grupo INMED", detalle: "Crédito de largo plazo con bancos.", monto: "Ch$ 6.091 millones" },
  { categoria: "financiamiento", anio: 2015, cliente: "FastPack S.A.", detalle: "Ch$ 6.500 millones de largo plazo y Ch$ 3.000 millones de capital de trabajo.", monto: "Ch$ 9.500 millones" },
  { categoria: "financiamiento", anio: 2015, cliente: "Libesa", detalle: "Crédito de largo plazo.", monto: "Ch$ 5.700 millones" },
  { categoria: "financiamiento", anio: 2014, cliente: "Tavelli S.A.", detalle: "Crédito de largo plazo.", monto: "UF 82.100" },
  { categoria: "financiamiento", anio: 2014, cliente: "Edificio Kennedy 7.600", detalle: "Sale & lease back de oficinas en Vitacura.", monto: "UF 37.000" },
  { categoria: "financiamiento", anio: 2014, cliente: "Strip Center La Florida", detalle: "Financiamiento de construcción y reestructuración.", monto: "UF 64.000" },
  { categoria: "financiamiento", anio: 2013, cliente: "Grupo Intertecno", detalle: "Crédito de largo plazo.", monto: "Ch$ 2.268 millones" },
  { categoria: "financiamiento", anio: 2013, cliente: "Compañía Minera Linderos", detalle: "Crédito de largo plazo.", monto: "US$ 15 millones" },
  { categoria: "financiamiento", anio: 2013, cliente: "Virutex Ilko", detalle: "Crédito de largo plazo.", monto: "Ch$ 2.500 millones" },
  { categoria: "financiamiento", anio: 2013, cliente: "Inversiones Gibraltar", detalle: "Crédito de largo plazo.", monto: "UF 320.000" },

  // Asesoría en valoración
  { categoria: "valoracion", anio: 2025, cliente: "SNA", detalle: "Evaluación económica de una oportunidad de inversión y posible asociación." },
  { categoria: "valoracion", anio: 2023, cliente: "Dellanatura", detalle: "Opinión de valor del negocio y la compañía." },
  { categoria: "valoracion", anio: 2016, cliente: "Mindugar", detalle: "Opinión de valor." },
  { categoria: "valoracion", anio: 2015, cliente: "Bautek", detalle: "Opinión de valor." },
  { categoria: "valoracion", anio: 2015, cliente: "Enersur", detalle: "Opinión de valor." },
  { categoria: "valoracion", anio: 2014, cliente: "Andesgear", detalle: "Opinión de valor." },
  { categoria: "valoracion", anio: 2014, cliente: "COLUN", detalle: "Valoración económica de BioNutrición (Cooperativa Bioleche)." },
  { categoria: "valoracion", anio: 2014, cliente: "Oxiquim", detalle: "Opinión de valor para el Terminal Marítimo de Mejillones." },
  { categoria: "valoracion", anio: 2013, cliente: "5àsec", detalle: "Opinión de valor y estudio para juicio arbitral con un franquiciado." },
  { categoria: "valoracion", anio: 2013, cliente: "EDYCE Corp", detalle: "Valoración del grupo de empresas." },
  { categoria: "valoracion", anio: 2012, cliente: "Agricamex", detalle: "Opinión de valor." },
  { categoria: "valoracion", anio: 2012, cliente: "Hogares Alemanes", detalle: "Estudio de modelo de negocio y necesidades de capital." },
];

export const medios = [
  { titulo: "Hecho esencial: venta de NIBSA", fuente: "Hecho esencial", fecha: "Dic 2025", imagen: "/medios/nibsa-hecho-esencial-2025.png" },
  { titulo: "Hoffens adquiere NIBSA", fuente: "Diario Financiero", fecha: "2025", imagen: "/medios/hoffens-nibsa-df.png" },
  { titulo: "DCV adquiere RiskAmerica", fuente: "Diario Financiero", fecha: "2025", imagen: "/medios/dcv-riskamerica-df.jpg" },
  { titulo: "El Grupo Hiller y su nueva apuesta", fuente: "DF MAS", fecha: "", imagen: "/medios/grupo-hiller-dfmas.jpg" },
  { titulo: "Ranking Leaders League 2025", fuente: "Leaders League", fecha: "2025", imagen: "/medios/leaders-league-2025.jpg" },
  { titulo: "Entrevista a KeyCapital", fuente: "Diario Financiero", fecha: "2021", imagen: "/medios/entrevista-df-2021.jpg" },
  { titulo: "Ranking Leaders League", fuente: "Leaders League", fecha: "", imagen: "/medios/leaders-league.jpg" },
  { titulo: "Venta de Galletas Santiago", fuente: "Diario Financiero", fecha: "2021", imagen: "/medios/galletas-santiago-df-2021.jpg" },
  { titulo: "Aviso de prensa", fuente: "KeyCapital", fecha: "2020", imagen: "/medios/aviso-prensa-2020.jpg" },
  { titulo: "Ranking de asesores", fuente: "Ranking", fecha: "", imagen: "/medios/ranking.jpg" },
  { titulo: "Quillayes y Surlat se fusionan", fuente: "Emol", fecha: "2020", imagen: "/medios/emol-surlat.jpg" },
  { titulo: "Fusión Quillayes y Surlat", fuente: "Diario Financiero", fecha: "2020", imagen: "/medios/df-fusion-quillayes-surlat.jpg" },
  { titulo: "Fusión Quillayes y Surlat", fuente: "Prensa", fecha: "2020", imagen: "/medios/fusion-quillayes-surlat.jpg" },
  { titulo: "Fusión Quillayes y Surlat", fuente: "Diario Financiero", fecha: "2020", imagen: "/medios/fusion-quillayes-surlat-df.jpg" },
  { titulo: "SNA vende participación en FISA", fuente: "Emol", fecha: "2018", imagen: "/medios/sna-emol.jpg" },
  { titulo: "Lactalis", fuente: "Prensa", fecha: "2017", imagen: "/medios/lactalis.png" },
  { titulo: "Parmalat", fuente: "Prensa", fecha: "2017", imagen: "/medios/parmalat.png" },
  { titulo: "La Vaquita (II)", fuente: "Prensa", fecha: "2017", imagen: "/medios/la-vaquita-2.jpg" },
  { titulo: "La Vaquita (I)", fuente: "Prensa", fecha: "2017", imagen: "/medios/la-vaquita-1.jpg" },
  { titulo: "Cierre del negocio Valtek", fuente: "Prensa", fecha: "Dic 2016", imagen: "/medios/valtek-2016.png" },
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
