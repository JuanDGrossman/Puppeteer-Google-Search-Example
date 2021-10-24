const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('https://google.com', {
        waitUntil: 'networkidle2'
    });
    blockingWait(5);
    await page.type('input[name=q]', 'Hello World', {
        delay: 20
    });
    blockingWait(5);
    await page.keyboard.press('Enter');
    blockingWait(15);
    await browser.close();
};

function blockingWait(seconds) {
    //simple blocking technique (wait...)
    const waitTill = new Date(new Date().getTime() + seconds * 1000);
    while (waitTill > new Date()) {}

}

run();
