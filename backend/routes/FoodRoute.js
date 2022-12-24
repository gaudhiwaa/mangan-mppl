import express from "express";
import { createFoods, deleteFoods, getFoods, getFoodsById, updateFoods } from "../controllers/FoodController.js";

const router = express.Router();

router.get('/foods', getFoods);
router.get('/foods/:id', getFoodsById);
router.post('/foods', createFoods);
router.delete('/foods/:id', deleteFoods);
router.patch('/foods/:id', updateFoods);

export default router;