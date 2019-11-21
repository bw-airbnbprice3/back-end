const db = require("../data/dbConfig.js");

module.exports = {
  find,
  add,
  findByNameAndId,
  update,
  remove
};

function find(username) {
  return db("users as u")
    .join("listings as l", "u.username", "=", "l.host_username")
    .where({ "u.username": username })
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
    .insert(newListing, "id")
    .then(id => findById(id[0]));
}

function findByNameAndId(username, id) {
  return db("users as u")
    .join("listings as l", "u.username", "=", "l.host_username")
    .where({ "u.username": username, "l.id": id });
}
async function update(username, id, changed) {
  const listing = await findUserListing(username, id);

  return db("listings")
    .where({ id: listing.id })
    .update(changed);
}
async function remove(username, id) {
  const listing = await findUserListing(username, id);
  console.log(listing);
  return db("listings")
    .del()
    .where({ id: listing.id });
}

function findUserListing(username, id) {
  const listing = db("users as u")
    .select("l.id")
    .join("listings as l", "u.username", "=", "l.host_username")
    .where({ "u.username": username, "l.id": id })
    .first();
  return listing;
}
