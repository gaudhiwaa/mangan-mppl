import Food from "../models/FoodModel.js";

export const getFoods = async(req, res) =>{
    try {
        const response = await Food.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFoodsById = async(req, res) =>{
    try {
        const response = await Food.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createFoods = async(req, res) =>{
    try {
        await Food.create(req.body);
        console.log(req.body);
        res.status(201).json({msg: "Food Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFoods = async(req, res) =>{
    try {
        await Food.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Food Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}