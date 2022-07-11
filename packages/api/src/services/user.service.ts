import User from '../database/User'

const getAllUsers = async () => {
  return User.getAllUsers()
}

export default {
  getAllUsers,
}
