import { expect } from '@playwright/test';
import BasePage from './BasePage';

export default class EditUserPage extends BasePage {
  constructor(page) {
    super(page);
    this.row = this.page.locator('tbody tr');
  }

  async clickEditUserBtn() {
    await this.row.first().click();
  }
  async editUser(userRegData) {
    await this.fillUserForm(userRegData);
    await this.saveUserBtn.click();
  }

  async checkEditUserPageIsCorrect() {
    await this.checkUserFormIsVisible();
    await expect(this.saveUserBtn).toBeDisabled();
    await expect(this.deleteUserBtn).toBeVisible();
    await expect(this.deleteUserBtn).toBeEnabled();
  }

  async checkEditUserForm(email, firstName, lastName) {
    await this.checkUserFormValues(email, firstName, lastName);
  }
}