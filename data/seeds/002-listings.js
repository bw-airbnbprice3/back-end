exports.seed = function(knex) {
  return knex("listings").insert([
    {
      id: 1,
      host_username: "testusername",
      property_name: "test name",
      property_type: "test type",
      property_location: "test location",
      property_price: 100,
      minimun_stay: 1,
      property_amenities: "test amenities"
    },
    {
      id: 2,
      host_username: "testusername",
      property_name: "test name 2",
      property_type: "test type 2",
      property_location: "test location 2",
      property_price: 200,
      minimun_stay: 2,
      property_amenities: "test amenities 2"
    },
    {
      id: 3,
      host_username: "testusername",
      property_name: "test name 3",
      property_type: "test type 3",
      property_location: "test location 3",
      property_price: 300,
      minimun_stay: 3,
      property_amenities: "test amenities 3"
    }
  ]);
};
