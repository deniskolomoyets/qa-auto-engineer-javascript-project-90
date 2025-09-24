export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.lockIcon = page.getByTestId('LockIcon');
    this.usernameField = page.getByLabel('Username');
    this.passwordField = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
    this.errorMessage = page.getByText('Required').last();
  }

  async goto() {
    await this.page.goto('/login');
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login() {
    await this.usernameField.fill('username');   // временный хардкод
    await this.passwordField.fill('password');   // временный хардкод
    await this.clickLoginButton();
  }
}
