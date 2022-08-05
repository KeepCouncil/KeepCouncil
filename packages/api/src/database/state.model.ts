import { Model } from 'objection'

export class State extends Model {
    public static get tableName() {
        return 'states'
    }

    id: number
    name: string
    abbreviation: string
}

export default {}
