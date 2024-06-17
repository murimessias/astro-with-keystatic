import { test, expect } from '@playwright/test'

test('meta', async ({ page }) => {
	await page.goto('/')
	await expect(page).toHaveTitle('Astro with Keystatic')
})
