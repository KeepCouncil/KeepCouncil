import express from 'express'
import bodyParser from 'body-parser'
import Database from './database'
import Log from './utils/log.utils'
import v1BillRouter from './v1/routes/bill.routes'
import v1UserRouter from './v1/routes/user.routes'
import v1HealthcheckRouter from './v1/routes/healthcheck.routes'
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
  
  app.use(bodyParser.json())
  app.use('/api/v1/bills', v1BillRouter)
  app.use('/api/v1/users', v1UserRouter)
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
