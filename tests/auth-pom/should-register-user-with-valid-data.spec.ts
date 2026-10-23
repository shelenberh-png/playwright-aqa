import { test, expect } from './fixtures';

test.describe('Registration', () => {
  test('should-register-user-with-valid-data', async ({ page, registrationPage }) => {
    // 1. Open the Sign up dialog.
    await registrationPage.open();
    await expect(registrationPage.name).toBeVisible();
    await expect(registrationPage.lastName).toBeVisible();
    await expect(registrationPage.email).toBeVisible();
    await expect(registrationPage.password).toBeVisible();
    await expect(registrationPage.repeatPassword).toBeVisible();

    // 2. Enter valid values in all fields, using a unique email beginning with aqa-.
    await registrationPage.fillValidDetails();
    await expect(registrationPage.registerButton).toBeEnabled();

    // 3. Submit the registration form.
    await registrationPage.submit();
    await expect(page).toHaveURL(/\/panel\/garage/);
  });
});
