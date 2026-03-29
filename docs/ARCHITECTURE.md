# Arquitectura del Proyecto

## Visión General

Portafolio one-page estático generado con **Astro 5** (SSG).
Una sola página HTML con todas las secciones accesibles mediante smooth scroll y anchor links.

---

## Flujo de Build

```
src/pages/index.astro
      ↓ importa
src/layouts/Layout.astro     → HTML shell, meta tags SEO, scripts inline
      ↓ slot recibe
src/components/Navbar.astro
src/components/sections/*.astro  → secciones estáticas (sin JS en cliente)
src/components/ContactForm.jsx   → isla React (hydratada con client:load)
src/components/Footer.astro
      ↓ astro build genera
dist/
  index.html           → HTML estático completo
  assets/              → JS/CSS con hash en el nombre (cache inmutable)
  _headers             → copiado de public/ para Cloudflare Pages
  _redirects           → copiado de public/
  robots.txt
  sitemap.xml
  favicon.*
```

---

## Decisiones Técnicas

### Por qué Astro (no Next.js / Vite puro)
Astro genera HTML completamente estático por defecto (SSG). Para un portafolio donde
el contenido no cambia frecuentemente, esto significa:
- Tiempo de carga mínimo (cero JavaScript en secciones estáticas)
- SEO óptimo (contenido en el HTML, no renderizado en cliente)
- Deploy trivial: cualquier CDN sirve una carpeta de archivos estáticos

### Por qué React solo para el formulario
El formulario de contacto necesita estado reactivo: valores, errores de validación,
estado de envío (idle/submitting/success/error). React con `useState/useMemo` es la
herramienta correcta para esto.

`client:load` hidrata el componente inmediatamente al cargar la página, lo que es
correcto para el formulario (el usuario puede necesitarlo en cualquier momento).

El resto de componentes son Astro puro (sin JS en cliente), lo que mantiene el bundle
de JavaScript mínimo.

### Por qué datos separados en `src/data/`
Permite actualizar el contenido (proyectos, habilidades) sin tocar los templates HTML.
Es claro para future-self y colaboradores dónde editar cada cosa.

### Por qué scripts `is:inline` en Layout
Los scripts de smooth scroll e IntersectionObserver deben:
1. Ejecutarse en todos los navegadores sin depender del bundling de Astro
2. Estar disponibles tan pronto como el DOM esté listo

`is:inline` los inyecta directamente en el HTML. El script de tema va primero en el
`<head>` para evitar FOUC (Flash of Unstyled Content) al cambiar de tema.

### Por qué Tailwind CSS v4 (no CSS modules o styled-components)
Tailwind v4 con el plugin de Vite (`@tailwindcss/vite`) procesa las clases directamente
sin archivo de configuración. Las variables CSS custom (`--color-primary`, etc.) se
definen en `global.css` y se referencian en Tailwind con la sintaxis `text-(--var)`.

---

## Estructura CSS

```css
/* src/styles/global.css */
@import 'tailwindcss';          /* Tailwind v4 — sin tailwind.config.js */

:root { /* variables tema claro (default) */ }
:root[data-theme='dark'] { /* variables tema oscuro */ }

/* Clases base: .container-custom, .skip-link, :focus-visible, etc. */
```

Los componentes usan clases Tailwind para layout/spacing y variables CSS para colores/temas.
No se usa BEM ni CSS modules.

---

## Accesibilidad

| Patrón | Implementación |
|--------|---------------|
| Skip link | `SkipLink.astro` → primer elemento del `<body>`, va a `#hero` |
| Focus sections | `tabindex="-1"` en cada `<section>` para focus programático |
| Landmarks ARIA | `role="main"`, `role="navigation"`, `role="contentinfo"` |
| Active nav link | Clase `is-active` aplicada por IntersectionObserver |
| Form validation | `aria-invalid`, `aria-describedby`, `role="alert"` en errores |
| Images | `alt` descriptivo; decorativas con `alt=""` + `aria-hidden="true"` |
| External links | `rel="noopener noreferrer"` + `aria-label` con "(abre en nueva pestaña)" |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` en `global.css` |

---

## SEO

| Elemento | Ubicación |
|----------|-----------|
| Title, description, canonical | `src/layouts/Layout.astro` (constantes al inicio) |
| Open Graph | `Layout.astro` — meta og:* |
| Twitter Card | `Layout.astro` — meta twitter:* |
| Schema.org Person | `Layout.astro` — `<script type="application/ld+json">` |
| sitemap.xml | `public/sitemap.xml` — actualizar URL cuando se tenga dominio definitivo |
| robots.txt | `public/robots.txt` — actualizar URL del sitemap |
| Favicons | `public/` — `.ico`, `.svg`, `-96x96.png`, `apple-touch-icon.png` |
| OG Image | `public/og-image.png` — 1200x630px, reemplazar con diseño definitivo |
