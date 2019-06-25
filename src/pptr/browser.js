const puppeteer = require("puppeteer");

let browser = null;
const initBrowser = async () => {
  try {
    if (!browser) {
      browser = await puppeteer.launch({
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage"
        ]
      });
    }
    return browser;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { initBrowser };
