import User from '../database/user.model'

export interface CreateNewUser {
  username: string
  email: string
  authId: string
  profilePictureUrl: string | null
}

const getAllUsers = async () => {
  return User.getAllUsers()
}

const getOneUser = async (authId: string) => {
  return User.getOneUser(authId)
}

const createOneUser = async (newUser: CreateNewUser) => {
  return User.createOneUser(newUser)
}

const updateRoles = async (userId, roles) => {
  return User.updateOneUser(userId, roles)
}

export default {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateRoles,
}
