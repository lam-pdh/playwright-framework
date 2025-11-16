import { test, expect } from '../../src/fixtures/test-base';
import { env } from '../../src/utils/env';
import { authData } from '../../src/data/auth.data';

test.describe('AUTH - Authentication', () => {
  test.beforeEach(async ({ authPage }) => {
    await authPage.openAdminLogin();
  });

  test('@AUTH_001: Login Fail', async ({ authPage }) => {
    await authPage.login(authData.invalid.username, authData.invalid.password);

    await authPage.expectLoginError(authData.invalid.expectedError);
  });

  test('@AUTH_002: Login Success', async ({ authPage, adminDashboardPage }) => {
    await authPage.login(env.APP_USERNAME, env.APP_PASSWORD);
    await adminDashboardPage.expectDashboardVisible();
  });
});
