import { test } from "./fixture/main";
import { generateStatusData } from "./data/generateStatusData";

test.describe("Test statuses page", async () => {
  test.beforeEach(async ({ app: { basePage } }) => {
    await basePage.statusesMenuItem.click();
  });

  test("Check statuses data is visible", async ({ app: { statusesPage } }) => {
    await statusesPage.checkStatusesData();
  });

  test.describe("Check creste status page", async () => {
    test("Check create new status page", async ({ app: { statusesPage } }) => {
      await statusesPage.checkCreateStatusForm();
    });
    test("Check create new status", async ({ app: { statusesPage } }) => {
      const statusData = generateStatusData();
      await statusesPage.checkCreateNewStatus(statusData);
    });
  });

  test.describe("Check edit status page", async () => {
    test("Check edit status page is correct", async ({
      app: { statusesPage },
    }) => {
      await statusesPage.checkEditStatusPage();
    });
    test("Check update status is correct", async ({
      app: { statusesPage },
    }) => {
      // Сначала создаем статус
      const initialStatusData = generateStatusData();
      await statusesPage.checkCreateNewStatus(initialStatusData);
      
      // Затем редактируем его
      const rowId = 1; // Редактируем первую (и единственную) строку
      const statusData = generateStatusData();
      await statusesPage.checkUpdateStatus(rowId, statusData);
    });
  });

  test.describe("Check delete statuses", async () => {
    test("Delete status is correct", async ({ app: { statusesPage } }) => {
      const statusData = ["Draft", "draft"];
      await statusesPage.checkDeleteStatus(statusData);
    });
    test("Check delete all statuses is correct", async ({
      app: { statusesPage },
    }) => {
      await statusesPage.checkDeleteAllStatuses();
    });
  });
});
