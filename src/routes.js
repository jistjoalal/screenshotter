const express = require("express");

const { desktop, mobile } = require("./pptr/screenshotter");
const { ssr } = require("./pptr/ssr");
const { pdf } = require("./pptr/pdf");
const { previews } = require("./previews");

const { ROOT } = require("./env");

// max level of self reference allowed
const MAX_INCEPTION = 2;
const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

const router = express.Router();

const validateUrl = path => {
  // parse
  const splitIdx = path.slice(1).indexOf("/");
  const url = path.slice(splitIdx + 2);
  // validate
  if (!URL_REGEX.test(url)) {
    throw "Invalid URL";
  }
  // prevent excessive self reference
  const inceptionLevel = (url.match(new RegExp(`${ROOT}`, "g")) || []).length;
  if (inceptionLevel > MAX_INCEPTION) throw "Inception Level Exceeded";
  return url;
};

const route = async (match, render) => {
  router.get(match, async (req, res) => {
    try {
      // validation
      const url = validateUrl(req.url);
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Expires", new Date(Date.now() - 1).toUTCString());
      await render(url, res);
      //
    } catch (error) {
      res.status(500).send({ error: error.toString() });
    }
  });
};

route("/desktop/*", async (url, res) => {
  const png = await desktop(url);
  res.type("image/png").send(png);
});

route("/mobile/*", async (url, res) => {
  const png = await mobile(url);
  res.type("image/png").send(png);
});

route("/previews/*", async (url, res) => {
  const html = await previews(url);
  res.send(html);
});

route("/ssr/*", async (url, res) => {
  const html = await ssr(url);
  res.send(html);
});

route("/pdf/*", async (url, res) => {
  const result = await pdf(url);
  res.type("application/pdf").send(result);
});

module.exports = router;