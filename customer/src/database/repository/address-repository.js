const { AddressModel } = require("../model");
const CustomerRepository = require("./customer-repository");

class AddressRepository extends CustomerRepository{

    async CreateAddress({ address, pincode, city, state, country }) {
        try {
            const newAddress = new AddressModel({ address, pincode, city, state, country })
            if (await newAddress.save()) {
                return newAddress
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    async FindAddress() {
        try {
            return await AddressModel.find()
        }
        catch (err) {
            console.log(err)
        }
    }

    async FindAddressById(addressId) {
        try {
            return await AddressModel.findOne({ _id: addressId })
        }
        catch (err) {
            console.log(err)
        }
    }

    async UpdateAddressById(addressId, addressData) {
        try {
            const { address, pincode, city, state, country } = addressData
            const updateAddress = await AddressModel.findOneAndUpdate({ _id: addressId }, { address, pincode, city, state, country })
            if (updateAddress) {
                return updateAddress
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    async DeleteAddressById(addressId) {
        try {
            return await AddressModel.findOneAndDelete({ _id: addressId });
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = AddressRepository