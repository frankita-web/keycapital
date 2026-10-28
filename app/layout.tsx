import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keycapitalchile.cl"),
  title: {
    default: "KeyCapital | Asesores financieros · M&A y finanzas corporativas",
    template: "%s | KeyCapital",
  },
  description:
    "Boutique independiente de banca de inversión en Chile. Compra y venta de empresas, reestructuración de pasivos, valoraciones y financiamientos especiales.",
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "KeyCapital",
  },
};

export const viewport: Viewport = {
  themeColor: "#071523",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
