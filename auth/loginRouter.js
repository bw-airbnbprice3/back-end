const router = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("./userModel.js");
const secrets = require("./secrets.js");

router.post("/", (req, res) => {
  const { username } = req.body;
  db.login(username)
    .first()
    .then(user => {
      if (user) {
        const token = generateToken(user);
        res.status(200).json({
          username: `${user.username}`,
          token
        });
      } else {
        res.status(401).json({ message: "invalid token" });
      }
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;
