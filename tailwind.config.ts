import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [typographyPlugin],
}

export default tailwindConfig
