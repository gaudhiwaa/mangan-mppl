import express from "express";
import { createFoods, deleteFoods, getFoods, getFoodsById } from "../controllers/FoodController.js";

const router = express.Router();

router.get('/foods', getFoods);
router.get('/foods/:id', getFoodsById);
router.post('/foods', createFoods);
router.delete('/foods/:id', deleteFoods);

export default router;