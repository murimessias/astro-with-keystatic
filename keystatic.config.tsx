// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core'

export default config({
	storage: {
		kind: process.env.NODE_ENV === 'production' ? 'cloud' : 'local',
	},
	cloud: {
		project: 'murilo-messias/astro-with-keystatic',
	},
	collections: {
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'src/content/posts/*/',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.mdx({ label: 'Content' }),
			},
		}),
	},
})
