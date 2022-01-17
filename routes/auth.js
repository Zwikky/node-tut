const express = require("express");
const router = express.Router();
let { people } = require("./../data/data");

router.post("/", (req, res) => {
  const { name } = req.body;

  const person = people.find((person) => person.name === name);

  if (!person) {
    return res.status(401).json({ success: false, msg: "Wrong Credentials" });
  }

  res.status(200).json({
    success: `Welcome ${person.name} with id: ${person.id}`,
    data: person,
  });
});

module.exports = router;
