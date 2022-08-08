import { Model } from 'objection'
import { Term } from './term.model'

export class Councilor extends Model {
    public static get tableName() {
        return 'councilors'
    }

    id: number
    name: string
    publicEmail: string
    publicPhone?: string
    publicFax?: string
    publicAddressStreet?: string
    publicAddressCity?: string
    publicAddressState?: string
    publicAddressZip?: string
    biography?: string
    imageUrl?: string
    website?: string

    static get relationMappings() {
        return {
            terms: {
                relation: Model.HasManyRelation,
                modelClass: Term,
                filter: query => query.select('id', 'start', 'end', 'townId', 'districtId'),
                join: {
                    from: 'councilors.id',
                    to: 'terms.councilorId'
                }
            },
        }
    }
}

const getAllCouncilors = async (): Promise<Councilor[] | []> => {
    return Councilor.query().withGraphFetched('[terms]')
}

const getOneCouncilor = async (councilorId: number): Promise<Councilor | undefined> => {
    return Councilor.query().findById(councilorId).withGraphFetched('[terms]')
}

export default {
    getAllCouncilors,
    getOneCouncilor,
}  
