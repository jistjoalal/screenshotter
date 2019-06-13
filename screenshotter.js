const puppeteer = require("puppeteer");
const iPhone = puppeteer.devices["iPhone 6"];

const screenshot = async (url, path, mobile = false) => {
  console.log(`fetching ${url}...`);

  // setup page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // set viewport
    if (mobile) await page.emulate(iPhone);
    else await page.setViewport({ width: 850, height: 800 });

    // render + screenshot page
    await page.goto(url);
    await page.screenshot({ path });
    await browser.close();
  } catch (err) {
    console.log(err);
  }

  return path;
};

const fetchScreenshots = async url => {
  // filenames
  const name = url.split("://")[1].replace(/\//g, "-");
  const dir = "shots/";
  const desktopFile = `${dir + name}.png`;
  const mobileFile = `${dir + name}.mobile.png`;

  // screenshotting
  try {
    const desktop = await screenshot(url, desktopFile);
    const mobile = await screenshot(url, mobileFile, true);
    console.log(`saved ${desktopFile}, ${mobileFile}`);
    return { desktop, mobile };
  } catch (err) {
    console.log(err);
  }
};

module.exports = { fetchScreenshots };
