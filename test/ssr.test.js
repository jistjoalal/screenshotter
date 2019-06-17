const { expect } = require("chai");

const { initBrowser } = require("../src/pptr/browser");
const { ssr } = require("../src/pptr/ssr");

describe("SSR", () => {
  it("Renders google.com", async function() {
    this.timeout(10000);
    const exp = await ssr("https://google.com");
    expect(exp).to.contain("Google");

    // html should be equivalent after rendering it back to the browser
    const browser = await initBrowser();
    const page = await browser.newPage();
    await page.setContent(exp);
    const res = await page.content();
    expect(res).to.equal(exp);
    await browser.close();
  });
});
