import { test } from './fixtures';

test.describe('Registration', () => {
  test('should-reject-password-without-required-character-types', async ({ registrationPage }) => {
    // 1. Enter valid names and email, then a password without the required character combination; repeat it.
    await registrationPage.open();
    await registrationPage.name.fill('Aqa');
    await registrationPage.lastName.fill('Automation');
    await registrationPage.email.fill(`aqa-${Date.now()}@test.com`);
    await registrationPage.password.fill('qauto1234');
    await registrationPage.repeatPassword.fill('qauto1234');

    // 2. Move focus away from Password.
    await registrationPage.blur(registrationPage.password);
    await registrationPage.expectValidationMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
  });
});
