import Transaction from "../models/TransactionsModel.js";

export const getTransactions = async(req, res) =>{
    try {
        const response = await Transaction.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTransactionsById = async(req, res) =>{
    try {
        const response = await Transaction.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTransactions = async(req, res) =>{
    try {
        await Transaction.create(req.body);
        console.log(req.body);
        res.status(201).json({msg: "Transaction Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTransactions = async(req, res) =>{
    try {
        await Transaction.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Transaction Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTransactions = async(req, res) =>{
    try {
        await Transactions.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Transactions Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}