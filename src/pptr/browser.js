const puppeteer = require("puppeteer");

let browser = null;
const initBrowser = async () => {
  if (!browser) {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
  }
  return browser;
};

module.exports = { initBrowser };
