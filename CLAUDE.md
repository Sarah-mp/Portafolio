# CLAUDE.md — Instrucciones para Claude Code

## Proyecto

Portafolio personal one-page de **Sarah Murcia** (UX/UI Design Junior & Frontend Junior).
Stack: **Astro 5 + React 19 + Tailwind CSS v4**. Deploy en **Cloudflare Pages**.
Un solo idioma (español), una sola página con smooth scroll.

---

## Comandos

```bash
npm run dev          # Servidor de desarrollo → http://localhost:4321
npm run build        # Build de producción en ./dist/
npm run preview      # Preview local del build
npm run lint         # ESLint en .js, .jsx, .astro
npm run lint:fix     # ESLint con auto-fix
npm run typecheck    # astro check (type checking)
npm run format       # Prettier --write (formatea todo)
npm run format:check # Prettier --check (solo verifica)
```

Pre-commit hook: `lint-staged` ejecuta Prettier + ESLint en archivos staged.

---

## Arquitectura

```
src/pages/index.astro
  └─ layouts/Layout.astro         (HTML shell, meta tags SEO, scripts inline)
       ├─ components/Navbar.astro
       ├─ components/sections/Hero.astro
       ├─ components/sections/Projects.astro
       ├─ components/sections/Process.astro
       ├─ components/sections/Skills.astro
       ├─ components/sections/Contact.astro
       │    └─ components/ContactForm.jsx  (isla React, client:load)
       └─ components/Footer.astro
```

---

## Dónde están los datos

Editar **solo estos archivos** para actualizar contenido sin tocar HTML:

| Archivo | Qué controla |
|---------|-------------|
| `src/data/projects.js` | Proyectos (título, descripción, tags, links) |
| `src/data/skills.js` | Habilidades agrupadas por categoría |
| `src/layouts/Layout.astro` | SEO global (title, description, Schema.org) |
| `src/components/Footer.astro` | Links sociales del footer |
| `src/components/Navbar.astro` | Links del navbar + botón CV |
| `src/components/sections/Hero.astro` | Nombre, rol, links sociales hero |
| `src/components/sections/Contact.astro` | Email, LinkedIn, WhatsApp de contacto |

---

## Sistema de temas

- **Light** por defecto (`data-theme="light"` en `<html>`)
- **Dark** opcional (`data-theme="dark"`)
- Toggle en `src/components/ThemeController.astro`
- Persiste en `localStorage` con clave `'theme'`
- Variables CSS en `src/styles/global.css` bajo `:root` y `:root[data-theme='dark']`
- Script anti-FOUC en `Layout.astro` (se ejecuta antes del primer paint)

---

## Patrones importantes

- **`data-site-header`** en el `<nav>` → el script de smooth scroll lo usa para calcular el offset
- **`data-section-link={href}`** en cada `<a>` del navbar → IntersectionObserver lo usa para marcar el link activo con clase `is-active`
- **`tabindex="-1"`** en cada `<section>` → el skip link puede hacer focus programático
- **`client:load`** en `ContactForm.jsx` → hidrata React inmediatamente al cargar la página
- **`is:inline`** en scripts de `Layout.astro` → se inyectan directamente en el HTML sin bundling

---

## Estilo de código

- Sin semicolons, single quotes, trailingComma es5
- ESLint: StandardJS + Astro + React/Hooks/A11y
- `react/prop-types: off` (no se usan PropTypes)
- No importar React en JSX (React 19 con nuevo JSX transform)
- Prettier a 100 chars de ancho

---

## Variables de entorno

```
PUBLIC_SITE_URL              # URL del sitio (para canonical y OG)
PUBLIC_FORMSPREE_ENDPOINT    # Endpoint de Formspree para el formulario
```

Crear `.env` local (no commitear) copiando `.env.example`.

---

## Deploy en Cloudflare Pages

Secrets necesarios en GitHub → Settings → Secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `PUBLIC_SITE_URL`

Ver `.github/workflows/ci-deploy.yml` para el pipeline completo.
Documentación: `docs/EXTENDING.md` → sección "Deploy".
