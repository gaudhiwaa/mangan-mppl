import PaymentMethod from "../models/PaymentMethodModel.js";
import Transactions from "../models/TransactionModel.js";

export const getPaymentMethods = async(req, res) =>{
    try {
        const response = await PaymentMethod.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPaymentMethodsById = async(req, res) =>{
    try {
        const response = await PaymentMethod.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPaymentMethod = async(req, res) =>{
    try {
        await PaymentMethod.create(req.body);
        console.log(req.body);
        res.status(201).json({msg: "Transaction Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePaymentMethod = async(req, res) =>{
    try {
        await PaymentMethod.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "PaymentMethod Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePaymentMethod = async(req, res) =>{
    try {
        await PaymentMethod.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "PaymentMethod Updated"});
    } catch (error) {
        console.log(error.message);
    }
}