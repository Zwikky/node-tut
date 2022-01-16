const express = require("express");
const app = express();
let { people } = require("./data/data");

// static assets
app.use(express.static("./public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
  console.log({ success: true, data: people });
  console.log(people.length);
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide name value" });
  }
  res.status(201).json({ success: true, message: "Success", person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome <h1>${name}</h1>`);
  }
  res.status(401).send("Please provide value...");
});

app.listen(5050, () => {
  console.log("Server on port 5050");
});
