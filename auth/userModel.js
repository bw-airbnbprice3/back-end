const db = require("../data/dbConfig.js");

module.exports = {
  register,
  login,
  getUsers,
  remove
};

function register(newUser) {
  return db("users")
    .insert(newUser, "id")
    .then(id => findById(id));
}

function getUsers() {
  return db("users");
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

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
