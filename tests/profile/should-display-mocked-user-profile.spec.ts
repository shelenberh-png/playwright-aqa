import { test, expect } from '@playwright/test';

test.describe('User profile', () => {
  test('displays the user data returned by the mocked profile response', async ({ page }) => {
    const mockedProfile = {
      status: 'ok',
      data: {
        userId: 'mock-user-id',
        photoFilename: 'default-user.png',
        name: 'Mocked',
        lastName: 'Profile',
      },
    };

    // Replace the profile API response with a known user before opening the profile page.
    await page.route('**/api/users/profile', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockedProfile),
      });
    });

    // Open the authenticated user's profile page.
    await page.goto('/panel/profile');

    // Verify the profile page displays the name and surname from the mocked response.
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
    await expect(page.getByText('Mocked Profile', { exact: true })).toBeVisible();
  });
});
