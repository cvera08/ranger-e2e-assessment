import { Page, test } from '@playwright/test';
import { assertTotalArticlesLessThan, verifyTextSizeChange } from '../modules/wikipediaHomePage.page';

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
    await test.step('Navigate to Wikipedia homepage', async () => {
        await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    });

    await test.step('Check article count', async () => {
        await assertTotalArticlesLessThan(page, 7000000);
    });

    await test.step('Validate text size options', async () => {
        await verifyTextSizeChange(page);
    });
}
