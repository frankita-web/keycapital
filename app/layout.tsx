import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const displaySerif = Instrument_Serif({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keycapitalchile.cl"),
  title: {
    default: "Key Capital | Asesores financieros · M&A y finanzas corporativas",
    template: "%s | Key Capital",
  },
  description:
    "Boutique independiente de banca de inversión en Chile. Compra y venta de empresas, reestructuración de pasivos, valoraciones y financiamientos especiales.",
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Key Capital",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${displaySerif.variable} h-full antialiased`}
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
