import { test, expect } from '@playwright/test'

const title = 'Astro with Keystatic'
const description = 'A blog with Astro and Keystatic'

test.describe('meta tags', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test('ensure page has global metadata', async ({ page }) => {
		const charsetEl = page.locator('meta[charset]')
		await expect(charsetEl).toHaveAttribute('charset', 'utf-8')

		const viewportEl = page.locator('meta[name="viewport"]')
		await expect(viewportEl).toHaveAttribute(
			'content',
			'width=device-width,initial-scale=1',
		)

		const faviconEl = page.locator('link[rel="icon"]')
		await expect(faviconEl).toHaveAttribute('href', '/favicon.svg')
	})

	test('ensure page has primary meta tags', async ({ page }) => {
		await expect(page).toHaveTitle(title)

		const titleEl = page.locator('meta[name="title"]')
		await expect(titleEl).toHaveAttribute('content', title)

		const descriptionEl = page.locator('meta[name="description"]')
		await expect(descriptionEl).toHaveAttribute('content', description)
	})

	test('ensure page has open graph and facebook meta tags', async ({
		page,
	}) => {
		const ogTypeEl = page.locator('meta[property="og:type"]')
		await expect(ogTypeEl).toHaveAttribute('content', 'website')

		const ogUrlEl = page.locator('meta[property="og:url"]')
		await expect(ogUrlEl).toHaveAttribute('content', page.url())

		const ogTitleEl = page.locator('meta[property="og:title"]')
		await expect(ogTitleEl).toHaveAttribute('content', title)

		const descriptionEl = page.locator('meta[property="og:description"]')
		await expect(descriptionEl).toHaveAttribute('content', description)
	})

	test('ensure page has twitter meta tags', async ({ page }) => {
		const twitterCardEl = page.locator('meta[property="twitter:card"]')
		await expect(twitterCardEl).toHaveAttribute(
			'content',
			'summary_large_image',
		)

		const twitterUrlEl = page.locator('meta[property="twitter:url"]')
		await expect(twitterUrlEl).toHaveAttribute('content', page.url())

		const twitterTitleEl = page.locator('meta[property="twitter:title"]')
		await expect(twitterTitleEl).toHaveAttribute('content', title)

		const twitterDescriptionEl = page.locator(
			'meta[property="twitter:description"]',
		)
		await expect(twitterDescriptionEl).toHaveAttribute('content', description)
	})
})
