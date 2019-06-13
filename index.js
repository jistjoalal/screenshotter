const express = require("express");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`App running @ localhost:${port}...`);
});
