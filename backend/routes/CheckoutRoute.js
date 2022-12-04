import express from "express";
import { createCheckout, deleteCheckout, getCheckout, getCheckoutById, updateCheckout } from "../controllers/CheckoutController.js";

const router = express.Router();

router.get('/checkout', getCheckout);
router.get('/checkout/:id', getCheckoutById);
router.post('/checkout', createCheckout);
router.delete('/checkout/:id', deleteCheckout);
router.patch('/checkout/:id', updateCheckout);

export default router;