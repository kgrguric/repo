import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login'; 
import { AlbumPage } from './pages/album';
import authData from './data/auth';

test('Album Creation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(authData.login.credentials.username, authData.login.credentials.password);
  await expect(page.getByRole('heading', { name: 'karla8' })).toBeVisible();

  const albumPage = new AlbumPage(page);
  await albumPage.createAlbum('test', 'description');
  const imagePath = './tests/data/upload.jpeg';
  await albumPage.addPhotoToAlbum(imagePath, 'description');
  await albumPage.selectAlbum('test');
});