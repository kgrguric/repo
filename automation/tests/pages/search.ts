import { Page, Locator } from '@playwright/test';

export class SearchPage {
  private readonly page: Page;
  private readonly searchTextbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTextbox = this.page.getByRole('textbox', { name: 'Search...' });
  }

  async search() {
    await this.page.getByRole('link', { name: 'Menu' }).first().click();
    await this.searchTextbox.click();
    await this.searchTextbox.fill('sea');
    await this.searchTextbox.press('Enter');
  }

  async incorrectSearch() {
    await this.page.getByRole('link', { name: 'Menu' }).first().click();
    await this.searchTextbox.click();
    await this.searchTextbox.fill('sea');
    await this.searchTextbox.press('Enter');
  }

  async clickSearchResultHeading(searchTerm: string) {
    await this.page.getByRole('heading', { name: `Search result for: '${searchTerm}'` }).click();
  }
}