import { Model } from 'objection'
import { DistrictAlias } from './districtAlias.model'

export class District extends Model {
    public static get tableName() {
        return 'districts'
    }

    id: number
    name: string
    townId: number
    imageUrl: string
    mapLink: string

    static get relationMappings() {
        return {
            aliases: {
                relation: Model.HasManyRelation,
                modelClass: DistrictAlias,
                filter: query => query.select('id', 'name'),
                join: {
                    from: 'districts.id',
                    to: 'districtAliases.districtId'
                }
            },
        }
    }
}

export default {}
