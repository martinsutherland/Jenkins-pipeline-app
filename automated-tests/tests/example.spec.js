// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Check h1 text', async ({ page }) => {
    const headerElement = await page.waitForSelector('.test-header');

    const headerText = await headerElement.innerText();
  
    expect(headerText).toBe('Test Application');
});

test('Check text appears when button clicked', async ({ page }) => {
    await page.click('.click-me-btn');

    const elementTextElement = await page.waitForSelector('.element-text');
  
    const elementText = await elementTextElement.innerText();
  
    expect(elementText).toBe('Hello, World!!');
  
    await page.click('.click-me-btn');
  
    await page.waitForSelector('.element-text', { state: 'hidden' });
});
