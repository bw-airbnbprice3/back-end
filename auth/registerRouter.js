const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("this is register");
});

module.exports = router;
