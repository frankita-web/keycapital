import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 | KeyCapital",
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={inter.className}>
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6 text-center text-white">
        <h1 className="text-2xl">Página no encontrada · Page not found</h1>
        <p className="flex gap-6 text-sm">
          <Link href="/" className="underline underline-offset-4">
            Ir al inicio
          </Link>
          <Link href="/en" className="underline underline-offset-4">
            Go to home
          </Link>
        </p>
      </body>
    </html>
  );
}
