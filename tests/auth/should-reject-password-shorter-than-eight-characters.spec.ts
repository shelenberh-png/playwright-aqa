import { test, expect, openRegistration } from './registration';

test('should-reject-password-shorter-than-eight-characters', async ({ page }) => {
  await openRegistration(page);
  await page.locator('#signupName').fill('Aqa');
  await page.locator('#signupLastName').fill('Automation');
  await page.locator('#signupEmail').fill(`aqa-${Date.now()}@test.com`);
  await page.locator('#signupPassword').fill('Qa123');
  await page.locator('#signupRepeatPassword').fill('Qa123');
  await page.locator('#signupRepeatPassword').focus();

  await expect(page.getByText('Password has to be from 8 to 15 characters long')).toBeVisible();
});
