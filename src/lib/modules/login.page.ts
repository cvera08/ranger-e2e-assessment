import { Page, Locator, expect } from '@playwright/test';

/**
 * Locator for the username field on the Wikipedia login page.
 * This locator targets the textbox input field for the username.
 *
 * @param page - Playwright Page instance
 * @returns A Locator instance pointing to the username field
 */
const usernameField = (page: Page): Locator => 
    page.getByRole('textbox', { name: 'Username' });

/**
 * Locator for the password field on the Wikipedia login page.
 * This locator targets the password input field for the user password.
 *
 * @param page - Playwright Page instance
 * @returns A Locator instance pointing to the password field
 */
const passwordField = (page: Page): Locator => 
    page.getByLabel('Password');

/**
 * Locator for the login button on the Wikipedia login page.
 * This locator targets the button that submits the login form.
 *
 * @param page - Playwright Page instance
 * @returns A Locator instance pointing to the login button
 */
const loginButton = (page: Page): Locator => 
    page.getByRole('button', { name: 'Log in' });

/**
 * Locator for the "Welcome to Wikipedia" heading displayed after successful login.
 * This locator helps validate that the user has been successfully logged in.
 *
 * @param page - Playwright Page instance
 * @returns A Locator instance pointing to the "Welcome to Wikipedia" heading
 */
const welcomeToWikipediaLabel = (page: Page): Locator => 
    page.getByRole('heading', { name: /welcome to wikipedia/i });

// Optional: Locator for the error message displayed when the login credentials are incorrect.
const loginErrorMessage = (page: Page): Locator =>
    page.getByText('Incorrect username or password.');

/**
 * Logs in to Wikipedia using the provided credentials.
 * 
 * This function performs the following steps:
 * 1. Fills in the username field with the provided username.
 * 2. Fills in the password field with the provided password.
 * 3. Clicks the login button to submit the form.
 * 4. Waits for the "Welcome to Wikipedia" label to ensure successful login.
 *
 * @param page - Playwright Page instance
 * @param username - The username to log in with
 * @param password - The password to log in with
 *
 * @example
 * await loginToWikipedia(page, 'testUser', 'testPassword');
 */
export const loginToWikipedia = async (page: Page, username: string, password: string): Promise<void> => {
    // Fill in the username and password fields and click the login button
    await usernameField(page).fill(username);
    await passwordField(page).fill(password);
    await loginButton(page).click();
    
    // Wait for the page to show the "Welcome to Wikipedia" heading, confirming successful login
    await welcomeToWikipediaLabel(page).waitFor(); // Similar to await page.waitForSelector('div#mp-welcome h1');
};

/**
 * Attempts to log in to Wikipedia using the provided credentials.
 * 
 * This function performs the following steps:
 * 1. Fills in the username field with the provided username.
 * 2. Fills in the password field with the provided password.
 * 3. Clicks the login button to submit the form.
 * 4. Waits for the expected error message to appear, indicating a failed login attempt.
 *
 * @param page - Playwright Page instance
 * @param username - The username to log in with
 * @param password - The password to log in with
 * @param expectedErrorMessage - The expected error message to validate the login failure
 *
 * @example
 * await loginToWikipediaFailure(page, 'incorrectUser', 'incorrectPass', 'Incorrect username or password');
 */
export const loginToWikipediaFailure = async (
    page: Page, 
    username: string, 
    password: string, 
    expectedErrorMessage: string
): Promise<void> => {
    // Fill in the username and password fields and click the login button
    await usernameField(page).fill(username);
    await passwordField(page).fill(password);
    await loginButton(page).click();
    
    // Wait for the error message to appear and validate it
    const errorMessageLocator = await page.locator(`text=${expectedErrorMessage}`).isVisible();
    expect(errorMessageLocator).toBe(true); // Ensure the error message is shown
};
