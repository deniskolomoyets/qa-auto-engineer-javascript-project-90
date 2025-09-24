import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import AdminPage from '../pages/adminPage';

test.describe('Check Login page', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await expect(page).toHaveURL(/\/login$/);        
  });

  test('Login form elements are visible', async ({ page }) => {
    const login = new LoginPage(page);
    await expect(login.lockIcon).toBeVisible();
    await expect(login.usernameField).toBeVisible();
    await expect(login.passwordField).toBeVisible();
    await expect(login.loginButton).toBeVisible();
  });

  test('Shows error for empty fields', async ({ page }) => {
    const login = new LoginPage(page);
    await login.loginButton.click();
    await expect(login.errorMessage).toBeVisible();
  });

  test('Successful login and logout', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login();                              // любой логин/пароль проходят

    const admin = new AdminPage(page);
    await admin.expectLoaded();                       // ждём, что админка реально смонтировалась
    await expect(admin.adminPageHeader)
      .toHaveText('Welcome to the administration');

    await admin.logout();
    await expect(login.loginButton).toBeVisible();    // вернулись на логин
    await expect(page).toHaveURL(/\/login$/);
  });
  });