import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async gotoRelative(path: string) {
    await this.page.goto(path);
  }

  async expectUrlContains(part: RegExp | string) {
    await expect(this.page).toHaveURL(part instanceof RegExp ? part : new RegExp(part));
  }
}
