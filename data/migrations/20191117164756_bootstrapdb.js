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
      tbl.string("property_type", 255).notNullable();
      tbl.string("property_location", 255).notNullable();
      tbl.float("property_price").notNullable();
      tbl.integer("minimun_stay").notNullable();
      tbl.text("property_amenities");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("listings");
};
