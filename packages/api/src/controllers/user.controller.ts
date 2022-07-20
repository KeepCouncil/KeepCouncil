import userService from '../services/user.service'

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers()
  res.send({ status: 'OK', payload: allUsers })
}

const getSingleUser = async (req, res) => {
  const user = await userService.getSingleUser(req.params.authId)
  res.send({ status: 'OK', payload: user})
}

const createOneUser = async (req, res) => {
  const newUser = await userService.createNewUser(req.body)
  res.send({ status: 'OK', payload: newUser})
}

export default {
  getAllUsers,
  getSingleUser,
  createOneUser,
}
