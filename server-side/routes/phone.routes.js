const router = require("express").Router();
const mongoose = require("mongoose");
const Phone = require("../models/Phone.model");
const data = require("../phones.json")
const cors = require("cors");


// Get all phones
router.get("/phones", cors(), (req, res) => {
   res.json(data)
  // res.status(200).json(phones);
  console.log(data);
})

//Get phone by Id
router.get("/phones/:id", cors(), (req, res, next) => {
  const phoneId = req.params.id;
  console.log("this is the", phoneId)
  // if (!mongoose.Types.ObjectId.isValid(phoneId)) {
  //   res.status(400).json({ message: "Specified id is not valid" });
  //   return;
  // }

  Phone.findOne({id: Number(phoneId)})
    .then((phone) => res.json(phone))
    .catch((err)=>{
      console.log("error getting details", err);
      res.status(500).json({
        message: "error getting details", err
      });
    })
});
//   Phone.findOne({id: phoneId})
//     .then((response) => {
//       console.log("this is the response", response);
//       res.json(response)
//     })
//     .catch((err) => res.json(err));
// });

module.exports = router;