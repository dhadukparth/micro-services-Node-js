const CustomerService = require("../../service/customer-service")
const service = new CustomerService()

module.exports = (app) => {

    // * create a new customer router
    app.post('/', async (req, res, next) => {
        try {
            const newCustoemr = await service.NewCustomer(req.body)
            if (newCustoemr) {
                return res.json({ message: "Create a new customer successfully" })
            }
            return res.json({ message: "Sorry! this customer is not created" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * fetch a all customer router
    app.get('/', async (req, res, next) => {
        try {
            const fetchCustomers = await service.FetchCustomers()
            if (fetchCustomers) {
                return res.json({ message: "fetch success", data: fetchCustomers })
            }
            return res.json({ message: "not fetch" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * fetch a single customer router
    app.get('/customer-single', async (req, res, next) => {
        try {
            const { id } = req.query

            const fetchCustomer = await service.FetchCustomersByID(id)
            if (fetchCustomer) {
                return res.json({ message: "fetch success", data: fetchCustomer })
            }
            return res.json({ message: "not fetch" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * update customer router
    app.patch('/', async (req, res, next) => {
        try {
            const { customerId, firstname, lastname, email, phone } = req.body
            if (await service.UpdateCustomer(customerId, { firstname, lastname, email, phone })) {
                return res.json({ message: "Customer Update successfully" })
            }
            return res.json({ message: "Sorry! This Customer is not updated." })
        } catch (err) {
            console.log(err)
        }
    })

    // * delete customer router
    app.delete('/', async (req, res, next) => {
        try {
            const { customerId } = req.body
            if (await service.DeleteCustomer(customerId)) {
                return res.json({ message: "Customer deleted successfully" })
            }
            return res.json({ message: "Sorry! this customer is not deleted" })
        }
        catch (err) {
            console.log(err)
        }
    })


    // * add address in customer model router
    app.post('/add-address', async (req, res, next) => {
        try {
            const { customerId, addressId } = req.body
            const add_address = await service.AddCustomerAddress(customerId, addressId)
            if (add_address) {
                return res.json({ message: "address is add in customer model" })
            }
            return res.json({ message: "Sorry! this address is not add in customer model" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * address remove in customer model
    app.delete('/remove-address', async (req, res, next) => {
        try {
            const { customerId, addressId } = req.body
            const remove_address = await service.RemoveCustomerAddress(customerId, addressId)
            if (remove_address) {
                return res.json({ message: "address is remove in customer model" })
            }
            return res.json({ message: "Sorry! this address is not remove in customer model" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * fetch customer with address
    app.get('/get-customer-address', async (req, res, next) => {
        try {
            const customerAddress = await service.FetchCustomerAndAddress()
            if (customerAddress) {
                return res.json({ message: "customer with address is fetched.", data: customerAddress })
            }
            return res.json({ message: "sorry! customer with address not fetched." })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * fetch specific customer with address
    app.get('/get-single-customer-address', async (req, res, next) => {
        try {
            const { id } = req.query
            const customerAddress = await service.FetchCustomerAndAddressByID(id)
            if (customerAddress) {
                return res.json({ message: "customer with address is fetched.", data: customerAddress })
            }
            return res.json({ message: "sorry! customer with address not fetched." })
        }
        catch (err) {
            console.log(err)
        }
    })
}