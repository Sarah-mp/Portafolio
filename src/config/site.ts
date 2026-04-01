export const DEFAULT_SITE_URL = 'http://localhost:4321/'

export const SITE_NAME = 'Sarah Murcia'
export const SITE_TITLE = 'Sarah Murcia | UX/UI Designer & Frontend Developer'
export const SITE_DESCRIPTION =
  'Portafolio de Sarah Murcia, diseñadora UX/UI y frontend junior en Medellín. Proyectos de interfaces accesibles, diseño centrado en el usuario y desarrollo web con Figma, HTML, CSS, JavaScript y React.'
export const SITE_AUTHOR = SITE_NAME
export const SITE_ROLE = 'UX/UI Designer & Frontend Developer'
export const SITE_LOCALE = 'es_CO'
export const SITE_KEYWORDS = [
  'Sarah Murcia',
  'portafolio UX UI',
  'diseñadora UX UI junior',
  'frontend junior',
  'diseño de interfaces',
  'accesibilidad web',
  'Figma',
  'React',
  'Medellín',
]
export const SITE_OG_IMAGE_PATH = '/og-image.png'
export const SITE_OG_IMAGE_ALT =
  'Imagen social del portafolio de Sarah Murcia con enfoque en UX/UI y frontend.'
export const SOCIAL_LINKS = {
  github: 'https://github.com/Sarah-mp',
  linkedin: 'https://www.linkedin.com/in/sarah-murcia-prado-943435274/',
  email: 'mailto:sarah.murciapr@gmail.com',
  whatsapp: 'https://wa.me/573205782884',
}

export const getSiteUrl = (site?: URL) => site ?? new URL(DEFAULT_SITE_URL)

export const getAbsoluteUrl = (path: string, site?: URL) => new URL(path, getSiteUrl(site))
