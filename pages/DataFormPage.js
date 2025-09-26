import { Inputs } from '../tests/components/Inputs.js';
import { Buttons } from '../tests/components/Buttons.js';
import { BasePage } from './BasePage';
import { BUTTONS } from '../tests/data/buttonSelectors.js';

export class DataFormPage extends BasePage {
  constructor(page) {
    super(page);
    this.inputs = new Inputs(page);
    this.buttons = new Buttons(page);
    this.form = this.page.locator('form');
  }

  async checkFormHasInput() {
    const input = this.page.locator('form input');
    const count = await input.count();
    expect(count).toBeGreaterThan(0);
  }
  async checkFormCreateVisible() {
    await expect(this.form).toBeVisible();
    await this.checkFormHasInput();
    await this.checkButtonVisible(BUTTONS.SAVE);
    await this.buttons.checkSaveBtnDisabled();
  }
}