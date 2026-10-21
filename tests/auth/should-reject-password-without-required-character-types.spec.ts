import { test, expect, openRegistration } from './registration';

test('should-reject-password-without-required-character-types', async ({ page }) => {
  await openRegistration(page);
  await page.locator('#signupName').fill('Aqa');
  await page.locator('#signupLastName').fill('Automation');
  await page.locator('#signupEmail').fill(`aqa-${Date.now()}@test.com`);
  await page.locator('#signupPassword').fill('qauto1234');
  await page.locator('#signupRepeatPassword').fill('qauto1234');
  await page.locator('#signupRepeatPassword').focus();

  await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
});
