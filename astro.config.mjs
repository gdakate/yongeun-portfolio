import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://gdakate.github.io',
  base: '/yongeun-portfolio',
  integrations: [tailwind()],
})
