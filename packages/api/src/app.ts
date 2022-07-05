import express from 'express'
import bodyParser from 'body-parser'
import v1BillRouter from './v1/routes/bill.routes'

const app = express()

app.use(bodyParser.json())
app.use('/api/v1/bills', v1BillRouter)

export default app
