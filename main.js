const puppeteer = require('puppeteer');
const fs = require('fs');

const csvFile = 'urls.csv'; 
const outputFolder = './scraped_pages'; 

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const csvData = fs.readFileSync(csvFile, 'utf8');
  const urls = csvData.split('\n').map(line => line.trim());

  const puppeteer = require('puppeteer');
const fs = require('fs');

const csvFile = 'urls.csv'; 
const outputFolder = './scraped_pages'; 

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const csvData = fs.readFileSync(csvFile, 'utf8');
  const urls = csvData.split('\n').map(line => line.trim());

  for (const url of urls) {
    console.log(`Scraping URL: ${url}`);
    await page.goto(url);

    const content = await page.content();

    const fileName = `${C:\htmls\farming}/${url.split('/').pop()}.html`;
    fs.writeFileSync(fileName, content, 'utf8');

    await page.waitForTimeout(1000); 
  }

  await browser.close();
})();