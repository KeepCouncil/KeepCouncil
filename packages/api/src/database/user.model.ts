import { Model } from 'objection'

enum UserRole { 
  EDITOR = "EDITOR",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN",
}

export class User extends Model {
    public static get tableName() {
        return 'users'
    }

    id: number
    username: string
    email: string
    authId: string
    profilePictureUrl: string
    role: UserRole
}

const getAllUsers = async () => {
  return User.query()
}

const getSingleUser = async (authId) => {
  return User.query().findOne({ authId })
}

const createNewUser = async (user) => {
  return User.query().insertAndFetch(user)
}

export default {
  getAllUsers,
  getSingleUser,
  createNewUser,
}
