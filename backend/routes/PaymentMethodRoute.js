import express from "express";
import { createPaymentMethod, deletePaymentMethod, getPaymentMethods, getPaymentMethodsById, updatePaymentMethod } from "../controllers/PaymentMethodController.js";

const router = express.Router();

router.get('/paymentmethods', getPaymentMethods);
router.get('/paymentmethods/:id', getPaymentMethodsById);
router.post('/paymentmethods', createPaymentMethod);
router.delete('/paymentmethods/:id', deletePaymentMethod);
router.patch('/paymentmethods/:id', updatePaymentMethod);

export default router;