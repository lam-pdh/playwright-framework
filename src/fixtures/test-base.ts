import { test as base } from '@playwright/test';
import { AuthPage } from '@pages/AuthPage';
import { AdminDashboardPage } from '@pages/AdminDashboardPage';
import { UsersPage } from '@pages/UsersPage';

type AppFixtures = {
  authPage: AuthPage;
  adminDashboardPage: AdminDashboardPage;
  usersPage: UsersPage;
};

export const test = base.extend<AppFixtures>({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  adminDashboardPage: async ({ page }, use) => {
    await use(new AdminDashboardPage(page));
  },
  usersPage: async ({ page }, use) => {
    await use(new UsersPage(page));
  }
});

export { expect } from '@playwright/test';
