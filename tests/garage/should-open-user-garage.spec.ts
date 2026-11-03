import { test, expect } from './fixtures';

test('opens the garage for an authenticated user', async ({ userGaragePage }) => {
  await expect(userGaragePage.heading).toBeVisible();
});
