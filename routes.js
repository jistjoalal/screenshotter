const express = require("express");

const { desktop, mobile } = require("./screenshotter");
const { previews } = require("./previews");

// max level of self reference allowed
const MAX_INCEPTION = 2;
const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
// time to cache in seconds
const CACHE_MAX_AGE = "86400";

const router = express.Router();

const validateUrl = path => {
  // parse
  const splitIdx = path.slice(1).indexOf("/");
  const url = path.slice(splitIdx + 2);
  // validate
  if (!URL_REGEX.test(url)) {
    throw "Invalid URL";
  }
  // prevent
  const inceptionLevel = (url.match(new RegExp(`${ROOT}`, "g")) || []).length;
  if (inceptionLevel > MAX_INCEPTION) throw "Inception Level Exceeded";
  return url;
};

const route = async (match, render) => {
  router.get(match, async (req, res) => {
    try {
      // validation
      const url = validateUrl(req.url);
      res.setHeader("Cache-Control", `max-age=${CACHE_MAX_AGE}`);
      await render(url, res);
      //
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
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

module.exports = router;
