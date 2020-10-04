const puppeteer = require('puppeteer');

async function run(){
const browser = await puppeteer.launch( {
	headless: false
	});

const page = await browser.newPage();
await page.goto('https://google.com');
blockingWait(5);
await page.type('input[name=q]', 'Hello World', {delay:20});
blockingWait(5);
await page.keyboard.press('Enter');
};

run();
