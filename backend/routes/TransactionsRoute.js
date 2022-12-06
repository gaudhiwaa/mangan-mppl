import express from "express";
import { createTransactions, deleteTransactions, getTransactions, getTransactionsById, updateTransactions } from "../controllers/TransactionsController.js";

const router = express.Router();

router.get('/transactions', getTransactions);
router.get('/transactions/:id', getTransactionsById);
router.post('/transactions', createTransactions);
router.delete('/transactions/:id', deleteTransactions);
router.patch('/transactions/:id', updateTransactions);

export default router;