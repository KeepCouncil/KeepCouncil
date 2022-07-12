import User from '../database/user.model'

const getAllUsers = async () => {
  return User.getAllUsers()
}

const createNewUser = async (user) => {
  return User.createNewUser(user)
}

export default {
  getAllUsers,
  createNewUser,
}
