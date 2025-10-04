import { expect } from "@playwright/test";
import { PageHolder } from "./PageHolder";

export class AuthPage extends PageHolder {
  constructor(page) {
    super(page);
    this.loginForm = this.page.locator(".RaLogin-card");
    this.icon = this.page.locator(".RaLogin-icon");
    this.LoginFormUserName = this.page.getByRole("textbox", {
      name: "userName",
    });
    this.LoginFormPassword = this.page.getByRole("textbox", {
      name: "password",
    });
    this.welcome = this.page.getByRole("heading", {
      name: "Welcome to the administration",
    });
    this.url = "http://localhost:5173";
  }

  get signInBtn() {
    return this.page.getByRole("button", { name: "Sign in" });
  }

  get profileButton() {
    return this.page.getByRole("button", { name: "Profile" });
  }

  get logoutButton() {
    return this.page.getByRole("menuitem", { name: "Logout" });
  }

  async open() {
    await this.page.goto(this.url);
  }

  async checkLoginFormVisible() {
    await expect(this.loginForm).toBeVisible();
  }

  async checkRegFormIcon() {
    await expect(this.icon).toBeVisible();
  }
  async checkLoginUserNameVisible() {
    await expect(this.LoginFormUserName).toBeVisible();
  }
  async checkLoginPasswordVisible() {
    await expect(this.LoginFormPassword).toBeVisible();
  }
  async checkSignInBtnVisible() {
    await expect(this.signInBtn).toBeVisible();
  }
  async checkUrl() {
    await expect(this.page).toHaveURL("/#/");
  }

  async checkRegistrationForm() {
    await this.checkLoginFormVisible();
    await this.checkLoginUserNameVisible();
    await this.checkLoginPasswordVisible();
    await this.checkSignInBtnVisible();
    await this.checkRegFormIcon();
  }
  async logIn() {
    await this.LoginFormUserName.fill("TestUser");
    await this.LoginFormPassword.fill("12345");
    await this.signInBtn.click();
  }

  async checkWelcomeText() {
    await expect(this.welcome).toBeVisible();
  }
  async checkAdminName() {
    await expect(this.page.getByText("Jane Doe")).toBeVisible();
  }
  async isLoggedIn() {
    await this.checkUrl();
    await this.checkWelcomeText();
    await this.checkAdminName();
  }
  async logOut() {
    await this.profileButton.click();
    await this.logoutButton.click();
    await expect(this.signInBtn).toBeVisible();
  }
}
