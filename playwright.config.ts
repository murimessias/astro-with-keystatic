import { defineConfig, devices } from '@playwright/test'

const PORT = process.env.PORT ?? '4321'

export default defineConfig({
	forbidOnly: !!process.env.CI,
	fullyParallel: true,
	reporter: 'html',
	retries: process.env.CI ? 2 : 0,
	testDir: '././src/tests/e2e',
	timeout: 15 * 1000,
	use: {
		baseURL: `http://localhost:${PORT}/`,
		trace: 'on-first-retry',
	},
	workers: process.env.CI ? 1 : undefined,
	// Browsers
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
	webServer: {
		command: 'npm run dev',
		env: {
			PORT,
		},
		port: Number(PORT),
		reuseExistingServer: !process.env.CI,
		stderr: 'pipe',
		stdout: 'pipe',
	},
})
