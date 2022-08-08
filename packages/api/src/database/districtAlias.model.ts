import { Model } from 'objection'

export class DistrictAlias extends Model {
    public static get tableName() {
        return 'districtAliases'
    }

    id: number
    name: string
    districtId: number
}

export default {}
