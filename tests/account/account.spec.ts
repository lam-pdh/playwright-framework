import { test } from '../../src/fixtures/test-base';
import { env } from '../../src/utils/env';
import { log } from '../../src/utils/logger';
import { accountData } from '../../src/data/account.data';

test.describe('ACC - Account & Permissions', () => {
  test.beforeEach(async ({ authPage, adminDashboardPage }) => {
    await authPage.openAdminLogin();
    await authPage.login(env.APP_USERNAME, env.APP_PASSWORD);
    await adminDashboardPage.expectDashboardVisible();
  });

  test('@ACC_001: Create account with editor permission', async ({
    adminDashboardPage,
    usersPage,
    authPage,
  }) => {
    log.info('Create new user with Editor role');

    await adminDashboardPage.openNewUserForm();

    await usersPage.createUser({
      username: accountData.username,
      email: accountData.email,
      firstName: accountData.firstName,
      lastName: accountData.lastName,
      password: accountData.password,
      role: 'Editor',
    });

    await usersPage.expectUserCreated();
    await adminDashboardPage.logout();

    await authPage.openAdminLogin();
    await authPage.login(accountData.username, accountData.password);

    await adminDashboardPage.expectEditorMenus();
    await adminDashboardPage.logout();
  });

  test('@ACC_002: Create account with subscriber permission', async ({
    adminDashboardPage,
    usersPage,
    authPage,
  }) => {
    log.info('Create new user with Subscriber role');

    await adminDashboardPage.openNewUserForm();

    await usersPage.createUser({
      username: accountData.username,
      email: accountData.email,
      firstName: accountData.firstName,
      lastName: accountData.lastName,
      password: accountData.password,
      role: 'Subscriber',
    });

    await usersPage.expectUserCreated();
    await adminDashboardPage.logout();

    await authPage.openAdminLogin();
    await authPage.login(accountData.username, accountData.password);

    await adminDashboardPage.expectSubscriberMenus();
    await adminDashboardPage.logout();
  });

  test.afterEach(async ({ authPage, adminDashboardPage, usersPage }) => {
    await authPage.openAdminLogin();
    await authPage.login(env.APP_USERNAME, env.APP_PASSWORD);
    await adminDashboardPage.expectDashboardVisible();

    await adminDashboardPage.openUsersList();
    await usersPage.searchAndDeleteUser(accountData.username);
  });
});
