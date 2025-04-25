import { Page, test } from '@playwright/test';
import { searchWikipediaForArtificialIntelligence } from '../modules/searchWikipedia.page';

/**
 * This test is designed to search for the term "Artificial Intelligence" on Wikipedia
 * and validate that the latest edit was made by a specific user.
 * 
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
 * 
 * @param page - Playwright Page instance
 * @param params - Test parameters (in this case, not used)
 */
export async function run(page: Page, params: {}) {
    const expectedUser = 'ElegantEgotist'; // Expected username who made the latest edit

    await test.step('Search for Artificial Intelligence on Wikipedia', async () => {
        // Perform search and validate user making the last edit
        await searchWikipediaForArtificialIntelligence(page, expectedUser);
    });
}