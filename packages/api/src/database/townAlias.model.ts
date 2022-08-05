import { Model } from 'objection'

export class TownAlias extends Model {
    public static get tableName() {
        return 'townAliases'
    }

    id: number
    name: string
    townId: number
}

export default {}
