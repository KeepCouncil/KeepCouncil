import CouncilorModel, { Councilor } from '../database/councilor.model'

const getAllCouncilors = async (): Promise<Councilor[] | []> => {
  return CouncilorModel.getAllCouncilors()
}

const getOneCouncilor = async (councilorId: number): Promise<Councilor | undefined> => {
    return CouncilorModel.getOneCouncilor(councilorId)
}

export default {
  getAllCouncilors,
  getOneCouncilor,
}
