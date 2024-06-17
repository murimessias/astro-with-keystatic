import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mm-astro-keystatic.netlify.app/',
  integrations: [keystatic(), markdoc(), react(), tailwind(), mdx(), sitemap()],
  output: 'hybrid',
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-macchiato'
    }
  },
  adapter: netlify()
});