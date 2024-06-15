import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [keystatic(), markdoc(), react(), tailwind(), mdx()],
  output: 'hybrid'
});