const express = require("express");
const request = require("supertest");
const { expect } = require("chai");

const routes = require("../routes");

const app = express();
app.use("/", routes);

// runs assertion on url with timeout of 10s
// round trips (route => screenshot => response)
// usually take around 2s (default timeout)
const routeTest = (assertion, url) =>
  function(done) {
    this.timeout(10000);
    request(app)
      .get(url)
      .expect(assertion)
      .end(done);
  };

// asserts properties of PNG responses
const pngRoute = res => {
  const { headers, status } = res;
  expect(headers["content-type"]).to.equal("image/png");
  expect(headers["cache-control"]).to.equal("no-cache");
  const expires = new Date(headers["expires"]);
  expect(expires).to.be.below(new Date());
  expect(status).to.equal(200);
  return res;
};

const htmlRoute = res => {
  const { headers, status } = res;
  expect(headers["content-type"]).to.contain("html");
  expect(status).to.equal(200);
  return res;
};

const invalidRoute = res => {
  const { status } = res;
  expect(status).to.equal(500);
  return res;
};

describe("Routes", () => {
  it("/desktop", routeTest(pngRoute, "/desktop/https://google.com"));
  it("/mobile", routeTest(pngRoute, "/mobile/https://github.com"));
  it("/previews", routeTest(htmlRoute, "/previews/https://reddit.com"));
  it("invalid route", routeTest(invalidRoute, "/desktop/invalid"));
});
