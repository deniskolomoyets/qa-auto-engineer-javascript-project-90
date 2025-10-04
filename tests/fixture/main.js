import { test as base } from "@playwright/test";
import { Application } from "../../pages/Application.js";

const test = base.extend({
  app: async ({ page }, use) => {
    // const newPage = await context.newPage();
    const app = new Application(page);

    await app.authPage.open();
    await app.authPage.checkRegistrationForm();

    await app.authPage.logIn();

    await use(app);
  },
});

export { test };
