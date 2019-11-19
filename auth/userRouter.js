const router = require("express").Router();
const db = require("./userModel.js");

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ message: "error, try again" }))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.get("/:id", (req, res) => {
  db.getUserById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  db.update(id, req.body)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

module.exports = router;
