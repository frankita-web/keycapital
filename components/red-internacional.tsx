import DottedMap from "dotted-map";
import { Eyebrow } from "@/components/page-hero";
import { textos, type Idioma } from "@/lib/i18n";

const SANTIAGO = { lat: -33.45, lng: -70.67 };

/** Bancos de inversión aliados (texto "Red" del documento de recomendaciones). */
const ALIADOS = [
  { lat: -12.05, lng: -77.04 }, // Lima
  { lat: 4.71, lng: -74.07 }, // Bogotá
  { lat: -34.6, lng: -58.38 }, // Buenos Aires
  { lat: -23.55, lng: -46.63 }, // São Paulo
  { lat: 19.43, lng: -99.13 }, // Ciudad de México
  { lat: 8.98, lng: -79.52 }, // Centroamérica (Panamá)
  { lat: 40.71, lng: -74.0 }, // Estados Unidos (Nueva York)
  { lat: 40.42, lng: -3.7 }, // Europa (Madrid)
  { lat: 31.23, lng: 121.47 }, // Asia (Shanghái)
];

/** Países de compradores en operaciones cerradas: Lactalis y GL Events, Emmi, EBI. */
const COMPRADORES = [
  { lat: 48.86, lng: 2.35 }, // Francia
  { lat: 47.05, lng: 8.31 }, // Suiza
  { lat: 45.5, lng: -73.57 }, // Canadá
];

// La grilla del mapa se calcula una sola vez, al armar la página.
const mapa = new DottedMap({ height: 60, grid: "diagonal" });
const puntos = mapa.getPoints();
const { width: ancho, height: alto } = mapa.image;
function pin(c: { lat: number; lng: number }) {
  const p = mapa.getPin(c);
  if (!p) throw new Error(`Coordenada fuera del mapa: ${c.lat}, ${c.lng}`);
  return p;
}
const origen = pin(SANTIAGO);

function arco(destino: { x: number; y: number }) {
  const dx = destino.x - origen.x;
  const dy = destino.y - origen.y;
  const largo = Math.hypot(dx, dy);
  // Punto de control hacia arriba de la línea recta, más alto cuanto más lejos.
  const cx = origen.x + dx / 2 + (dy / largo) * largo * 0.25;
  const cy = origen.y + dy / 2 - Math.abs(dx / largo) * largo * 0.25;
  return `M${origen.x} ${origen.y} Q${cx} ${cy} ${destino.x} ${destino.y}`;
}

export function RedInternacional({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].inicio;
  const aliados = ALIADOS.map(pin);
  const compradores = COMPRADORES.map(pin);

  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-24">
        <div className="lg:col-span-4">
          <Eyebrow light>{t.redEyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] text-balance md:text-5xl">{t.redTitulo}</h2>
          <p className="mt-6 leading-relaxed text-pretty text-white/70">{t.redTexto}</p>
          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex gap-3">
              <dt className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
              <dd className="text-white/80">
                <span className="font-semibold text-white">{t.redAliados}</span> {t.redAliadosLista}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="mt-1.5 size-2 shrink-0 rounded-full bg-bronce" aria-hidden="true" />
              <dd className="text-white/80">
                <span className="font-semibold text-white">{t.redCompradores}</span> {t.redCompradoresLista}
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-8">
          <svg viewBox={`0 0 ${ancho} ${alto}`} role="img" aria-label={t.redEyebrow} className="h-auto w-full">
            {puntos.map((p) => (
              <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r={0.24} className="fill-white/15" />
            ))}
            {aliados.map((d) => (
              <path key={`a-${d.x}-${d.y}`} d={arco(d)} pathLength={1} className="trazo fill-none stroke-brand-light/70" strokeWidth={0.18} />
            ))}
            {compradores.map((d) => (
              <path key={`c-${d.x}-${d.y}`} d={arco(d)} pathLength={1} className="trazo fill-none stroke-bronce" strokeWidth={0.22} />
            ))}
            {aliados.map((d) => (
              <circle key={`pa-${d.x}-${d.y}`} cx={d.x} cy={d.y} r={0.5} className="fill-brand-light" />
            ))}
            {compradores.map((d) => (
              <circle key={`pc-${d.x}-${d.y}`} cx={d.x} cy={d.y} r={0.6} className="fill-bronce" />
            ))}
            <circle cx={origen.x} cy={origen.y} r={1.6} className="fill-white/15" />
            <circle cx={origen.x} cy={origen.y} r={0.8} className="fill-white" />
          </svg>
        </div>
      </div>
    </section>
  );
}
