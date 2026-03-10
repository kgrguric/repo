import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login'; 
import authData from './data/auth';

test('Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(authData.login.credentials.username, authData.login.credentials.password);
  await expect(page.getByRole('heading', { name: 'karla8' })).toBeVisible();
});