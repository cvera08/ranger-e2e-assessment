
# Technical Assessment for QA Engineer at Ranger

## Demo Videos

- [Demo Video 1](https://github.com/user-attachments/assets/7c109e4c-c9a0-4b42-955c-26d645cd65b0)  

https://github.com/user-attachments/assets/7c109e4c-c9a0-4b42-955c-26d645cd65b0

- [Demo Video 2](https://github.com/user-attachments/assets/657653da-cd74-48e5-a612-f927d77e3661)  

https://github.com/user-attachments/assets/657653da-cd74-48e5-a612-f927d77e3661

## Example Allure Report

<img width="1728" alt="allure-result" src="https://github.com/user-attachments/assets/dff47813-6222-4e1f-8107-6cf7cf9a6a28" />

## Requirements

### _[Optional]_ Install Java (for Allure)
If you wish to use Allure for generating and viewing test reports, you'll need to have Java installed. You can install it using Homebrew:

```bash
brew install openjdk@11
```

After installing Java, make sure to configure the `JAVA_HOME` environment variable:

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
export PATH=$JAVA_HOME/bin:$PATH
```

Troubleshooting:
If you need to have openjdk first in your PATH, run:
```bash
echo 'export PATH="/opt/homebrew/opt/openjdk/bin:$PATH"' >> ~/.zshrc
```

For compilers to find openjdk you may need to set:
```bash
export CPPFLAGS="-I/opt/homebrew/opt/openjdk/include"
```

Check Installation:
```bash
source ~/.zshrc
java -version
```


### Setup Project

- Install dependencies:

```bash
npm install
```

- [Mandatory] Install Chromium for Playwright:

```bash
npx playwright install chromium
```

- _[Optional] Install All Playwright browsers:_

```bash
npx playwright install
```

## Running Tests with Different Reporters

You can run the tests using the following command:

#### Playwright's default runner
```bash
npm run test
```

#### Or using Allure (you need Java installed)
```bash
npm run test:allure
```

## Running Specific Tests

The command of the previous section will execute all tests in the repository.

If you want to run only a specific test, you can add `.only` to the test in the file you want to run. For example:

```javascript
test.only('Test Description', async ({ page }) => {
  // Your test steps
});
```

Alternatively, you can use the following command to run a specific test, example command:

```bash
npx playwright test src/lib/login.test.ts --headed --config src/lib/playwright.config.ts
```

## Demo for expected Terminal Output

Just an example:  

![terminal_demo](https://github.com/user-attachments/assets/4aec73f8-e9be-4d2d-8fff-f7ce92f2d191)

---

---


## Overview

In this exercise, you will work with Playwright (written in TypeScript) to create and complete three automated tests for Wikipedia.

You’ll start by implementing a login test from scratch, then finish two existing tests that were partially generated using Ranger’s test recorder and code generation tool.

You have one hour to complete this exercise on your own. When the hour is up, your interviewer will rejoin the call to discuss your work. You’ll walk them through what you accomplished, highlight what went well, and note any improvements you would have made with additional time.

## Your Task

1. Implement a login test and capture the storage state so the remaining tests run as a logged in user
    - In `login.test.ts`, create a test that signs into Wikipedia
    - Create an account if you don't already have one
    - Add your sign in credentials to `.env`
2. Complete the Wikipedia search test
    - In `searchWikipedia.ts`, finish the existing test so that it correctly implements the test case in the file
3. Complete the Wikipedia home page actions test
    - In `wikipediaHomepageActions.ts`, finish the existing test so that it correctly implements the test case in the file

Each test file contains more detailed instructions.

Make sure that the only files that you edit are `login.test.ts`, `searchWikipedia.ts`, and `wikipediaHomepageActions.ts`.

## Project Structure

```plaintext
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .env
└── src
    └── lib
        ├── all.test.ts
        ├── login.test.ts
        ├── tests
        │   ├── searchWikipedia.ts
        │   └── wikipediaHomepageActions.ts
    └── auth
        └── login.json
```

## Setup

### Requirements

-   Node.js v22+
-   npm

### Quick Start

```bash
# Install dependencies
npm install

# Optional: Install Playwright browsers
npx playwright install

# Mandatory: Install Playwright browsers
npx playwright install chromium
```

### Running Tests

#### Run all tests

There's a `test` script in `package.json` so you can do:

```bash
npm run test
```

#### Run a specific test

Add `.only` to the specific test you want to run in isolation in `all.test.ts` and then run the same command:

```bash
npm run test
```

#### Run a single test

For example the `login` one:

```bash
npx playwright test src/lib/login.test.ts --headed --config src/lib/playwright.config.ts
```

## Need Help?

If you run into any technical issues during the assessment, do your best to unblock yourself. If you really cannot proceed or are done with the task, email megan@ranger.net.
