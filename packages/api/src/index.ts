import Log from './services/util.service'
import app from './app'

process.on('uncaughtException', (err: Error) => {
  Log.fatal('Uncaught exception', err)
  throw err
})

process.on('unhandledRejection', (err: Error) => {
  Log.fatal('Unhandled rejection', err)
})

app.start()
