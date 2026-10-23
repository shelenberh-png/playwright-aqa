import { test } from './fixtures';

test.describe('Registration', () => {
  test('should-reject-name-shorter-than-two-characters', async ({ registrationPage }) => {
    // 1. Enter a one-character Name and valid values in the other fields.
    await registrationPage.open();
    await registrationPage.name.fill('A');
    await registrationPage.lastName.fill('Automation');
    await registrationPage.email.fill(`aqa-${Date.now()}@test.com`);
    await registrationPage.password.fill('Qauto1234');
    await registrationPage.repeatPassword.fill('Qauto1234');

    // 2. Move focus away from Name.
    await registrationPage.blur(registrationPage.name);
    await registrationPage.expectValidationMessage('Name has to be from 2 to 20 characters long');
  });
});
