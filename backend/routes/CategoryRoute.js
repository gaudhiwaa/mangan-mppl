import express from "express";
import { createCategories, deleteCategories, getCategories, getCategoriesById } from "../controllers/CategoryController.js";

const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriesById);
router.post('/categories', createCategories);
router.delete('/categories/:id', deleteCategories);

export default router;