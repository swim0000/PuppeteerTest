const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.example.com');
 
await page.click('button[type="button"]'); 
  await page.waitForSelector('input[type="file"]'); 

  const input = await page.$('input[type="file"]');
  await input.uploadFile('example.html'); 

  await browser.close();
})();