import express from "express";
import { createAddresses, deleteAddresses, getAddresses, getAddressesById, updateAddresses } from "../controllers/AddressController.js";

const router = express.Router();

router.get('/addresses', getAddresses);
router.get('/addresses/:id', getAddressesById);
router.post('/addresses', createAddresses);
router.delete('/addresses/:id', deleteAddresses);
router.patch('/addresses/:id', updateAddresses);

export default router;