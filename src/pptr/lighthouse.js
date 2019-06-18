const { URL } = require("url");
const lighthouse = require("lighthouse");
const puppeteer = require("puppeteer");

const lighthouseReport = async url => {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: false,
      defaultViewport: null
    });
    const result = await lighthouse(url, {
      port: new URL(browser.wsEndpoint()).port,
      output: "html"
    });
    await browser.close();
    return result.report;
  } catch (err) {
    return err;
  }
};

module.exports = { lighthouseReport };
