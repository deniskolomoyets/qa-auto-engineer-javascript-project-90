export default class AdminPage {
    constructor(page) {
      this.page = page;

      this.adminPageHeader = page.getByRole('heading', { name: 'Welcome to the administration' });

      this.profileButton = page.getByRole('button', { name: /profile/i });
      this.logoutButton  = page.getByRole('menuitem', { name: /logout|sign out|выйти/i });
    }

    async expectLoaded() {
    await this.adminPageHeader.waitFor();
    }

    async logout() {
      await this.profileButton.click();
      await this.logoutButton.click();
    }   

    async openPage(text) {
      await this.page.getByRole('menuitem').filter({ hasText: text }).click();
    }
}