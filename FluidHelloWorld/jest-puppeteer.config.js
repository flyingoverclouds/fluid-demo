/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = {
    server: {
        command: `npm run start:client`,
        launchTimeout: 10000,
    },
    launch: {
        slowMo: 30, // slows down process for easier viewing
        headless: true, // run in the browser
        args: ["--no-sandbox", "--disable-setuid-sandbox"], // https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
        dumpio: process.env.FLUID_TEST_VERBOSE !== undefined, // output browser console to cmd line
    },
};
