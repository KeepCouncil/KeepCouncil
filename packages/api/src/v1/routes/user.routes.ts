import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import userApi from '../../api/user.api'
import { checkJwt } from '../../common/auth'

const router = express.Router()

const returnResourceNotFound = (res: express.Response, statusMessage: string) => {
  return res.send({
      status: statusMessage,
      payload: undefined
    })
    .status(404)
}

router.get(
  '/',
  checkJwt,
  async (_: express.Request, res: express.Response) => {
    const allUsers = await userApi.getAllUsers()
    return res
      .send({ status: 'OK', payload: allUsers })
      .status(200)
  }
)

router.get(
  '/:authId',
  celebrate({
    [Segments.PARAMS]: {
      authId: Joi.string().required(),
    }
  }),
  async (req: express.Request, res: express.Response) => {
    const user = await userApi.getOneUser(req.params.authId)
    if (user) {
      return res
        .send({ status: 'OK', payload: user })
        .status(200)
    }
    return returnResourceNotFound(res, 'UserNotFound')
  }
)

router.put(
  '/:authId',
  checkJwt,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      profilePictureUrl: Joi.string().optional(),
    }),
    [Segments.PARAMS]: {
      authId: Joi.string().required(),
    },
  }),
  async (req: express.Request, res: express.Response) => {
    const updatedUser = await userApi.updateOneUser(req.params.authId, req.body)
    if (updatedUser) {
      return res
        .send({ status: 'OK', payload: updatedUser})
        .status(204)
    }
    return returnResourceNotFound(res, 'UserNotUpdated')
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
  async (req: express.Request, res: express.Response) => {
    const createdUser = await userApi.createOneUser(req.body)
    return res
      .send({ status: 'OK', payload: createdUser})
      .status(201)
  }
)

export default router
