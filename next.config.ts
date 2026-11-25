import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // No anunciar que el sitio está hecho con Next.js.
  poweredByHeader: false,
  // Cabeceras de seguridad para todas las páginas.
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Nadie puede meter el sitio dentro de otra página (clickjacking).
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  // Equipo pasó a llamarse Quiénes somos: los enlaces antiguos siguen funcionando.
  redirects() {
    return [
      { source: "/equipo", destination: "/quienes-somos", permanent: true },
      { source: "/en/team", destination: "/en/about", permanent: true },
      { source: "/que-hacemos", destination: "/#que-hacemos", permanent: false },
      { source: "/en/what-we-do", destination: "/en#que-hacemos", permanent: false },
    ];
  },
  partialPrefetching: true,
  experimental: {
    // Hay dos layouts raíz (español e inglés): el 404 no puede depender de uno.
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
