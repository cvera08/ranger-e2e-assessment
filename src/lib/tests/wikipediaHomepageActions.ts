import { Page, test } from '@playwright/test';
import { assertTotalArticlesLessThan, verifyTextSizeChange } from '../modules/wikipediaHomePage.page';

/**
 * This test is designed to navigate to Wikipedia's homepage, 
 * validate that the number of articles in English is less than 7,000,000, 
 * and verify the functionality of the text size options ('Small', 'Large', 'Standard').
 * 
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
 * 
 * @param page - Playwright Page instance
 * @param params - Test parameters (in this case, not used)
 */
export async function run(page: Page, params: {}) {
    await test.step('Navigate to Wikipedia homepage', async () => {
        // Navigate to the main Wikipedia page
        await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    });

    await test.step('Check article count', async () => {
        // Validate that the number of articles is less than 7,000,000
        await assertTotalArticlesLessThan(page, 7000000);
    });

    await test.step('Validate text size options', async () => {
        // Validate the text size change functionality: 'Small', 'Large', 'Standard'
        await verifyTextSizeChange(page);
    });
}
