const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.example.com');


  
await page.click('button[type="button"]'); // Click the "Save As" button
  await page.waitForSelector('input[type="file"]'); // Wait for the file input to appear

  const input = await page.$('input[type="file"]');
  await input.uploadFile('example.html'); // Select the HTML file format

  await browser.close();
})();