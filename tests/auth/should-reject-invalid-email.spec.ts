import { test, expect, openRegistration } from './registration';

test('should-reject-invalid-email', async ({ page }) => {
  await openRegistration(page);
  await page.locator('#signupName').fill('Aqa');
  await page.locator('#signupLastName').fill('Automation');
  await page.locator('#signupEmail').fill('aqa-invalid-email');
  await page.locator('#signupPassword').fill('Qauto1234');
  await page.locator('#signupRepeatPassword').fill('Qauto1234');
  await page.locator('#signupPassword').focus();

  await expect(page.getByText('Email is incorrect')).toBeVisible();
});
