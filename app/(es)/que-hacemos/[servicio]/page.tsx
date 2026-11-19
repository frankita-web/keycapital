import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicioPage } from "@/components/pages/servicio";
import { contenido } from "@/lib/contenido";
import { servicioIds, servicioPorSlug, slugServicio } from "@/lib/i18n";

// Las cuatro páginas se generan al publicar; la navegación espera a la página completa
// en vez de mostrar un esqueleto, porque todo su contenido depende del servicio.
export const instant = false;

export function generateStaticParams() {
  return servicioIds.map((id) => ({ servicio: slugServicio("es", id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ servicio: string }> }): Promise<Metadata> {
  const id = servicioPorSlug("es", (await params).servicio);
  const servicio = contenido("es").servicios.find((s) => s.id === id);
  return servicio ? { title: servicio.titulo, description: servicio.resumen } : {};
}

export default async function Page({ params }: { params: Promise<{ servicio: string }> }) {
  const id = servicioPorSlug("es", (await params).servicio);
  if (!id) notFound();
  return <ServicioPage idioma="es" id={id} />;
}
