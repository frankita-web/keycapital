import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
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
