import userService from '../services/user.service'

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers()
  res.send({ status: "OK", payload: allUsers })
}

export default {
  getAllUsers,
}
