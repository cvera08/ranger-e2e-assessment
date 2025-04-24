import { Page, expect } from '@playwright/test';
import { verifyTextSizeChange } from '../modules/wikipediaHomePage.page';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia's homepage
 * 2. Assert there are less than 7,000,000 articles in English
 * 3. Assert the page's text gets smaller when the 'Small' text size option is selected
 * 4. Assert the page's text gets larger when the 'Large' text size option is selected
 * 5. Assert the page's text goes back to the default size when the 'Standard' text size option is selected
 *
 * Instructions: Run the test and ensure it performs all steps described above
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    /** STEP: Navigate to URL */
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');

    /** STEP: Assert there are less than 7,000,000 articles in English */
    // Wait for the element to be visible
    const totalArticlesLink = page.locator('a[href="/wiki/Special:Statistics"]').nth(1);
    await totalArticlesLink.waitFor({ state: 'visible' });

    const totalArticlesText = await totalArticlesLink.textContent();
    
    if (totalArticlesText === null) {
        throw new Error('Total articles text is null');
    }

    const totalArticlesNumber = parseInt(totalArticlesText.replace(/[^0-9]/g, ''));
    expect(totalArticlesNumber).toBeLessThan(7000000);

    /** STEP: Perform the text size validation */
    //await verifyTextSizeChange(page);
}
