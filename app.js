const express = require("express");
const app = express();
const people = require("./routes/people");
const login = require("./routes/auth");

// static assets
app.use(express.static("./public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", login);

// app.post("/login", (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     return res.status(200).send(`Welcome <h1>${name}</h1>`);
//   }
//   res.status(401).send("Please provide value...");
// });

app.listen(5050, () => {
  console.log("Server on port 5050");
});
