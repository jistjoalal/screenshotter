const { initBrowser } = require("./browser");

const metrics = async url => {
  try {
    const browser = await initBrowser();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    const result = await page.metrics();
    await page.close();
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = { metrics };
