import { z, defineCollection } from 'astro:content'

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		content: z.string(),
	}),
})

export const collections = {
	posts: postsCollection,
}
