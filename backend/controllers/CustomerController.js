import Customer from "../models/CustomerModel.js";

export const getCustomers = async(req, res) =>{
    try {
        const response = await Customer.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCustomerById = async(req, res) =>{
    try {
        const response = await Customer.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createCustomer = async(req, res) =>{
    try {
        await Customer.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}