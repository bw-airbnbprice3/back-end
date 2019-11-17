const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("get a list of properties of the login in user");
});

router.post("/", (req, res) => {
  res.send("add new property");
});

router.put("/:id", (req, res) => {
  res.send("edit a property");
});

router.delete("/:id", (req, res) => {
  res.send("delete a property");
});

module.exports = router;
