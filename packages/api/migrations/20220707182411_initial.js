exports.up = async function(knex) {
  const EDITOR_ROLE = 'EDITOR'
  const MODERATOR_ROLE = 'MODERATOR'
  const ADMIN_ROLE = 'ADMIN'

  await knex.schema.createTable('users', function (table) {
      table.increments('id').primary()
      table.string('username').notNullable()
      table.string('email').unique().notNullable()
      table.string('authId').unique().notNullable()
      table.string('profilePictureUrl')
      table.enum('role', [EDITOR_ROLE, MODERATOR_ROLE, ADMIN_ROLE]).notNullable().defaultTo(EDITOR_ROLE)
  })
};

exports.down = function(knex) {
  
};
