import { Model } from 'objection'
import { User } from './user.model'
import { State } from './state.model'
import { TownAlias } from './townAlias.model'
import { Town } from './town.model'

let knex
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]

async function setup() {
    knex = require('knex')(configuration)
    Model.knex(knex)
    await knex.migrate.latest()
    if (environment === 'development') {
      await seed()
    }
}

async function shutdown() {
    knex.destroy()
}

async function seed() {
  await knex.seed.run()
}

async function truncateTable(tableName?: string) {
    if (tableName) {
        await knex.raw('truncate table "' + tableName + '" RESTART IDENTITY CASCADE')
    }
}

const dataModels: any[] = [
  User,
  State,
  Town,
  TownAlias,
]

async function removeExistingData() {
    await Promise.all([
        ...dataModels.map(model => truncateTable(model.tableName)),
    ])
}

export default {
  setup,
  shutdown,
  seed,
  truncateTable,
  removeExistingData,
}
