const express = require("express");
const router = express.Router();

const { screenshot, screenshotMobile } = require("./screenshotter");
const { previews } = require("./previews");

const route = (match, render) => {
  router.get(match, async (req, res) => {
    // url param
    const url = req.params[0];
    // validation
    if (!urlRegEx.test(url)) return "Invalid Url";
    // render response
    const html = await render(url);
    res.write(html, "binary");
    res.end(null, "binary");
  });
};

// routes
route("/previews/*", previews);
route("/mobile/*", screenshotMobile);
route("/*", screenshot);

const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

module.exports = router;
