const { AddressRepository } = require("../database");
const { CustomerModel } = require("../database/model");

class CustomerService {

    constructor() {
        this.repository = new AddressRepository()
    }

    // ! ==================== ADDRESS SERVICE STARTS HERE ==================== 
    async GetAddress() {
        try {
            return this.repository.FindAddress()
        }
        catch (err) {
            console.log(err);
        }
    }

    async SingleAddress(addressId) {
        try {
            return this.repository.FindAddressById(addressId)
        }
        catch (err) {
            console.log(err)
        }
    }

    async CreateAddress(newAddress) {
        try {
            return this.repository.CreateAddress(newAddress)
        }
        catch (err) {
            console.log(err)
        }
    }

    async UpdateAddress(addressId, addressData) {
        try {
            return this.repository.UpdateAddressById(addressId, addressData)
        }
        catch (err) {
            console.log(err)
        }
    }

    async DeleteAddress(addressId) {
        try {
            return this.repository.DeleteAddressById(addressId)
        }
        catch (err) {
            console.log(err)
        }
    }
    // ! ==================== ADDRESS SERVICE END HERE ==================== 


    // ! ==================== CUSTOMER SERVICE START HERE ==================== 
    async NewCustomer(newCustomer) {
        try {
            return this.repository.CreateCustomer(newCustomer)
        }
        catch (err) {
            console.log(err)
        }
    }

    async FetchCustomers() {
        try {
            return this.repository.FindCustomers()
        }
        catch (err) {
            console.log(err)
        }
    }

    async FetchCustomersByID(id) {
        try {
            return this.repository.FindCustomerById(id)
        }
        catch (err) {
            console.log(err)
        }
    }

    async FetchCustomerAndAddress() {
        try {
            return this.repository.FindCustomerWithAddress()
        }
        catch (err) {
            console.log(err)
        }
    }

    async FetchCustomerAndAddressByID(customerId) {
        try {
            return this.repository.FindCustomerWithAddressById(customerId)
        }
        catch (err) {
            console.log(err)
        }
    }

    async UpdateCustomer(customerId, customer) {
        try {
            return this.repository.UpdateCustomer(customerId, customer)
        }
        catch (err) {
            console.log(err)
        }
    }

    async DeleteCustomer(customerId) {
        try {
            return this.repository.DeleteCustomerById(customerId)
        }
        catch (err) {
            console.log(err)
        }
    }

    async AddCustomerAddress(customerId, addressId) {
        try {
            const fetchCustomer = await CustomerModel.findOne({ _id: customerId })
            if (fetchCustomer) {
                return this.repository.AddNewCustomerAddress(customerId, addressId)
            }
            return false
        }
        catch (err) {
            console.log(err)
        }
    }

    async RemoveCustomerAddress(customerId, addressId) {
        try {
            const fetchCustomer = await CustomerModel.findOne({ _id: customerId })
            if (fetchCustomer) {
                return this.repository.RemoveCustomerAddress(addressId, fetchCustomer)
            }
            return false
        }
        catch (err) {
            console.log(err)
        }
    }
    // ! ==================== CUSTOMER SERVICE END HERE ==================== 
}

module.exports = CustomerService