import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import userApi from '../../api/user.api'
import { checkJwt } from '../../common/auth'

const router = express.Router()

router.get(
  '/',
  checkJwt,
  async (_, res) => {
    const allUsers = await userApi.getAllUsers()
    res.send({ status: 'OK', payload: allUsers })
  }
)

router.get(
  '/:authId',
  celebrate({
    [Segments.PARAMS]: {
      authId: Joi.string().required(),
    }
  }),
  async (req, res) => {
    const user = await userApi.getOneUser(req.params.authId)
    res.send({ status: 'OK', payload: user })
  }
)

router.post(
  '/',
  checkJwt,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      email: Joi.string().required(),
      authId: Joi.string().required(),
      profilePictureUrl: Joi.string().optional(),
    })
  }),
  async (req, res) => {
    const createdUser = await userApi.createOneUser(req.body)
    res.send({ status: 'OK', payload: createdUser})
  }
)

export default router
