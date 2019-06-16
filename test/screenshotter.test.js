const assert = require("assert");

const { desktop, mobile } = require("../screenshotter");

describe("Screenshotter", () => {
  describe("Desktop Screenshot", () => {
    let res = null;

    it("Should screenshot google.com", async function() {
      this.timeout(10000);
      const url = "https://google.com";
      res = await desktop(url);
    });

    it("Should return PNG", () => {
      // bytes 1-3 are PNG
      const header = res.toString("ascii", 1, 4);
      assert.equal(header, "PNG");
    });

    it("Should be correct size", () => {
      // width and height @ 16 + 20 bytes in, 4 long
      // 850x850 w/ scaleFactor 2 = 1700x1700
      const width = res.readIntBE(16, 4);
      assert.equal(width, 1700);
      const height = res.readIntBE(20, 4);
      assert.equal(height, 1700);
    });
  });

  describe("Mobile Screenshot", () => {
    let res = null;

    it("Should screenshot github.com", async function() {
      this.timeout(10000);
      const url = "https://github.com";
      res = await mobile(url);
    });

    it("Should return PNG", () => {
      const header = res.toString("ascii", 1, 4);
      assert.equal(header, "PNG");
    });

    it("Should be correct size", () => {
      const width = res.readIntBE(16, 4);
      assert.equal(width, 750);
      const height = res.readIntBE(20, 4);
      assert.equal(height, 1334);
    });
  });
});
