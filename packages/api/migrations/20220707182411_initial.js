exports.up = async function(knex) {
  await knex.schema.createTable('users', function (table) {
    table.timestamps(true, true, true)
    table.increments('id').primary()
    table.string('username').notNullable()
    table.string('email').unique().notNullable()
    table.string('authId').unique().notNullable()
    table.string('profilePictureUrl')
    table.specificType('roles', 'text ARRAY').notNullable().defaultTo('{EDITOR}')
  })

  await knex.schema.createTable('states', function (table) {
    table.timestamps(true, true, true)
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('abbreviation').notNullable()
    table.unique(['name', 'abbreviation'])
  })

  await knex.schema.createTable('towns', function (table) {
    table.timestamps(true, true, true)
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('stateId').notNullable()
    table.string('imageUrl')
    table.string('mapLink')
    table.unique(['name', 'stateId'])
  })

  await knex.schema.createTable('townAliases', function (table) {
    table.timestamps(true, true, true)
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('townId').notNullable()
    table.unique(['name', 'townId'])
  })

  await knex.schema.createTable('districts', function (table) {
    table.timestamps(true, true, true)
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('townId').notNullable()
    table.string('imageUrl')
    table.string('mapLink')
    table.unique(['name', 'townId'])
  })

  await knex.schema.createTable('districtAliases', function (table) {
    table.timestamps(true, true, true)
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('districtId').notNullable()
    table.unique(['name', 'districtId'])
  })

  await knex.schema.createTable('terms', function (table) {
    table.timestamps(true, true, true)
    table.increments('id').primary()
    table.timestamp('start').notNullable()
    table.timestamp('end').notNullable()
    table.integer('councilorId').notNullable()
    table.integer('townId').notNullable()
    table.integer('districtId').notNullable()
    table.unique(['start', 'end', 'councilorId', 'townId', 'districtId'])
  })

  await knex.schema.createTable('councilors', function (table) {
    table.timestamps(true, true, true)
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('publicEmail').notNullable()
    table.string('publicPhone')
    table.string('publicFax')
    table.string('publicAddressStreet')
    table.string('publicAddressCity')
    table.string('publicAddressState')
    table.string('publicAddressZip')
    table.text('biography')
    table.string('imageUrl')
    table.string('website')
    table.unique(['name', 'publicEmail'])
  })
};

exports.down = function(knex) {
  
};
