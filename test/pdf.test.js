const { expect } = require("chai");

const { pdf } = require("../src/pptr/pdf");

describe("PDF generator", () => {
  let res = null;

  it("should take a PDF of google.com", async function() {
    this.timeout(10000);
    res = await pdf("https://google.com");
  });

  it("should return PDF", () => {
    const header = res.toString("ascii", 1, 4);
    expect(header).to.equal("PDF");
  });
});
