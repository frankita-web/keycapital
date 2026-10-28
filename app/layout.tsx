import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
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
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
