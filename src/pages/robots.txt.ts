import type { APIRoute } from 'astro'
import { getAbsoluteUrl } from '../config/site'

const getRobotsTxt = (site?: URL) => `User-agent: *
Allow: /

Sitemap: ${getAbsoluteUrl('/sitemap.xml', site).href}
`

export const GET: APIRoute = ({ site }) =>
  new Response(getRobotsTxt(site), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
