const express = require("express");
const router = express.Router();

const { fetchScreenshots } = require("./screenshotter");
const { previews } = require("./previews");

const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

router.get("/preview/*", async (req, res) => {
  // url param
  const url = req.params[0];

  // validate url
  if (!urlRegEx.test(url)) {
    return res.send("Invalid Url");
  }

  // send screenshots as response
  const { desktop, mobile } = await fetchScreenshots(url);
  const html = previews(desktop, mobile);
  res.send(html);
});

module.exports = router;
