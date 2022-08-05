exports.up = async function(knex) {
  await knex.schema.createTable('users', function (table) {
      table.increments('id').primary()
      table.string('username').notNullable()
      table.string('email').unique().notNullable()
      table.string('authId').unique().notNullable()
      table.string('profilePictureUrl')
      table.specificType('roles', 'text ARRAY').notNullable().defaultTo('{EDITOR}')
  })

  await knex.schema.createTable('states', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('abbreviation').notNullable()
    table.unique(['name', 'abbreviation'])
  })

  await knex.schema.createTable('towns', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('stateId').notNullable()
    table.string('imageUrl')
    table.string('mapLink')
    table.unique(['name', 'stateId'])
  })

  await knex.schema.createTable('townAliases', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('townId').notNullable()
    table.unique(['name', 'townId'])
  })
};

exports.down = function(knex) {
  
};
