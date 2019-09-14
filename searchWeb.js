const config = require('./config')
const puppeteer = require('puppeteer')
// const devices = require('puppeteer/DeviceDescriptors')

module.exports = async function searchCNNV () {
  console.log(new Date() + ': start...')

  const browser = await puppeteer.launch({
    // headless: false,
    executablePath: './chrome-mac/Chromium.app/Contents/MacOS/Chromium',
    slowMo: 2500 // slow down by 250ms
  })

  console.log(new Date() + ': browser launched!')

  // const context = await browser.createIncognitoBrowserContext();
  // const page = await context.newPage();

  const page = await browser.newPage()
  // await page.setCookie('__jsluid_h=d86670959cfd91ea1ee1fd20d3cb3448; __jsluid_s=15162a39e287c46c97d4104f75b19c24; JSESSIONID=61C0345D1E9C36788E5DD83855E309FE; __jsl_clearance=1567531665.199|0|IMOExy0MSoxXYTreksKGgtqsrXY%3D');
  // await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36');
  // const iPhone = devices['iPhone 6'];
  // await page.emulate(iPhone);

  // await page.evaluate(() => {debugger });
  console.log(new Date() + ': browser newPage!')

  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()))
  // page.on('console', (...args) => console.log('PAGE LOG:', ...args));

  // await page.goto('http://www.cnvd.org.cn/flaw/list.htm');
  await page.goto(config.url)
  console.log(new Date() + ': browser goto rul!')

  // await page.waitFor(2500)

  await page.waitForSelector('.blkContainerPblk')
  // const blkContainerPblk = await page.$$('.blkContainerPblk');

  const bodyHTML = await page.evaluate(() => document.body.innerHTML)

  // await page.$('div.blkContainer > div.blkContainerPblk > div > table.tlist > thead');
  // await page.screenshot({ path: 'douban.png' });

  await browser.close()
  console.log(new Date() + ': ended!!!\n')
  return bodyHTML
}
