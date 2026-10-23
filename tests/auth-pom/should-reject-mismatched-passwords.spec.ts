import { test } from './fixtures';

test.describe('Registration', () => {
  test('should-reject-mismatched-passwords', async ({ registrationPage }) => {
    // 1. Enter valid names, email, and password, then enter a different value in Re-enter password.
    await registrationPage.open();
    await registrationPage.name.fill('Aqa');
    await registrationPage.lastName.fill('Automation');
    await registrationPage.email.fill(`aqa-${Date.now()}@test.com`);
    await registrationPage.password.fill('Qauto1234');
    await registrationPage.repeatPassword.fill('Qauto5678');

    // 2. Move focus away from Re-enter password.
    await registrationPage.blur(registrationPage.repeatPassword);
    await registrationPage.expectValidationMessage('Passwords do not match');
  });
});
