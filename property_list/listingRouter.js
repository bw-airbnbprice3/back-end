const router = require("express").Router();
const restricted = require("../auth/restrictedRouter.js");
const db = require("./listingModel.js");

router.get("/:username", (req, res) => {
  db.find(req.params.username)
    .then(listings => res.status(200).json(listings))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.post("/:username", restricted, (req, res) => {
  const newListing = req.body;
  db.add(newListing)
    .then(list => res.status(200).json(list))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "error, try again" });
    });
});

router.get("/:username/:id", restricted, (req, res) => {
  const id = req.params.id;
  const username = req.params.username;

  db.findByNameAndId(username, id)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ message: "error, try again" }));
});

router.put("/:username/:id", restricted, (req, res) => {
  const changed = req.body;
  const id = req.params.id;
  const username = req.params.username;

  db.update(username, id, changed)
    .then(list => res.status(200).json(list))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "error, try again" });
    });
});

router.delete("/:username/:id", restricted, (req, res) => {
  const id = req.params.id;
  const username = req.params.username;

  db.remove(username, id)
    .then(list =>
      res.status(200).json({ message: "deleted listing successfully" })
    )
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "error, try again" });
    });
});

module.exports = router;
