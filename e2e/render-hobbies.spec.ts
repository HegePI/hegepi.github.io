import { test, expect } from '@playwright/test';

test('render hobbies', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Hobbies' }).click();
	await expect(page).toHaveURL('/hobbies');
	await expect(page.getByRole('heading', { name: 'List of my hobbies' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Golf' })).toBeVisible();
});
