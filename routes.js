const express = require("express");
const { URL } = require("url");

const { desktop, mobile } = require("./screenshotter");
const { previews } = require("./previews");

const router = express.Router();

const MAX_INCEPTION = 2;

const route = async (match, render) => {
  router.get(match, async (req, res) => {
    try {
      // validation
      const url = new URL(req.params[0]);
      // prevent inception
      const inceptionLevel = (url.href.match(new RegExp(`${ROOT}`, "g")) || [])
        .length;
      if (inceptionLevel > MAX_INCEPTION) throw "Inception Level Exceeded";

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
