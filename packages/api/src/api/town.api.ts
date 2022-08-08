import { District } from 'src/database/district.model'
import { State } from 'src/database/state.model'
import { TownAlias } from 'src/database/townAlias.model'
import TownModel, { Town } from '../database/town.model'

export interface TownObject {
  name: string
  stateId: number
  imageUrl?: string
  mapLink?: string
  profilePictureUrl?: string
}

export interface DisplayTown {
  id: number
  name: string
  aliases: TownAlias[]
  districts: District[]
  state: State
  imageUrl?: string
  mapLink?: string
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
