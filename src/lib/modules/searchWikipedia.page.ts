import { Page, Locator, expect } from '@playwright/test';

// Step 1: Search Input Field
const searchInputField = (page: Page): Locator => 
    page.getByRole('searchbox', { name: 'Search Wikipedia' });

// Step 2: Artificial Intelligence Link
const artificialIntelligenceLink = (page: Page): Locator => 
    page.getByRole('link', { name: 'Artificial intelligence' }).first();

// Step 3: View History Link
const viewHistoryLink = (page: Page): Locator => 
    page.getByRole('link', { name: 'View history' });

// Step 4: History User Locator (Latest Edit by User)
const historyUserLocator = (page: Page): Locator => 
    page.locator('#pagehistory ul.mw-contributions-list')
        .locator('span.history-user')
        .locator('a.new.mw-userlink')
        .locator('bdi')
        .first();

export const searchWikipediaForArtificialIntelligence = async (page: Page, expectedUser: string): Promise<void> => {
    await page.goto('https://www.wikipedia.org/');

    // Enter search term 'artificial' into the search input field
    await searchInputField(page).fill('artificial');

    // Click the 'Artificial Intelligence' link in the search suggestions
    await artificialIntelligenceLink(page).click();

    await viewHistoryLink(page).click();

    // Verify the latest edit was made by the expected user (e.g., 'ElegantEgotist')
    await expect(historyUserLocator(page)).toHaveText(expectedUser);
};
