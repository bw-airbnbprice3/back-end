const router = require("express").Router();
const restricted = require("../auth/restrictedRouter.js");
const db = require("./listingModel.js");

router.get("/", restricted, (req, res) => {
  db.find()
    .then(listings => res.status(200).json(listings))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.post("/", restricted, (req, res) => {
  const newListing = req.body;
  db.add(newListing)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.get("/:id", restricted, (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.put("/:id", restricted, (req, res) => {
  const changed = req.body;
  const id = req.params.id;

  db.update(id, changed)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.delete("/:id", restricted, (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

module.exports = router;
