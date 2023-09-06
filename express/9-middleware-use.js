const express = require("express");
const logger = require("./expressADDmethod/logger.js");
const authorize = require("./expressADDmethod/authorize.js");
const morgan = require('morgan')

const PORT = 5000;

const app = express();

// app.use(logger);
// app.use('/api',logger) // gona aply only on route which have api in url
app.use(logger, authorize);
app.use(morgan('tiny'))
// app.use(morgan('dev'))

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/product", (req, res) => {
  res.send("products");
});

app.get("/api/auth", (req, res) => {
  console.log(req.user);
  res.send("itmes");
});

app.listen(PORT, () => console.log("server is 5000"));
