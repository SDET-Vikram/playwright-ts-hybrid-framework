import { test, expect } from '../../src/fixtures/test.fixture';
import users from '../test-data/users.json';

test.describe('SauceDemo login', () => {
  test('allows a standard user to sign in', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(users.standardUser.username, users.standardUser.password);

    await expect(page).toHaveURL(/inventory\.html$/);
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
  });

  test('shows an error for invalid credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match',
    );
  });
});
