import { Page, Locator } from '@playwright/test';

// Locator for the total articles link - using a more flexible approach
const totalArticlesLink = (page: Page): Locator =>
    page.locator('a[href="/wiki/Special:Statistics"]').first(); // Link to the statistics page

// Locator for the "Small" text size option
const smallTextSizeOption = (page: Page): Locator =>
    page.getByRole('radio', { name: 'Small' });

// Locator for the "Large" text size option
const largeTextSizeOption = (page: Page): Locator =>
    page.getByRole('radio', { name: 'Large' });

// Locator for the "Standard" text size option
const standardTextSizeButton = (page: Page): Locator =>
    page.getByLabel('Standard');

// Function to perform the test actions
export const verifyTextSizeChange = async (page: Page): Promise<void> => {
    /** STEP: Navigate to URL */
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');

    /** STEP: Click the link to view the total number of articles in English */
    await totalArticlesLink(page).click();

    /** STEP: Select the 'Small' text size option in the appearance settings */
    await smallTextSizeOption(page).click();

    /** STEP: Click the 'Large' text size option to change the display size */
    await largeTextSizeOption(page).click();

    /** STEP: Click the 'Standard' text size option in the appearance settings */
    await standardTextSizeButton(page).click();
};
