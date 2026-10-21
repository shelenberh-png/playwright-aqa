import { test, expect, openRegistration, fillValidRegistration } from './registration';

test('should-register-user-with-valid-data', async ({ page }) => {
  await openRegistration(page);
  await expect(page.locator('#signupName')).toBeVisible();
  await expect(page.locator('#signupLastName')).toBeVisible();
  await expect(page.locator('#signupEmail')).toBeVisible();
  await expect(page.locator('#signupPassword')).toBeVisible();
  await expect(page.locator('#signupRepeatPassword')).toBeVisible();

  await fillValidRegistration(page);
  await expect(page.getByRole('button', { name: 'Register' })).toBeEnabled();
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page).toHaveURL(/\/panel\/garage/);
});
