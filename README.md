# Sarah Murcia — Portafolio

Portafolio personal one-page de **Sarah Murcia**, UX/UI Design Junior & Frontend Junior.
Diseñado en Figma, construido con Astro 5 + React 19 + Tailwind CSS v4. Deploy en Cloudflare Pages.

![Astro](https://img.shields.io/badge/Astro-5-FF5D01?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)

---

## Secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Hero** | Presentación, botón de CV y links sociales rápidos |
| 2 | **Proyectos** | Proyectos destacados y otros trabajos con imagen y tags |
| 3 | **Proceso** | Pasos del proceso de diseño UX (investigación → validación) |
| 4 | **Habilidades** | Herramientas y tecnologías agrupadas por categoría |
| 5 | **Contacto** | Links directos a LinkedIn, Email y WhatsApp |

---

## Stack

- **[Astro 5](https://astro.build)** — generación estática, componentes `.astro`
- **[React 19](https://react.dev)** — isla reactiva para interacción (nuevo JSX transform)
- **[Tailwind CSS v4](https://tailwindcss.com)** — utilidades + CSS custom properties
- **[Lucide React](https://lucide.dev)** — iconografía
- **[Cloudflare Pages](https://pages.cloudflare.com)** — hosting y CI/CD

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Crear variables de entorno (copiar el ejemplo)
cp .env.example .env

# Servidor de desarrollo → http://localhost:4321
npm run dev
```

### Variables de entorno

```env
PUBLIC_SITE_URL=https://tu-dominio.pages.dev
```

---

## Comandos

```bash
npm run dev           # Servidor de desarrollo
npm run build         # Build de producción → ./dist/
npm run preview       # Preview local del build

npm run lint          # ESLint en .js, .jsx, .astro
npm run lint:fix      # ESLint con auto-fix
npm run typecheck     # astro check (type checking)
npm run format        # Prettier --write
npm run format:check  # Prettier --check (solo verifica)
```

Pre-commit hook: `lint-staged` ejecuta Prettier + ESLint automáticamente en archivos staged.

---

## Estructura

```
src/
├── pages/
│   └── index.astro
├── layouts/
│   └── Layout.astro          # HTML shell, meta SEO, scripts inline
├── components/
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── ThemeController.astro
│   ├── MobileMenu.astro
│   ├── ui/
│   │   ├── Badge.astro
│   │   ├── SectionTitle.astro
│   │   └── SkipLink.astro
│   └── sections/
│       ├── Hero.astro
│       ├── Projects.astro
│       ├── Process.astro
│       ├── Skills.astro
│       └── Contact.astro
├── data/
│   ├── projects.js           # ← editar para actualizar proyectos
│   └── skills.js             # ← editar para actualizar habilidades
└── styles/
    └── global.css            # Variables CSS del brand kit (Figma)
```

---

## Personalización de contenido

Editar únicamente estos archivos para actualizar el contenido sin tocar el HTML:

| Archivo | Controla |
|---------|----------|
| `src/data/projects.js` | Proyectos: título, descripción, tags, imagen, links |
| `src/data/skills.js` | Habilidades agrupadas por categoría |
| `src/layouts/Layout.astro` | SEO global (title, description, Schema.org) |
| `src/components/sections/Hero.astro` | Nombre, rol, links sociales |
| `src/components/sections/Contact.astro` | LinkedIn, Email, WhatsApp |
| `src/components/Navbar.astro` | Links de navegación + botón CV |
| `src/components/Footer.astro` | Links sociales del footer |
| `public/cv-sarah-murcia.pdf` | CV descargable |

---

## Temas

- **Light** por defecto — fondos claros azul-gris, tipografía oscura
- **Dark** disponible — fondos navy, tipografía clara
- Toggle persistido en `localStorage` (clave `'theme'`)
- Script anti-FOUC en `Layout.astro` (se ejecuta antes del primer paint)

---

## Deploy en Cloudflare Pages

Secrets necesarios en **GitHub → Settings → Secrets**:

| Secret | Descripción |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Token de API de Cloudflare |
| `CLOUDFLARE_ACCOUNT_ID` | ID de cuenta de Cloudflare |
| `PUBLIC_SITE_URL` | URL pública del sitio (para canonical y OG tags) |

El pipeline completo está en [`.github/workflows/ci-deploy.yml`](.github/workflows/ci-deploy.yml).

---

## Licencia

© 2026 Sarah Murcia. Todos los derechos reservados.
