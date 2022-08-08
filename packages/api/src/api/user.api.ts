import UserModel, { User } from '../database/user.model'


export interface UserObject {
  username: string
  email: string
  authId: string
  profilePictureUrl?: string
}

export interface UserProfileObject {
  username: string
  profilePictureUrl?: string
}

const getAllUsers = async (): Promise<User[] | []> => {
  return UserModel.getAllUsers()
}

const getOneUser = async (authId: string): Promise<User | undefined> => {
  return UserModel.getOneUser(authId)
}

const createOneUser = async (newUser: UserObject): Promise<User> => {
  return UserModel.createOneUser(newUser)
}

const updateOneUser = async (userAuthId: string, userData: UserProfileObject): Promise<User | undefined> => {
  return UserModel.updateOneUser(userAuthId, userData)
}

export default {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
}
