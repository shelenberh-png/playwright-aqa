import { expect, type Locator, type Page } from '@playwright/test';

export class GaragePage {
  readonly heading: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Garage' });
  }

  async open() {
    await this.page.goto('/panel/garage');
    await expect(this.heading).toBeVisible();
  }
}
