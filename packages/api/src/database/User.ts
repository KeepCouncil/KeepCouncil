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

export default {
  getAllUsers,
}

