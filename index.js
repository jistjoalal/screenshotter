// ENV
global.PORT = process.env.PORT || 3001;
global.ROOT = process.env.ROOT_URL || `http://localhost:${PORT}`;

// express
const express = require("express");
const app = express();

// static
app.use(express.static(__dirname + "/public"));

// routes
const routes = require("./routes");
app.use("/v1", routes);
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`App running @ ${ROOT}:${PORT}...`);
});
