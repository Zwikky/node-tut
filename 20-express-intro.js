const express = require("express");
const app = express();

// app.get
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About us");
});
// app.post
// app.put
// app.delete
// app.all
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resources Not Found</h1>");
});
// app.use
// app.listen
app.listen(5050, () => {
  console.log("Server running on port: 5050");
});
