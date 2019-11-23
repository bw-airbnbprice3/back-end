exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("listings", tbl => {
      tbl.increments();
      tbl
        .string("host_username", 128)
        .unsigned()
        .notNullable()
        .references("username")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.string("property_name", 255).notNullable();
      tbl.integer("room_type").notNullable();
      tbl.string("address", 255).notNullable();
      tbl.integer("neighborhood_group").notNullable();
      tbl.integer("neighborhood").notNullable();
      tbl.integer("availability_of_year").notNullable();
      tbl.float("property_price").notNullable();
      tbl.integer("bedroom_number");
      tbl.integer("bathroom_number");
      tbl.integer("minimum_nights").notNullable();
      tbl.text("property_amenities");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("listings").dropTableIfExists("users");
};
