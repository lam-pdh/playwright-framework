import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AuthPage extends BasePage {
  readonly usernameInput = this.page.locator('#user_login');
  readonly passwordInput = this.page.locator('#user_pass');
  readonly submitButton = this.page.locator('#wp-submit');
  readonly loginError = this.page.locator('#login_error');

  constructor(page: Page) {
    super(page);
  }

  async openAdminLogin() {
    await this.page.goto('/wp-admin');
  }

  async fillCredentials(username: string, password: string) {
    await this.usernameInput.fill(username);
    await expect(this.usernameInput).toHaveValue(username);

    await this.passwordInput.fill(password);
    await expect(this.passwordInput).toHaveValue(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async login(username: string, password: string) {
    await this.fillCredentials(username, password);
    await this.submit();
  }

  async expectLoginError(message: string) {
    await expect(this.loginError).toContainText(message);
  }
}
