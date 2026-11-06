import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Sitio } from "@/components/sitio";
import { metaSitio } from "@/lib/i18n";

export const metadata: Metadata = metaSitio("en");

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
};

export default function LayoutIngles({ children }: { children: ReactNode }) {
  return <Sitio idioma="en">{children}</Sitio>;
}
