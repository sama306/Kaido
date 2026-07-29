import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// TODO: Reemplazar por el dominio real cuando esté definido
const SITE_DOMAIN = 'https://kaido.cafe';

export default defineConfig({
  site: SITE_DOMAIN,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
