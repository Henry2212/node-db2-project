

exports.up = function (knex) {
    return knex.schema.createTable("cars", (tbl) => {

      tbl.string("Title");
      tbl.string('VIN').notNullable().unique();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.integer('mileage').notNullable();
    
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars");
  
  };