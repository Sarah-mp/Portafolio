// ─── Proyectos del portafolio ──────────────────────────────────────────────
// featured: true  → layout alternado grande (imagen + descripción)
// featured: false → grid de 3 columnas compacto
// accentColor: color del título y botón "Ver proyecto" de cada tarjeta

export const projects = [
  // ── PROYECTOS DESTACADOS ────────────────────────────────────────
  {
    title: 'Tu Civica',
    shortDescription: 'Diseñadora de las interfaces de este aplicativo movil.',
    description:
      'Proyecto realizado para el Metro de Medellín, en este proyecto realice el proceso creativo y las interfaces que se usaron para la creación de la nueva app cívica del Metro de Medellín',
    reference: 'Elcolombiano 12/02/26',
    tags: ['UX Design', 'UI Design', 'Figma', 'Prototipado'],
    demo: null,
    image: '/img/project-tu-civica.png',
    accentColor: '#3D9B4A',
    featured: true,
  },
  {
    title: 'Reservas de salones',
    shortDescription: 'Diseñadora de las interfaces de este aplicativo web.',
    description:
      'Proyecto realizado para la Alcaldia de Medellín, en este proyecto realice el proceso creativo y las interfaces propuestas para que se desarrollara una pagina web, para la reserva de unos salones que tiene la Alcaldia de Medellín.',
    reference: null,
    tags: ['UX Research', 'UI Design', 'Wireframing'],
    demo: null,
    image: '/img/project-reservas.png',
    accentColor: '#0D3B8C',
    featured: true,
  },
  {
    title: 'Proyecto universitario',
    shortDescription: 'Diseñadora de las interfaces de este aplicativo movil.',
    description:
      'Este proyecto es un rediseño de aplicativos de transporte publico en medellín, para este rediseño se escogieron 2 aplicativos y se realizo una restrucutración y jerarquia de la información y sus flujos de navegación.',
    reference: null,
    tags: ['UX Research', 'UI Design', 'Rediseño'],
    demo: null,
    image: '/img/project-universitario.png',
    accentColor: '#0D7A6A',
    featured: true,
  },

  // ── OTROS PROYECTOS ────────────────────────────────────────────
  {
    title: 'Rediseño de plataforma universitaria',
    shortDescription: 'Diseñadora de las interfaces para esta página web.',
    description: 'Rediseño de plataforma universitaria para mejorar la experiencia de usuarios.',
    reference: null,
    tags: ['UX Design', 'UI Design', 'Figma'],
    demo: null,
    image: '/img/project-plataforma.png',
    accentColor: '#2B7A5E',
    featured: false,
  },
  {
    title: 'App Lectora',
    shortDescription:
      'Diseñadora de las interfaces de este aplicativo movil, para el metro de medellín.',
    description:
      'Aplicativo lector de tarjeta Cívica. Lee y activa el saldo de tu tarjeta de forma rápida con NFC.',
    reference: null,
    tags: ['UX Design', 'UI Design', 'Mobile'],
    demo: null,
    image: '/img/project-app-lectora.png',
    accentColor: '#3D9B4A',
    featured: false,
  },
  {
    title: 'Reserva de cabañas',
    shortDescription: 'Diseñadora de las interfaces para esta página web.',
    description:
      'Diseño de plataforma web para reserva de cabañas con experiencia de usuario optimizada.',
    reference: null,
    tags: ['UX Design', 'UI Design', 'Web'],
    demo: null,
    image: '/img/project-cabanas.png',
    accentColor: '#0D7A6A',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
