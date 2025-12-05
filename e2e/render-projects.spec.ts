import { AxeBuilder } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('render projects', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Projects' }).click();
	await expect(page).toHaveURL('/projects');
	await expect(
		page.getByRole('heading', { name: 'In this page are listed my own notable projects' })
	).toBeVisible();
	await expect(page.getByText('More content coming soon...')).toBeVisible();

	const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
	expect(accessibilityScanResults.violations).toEqual([]);
});
