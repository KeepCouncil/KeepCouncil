import { Model } from 'objection'
import { stripId } from '../common/util'
import { TownAlias } from './townAlias.model'
import { District } from './district.model'
import { State } from './state.model'
import { DisplayTown } from 'src/api/town.api'

export class Town extends Model {
    public static get tableName() {
        return 'towns'
    }

    id: number
    name: string
    stateId: number
    imageUrl: string
    mapLink: string

    static get relationMappings() {
        return {
            aliases: {
                relation: Model.HasManyRelation,
                modelClass: TownAlias,
                filter: query => query.select('id', 'name'),
                join: {
                    from: 'towns.id',
                    to: 'townAliases.townId'
                }
            },
            districts: {
                relation: Model.HasManyRelation,
                modelClass: District,
                filter: query => query.select('id', 'imageUrl', 'mapLink', 'name'),
                join: {
                    from: 'towns.id',
                    to: 'districts.townId'
                }
            },
            state: {
                relation: Model.BelongsToOneRelation,
                modelClass: State,
                filter: query => query.select('id', 'name', 'abbreviation'),
                join: {
                    from: 'states.id',
                    to: 'towns.stateId'
                }
            },
        }
    }
}

const getAllTowns = async (): Promise<DisplayTown[] | []> => {
  const towns = await Town.query().withGraphFetched('[aliases, districts.[aliases], state]')
  return towns.map(toDisplayTown)
}

const getOneTown = async (townId: number): Promise<DisplayTown | undefined> => {
  const fullTown = await Town.query().findById(townId).withGraphFetched('[aliases, districts.[aliases], state]')
  return toDisplayTown(fullTown)
}

function toDisplayTown(fullTown: any): DisplayTown {
    return {
        id: fullTown.id,
        name: fullTown.name,
        aliases: fullTown.aliases,
        districts: fullTown.districts,
        state: fullTown.state,
        mapLink: fullTown.mapLink,
        imageUrl: fullTown.imageUrl,
    }
}

export default {
  getAllTowns,
  getOneTown,
}
