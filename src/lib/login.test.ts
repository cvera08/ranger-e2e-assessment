import { test } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const wikipediaUsername = process.env.WIKIPEDIA_USERNAME;
const wikipediaPassword = process.env.WIKIPEDIA_PASSWORD;

const authFile = 'src/auth/login.json';

/**
 * Manually create a Wikipedia account and then finish this test
 * so that it signs into Wikipedia and captures the logged-in
 * session to src/auth/login.json, so that the tests in all.test.ts
 * run as a signed-in user.
 */
test('Sign in to Wikipedia', async ({ page }) => {
    if (!wikipediaUsername || !wikipediaPassword) {
        throw new Error(`Need a username and password to sign in!`);
    }

    // Navigate to the Wikipedia login page using the base URL from config
   await page.goto('/w/index.php?title=Special:UserLogin'); // This uses the baseURL defined in playwright.config.ts - example: https://en.wikipedia.org/w/index.php?title=Special:UserLogin

    // Fill in the username and password fields
    await page.fill('#wpName1', wikipediaUsername);
    await page.fill('#wpPassword1', wikipediaPassword);
    
    // Click the login button
    await page.click('#wpLoginAttempt');
    
    // Wait for the login to complete (ensure the user is logged in)
    await page.waitForSelector('div#mp-welcome h1');
    
    // Save the authenticated session state to a file
    await page.context().storageState({ path: authFile });
});
