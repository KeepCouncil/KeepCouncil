import userService from '../services/user.service'

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers()
  res.send({ status: "OK", payload: allUsers })
}

const createOneUser = async (req, res) => {
  const newUser = await userService.createNewUser(req.body)
  res.send({ status: 'ok', payload: newUser})
}

export default {
  getAllUsers,
  createOneUser,
}
