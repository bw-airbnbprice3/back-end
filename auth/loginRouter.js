const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("this is login");
});

module.exports = router;
