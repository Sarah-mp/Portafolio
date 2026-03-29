// ─── Proyectos del portafolio ──────────────────────────────────────────────
// Editar este archivo para actualizar la sección de proyectos.
// featured: true  →  aparece en "Proyectos destacados" (grid principal)
// featured: false →  aparece en "Otros proyectos" (grid secundario)
// demo: null      →  no se muestra botón de demo

export const projects = [
  // ── PROYECTOS DESTACADOS ────────────────────────────────────────
  {
    title: 'Tu Cívica',
    description:
      'App de transporte público para Medellín. Permite consultar el estado de las líneas del Metro, Metro Cable, Tranvía y Bus, gestionar la tarjeta Cívica y ver movimientos.',
    tags: ['UX Design', 'UI Design', 'Figma', 'Prototipado'],
    github: null,
    demo: null,
    image: null, // Reemplazar con: import imageTuCivica from '../assets/img/tu-civica.png'
    featured: true,
  },
  {
    title: 'Reservas de Salones',
    description:
      'Proyecto universitario — sistema de reserva de salones con flujo de selección, confirmación y notificación para estudiantes y administradores.',
    tags: ['UX Research', 'UI Design', 'Wireframing'],
    github: null,
    demo: null,
    image: null,
    featured: true,
  },

  // ── OTROS PROYECTOS ────────────────────────────────────────────
  {
    title: 'Proyecto 3',
    description: 'Descripción del tercer proyecto. Editar en src/data/projects.js.',
    tags: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sarah-mp',
    demo: null,
    image: null,
    featured: false,
  },
]

// Exporta separados por categoría para facilitar el render en Projects.astro
export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
