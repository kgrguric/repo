import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login'; 
import authData from './data/auth';

test('Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(authData.invalidLogin.credentials.username, authData.invalidLogin.credentials.password);
  await expect(page.getByText('Invalid email, username or password')).toBeVisible();
});