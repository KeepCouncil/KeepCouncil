import { Model } from 'objection'
import { stripId } from '../common/util'
import { TownAlias } from './townAlias.model'
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
                join: {
                    from: 'towns.id',
                    to: 'townAliases.townId'
                }
            },
            state: {
                relation: Model.BelongsToOneRelation,
                modelClass: State,
                join: {
                    from: 'states.id',
                    to: 'towns.stateId'
                }
            },
        }
    }
}

const getAllTowns = async (): Promise<DisplayTown[] | []> => {
  const towns = await Town.query().withGraphFetched('[aliases, state]')
  return towns.map(toDisplayTown)
}

const getOneTown = async (townId: string): Promise<DisplayTown | undefined> => {
  const fullTown = await Town.query().findById(townId).withGraphFetched('[aliases, state]')
  return toDisplayTown(fullTown)
}

function toDisplayTown(fullTown: any): DisplayTown {
    return {
        id: fullTown.id,
        name: fullTown.name,
        aliases: fullTown.aliases.map(a => a.name),
        state: stripId(fullTown.state),
        imageUrl: fullTown.imageUrl,
        mapLink: fullTown.mapLink
    }
}

export default {
  getAllTowns,
  getOneTown,
}
