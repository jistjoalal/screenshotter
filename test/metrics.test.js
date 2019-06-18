const { expect } = require("chai");

const { metrics } = require("../src/pptr/metrics");

describe("Metrics", () => {
  let res = null;

  it("Generates metrics for google.com", async function() {
    this.timeout(10000);
    res = await metrics("https://google.com");
  });

  it("should return object", () => {
    expect(res).to.be.an("object");
  });

  it("should have some metric properties", () => {
    // some properties that should exist
    expect(res).to.have.property("Timestamp");
    expect(res).to.have.property("RecalcStyleCount");
    expect(res).to.have.property("ScriptDuration");
  });
});
