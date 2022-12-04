import Category from "../models/CategoryModel.js";

export const getCategories = async(req, res) =>{
    try {
        const response = await Category.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCategoriesById = async(req, res) =>{
    try {
        const response = await Category.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createCategories = async(req, res) =>{
    try {
        await Category.create(req.body);
        console.log(req.body);
        res.status(201).json({msg: "Category Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCategories = async(req, res) =>{
    try {
        await Category.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Category Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}