
import { expect } from '@playwright/test';

export default class BasePage {
  constructor(page) {
    this.page = page;
    this.usernameInput = this.page.getByRole('textbox', { name: 'username' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'password' });
    this.usersBtn = this.page.getByRole('menuitem', { name: 'Users' });

    this.createUserBtn = this.page.getByRole('link', { name: 'Create' });
    this.saveUserBtn = this.page.getByRole('button', { name: 'Save' });
    this.deleteUserBtn = this.page.getByRole('button', { name: 'Delete' });
    this.emailInput = this.page.locator('[name="email"]');
    this.firstNameInput = this.page.locator('[name="firstName"]');
    this.lastNameInput = this.page.locator('[name="lastName"]');

    this.allCheckboxes = this.page.getByLabel('Select All');
    this.rowCheckBox = this.page.getByLabel('Select this row');
    this.rows = this.page.locator('tbody tr');
    this.signinBtn = this.page.getByRole('button', { name: /Sign in/i });
  }
  async openUsersPage() {
    await this.usersBtn.click();
  }
  async clickAllCheckBox() {
    await this.allCheckboxes.click();
  }

  async clickDeleteUser() {
    await this.deleteUserBtn.click();
  }

  // Общие методы для работы с формами пользователей
  async fillUserForm(userRegData) {
    const { email, firstName, lastName } = userRegData;
    await this.emailInput.fill(email);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }

  async checkUserFormIsVisible() {
    await expect(this.emailInput).toBeVisible();
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.saveUserBtn).toBeVisible();
  }

  async checkUserFormValues(email, firstName, lastName) {
    expect(await this.emailInput.getAttribute('value')).toContain(email);
    expect(await this.firstNameInput.getAttribute('value')).toContain(firstName);
    expect(await this.lastNameInput.getAttribute('value')).toContain(lastName);
  }
}