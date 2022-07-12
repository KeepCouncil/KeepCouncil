import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import userController from '../../controllers/user.controller'

const router = express.Router()

router.get('/', userController.getAllUsers)

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().required(),
  })
}), userController.createOneUser)

export default router
