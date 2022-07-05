import Log from './utils/log.utils'
import app from './app'
const PORT = process.env.PORT || 3001

process.on('uncaughtException', (err: Error) => {
  Log.fatal('Uncaught exception', err)
  throw err
})

process.on('unhandledRejection', (err: Error) => {
  Log.fatal('Unhandled rejection', err)
})

app.listen(PORT, () => {
  Log.info(`API is listening on port ${PORT}`)
})
