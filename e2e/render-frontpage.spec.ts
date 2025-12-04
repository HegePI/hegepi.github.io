import { expect, test } from '@playwright/test';

test('home page has expected h1 with expected content', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
	await expect(page.locator('h1')).toHaveText('Welcome to my portfolio!');
});
