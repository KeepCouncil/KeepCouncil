import User from '../database/user.model'

const getAllUsers = async () => {
  return User.getAllUsers()
}

const getSingleUser = async (authId) => {
  return User.getSingleUser(authId)
}

const createNewUser = async (user) => {
  return User.createNewUser(user)
}

export default {
  getAllUsers,
  getSingleUser,
  createNewUser,
}
