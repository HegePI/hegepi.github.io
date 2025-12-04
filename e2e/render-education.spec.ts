import { test, expect } from '@playwright/test';

test('render education', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Education' }).click();
	await expect(page).toHaveURL('/education');
	await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
	await expect(page.getByText('Masters degree in computer')).toBeVisible();
});
