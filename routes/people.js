const express = require("express");
const router = express.Router();
let { people } = require("./../data/data");

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide name value" });
  }
  res.status(201).json({ success: true, message: "Success", person: name });
});

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
  console.log({ success: true, data: people });
  console.log(people.length);
});

router.post("/postman", (req, res) => {
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

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => (person.id = Number(id)));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msq: `Person ${id} does not exist` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
