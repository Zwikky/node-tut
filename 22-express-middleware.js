const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// app.use("/api", logger);
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.get("/api/v1/products", (req, res) => {
  res.send("Products");
});
app.listen(5050, () => {
  console.log("Server on port 5050");
});
