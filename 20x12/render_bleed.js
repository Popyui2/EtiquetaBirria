const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const scale = 4;
  const W = 779, H = 476;

  const browser = await chromium.launch({
    executablePath: '/home/martin/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
  });
  const ctx = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: scale,
  });
  const page = await ctx.newPage();

  const file = 'file://' + path.resolve(__dirname, 'label_v2_20x12.html');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // Hide the magenta trim guide for the exported asset
  await page.addStyleTag({ content: '.bleed::before, .bleed::after { display:none !important; }' });

  const outPng = path.resolve(__dirname, 'label_v2_20x12_bleed.png');
  const el = await page.locator('.bleed').first();
  await el.screenshot({ path: outPng, omitBackground: false });

  const outPdf = path.resolve(__dirname, 'label_v2_20x12_bleed.pdf');
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: outPdf,
    width: '206mm',
    height: '126mm',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(outPng);
  console.log(outPdf);
})();
