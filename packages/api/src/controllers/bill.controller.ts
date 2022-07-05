import billService from '../services/bill.service'

const getAllBills = (req, res) => {
  const allBills = billService.getAllBills()
  res.send({ status: "OK", data: allBills });
}

const getOneBill = (req, res) => {
  const bills = billService.getOneBill()
  res.send("Get an existing bill")
}

const createNewBill = (req, res) => {
  const { body } = req

  if (!body.number || !body.title) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: "One of the following keys is missing or is empty in request body: 'title', 'number'",
      },
    })
    return
  }

  const newBill = {
    number: body.number,
    title: body.title,
  }

  const createdBill = billService.createNewBill(newBill)
  res.status(201).send({ status: "OK", data: createdBill });
}

const updateOneBill = (req, res) => {
  const updateBill = billService.updateOneBill()
  res.send("Update an existing bill")
}

const deleteOneBill = (req, res) => {
  billService.deleteOneBill()
  res.send("Delete an existing bill")
}

export default {
  getAllBills,
  getOneBill,
  createNewBill,
  updateOneBill,
  deleteOneBill,
}
