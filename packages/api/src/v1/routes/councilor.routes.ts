import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import councilorApi from '../../api/councilor.api'

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
    const allCouncilors = await councilorApi.getAllCouncilors()
    return res
      .send({ status: 'OK', payload: allCouncilors })
      .status(200)
  }
)

router.get(
  '/:councilorId',
  celebrate({
    [Segments.PARAMS]: {
      councilorId: Joi.number().required(),
    }
  }),
  async (req: express.Request, res: express.Response) => {
    const councilor = await councilorApi.getOneCouncilor(parseInt(req.params.councilorId, 10))
    if (councilor) {
      return res
        .send({ status: 'OK', payload: councilor })
        .status(200)
    }
    return returnResourceNotFound(res, 'CouncilorNotFound')
  }
)

export default router
