import { test as base, expect, request } from '@playwright/test';
import { environment } from '../config/environment';
import { RestfulBookerClient } from '../api/restful-booker.client';
import { LoginPage } from '../ui/pages/login.page';

type TestFixtures = {
  loginPage: LoginPage;
  restfulBookerClient: RestfulBookerClient;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  restfulBookerClient: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: environment.apiBaseUrl,
      extraHTTPHeaders: {
        Accept: 'application/json',
      },
    });

    try {
      await use(new RestfulBookerClient(apiContext));
    } finally {
      await apiContext.dispose();
    }
  },
});

export { expect };
