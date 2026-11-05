# KeyCapital: sitio web

Rediseño de keycapitalchile.cl en Next.js (App Router, TypeScript, Tailwind CSS v4).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verificar antes de publicar
```

- Contenido (equipo, transacciones, prensa, clientes, contacto): `lib/data.ts`
- Textos en ambos idiomas: `lib/i18n.ts` · Contenido en inglés: `lib/contenido.ts` (las transacciones y medios tienen su inglés al lado en `lib/data.ts`)
- Rutas: español en `app/(es)/`, inglés en `app/(en)/en/` · Páginas: `components/pages/` · Componentes: `components/` · Imágenes: `public/`
