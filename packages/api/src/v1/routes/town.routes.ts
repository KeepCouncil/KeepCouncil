import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import townApi from '../../api/town.api'

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
  async (_: express.Request, res: express.Response) => {
    const allTowns = await townApi.getAllTowns()
    return res
      .send({ status: 'OK', payload: allTowns })
      .status(200)
  }
)

router.get(
  '/:townId',
  celebrate({
    [Segments.PARAMS]: {
      townId: Joi.number().required(),
    }
  }),
  async (req: express.Request, res: express.Response) => {
    const town = await townApi.getOneTown(req.params.townId)
    if (town) {
      return res
        .send({ status: 'OK', payload: town })
        .status(200)
    }
    return returnResourceNotFound(res, 'TownNotFound')
  }
)

export default router
