const { URL } = require("url");
const lighthouse = require("lighthouse");

const { initBrowser } = require("./browser");

const lighthouseReport = async url => {
  try {
    const browser = await initBrowser();
    const result = await lighthouse(url, {
      port: new URL(browser.wsEndpoint()).port,
      output: "html"
    });
    return result.report;
  } catch (err) {
    throw err;
  }
};

module.exports = { lighthouseReport };
