const DB = {
  bills: {}
}

const getAllBills = () => {
  return DB.bills
}

const createNewBill = (newBill) => {
  // save to db
  return newBill
}

export default {
  getAllBills,
  createNewBill,
}
