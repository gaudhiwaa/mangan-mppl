import express from "express";
import { createVouchers, deleteVouchers, getVouchers, getVouchersById, updateVouchers } from "../controllers/VoucherController.js";

const router = express.Router();

router.get('/vouchers', getVouchers);
router.get('/vouchers/:id', getVouchersById);
router.post('/vouchers', createVouchers);
router.delete('/vouchers/:id', deleteVouchers);
router.patch('/vouchers/:id', updateVouchers);

export default router;