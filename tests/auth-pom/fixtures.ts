import { test as base, expect } from '@playwright/test';
import { RegistrationPage } from './pages/registration-page';

type AuthFixtures = { registrationPage: RegistrationPage };

export const test = base.extend<AuthFixtures>({
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
});

export { expect };
