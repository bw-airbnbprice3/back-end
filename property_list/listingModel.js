const db = require("../data/dbConfig.js");

module.exports = {
  find,
  add,
  findById,
  update,
  remove
};

function find() {
  return db("users as u")
    .join("listings as l", "u.username", "=", "l.host_username")
    .select(
      "u.username",
      "l.id",
      "l.property_name",
      "l.room_type",
      "l.address",
      "l.neighborhood_group",
      "l.neighborhood",
      "l.availability_of_year",
      "l.property_price",
      "l.bedroom_number",
      "l.bathroom_number",
      "l.minimum_nights",
      "l.property_amenities"
    );
}
function add(newListing) {
  return db("listings")
    .insert(newListing)
    .then(id => findById(id[0]));
}

function findById(id) {
  return db("listings")
    .where({ id })
    .first();
}
function update(id, changed) {
  return db("listings")
    .where({ id })
    .update(changed)
    .then(num => findById(id));
}
function remove(id) {
  return db("listings")
    .where({ id })
    .del();
}
