// ENV
const port = process.env.PORT || 3001;

// express
const express = require("express");
const app = express();

// bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static
app.use(express.static(__dirname + "/public"));
app.use("/shots", express.static(__dirname + "/shots"));

// routes
const routes = require("./routes");
app.use("/", routes);

// root
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`App running @ localhost:${port}...`);
});
