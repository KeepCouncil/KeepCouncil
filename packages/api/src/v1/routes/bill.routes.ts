import express from 'express'
import billsController from '../../controllers/bill.controller'

const router = express.Router()

router.get("/", billsController.getAllBills)

router.get("/:billId", billsController.getOneBill)

router.post("/", billsController.createNewBill)

router.patch("/:billId", billsController.updateOneBill)

router.delete("/:billId", billsController.deleteOneBill)

export default router
