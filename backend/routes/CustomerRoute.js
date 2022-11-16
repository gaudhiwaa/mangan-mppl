import express from "express";
import {
    getCustomers,
    getCustomerById,
    createCustomer,
    deleteCustomer
} from "../controllers/CustomerController.js";

const router = express.Router();

router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomerById);
router.post('/customers', createCustomer);
router.delete('/customers/:id', deleteCustomer);

export default router;