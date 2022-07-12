import Bill from '../database/bill.model'

const getAllBills = () => {
  const allBills = Bill.getAllBills()
  return allBills
}

const getOneBill = () => {
  return
}

const createNewBill = (newBill) => {
  const billToInsert = {
    ...newBill,
    id: 'someuniqueuuid',
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  }

  const createdBill = Bill.createNewBill(billToInsert)
  return createdBill
}

const updateOneBill = () => {
  return
}

const deleteOneBill = () => {
  return
}

export default {
  getAllBills,
  getOneBill,
  createNewBill,
  updateOneBill,
  deleteOneBill,
}
