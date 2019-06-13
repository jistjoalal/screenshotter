const puppeteer = require("puppeteer");
const iPhone = puppeteer.devices["iPhone 6"];

const screenshot = async (url, mobile = false) => {
  console.log(`fetching ${url}${mobile ? " (mobile)" : ""}...`);

  // setup page
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  try {
    // set viewport
    if (mobile) await page.emulate(iPhone);
    else await page.setViewport({ width: 850, height: 850 });

    // render + screenshot page
    await page.goto(url);
    const shot = await page.screenshot();
    await browser.close();
    return shot;
  } catch (err) {
    throw err;
  }
};

const screenshotMobile = url => screenshot(url, true);

module.exports = { screenshot, screenshotMobile };
