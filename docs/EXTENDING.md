# Guía de Extensión

Cómo agregar, cambiar o actualizar cualquier parte del portafolio.

---

## Agregar un nuevo proyecto

Editar [src/data/projects.js](../src/data/projects.js):

```js
{
  title: 'Mi Nuevo Proyecto',
  description: 'Descripción del proyecto y qué problema resuelve.',
  tags: ['Figma', 'React', 'UX Research'],
  github: 'https://github.com/Sarah-mp/repo',  // null si no hay
  demo: 'https://demo.example.com',             // null si no hay
  image: null,  // Reemplazar con: import img from '../assets/img/proyecto.png'
  featured: true,  // true = Proyectos destacados / false = Otros proyectos
}
```

No hay límite de proyectos. El grid se adapta automáticamente.

**Para agregar imagen:**
1. Copiar la imagen a `src/assets/img/`
2. Importarla al inicio de `projects.js`: `import imgProyecto from '../assets/img/proyecto.png'`
3. Asignarla en el objeto: `image: imgProyecto`

---

## Agregar una habilidad

Editar [src/data/skills.js](../src/data/skills.js):

```js
// Agregar a una categoría existente:
{ name: 'TypeScript', icon: 'code' }

// O crear una nueva categoría:
{ category: 'Nueva Categoría', items: [{ name: 'Tool', icon: 'terminal' }] }
```

Íconos disponibles (nombre → componente Lucide):
`figma`, `search`, `layers`, `palette`, `code`, `paintbrush`, `zap`, `atom`,
`github`, `kanban-square`, `git-branch`, `terminal`

Para agregar un ícono nuevo: importarlo en `Skills.astro` y agregarlo al `iconMap`.

---

## Cambiar la paleta de colores

Editar las variables CSS en [src/styles/global.css](../src/styles/global.css):

```css
:root {
  --color-primary:   #512907;  /* color principal — botones, links activos */
  --color-secondary: #98602F;  /* hover, acento */
  --color-accent:    #C4A484;  /* badges, detalles sutiles */
  /* ...etc */
}
```

Todos los componentes usan estas variables. Cambiar aquí afecta todo el sitio.
El tema dark tiene sus propias variables en `:root[data-theme='dark']`.

---

## Actualizar información personal

| Qué cambiar | Archivo |
|-------------|---------|
| Nombre en el navbar | [src/components/Navbar.astro](../src/components/Navbar.astro) — texto del logo |
| Email y links sociales del Hero | [src/components/sections/Hero.astro](../src/components/sections/Hero.astro) |
| Email y links sociales del Contacto | [src/components/sections/Contact.astro](../src/components/sections/Contact.astro) |
| Links sociales del Footer | [src/components/Footer.astro](../src/components/Footer.astro) |
| Title, description SEO | [src/layouts/Layout.astro](../src/layouts/Layout.astro) — constantes al inicio |
| Schema.org (LinkedIn, GitHub) | `Layout.astro` — objeto JSON-LD `sameAs` |
| Copyright footer | `Footer.astro` |

---

## Agregar una nueva sección

1. Crear `src/components/sections/MiSeccion.astro`:
   ```astro
   ---
   import SectionTitle from '../ui/SectionTitle.astro'
   ---
   <section id="mi-seccion" tabindex="-1" aria-label="Mi sección" class="py-20">
     <div class="container-custom">
       <SectionTitle badge="Badge" title="Título" subtitle="Subtítulo opcional" />
       <!-- contenido -->
     </div>
   </section>
   ```

2. Importar y agregar en [src/pages/index.astro](../src/pages/index.astro):
   ```astro
   import MiSeccion from '../components/sections/MiSeccion.astro'
   <!-- en el <main>: -->
   <MiSeccion />
   ```

3. Agregar el link al navbar en [src/components/Navbar.astro](../src/components/Navbar.astro):
   ```js
   { href: '#mi-seccion', label: 'Mi Sección', icon: IconLucide }
   ```
   El `MobileMenu` recibe `navLinks` por props y se actualiza automáticamente.

---

## Agregar imagen OG personalizada

1. Crear `public/og-image.png` de 1200×630px con tu diseño
2. Verificar que en `Layout.astro` la referencia sea `/og-image.png`
3. Para ver cómo se ve: usar [opengraph.xyz](https://www.opengraph.xyz) con la URL del sitio

---

## Actualizar favicons

Generar los cuatro formatos desde tu SVG/PNG con [realfavicongenerator.net](https://realfavicongenerator.net):
- `public/favicon.ico` — fallback (IE, legacy)
- `public/favicon.svg` — navegadores modernos
- `public/favicon-96x96.png` — Android Chrome PWA
- `public/apple-touch-icon.png` — iOS Safari (180×180px)

---

## Cambiar el servicio de formulario

El formulario usa Formspree por defecto. Para cambiarlo:

1. Actualizar `.env` con el nuevo endpoint
2. En [src/components/ContactForm.jsx](../src/components/ContactForm.jsx), editar el método `handleSubmit`:
   - Cambiar el `fetch` al nuevo endpoint
   - Ajustar el manejo de respuesta según la API del nuevo servicio

---

## Deploy en Cloudflare Pages

### Setup inicial (una sola vez)
1. Crear proyecto en [dash.cloudflare.com](https://dash.cloudflare.com) → Pages → Create project
2. Conectar el repositorio de GitHub
3. Configurar: Framework = Astro, Build command = `npm run build`, Output = `dist`
4. Agregar variable de entorno `PUBLIC_SITE_URL` con la URL asignada

### Deploy automático (GitHub Actions)
Agregar estos secrets en GitHub → Settings → Secrets and variables → Actions:
- `CLOUDFLARE_API_TOKEN` — crear en Cloudflare → My Profile → API Tokens
- `CLOUDFLARE_ACCOUNT_ID` — visible en el dashboard de Cloudflare (derecha)
- `PUBLIC_SITE_URL` — URL del sitio (ej: `https://portafolio.pages.dev`)

Flujo automático:
- Push a `main` → deploy a producción
- Pull Request → deploy de preview con URL única comentada en el PR

Ver [.github/workflows/ci-deploy.yml](../.github/workflows/ci-deploy.yml) para el pipeline completo.

---

## Actualizar sitemap y robots.txt

Cuando tengas el dominio definitivo:

1. [public/sitemap.xml](../public/sitemap.xml): reemplazar `https://tu-dominio.pages.dev/` con la URL real
2. [public/robots.txt](../public/robots.txt): actualizar la URL del sitemap
3. [src/layouts/Layout.astro](../src/layouts/Layout.astro): el canonical se genera automáticamente desde `PUBLIC_SITE_URL`
