const { initBrowser } = require("./browser");

const ssr = async url => {
  try {
    const browser = await initBrowser();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    // inject base so relative resources load properly
    await page.evaluate(url => {
      const base = document.createElement("base");
      const slash = url.endsWith("/") ? "" : "/";
      base.href = url + slash;
      document.head.prepend(base);
    }, url);

    // remove scripts (except structured data) and imports
    await page.evaluate(() => {
      const elements = document.querySelectorAll(
        'script:not([type="application/ld+json"]), link[rel="import"]'
      );
      elements.forEach(e => e.remove());
    });

    // return html as string
    const html = await page.content();
    await page.close();
    return html;
  } catch (err) {
    return err;
  }
};

module.exports = { ssr };
