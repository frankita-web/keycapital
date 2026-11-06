import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Sitio } from "@/components/sitio";
import { metaSitio } from "@/lib/i18n";

export const metadata: Metadata = metaSitio("es");

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
};

export default function LayoutEspanol({ children }: { children: ReactNode }) {
  return <Sitio idioma="es">{children}</Sitio>;
}
