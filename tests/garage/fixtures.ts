import { test as base, expect } from '@playwright/test';
import { GaragePage } from './pages/garage-page';

type GarageFixtures = { userGaragePage: GaragePage };

export const test = base.extend<GarageFixtures>({
  userGaragePage: async ({ page }, use) => {
    const garagePage = new GaragePage(page);
    await garagePage.open();
    await use(garagePage);
  },
});

export { expect };
