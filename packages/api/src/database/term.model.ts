import { Model } from 'objection'

export class Term extends Model {
    public static get tableName() {
        return 'terms'
    }

    id: number
    start: Date
    end: Date
    councilorId: number
    townId: number
    districtId: number
}

export default {}
