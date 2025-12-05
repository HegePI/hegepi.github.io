import { AxeBuilder } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('render frontpage', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
	await expect(page.locator('h1')).toHaveText('Welcome to my portfolio!');

	const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
	expect(accessibilityScanResults.violations).toEqual([]);
});
