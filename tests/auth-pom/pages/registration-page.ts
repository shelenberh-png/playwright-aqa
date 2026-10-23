import { expect, type Locator, type Page } from '@playwright/test';

export class RegistrationPage {
  readonly name: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly repeatPassword: Locator;
  readonly registerButton: Locator;

  constructor(private readonly page: Page) {
    this.name = page.locator('#signupName');
    this.lastName = page.locator('#signupLastName');
    this.email = page.locator('#signupEmail');
    this.password = page.locator('#signupPassword');
    this.repeatPassword = page.locator('#signupRepeatPassword');
    this.registerButton = page.getByRole('button', { name: 'Register' });
  }

  async open() {
    await this.page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await this.page.getByRole('button', { name: 'Sign up' }).click();
    await expect(this.page.getByRole('heading', { name: 'Registration' })).toBeVisible();
  }

  async fillValidDetails() {
    await this.name.fill('Aqa');
    await this.lastName.fill('Automation');
    await this.email.fill(`aqa-${Date.now()}-${Math.random().toString(36).slice(2, 8)}@test.com`);
    await this.password.fill('Qauto1234');
    await this.repeatPassword.fill('Qauto1234');
  }

  async submit() {
    await this.registerButton.click();
  }

  async blur(locator: Locator) {
    await locator.focus();
    await locator.press('Tab');
  }

  async expectValidationMessage(message: string) {
    await expect(this.page.getByText(message).first()).toBeVisible();
  }
}
