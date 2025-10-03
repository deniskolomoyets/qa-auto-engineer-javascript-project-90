import { expect } from '@playwright/test';
import { PageHolder } from './PageHolder';
import { BUTTONS } from '../tests/data/buttonSelectors';

export class BasePage extends PageHolder {
  constructor(page) {
    super(page);
    this.form = this.page.locator('form');
    this.emailInput = this.page.getByRole('textbox', { name: 'Email' });
    this.firstNameInput = this.page.getByRole('textbox', {
      name: 'First name',
    });
    this.lastNameInput = this.page.getByRole('textbox', { name: 'Last name' });
    this.nameInput = this.page.getByRole('textbox', { name: 'name' });
    this.slugInput = this.page.getByRole('textbox', { name: 'slug' });
  }

  async checkForm(items) {
    await expect(this.form).toBeVisible();
    for (const item of items) {
      await expect(item).toBeVisible();
    }
    await this.checkButtonVisible(BUTTONS.SAVE);
    await this.checkButtonDisabled(BUTTONS.SAVE);
  }
  async fillForm(data, inputs) {
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      await inputs[i].fill(data[keys[i]]);
    }
    await this.clickButton(BUTTONS.SAVE);
  }
  async checkDataCellsVisibility(cells) {
    const elements = await cells.all();
    for (const element of elements) {
      await expect(element).toBeVisible();
    }
  }
  async checkItemCreatedSuccessfully(data, fields) {
    for (const [key, cell] of Object.entries(fields)) {
      const actualValue = await cell.last().innerText();
      expect(actualValue).toContain(data[key]);
    }
  }

  async checkItemUpdateSuccessfully(id, data, fileds) {
    const usersCount = await this.rows.count();
    if (id < 1 || id > usersCount) {
      throw new Error('Invalid Id');
    }
    const index = id - 1;
    for (const [key, cell] of Object.entries(fileds)) {
      const actualValue = await cell.nth(index).innerText();
      expect(actualValue).toContain(data[key]);
    }
  }

  async verifyItemIsDeleted(data, fields) {
    const userValues = Array.isArray(data) ? data : [data];
    for (const [index, cell] of Object.values(fields).entries()) {
      const deletedValue = await cell.getByText(userValues[index]);
      await expect(deletedValue).not.toBeVisible();
    }
  }
}