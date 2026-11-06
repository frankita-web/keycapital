import type { ReactNode } from "react";
import { Inter, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Idioma } from "@/lib/i18n";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-titulos",
  subsets: ["latin"],
});

/** Estructura común de cada idioma: es el <html> de sus dos layouts raíz. */
export function Sitio({ idioma, children }: { idioma: Idioma; children: ReactNode }) {
  return (
    <html
      lang={idioma}
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header idioma={idioma} />
        <main className="flex-1">{children}</main>
        <Footer idioma={idioma} />
      </body>
    </html>
  );
}
