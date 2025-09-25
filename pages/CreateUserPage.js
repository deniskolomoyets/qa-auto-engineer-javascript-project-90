import { expect } from '@playwright/test';
import BasePage from './BasePage';

export default class CreateUserPage extends BasePage {
  constructor(page) {
    super(page);
  }
  async createUser(userRegData) {
    await this.fillUserForm(userRegData);
  }
  async clickCreateUserBtn() {
    await this.createUserBtn.click();
  }
  async clickSaveUserBtn() {
    await this.saveUserBtn.click();
  }
  async checkCreateUserPageIsCorrect() {
    await expect(this.page).toHaveURL(/users\/create/);
    await this.checkUserFormIsVisible();
    await expect(this.saveUserBtn).toBeDisabled();
  }
}