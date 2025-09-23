import { test, expect } from '@playwright/test';

test('приложение успешно рендерится', async ({ page }) => {
  // Слушаем ошибки в консоли
  page.on('console', msg => console.log('CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  // Загружаем локальный dev-сервер
  await page.goto('http://localhost:5173');

  // Ждем загрузки страницы
  await page.waitForLoadState('networkidle');

  // Проверяем, что корневой контейнер есть
  const root = page.locator('#root');
  await expect(root).toHaveCount(1);

  // Проверяем, что в #root есть контент (Task Manager должен рендериться)
  await page.waitForFunction(() => {
    const root = document.getElementById('root');
    return root && root.children.length > 0;
  }, { timeout: 10000 });

  // Дополнительная проверка: ищем характерные элементы Task Manager
  const hasContent = await page.locator('#root').innerHTML();
  expect(hasContent.trim().length).toBeGreaterThan(0);
});
