const router = require("express").Router();
const db = require("./userModel.js");

router.get("/", (req, res) => {
  console.log(`users called`);
  db.getUsers()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

module.exports = router;
