import path from 'path'

const prettify = (filenames) =>
	`npm run format ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')}`

const lint = (filenames) =>
	`npm run lint:fix ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')}`

const astroCheck = (filenames) =>
	`npm run astro-check ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')}`

const typeCheck = () => 'npm run type-check'

const config = {
	'*.astro': [astroCheck, prettify],
	'*.{css,scss,json,mdx,mdoc}': [prettify],
	'*.{js,jsx,ts,tsx}': [typeCheck, prettify, lint],
}

export default config
