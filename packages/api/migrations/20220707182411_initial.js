exports.up = async function(knex) {
  await knex.schema.createTable('users', function (table) {
      table.increments('id').primary()
      table.string('username').notNullable()
      table.string('email').unique().notNullable()
      table.string('authId').unique().notNullable()
      table.string('profilePictureUrl')
      table.specificType('roles', 'text ARRAY').notNullable().defaultTo('{\'\'EDITOR\'\'}')
  })
};

exports.down = function(knex) {
  
};
