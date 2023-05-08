const router = require("express").Router();
const mongoose = require("mongoose");
const Phone = require("../models/Phone.model");

// Get all phones
router.get("/phones", (req, res) => {
  Phone.find().then((phones) => {
    res.json(phones);
  }).catch((err) => {
    console.error(err);
    res.status(500).json({ message: 'error getting all phones' });
  });
});

//Get phone by Id
router.get("/phones/:id", (req, res, next) => {
  const phoneId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(phoneId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  
  Phone.findById(phoneId)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => res.json(err));
});

module.exports = router;