import Address from "../models/AddressModel.js";

export const getAddresses = async(req, res) =>{
    try {
        const response = await Address.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAddressesById = async(req, res) =>{
    try {
        const response = await Address.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createAddresses = async(req, res) =>{
    try {
        await Address.create(req.body);
        console.log(req.body);
        res.status(201).json({msg: "Addresses Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateAddresses = async(req, res) =>{
    try {
        await Address.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Address Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAddresses = async(req, res) =>{
    try {
        await Address.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Addresses Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}