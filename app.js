const express = require("express");
const app = express();
const path = require("path");

// Set up static files and middleware
app.use(express.static("./html"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./html/index.html"));
});

// Resources Not Found
app.all("*", (req, res) => {
  res.status(404).send("Requested Resources Not Available");
});

// Listen on Port 5050
app.listen(5050, () => {
  console.log("Server Running on Port 5050.....");
});
