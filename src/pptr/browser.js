const puppeteer = require("puppeteer");

let browser = null;
const initBrowser = async () => {
  try {
    if (!browser) {
      browser = await puppeteer.launch({
        dumpio: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
      });
    }
    return browser;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { initBrowser };
