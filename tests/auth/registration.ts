import { expect, test } from '@playwright/test';

export { test, expect };

export const registrationUrl = '/';

export async function openRegistration(page: import('@playwright/test').Page) {
  await page.goto(registrationUrl);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();
}

export async function fillValidRegistration(page: import('@playwright/test').Page) {
  await page.locator('#signupName').fill('Aqa');
  await page.locator('#signupLastName').fill('Automation');
  await page.locator('#signupEmail').fill(`aqa-${Date.now()}-${Math.random().toString(36).slice(2, 8)}@test.com`);
  await page.locator('#signupPassword').fill('Qauto1234');
  await page.locator('#signupRepeatPassword').fill('Qauto1234');
}
