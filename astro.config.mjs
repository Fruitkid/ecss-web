import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://Fruitkid.github.io',
  base: '/ECSS_website',
  
  integrations: [db(), sitemap(),
  tailwind({
    applyBaseStyles: false,
  }), react()]
});
