import { Page, Locator } from '@playwright/test';

export class AlbumPage {
  private readonly createAlbumButton: Locator;
  private readonly albumNameInput: Locator;
  private readonly albumDescriptionInput: Locator;
  private readonly saveAlbumButton: Locator;
  private readonly photoPlaceholderIcon: Locator;
  private readonly uploadImageButton: Locator;
  private readonly photoDescriptionInput: Locator;
  private readonly uploadButton: Locator;
  private readonly deleteButton: Locator;

  constructor(private page: Page) {
    this.createAlbumButton = this.page.getByRole('button', { name: 'Create Album' });
    this.albumNameInput = this.page.getByRole('textbox', { name: 'Album Name' });
    this.albumDescriptionInput = this.page.getByRole('textbox', { name: 'Description' });
    this.saveAlbumButton = this.page.getByRole('button', { name: 'Save album' });
    this.photoPlaceholderIcon = this.page.locator('.placeholder__icon');
    this.uploadImageButton = this.page.getByText('Upload image');
    this.photoDescriptionInput = this.page.getByRole('textbox', { name: 'Description' });
    this.uploadButton = this.page.getByRole('button', { name: 'Upload' });
    this.deleteButton = this.page.getByRole('button', { name: 'Delete' });
  }

  async createAlbum(name: string, description: string) {
    await this.createAlbumButton.click();
    await this.albumNameInput.fill(name);
    await this.albumDescriptionInput.fill(description);
    await this.saveAlbumButton.click();
  }

  async uploadPhoto(filePath: string, description: string) {
    await this.photoPlaceholderIcon.click();
    await this.uploadImageButton.click();
    await this.page.locator('input[type="file"]').setInputFiles(filePath);
    await this.photoDescriptionInput.fill(description);
    await this.uploadButton.click();
  }

  async selectAlbum(name: string) {
    await this.page.getByText(name).click();
  }

async addPhotoToAlbum(filePath: string, description: string) {
    await this.photoPlaceholderIcon.click();
    await this.uploadImageButton.click();
    await this.page.locator('input[type="file"]').setInputFiles(filePath);
    await this.photoDescriptionInput.fill(description);
    await this.uploadButton.click();
  }

}