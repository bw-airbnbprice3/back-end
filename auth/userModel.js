const db = require("../data/dbConfig.js");

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  remove,
  update
};

function register(newUser) {
  return db("users")
    .insert(newUser, "id")
    .then(id => findById(id));
}

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function update(id, user) {
  return db("users")
    .where({ id })
    .update(user);
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
