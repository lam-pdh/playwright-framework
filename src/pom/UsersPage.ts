import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class UsersPage extends BasePage {
  readonly userLoginInput = this.page.locator('#user_login');
  readonly emailInput = this.page.locator('#email');
  readonly firstNameInput = this.page.locator('#first_name');
  readonly lastNameInput = this.page.locator('#last_name');
  readonly passwordInput = this.page.locator('#pass1');
  readonly weakConfirmCheckbox = this.page.locator('//input[@type="checkbox" and  @name="pw_weak"]');
  readonly roleSelect = this.page.locator('#role');
  readonly createUserButton = this.page.locator('#createusersub');
  readonly message = this.page.locator('#message');

  readonly searchInput = this.page.locator('#user-search-input');
  readonly searchSubmit = this.page.locator('#search-submit');
  readonly usersTable = this.page.locator('#the-list');
  readonly deleteLink = this.page.locator('//span[@class="delete"]');
  readonly deleteOptionReassign = this.page.locator('#delete_option0');
  readonly submitDeleteButton = this.page.locator('#submit');

  async createUser(options: {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: 'Editor' | 'Subscriber';
  }) {
    await this.userLoginInput.fill(options.username);
    await this.emailInput.fill(options.email);
    await this.firstNameInput.fill(options.firstName);
    await this.lastNameInput.fill(options.lastName);
    await this.passwordInput.fill(options.password);
    await this.weakConfirmCheckbox.check();
    await this.roleSelect.selectOption(options.role);

    await this.createUserButton.click();
  }

  async expectUserCreated() {
    await expect(this.message).toContainText('New user created.');
  }

  async searchAndDeleteUser(username: string) {
    await this.searchInput.fill(username);
    await this.searchSubmit.click();
    await this.usersTable.hover();
    await this.deleteLink.click();

    if (await this.deleteOptionReassign.isVisible()) {
      await this.deleteOptionReassign.check();
    }
    await this.submitDeleteButton.click();

    await expect(this.message).toContainText('User deleted.');
  }
}
