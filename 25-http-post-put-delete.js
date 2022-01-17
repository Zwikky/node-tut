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

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide name value" });
  }
  res.json({
    success: true,
    message: "Postman success",
    data: [...people, name],
  });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  console.log(people);
  console.log(person);
  if (!person) {
    console.log(person);
    return res
      .status(404)
      .json({ success: false, message: "Please provide requested info" });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({
    success: true,
    message: `Changing name from ${person.name} to ${name}`,
    data: [newPeople],
  });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => (person.id = Number(id)));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msq: `Person ${id} does not exist` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({ success: true, data: newPeople });

  // if (person) {
  //   const deletePerson = people.map((person)=> {
  //     if (person.id === Number(id)) {
  //       person.
  //     }
  //   })
  // }
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
