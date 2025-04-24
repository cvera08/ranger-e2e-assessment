import { Page, Locator } from '@playwright/test';

const usernameField = (page: Page): Locator => 
    page.getByRole('textbox', { name: 'Username' });

const passwordField = (page: Page): Locator => 
    page.getByLabel('Password');

const loginButton = (page: Page): Locator => 
    page.getByRole('button', { name: 'Log in' });

// optional - nice to have
const loginErrorMessage = (page: Page): Locator =>
    page.getByText('Incorrect username or password.');

export const loginToWikipedia = async (page: Page, username: string, password: string): Promise<void> => {
    await usernameField(page).fill(username);
    await passwordField(page).fill(password);
    await loginButton(page).click();
    
    // Wait for login to be successful or fail
    await page.waitForSelector('div#mp-welcome h1');
};
