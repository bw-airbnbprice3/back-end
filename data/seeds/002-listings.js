exports.seed = function(knex) {
  return knex("listings").insert([
    {
      id: 1,
      host_username: "testusername",
      property_name: "test name",
      room_type: "test type",
      address: "test address",
      neighborhood_group: "test neighborhood group",
      neighborhood: "test neighborhood",
      availability_of_year: 200,
      property_price: 100,
      bedroom_number: 3,
      bathroom_number: 2,
      minimun_nights: 3,
      property_amenities: "gym, swimming pool"
    },
    {
      id: 2,
      host_username: "testusername",
      property_name: "test name 2",
      room_type: "test type 2",
      address: "test address 2",
      neighborhood_group: "test neighborhood group 2",
      neighborhood: "test neighborhood 2",
      availability_of_year: 250,
      property_price: 150,
      bedroom_number: 2,
      bathroom_number: 1,
      minimun_nights: 2,
      property_amenities: "recreational room"
    }
  ]);
};
