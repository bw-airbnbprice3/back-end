const db = require("../data/dbConfig.js");

module.exports = {
  register,
  login
};

function register(newUser) {
  return db("users")
    .insert(newUser)
    .then(id => findById(id));
}

function login(username) {
  return db("users")
    .where({ username })
    .select("id", "username", "password");
}

function findById(id) {
  const [idObj] = id;
  return db("users")
    .where({ id: idObj })
    .select("username");
}
