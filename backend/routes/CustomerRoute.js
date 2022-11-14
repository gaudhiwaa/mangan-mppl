import express from "express";
import {
    getCustomers,
    getCustomerById,
    createCustomer
} from "../controllers/CustomerController.js";

const router = express.Router();

router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomerById);
router.post('/customers', createCustomer);

export default router;