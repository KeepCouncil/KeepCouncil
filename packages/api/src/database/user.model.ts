import { Model } from 'objection'

export class User extends Model {
    public static get tableName() {
        return 'users'
    }

    id: number
    username: string
    email: string
}

const getAllUsers = async () => {
  return User.query()
}

const createNewUser = async (user) => {
  return User.query().insertAndFetch(user)
}

export default {
  getAllUsers,
  createNewUser,
}
