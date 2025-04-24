import { Page, expect } from '@playwright/test';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia
 * 2. Go to the "Artificial intelligence" page
 * 3. Click "View history"
 * 4. Assert that the latest edit was made by the user "Worstbull"
 *
 * Instructions:
 * - Run the test and ensure it performs all steps described above
 * - Add assertions to the test to ensure it validates the expected
 *   behavior:
 *   - If the latest edit was not made by "Worstbull" update the steps above accordingly
 *   - Write your assertion to provide clear diagnostic feedback if it fails
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    /** STEP: Navigate to URL */
    await page.goto('https://www.wikipedia.org/');

    /** STEP: Enter text 'art' into the search input field */
    const searchInputField = page.getByRole('searchbox', {
        name: 'Search Wikipedia',
    });
    await searchInputField.fill('artificial');

    /** STEP: Click the 'Artificial Intelligence' link in the search suggestions */
    const artificialIntelligenceLink = page.getByRole('link', {
        name: 'Artificial intelligence',
    }).first();
    await artificialIntelligenceLink.click();

    /** STEP: Click the "View history" link */
    const viewHistoryLink = page.getByRole('link', { name: 'View history' });
    await viewHistoryLink.click();

    /** STEP: Verify that the latest edit was made by the user "Worstbull" */
    //const latestEditUser = page.locator('li[data-mw-revid="1286364868"] .history-user'); //await page.locator('.mw-history-histlinks-previous').first(); //await page.locator('.mw-revision-user').first();
    const historyUserLocator = page.locator('#pagehistory ul.mw-contributions-list')
        .locator('li')
        .locator('span.history-user')
        .locator('a.new.mw-userlink')
        .locator('bdi')
        .first();
    await expect(historyUserLocator).toHaveText('ElegantEgotist'); // Validate that the latest edit was made by 'Worstbull'. UPDATE: now it is 'ElegantEgotist'
}
