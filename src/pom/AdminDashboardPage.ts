import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminDashboardPage extends BasePage {
  readonly headingDashboard = this.page.locator('//h1[text()="Dashboard"]');

  // admin bar
  readonly newContent = this.page.locator('#wp-admin-bar-new-content');
  readonly newUser = this.page.locator('#wp-admin-bar-new-user');
  readonly myAccount = this.page.locator('#wp-admin-bar-my-account');
  readonly logoutLink = this.page.locator('#wp-admin-bar-logout');

  // left menus
  readonly menuDashboard = this.page.locator('#menu-dashboard');
  readonly menuPosts = this.page.locator('#menu-posts');
  readonly menuMedia = this.page.locator('#menu-media');
  readonly menuPages = this.page.locator('#menu-pages');
  readonly menuComments = this.page.locator('#menu-comments');
  readonly menuAppearance = this.page.locator('#menu-appearance');
  readonly menuPlugins = this.page.locator('#menu-plugins');
  readonly menuUsersProfile = this.page.locator('//*[@id="menu-users"]/a[contains(@href, "profile.php")]');
  readonly menuUsersAll = this.page.locator('//*[@id="menu-users"]/a[contains(@href, "users.php")]');
  readonly menuTools = this.page.locator('#menu-tools');

  readonly menuUsersRoot = this.page.locator('#menu-users');

  constructor(page: Page) {
    super(page);
  }

  async expectDashboardVisible() {
    await expect(this.page).toHaveURL(/.*wp-admin/);
    await expect(this.headingDashboard).toHaveText('Dashboard');
  }

  async openNewUserForm() {
    await this.newContent.hover();
    await this.newUser.click();
  }

  async openUsersList() {
    await this.menuUsersRoot.click();
  }

  async logout() {
    await this.myAccount.hover();
    await this.logoutLink.click();
  }

  // Permissions expectations
  async expectEditorMenus() {
    await expect(this.menuDashboard).toBeVisible();
    await expect(this.menuPosts).toBeVisible();
    await expect(this.menuMedia).toBeVisible();
    await expect(this.menuPages).toBeVisible();
    await expect(this.menuComments).toBeVisible();
    await expect(this.menuUsersProfile).toBeVisible();
    await expect(this.menuTools).toBeVisible();

    await expect(this.menuAppearance).toBeHidden();
    await expect(this.menuUsersAll).toBeHidden();
    await expect(this.menuPlugins).toBeHidden();
  }

  async expectSubscriberMenus() {
    await expect(this.menuDashboard).toBeVisible();
    await expect(this.menuUsersProfile).toBeVisible();

    await expect(this.menuAppearance).toBeHidden();
    await expect(this.menuUsersAll).toBeHidden();
    await expect(this.menuPlugins).toBeHidden();
    await expect(this.menuPosts).toBeHidden();
    await expect(this.menuMedia).toBeHidden();
    await expect(this.menuPages).toBeHidden();
    await expect(this.menuComments).toBeHidden();
    await expect(this.menuTools).toBeHidden();
  }
}
