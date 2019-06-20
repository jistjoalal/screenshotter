const { initBrowser } = require("./browser");

const pdf = async url => {
  try {
    const browser = await initBrowser();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    const pdf = await page.pdf();
    await page.close();
    return pdf;
  } catch (err) {
    return err;
  }
};

module.exports = { pdf };
