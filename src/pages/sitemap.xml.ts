import type { APIRoute } from 'astro'
import { getAbsoluteUrl } from '../config/site'

const getSitemapXml = (site?: URL) => {
  const homeUrl = getAbsoluteUrl('/', site).href
  const lastModified = new Date().toISOString().split('T')[0]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${homeUrl}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
}

export const GET: APIRoute = ({ site }) =>
  new Response(getSitemapXml(site), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
