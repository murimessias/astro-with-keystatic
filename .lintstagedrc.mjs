import path from 'path'

const prettify = (filenames) =>
	`npm run format ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')}`

const lint = (filenames) =>
	`npm run lint:fix ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')}`

const typeCheck = () => 'npm run type-check'

const config = {
	'*.{js,jsx,ts,tsx,astro}': [typeCheck, prettify, lint],
	'*.{css,scss,json,mdx,mdoc}': [prettify],
}

export default config
