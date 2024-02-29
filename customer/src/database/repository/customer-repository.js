const { CustomerModel } = require("../model")

class CustomerRepository {

    // TODO: CreateCustomer function is create a new customer on customer model
    async CreateCustomer(customerData) {
        try {
            const { firstname, lastname, email, phone } = customerData
            const newCustomer = new CustomerModel({ firstname, lastname, email, phone })
            if (await newCustomer.save()) {
                return newCustomer
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: FindCustomers function is a fetch the all customers on customer model
    async FindCustomers() {
        try {
            return await CustomerModel.find({}, { "address": 0, "__v": 0 })
        } catch (error) {
            console.log(error)
        }
    }

    // TODO: FindCustomerById function is a fetch the specific customers on customer model
    async FindCustomerById(customerId) {
        try {
            return await CustomerModel.findOne({ _id: customerId }, { "address": 0, "__v": 0 })
        }
        catch (error) {
            console.log(error)
        }
    }

    // TODO: FindCustomerWithAddress function is a fetch the all customers with customer address on customer model
    async FindCustomerWithAddress() {
        try {
            return await CustomerModel.find({}, { "__v": 0 }).populate('address')
        } catch (error) {
            console.log(error)
        }
    }

    // TODO: FindCustomerWithAddressById function is a fetch the specific customers with customer address on customer model
    async FindCustomerWithAddressById(customerId) {
        try {
            return await CustomerModel.findOne({ _id: customerId }, { "__v": 0 }).populate('address')
        } catch (error) {
            console.log(error)
        }
    }

    // TODO: UpdateCustomer function is a update the customers on customer model
    async UpdateCustomer(customerId, customerData) {
        try {
            const { firstname, lastname, email, phone } = customerData
            const updateCustomer = await CustomerModel.findOneAndUpdate({ _id: customerId }, { firstname, lastname, email, phone })
            if (updateCustomer) {
                return updateCustomer
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: DeleteCustomerById function is a delete customer on customer model
    async DeleteCustomerById(customerId) {
        try {
            return await CustomerModel.findOneAndDelete({ _id: customerId })
        }
        catch (error) {
            console.log(error)
        }
    }

    // TODO: AddNewCustomerAddress function is use to add a address reference on customer model
    async AddNewCustomerAddress(customerId, addressId) {
        try {
            const addAddress = await CustomerModel.findOneAndUpdate({ _id: customerId }, {
                $push: {
                    address: addressId
                }
            })
            return addAddress
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: RemoveCustomerAddress function is use to remove address reference on customer model
    async RemoveCustomerAddress(addressId, customer) {
        try {
            const notRemoveAddress = customer.address.filter(address => address._id != addressId)
            const updateCustomerAddress = await CustomerModel.findOneAndUpdate({ _id: customer._id }, {
                $set: {
                    address: notRemoveAddress
                }
            })
            if (updateCustomerAddress) {
                return updateCustomerAddress
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = CustomerRepository