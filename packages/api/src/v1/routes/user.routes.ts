import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import userController from '../../controllers/user.controller'
import { checkJwt } from '../../services/auth.service'

const router = express.Router()

router.get('/', checkJwt, userController.getAllUsers)

router.post('/', checkJwt, celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().required(),
  })
}), userController.createOneUser)

export default router
