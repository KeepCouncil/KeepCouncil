import { Model } from 'objection'
import { UserProfileObject, UserObject } from 'src/api/user.api'
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

const getAllUsers = async (): Promise<User[] | []> => {
  return User.query()
}

const getOneUser = async (authId: string): Promise<User | undefined> => {
  return User.query()
    .findOne({ authId })
}

const createOneUser = async (user: UserObject): Promise<User> => {
  return User.query()
    .insertAndFetch(user)
}

const updateOneUser = async (authId: string, userData: UserProfileObject): Promise<User | undefined> => {
  const user: User = await User.query().findOne({ authId })
  return user?.$query().updateAndFetch({...user, ...userData})
}

export default {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
}
