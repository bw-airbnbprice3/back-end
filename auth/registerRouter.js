const router = require("express").Router();
const db = require("./userModel.js");

router.post("/", (req, res) => {
  db.register(req.body)
    .then(user => res.status(200).json(user[0]))
    .catch(err => res.status(500).json({ error: "somthing is wrong" }));
});

module.exports = router;
