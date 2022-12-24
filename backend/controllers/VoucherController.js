import Voucher from "../models/VoucherModel.js";

export const getVouchers = async(req, res) =>{
    try {
        const response = await Voucher.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getVouchersById = async(req, res) =>{
    try {
        const response = await Voucher.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createVouchers = async(req, res) =>{
    try {
        await Voucher.create(req.body);
        console.log(req.body);
        res.status(201).json({msg: "Voucher Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteVouchers = async(req, res) =>{
    try {
        await Voucher.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Voucher Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateVouchers = async(req, res) =>{
    try {
        await Voucher.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Voucher Updated"});
    } catch (error) {
        console.log(error.message);
    }
}