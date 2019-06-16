const puppeteer = require("puppeteer");
const iPhone = puppeteer.devices["iPhone 6"];

const screenshot = async (url, pageSetup) => {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();

    await pageSetup(page);

    await page.goto(url, { waitUntil: "networkidle0" });
    const shot = await page.screenshot();
    await browser.close();

    return shot;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const desktopSetup = async page => {
  await page.setViewport({ width: 850, height: 850, deviceScaleFactor: 2 });
};

const mobileSetup = async page => {
  await page.emulate(iPhone);
};

const desktop = async url => await screenshot(url, desktopSetup);
const mobile = async url => await screenshot(url, mobileSetup);

module.exports = { desktop, mobile };
