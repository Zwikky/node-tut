const express = require("express");
const app = express();
const morgan = require("morgan");

// app.use(express.static("./html"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.get("/api/v1/products", (req, res) => {
  res.send("Products");
});
app.listen(5050, () => {
  console.log("Server on port 5050");
});
