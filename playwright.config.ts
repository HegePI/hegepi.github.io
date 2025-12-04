import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: true
	},
	testDir: 'e2e',
	retries: process.env.CI ? 2 : 0,
	use: {
		trace: 'on-first-retry'
	},
	reporter: 'html'
});
