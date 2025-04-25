import { Page, Locator, expect } from '@playwright/test';

/**
 * Locator for the search input field on the Wikipedia homepage.
 * This locator targets the search box where the user types their search term.
 *
 * @param page - Playwright Page instance
 * @returns A Locator instance pointing to the search input field
 */
const searchInputField = (page: Page): Locator => 
    page.getByRole('searchbox', { name: 'Search Wikipedia' });

/**
 * Locator for the 'Artificial Intelligence' link in the search suggestions.
 * This locator clicks the link to navigate to the "Artificial Intelligence" page.
 *
 * @param page - Playwright Page instance
 * @returns A Locator instance pointing to the 'Artificial Intelligence' link
 */
const artificialIntelligenceLink = (page: Page): Locator => 
    page.getByRole('link', { name: 'Artificial intelligence' }).first();

/**
 * Locator for the 'View history' link on the "Artificial Intelligence" page.
 * This locator clicks the link to view the edit history of the page.
 *
 * @param page - Playwright Page instance
 * @returns A Locator instance pointing to the 'View history' link
 */
const viewHistoryLink = (page: Page): Locator => 
    page.getByRole('link', { name: 'View history' });

/**
 * Locator for the latest edit's user on the history page.
 * This locator points to the user who made the latest edit to the "Artificial Intelligence" page.
 *
 * @param page - Playwright Page instance
 * @returns A Locator instance pointing to the username of the latest editor
 */
const historyUserLocator = (page: Page): Locator => 
    page.locator('#pagehistory ul.mw-contributions-list')
        .locator('span.history-user')
        .locator('a.new.mw-userlink')
        .locator('bdi')
        .first();

/**
 * Searches Wikipedia for "Artificial Intelligence" and verifies the latest edit was made by the expected user.
 * 
 * Steps:
 * 1. Navigate to Wikipedia homepage
 * 2. Search for the term "artificial"
 * 3. Click the "Artificial Intelligence" link in the search results
 * 4. Click the "View history" link to see the page's edit history
 * 5. Verify the latest edit was made by the expected user
 *
 * @param page - Playwright Page instance
 * @param expectedUser - The username that should have made the latest edit
 *
 * @example
 * await searchWikipediaForArtificialIntelligence(page, 'ElegantEgotist');
 */
export const searchWikipediaForArtificialIntelligence = async (page: Page, expectedUser: string): Promise<void> => {
    // Navigate to Wikipedia's homepage
    await page.goto('https://www.wikipedia.org/');

    // Enter the search term 'artificial' into the search input field
    await searchInputField(page).fill('artificial');

    // Click the 'Artificial Intelligence' link from the search suggestions
    await artificialIntelligenceLink(page).click();

    // Click the 'View history' link to view the edit history of the page
    await viewHistoryLink(page).click();

    // Verify that the latest edit was made by the expected user (e.g., 'ElegantEgotist')
    await expect(historyUserLocator(page)).toHaveText(expectedUser);
};
