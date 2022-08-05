import TownModel, { Town } from '../database/town.model'

export interface TownObject {
  name: string
  stateId: number
  imageUrl: string | null
  mapLink: string | null
  profilePictureUrl: string | null
}

export interface DisplayTown {
  id: number
  name: string
  aliases: string[]
  state: object
  imageUrl: string
  mapLink: string
}

const getAllTowns = async (): Promise<DisplayTown[] | []> => {
  return TownModel.getAllTowns()
}

const getOneTown = async (townId: string): Promise<DisplayTown | undefined> => {
    return TownModel.getOneTown(townId)
}

export default {
  getAllTowns,
  getOneTown,
}
