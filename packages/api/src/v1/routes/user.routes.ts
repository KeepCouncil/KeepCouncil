import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import userController from '../../controllers/user.controller'
import { checkJwt } from '../../services/auth.service'

const router = express.Router()

router.get('/', checkJwt, userController.getAllUsers)

router.get('/:authId', checkJwt, celebrate({
  [Segments.PARAMS]: {
    authId: Joi.string().required(),
  }
}), userController.getSingleUser)

router.post('/', checkJwt, celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().required(),
    authId: Joi.string().required(),
    profilePictureUrl: Joi.string().optional(),
  })
}), userController.createOneUser)

export default router
