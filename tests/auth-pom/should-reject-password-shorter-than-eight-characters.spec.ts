import { test } from './fixtures';

test.describe('Registration', () => {
  test('should-reject-password-shorter-than-eight-characters', async ({ registrationPage }) => {
    // 1. Enter valid names and email, then a password shorter than eight characters and repeat it.
    await registrationPage.open();
    await registrationPage.name.fill('Aqa');
    await registrationPage.lastName.fill('Automation');
    await registrationPage.email.fill(`aqa-${Date.now()}@test.com`);
    await registrationPage.password.fill('Qa123');
    await registrationPage.repeatPassword.fill('Qa123');

    // 2. Move focus away from Password.
    await registrationPage.blur(registrationPage.password);
    await registrationPage.expectValidationMessage('Password has to be from 8 to 15 characters long');
  });
});
