exports.seed = function(knex) {
  return knex("users").insert([
    { id: 1, username: "testusername", password: "testpassword" }
  ]);
};
