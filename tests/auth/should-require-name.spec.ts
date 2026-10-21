import { test, expect, openRegistration } from './registration';

test('should-require-name', async ({ page }) => {
  await openRegistration(page);
  await page.locator('#signupLastName').fill('Automation');
  await page.locator('#signupEmail').fill(`aqa-${Date.now()}@test.com`);
  await page.locator('#signupPassword').fill('Qauto1234');
  await page.locator('#signupRepeatPassword').fill('Qauto1234');
  await page.locator('#signupName').focus();
  await page.locator('#signupLastName').focus();

  await expect(page.getByText('Name required')).toBeVisible();
});
