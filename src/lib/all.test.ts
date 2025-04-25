import { test } from '@playwright/test';
import { run as searchWikipedia } from './tests/searchWikipedia';
import { run as wikipediaHomepageActions } from './tests/wikipediaHomePageActions';

/**
 * This test searches for the term "Artificial Intelligence" on Wikipedia 
 * and verifies that the latest edit was made by the specified user.
 */
test(
    'Search Wikipedia for "artificial intelligence"',
    { tag: '@id=67ddea97348cfb2bed994986' },
    async ({ page }) => {
        await searchWikipedia(page, {});
    }
);

/**
 * This test navigates to the Wikipedia homepage, 
 * verifies that the number of articles in English is less than 7,000,000, 
 * and checks the functionality of text size options.
 */
test(
    'Perform Wikipedia homepage actions',
    { tag: '@id=67ddf04f348cfb2bed994999' },
    async ({ page }) => {
        await wikipediaHomepageActions(page, {});
    }
);
