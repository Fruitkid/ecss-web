import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Fruitkid.github.io',
  base: '/ECSS_website',
  integrations: [tailwind()]
});