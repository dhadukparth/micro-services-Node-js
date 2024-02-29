
const CustomerService = require('../../service/customer-service')
const service = new CustomerService()

module.exports = (app) => {

    //  * fetch all address router
    app.get('/address', async (req, res, next) => {
        try {
            const address = await service.GetAddress()
            res.json({ message: "fetch all address", data: address })
        }
        catch (err) {
            console.log(err)
        }
    })

    //  * fetch a specific address router
    app.get('/address-single', async (req, res, next) => {
        try {
            const { id } = req.query
            if(id){
                const address = await service.SingleAddress(id)
                res.json({ message: "fetch all address", data: address })
            }
            res.json({ message: "ID is not found" })
        }
        catch (err) {
            console.log(err)
        }
    })

    //  * create a new address router
    app.post('/address', async (req, res, next) => {
        try {
            const newAddress = await service.CreateAddress(req.body)
            if (newAddress) {
                res.json({ message: "Address Created" })
            }
            else {
                res.json({ message: "Not Created" })
            }
        }
        catch (err) {
            console.log(err)
        }
    })

    //  * update address router
    app.patch('/address', async (req, res) => {
        try {
            const { id } = req.query
            const updateAddress = await service.UpdateAddress(id, req.body)
            if (updateAddress) {
                return res.json({ message: "address updated successfully" })
            }
            return res.json({ message: "address not updated" })
        }
        catch (err) {
            console.log(err)
        }
    })

    //  * delete address router
    app.delete('/address', async (req, res) => {
        try {
            const deleteAddress = await service.DeleteAddress(req.body.addressId)
            if (deleteAddress) {
                return res.json({ message: "address deleted successfully" })
            }
            return res.json({ message: "sorry! address not deleted" })
        }
        catch (err) {
            console.log(err)
        }
    })
}