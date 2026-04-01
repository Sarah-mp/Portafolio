// ─── Proyectos del portafolio ──────────────────────────────────────────────
// featured: true  → layout alternado grande (imagen + descripción)
// featured: false → grid de 3 columnas compacto
// accentColor: color del título y botón "Ver proyecto" de cada tarjeta

export const projects = [
  // ── PROYECTOS DESTACADOS ────────────────────────────────────────
  {
    title: 'Tu Civica',
    shortDescription:
      'Diseño UX/UI para la nueva experiencia móvil de la App Cívica del Metro de Medellín.',
    description:
      'Proyecto realizado para el Metro de Medellín. Participé en el proceso creativo, definición de flujos e interfaces de la nueva App Cívica, priorizando claridad, usabilidad y consistencia visual.',
    reference: 'Elcolombiano 12/02/26',
    tags: ['UX Design', 'UI Design', 'Figma', 'Prototipado'],
    demo: null,
    image: '/img/project-tu-civica.png',
    imageAlt: 'Pantallas de la App Cívica con recorridos, saldo y servicios del Metro de Medellín.',
    accentColor: '#61A210',
    featured: true,
  },
  {
    title: 'Reservas de salones',
    shortDescription:
      'Diseño de interfaz para una plataforma web de reserva de salones institucionales.',
    description:
      'Proyecto realizado para la Alcaldía de Medellín. Diseñé la propuesta de experiencia e interfaces para una plataforma web orientada a la reserva de salones, con foco en tareas rápidas y navegación simple.',
    reference: null,
    tags: ['UX Research', 'UI Design', 'Wireframing'],
    demo: null,
    image: '/img/project-reservas.png',
    imageAlt: 'Interfaz web de reservas con calendario, listado de espacios y flujo de selección.',
    accentColor: '#004884',
    featured: true,
  },
  {
    title: 'Proyecto universitario',
    shortDescription:
      'Rediseño académico de aplicaciones de transporte público con enfoque en usabilidad.',
    description:
      'Proyecto universitario enfocado en el rediseño de aplicaciones de transporte público en Medellín. Reorganicé la arquitectura de información, la jerarquía visual y los flujos de navegación para mejorar la experiencia general.',
    reference: null,
    tags: ['UX Research', 'UI Design', 'Rediseño'],
    demo: null,
    image: '/img/project-universitario.png',
    imageAlt:
      'Propuesta móvil de transporte público con mapas, rutas y jerarquía visual simplificada.',
    accentColor: '#1E7F7F',
    featured: true,
  },

  // ── OTROS PROYECTOS ────────────────────────────────────────────
  {
    title: 'Rediseño de plataforma universitaria',
    shortDescription:
      'Rediseño visual y funcional de una plataforma universitaria para tareas frecuentes.',
    description:
      'Propuesta de rediseño para una plataforma universitaria orientada a mejorar la comprensión del contenido, la navegación y la eficiencia en tareas recurrentes.',
    reference: null,
    tags: ['UX Design', 'UI Design', 'Figma'],
    demo: null,
    image: '/img/project-plataforma.png',
    imageAlt:
      'Pantalla de plataforma universitaria con módulos académicos y navegación reorganizada.',
    accentColor: '#2B7A5E',
    featured: false,
  },
  {
    title: 'App Lectora',
    shortDescription: 'Diseño de interfaz para una app lectora de tarjeta Cívica con soporte NFC.',
    description:
      'Aplicación móvil pensada para leer y activar el saldo de la tarjeta Cívica de forma rápida mediante NFC, con una experiencia simple y orientada a la acción principal.',
    reference: null,
    tags: ['UX Design', 'UI Design', 'Mobile'],
    demo: null,
    image: '/img/project-app-lectora.png',
    imageAlt: 'Pantallas de una app lectora de tarjeta Cívica con consulta y activación de saldo.',
    accentColor: '#61A210',
    featured: false,
  },
  {
    title: 'Reserva de cabañas',
    shortDescription: 'Diseño de una plataforma web para búsqueda y reserva de cabañas.',
    description:
      'Diseño de experiencia e interfaces para una plataforma de reserva de cabañas, enfocada en exploración visual, comparación rápida y claridad en el proceso de reserva.',
    reference: null,
    tags: ['UX Design', 'UI Design', 'Web'],
    demo: null,
    image: '/img/project-cabanas.png',
    imageAlt:
      'Interfaz web de reserva de cabañas con tarjetas de alojamiento, filtros y llamada a la acción.',
    accentColor: '#1E7F7F',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
