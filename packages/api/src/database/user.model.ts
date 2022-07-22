import { Model } from 'objection'
import { CreateNewUser } from 'src/api/user.api'
import { ROLE } from 'src/common/constants'

export class User extends Model {
    public static get tableName() {
        return 'users'
    }

    id: number
    username: string
    email: string
    authId: string
    profilePictureUrl: string
    roles: ROLE[]
}

const getAllUsers = async () => {
  return User.query()
}

const getOneUser = async (authId: string) => {
  return User.query()
    .findOne({ authId })
}

const createOneUser = async (user: CreateNewUser) => {
  return User.query()
    .insertAndFetch(user)
}

const updateOneUser = async (authId: string, userDataPatch: any) => {
  return User.query()
    .findOne({ authId })
    .updateAndFetch(userDataPatch)
}

export default {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
}
