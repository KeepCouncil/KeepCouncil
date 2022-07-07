import express from 'express'
import bodyParser from 'body-parser'
import v1BillRouter from './v1/routes/bill.routes'
import v1HealthcheckRouter from './v1/routes/healthcheck.routes'

const app = express()

app.use(bodyParser.json())
app.use('/api/v1/bills', v1BillRouter)
app.use('/api/v1/healthcheck', v1HealthcheckRouter)

export default app
