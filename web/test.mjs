import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
page.on('console', msg => console.log('BROWSER:', msg.text()));
page.on('pageerror', err => console.log('ERROR:', err.message));
await page.goto('http://localhost:4321/keystatic');
await new Promise(r => setTimeout(r, 2000));
await browser.close();
