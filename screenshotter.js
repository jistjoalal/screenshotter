const puppeteer = require("puppeteer");
const iPhone = puppeteer.devices["iPhone 6"];

const screenshot = async (url, mobile = false) => {
  console.log(`fetching ${url}...`);

  const path = makePath(url, mobile);

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

const makePath = (url, mobile = false) => {
  const name = url.split("://")[1].replace(/\//g, "-");
  const dir = "shots/";
  const path = dir + name;
  const suffix = mobile ? ".mobile" : "";
  return `${path}${suffix}.png`;
};

module.exports = { screenshot };
