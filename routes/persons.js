const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.get("/", (req, res) => {
  let result = Person.findAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});
router.post("/", (req, res) => {
  if (!req.body.name) res.status(400).send("Bad Request ):");
  else {
    Person.create(req.body).then((response) => {
      res.status(200).send("Person Added!!");
    });
  }
});

module.exports = router;


//sample json obj --- POST


// {
//   "name": "Jon Doe",
//   "age": "29",
//   "contact_email":"asd@123",
//   "gender":"Male"
// }
