import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login'; 
import { SearchPage } from './pages/search';
import authData from './data/auth';

test('Correct Search', async ({ page }) => {
   const loginPage = new LoginPage(page);
  await loginPage.login(authData.login.credentials.username, authData.login.credentials.password);
  await expect(page.getByRole('heading', { name: 'karla8' })).toBeVisible();

  const searchPage = new SearchPage(page);
  await searchPage.search();
  
});