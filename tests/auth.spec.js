import { test } from './fixture/main';

test('registration successful', async ({ app: { authPage } }) => {
  await authPage.isLoggedIn();
});
