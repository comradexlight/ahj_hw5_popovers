import puppeteer from 'puppeteer';

jest.setTimeout(8000);

describe('Tests for the popovers widget', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  test('The popover element should appear when you click on the button', async () => {
    await page.goto('http:localhost:9000');
    const form = await page.$('.form');
    const btnsArray = await form.$$('.button');
    await btnsArray[0].click();
    await page.waitForSelector('.popover');
  });

  test('The popover element should disappear when you click on the button again', async () => {
    await page.goto('http:localhost:9000');
    const form = await page.$('.form');
    const btnsArray = await form.$$('.button');
    await btnsArray[0].click();
    await page.waitForSelector('.popover');
    await btnsArray[0].click();
    const found = await page.$('.popover');
    await !found;
  });

  test('When you click on another button, the popover element should appear on that button', async () => {
    await page.goto('http:localhost:9000');
    const form = await page.$('.form');
    const btnsArray = await form.$$('.button');
    await btnsArray[0].click();
    await page.waitForSelector('.popover');
    await btnsArray[1].click();
    const popoversArray = await page.$$('.popover');
    await expect(popoversArray.length).toEqual(btnsArray.length);
  });

  afterEach(async () => {
    await browser.close();
  });
});
