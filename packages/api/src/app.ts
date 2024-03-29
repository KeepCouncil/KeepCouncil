import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Database from './database'
import Log from './common/util'
import v1UserRouter from './v1/routes/user.routes'
import v1TownRouter from './v1/routes/town.routes'
import v1CouncilorRouter from './v1/routes/councilor.routes'
import v1HealthcheckRouter from './v1/routes/healthcheck.routes'
import './common/auth'
const PORT = process.env.PORT || 3001
const NODE_ENV = process.env.NODE_ENV || 'development'
let server

export async function start() {
  try {
    await Database.connection.setup()
  } catch (error) {
    Log.info('error in Database connection')
    Log.info(error)
  }

  const app = express()
  
  app.use(cors())
  app.use(bodyParser.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api/v1/users', v1UserRouter)
  app.use('/api/v1/towns', v1TownRouter)
  app.use('/api/v1/councilors', v1CouncilorRouter)
  app.use('/api/v1/healthcheck', v1HealthcheckRouter)

  server = app.listen(PORT, () => {
    Log.info(`API is listening on port ${PORT}`)
  })
}

export async function stop() {
  if (server) {
    await Database.connection.shutdown()
    server.close(err => {
      if (['production', 'development'].includes(NODE_ENV)) {
        if (err) {
          Log.warning('Server.close() called but threw error: ', err)
          process.exit(1)
        }
        process.exit(0)
      }
    })
  }
}

export default {
  start,
  stop,
}
