import { test, expect, openRegistration } from './registration';

test('should-reject-name-with-invalid-characters', async ({ page }) => {
  await openRegistration(page);
  await page.locator('#signupName').fill('Aqa123');
  await page.locator('#signupLastName').fill('Automation');
  await page.locator('#signupEmail').fill(`aqa-${Date.now()}@test.com`);
  await page.locator('#signupPassword').fill('Qauto1234');
  await page.locator('#signupRepeatPassword').fill('Qauto1234');
  await page.locator('#signupLastName').focus();

  await expect(page.getByText('Name is invalid')).toBeVisible();
});
