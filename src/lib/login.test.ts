import { test } from '@playwright/test';
import dotenv from 'dotenv';
import { loginToWikipedia } from './modules/login.page';

dotenv.config();

const wikipediaUsername = process.env.WIKIPEDIA_USERNAME;
const wikipediaPassword = process.env.WIKIPEDIA_PASSWORD;
const authFile = 'src/auth/login.json';

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
