import { test } from './fixtures';

test.describe('Registration', () => {
  test('should-reject-invalid-email', async ({ registrationPage }) => {
    // 1. Enter valid names and passwords and an incorrectly formatted email.
    await registrationPage.open();
    await registrationPage.name.fill('Aqa');
    await registrationPage.lastName.fill('Automation');
    await registrationPage.email.fill('aqa-invalid-email');
    await registrationPage.password.fill('Qauto1234');
    await registrationPage.repeatPassword.fill('Qauto1234');

    // 2. Move focus away from Email.
    await registrationPage.blur(registrationPage.email);
    await registrationPage.expectValidationMessage('Email is incorrect');
  });
});
