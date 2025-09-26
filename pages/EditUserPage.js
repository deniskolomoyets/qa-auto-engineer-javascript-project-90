import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { Inputs } from '../tests/components/Inputs';

export class EditUserPage extends BasePage {
  constructor(page) {
    super(page);
    this.inputs = new Inputs(page);
  }

  async editUser(userRegData) {
    const { email, firstName, lastName } = userRegData;
    await this.inputs.emailInput.fill(email);
    await this.inputs.firstNameInput.fill(firstName);
    await this.inputs.lastNameInput.fill(lastName);
  }

 async editUser(userRegData) {
    const { email, firstName, lastName } = userRegData;
    await this.inputs.emailInput.fill(email);
    await this.inputs.firstNameInput.fill(firstName);
    await this.inputs.lastNameInput.fill(lastName);
  }
}