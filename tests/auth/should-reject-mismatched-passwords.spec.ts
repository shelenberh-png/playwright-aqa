import { test, expect, openRegistration } from './registration';

test('should-reject-mismatched-passwords', async ({ page }) => {
  await openRegistration(page);
  await page.locator('#signupName').fill('Aqa');
  await page.locator('#signupLastName').fill('Automation');
  await page.locator('#signupEmail').fill(`aqa-${Date.now()}@test.com`);
  await page.locator('#signupPassword').fill('Qauto1234');
  await page.locator('#signupRepeatPassword').fill('Qauto5678');
  await page.locator('#signupName').focus();

  await expect(page.getByText('Passwords do not match')).toBeVisible();
});
