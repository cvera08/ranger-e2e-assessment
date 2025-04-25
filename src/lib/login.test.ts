import { test } from '@playwright/test';
import dotenv from 'dotenv';
import { loginToWikipedia, loginToWikipediaFailure } from './modules/login.page';

dotenv.config();

const wikipediaUsername = process.env.WIKIPEDIA_USERNAME;
const wikipediaPassword = process.env.WIKIPEDIA_PASSWORD;
const authFile = 'src/auth/login.json';

/**
 * This test attempts to log into Wikipedia using incorrect credentials.
 * It expects the login to fail and an error message to be displayed.
 */
test('Failed sign in with incorrect credentials', async ({ page }) => {
    await page.goto('/w/index.php?title=Special:UserLogin'); // Base URL used from playwright.config.ts

    // Try to log in with incorrect credentials + expect failure & Validate that the error message is displayed
    await loginToWikipediaFailure(page, 'incorrectUsername', 'incorrectPassword', 'Incorrect username or password entered. Please try again.');
});

/**
 * This test logs into Wikipedia using credentials stored in environment variables.
 * It then saves the authenticated session state to a file for future use in other tests.
 */
test('Sign in to Wikipedia', async ({ page }) => {
    if (!wikipediaUsername || !wikipediaPassword) {
        throw new Error('Need a username and password to sign in!');
    }

    // Navigate to the Wikipedia login page using the base URL from config
    await page.goto('/w/index.php?title=Special:UserLogin'); // Base URL used from playwright.config.ts

    // Perform the login
    await loginToWikipedia(page, wikipediaUsername, wikipediaPassword);

    // Save the authenticated session state to a file
    await page.context().storageState({ path: authFile });
});
