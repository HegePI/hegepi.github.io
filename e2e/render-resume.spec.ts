import { AxeBuilder } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('render resume', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Resume' }).click();
	await expect(page).toHaveURL('/resume');
	await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();

	const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
	expect(accessibilityScanResults.violations).toEqual([]);
});
