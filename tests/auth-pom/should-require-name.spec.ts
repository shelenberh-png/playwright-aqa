import { test } from './fixtures';

test.describe('Registration', () => {
  test('should-require-name', async ({ registrationPage }) => {
    // 1. Open Sign up and leave Name empty; fill the other fields with valid values.
    await registrationPage.open();
    await registrationPage.lastName.fill('Automation');
    await registrationPage.email.fill(`aqa-${Date.now()}@test.com`);
    await registrationPage.password.fill('Qauto1234');
    await registrationPage.repeatPassword.fill('Qauto1234');

    // 2. Move focus away from Name.
    await registrationPage.blur(registrationPage.name);
    await registrationPage.expectValidationMessage('Name required');
  });
});
