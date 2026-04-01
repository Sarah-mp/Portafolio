import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// PUBLIC_SITE_URL debe configurarse en Cloudflare Pages y localmente en .env
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  integrations: [react()],

  // Sin bloque i18n — portafolio en un solo idioma (español)
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare()
})