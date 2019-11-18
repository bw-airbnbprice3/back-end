const router = require("express").Router();
const db = require("./userModel.js");

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id).then(user => console.log(user));
});

module.exports = router;
