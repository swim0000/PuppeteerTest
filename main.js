const puppeteer = require('puppeteer');
const fs = require('fs');

const csvFile = 'urls.csv';
const outputFolder = './html/';

(async () => {
  const browser = await puppeteer.launch();

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  const page = await browser.newPage();

  const csvData = fs.readFileSync(csvFile, 'utf8');
  const urls = csvData.split('\n').map(line => line.trim());

  for (const url of urls) {
    try {
      console.log(`Scraping URL: ${url}`);
      await page.goto(url);

      const content = await page.content();

      const fileName = `${url.split('/').pop()}.html`;
      fs.writeFileSync(`${outputFolder}/${fileName}`, content);

      await page.waitForTimeout(100);
    } catch (error) {
      console.error(`Error scraping URL ${url}: ${error.message}`);
    }
  }

  await browser.close();
})();
