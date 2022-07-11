exports.up = async function(knex) {
  await knex.schema.createTable('users', function (table) {
      table.increments()
      table.string('username')
      table.string('email').unique()
  })
};

exports.down = function(knex) {
  
};
