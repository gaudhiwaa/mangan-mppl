import express from "express";
import { createTransactions, deleteTransactions, getTransactions, getTransactionsById, updateTransactions } from "../controllers/TransactionController.js";

const router = express.Router();

router.get('/transactions', getTransactions);
router.get('/transactions/:id', getTransactionsById);
router.post('/transactions', createTransactions);
router.delete('/transactions/:id', deleteTransactions);
router.patch('/transactions/:id', updateTransactions);

import Transactions from "../models/TransactionModel.js";
import midtransClient from 'midtrans-client'

var coreApi = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: 'SB-Mid-server-D7SRccrfUbxSbBPj0m0FOFon',
    clientKey: 'SB-Mid-client-oxhYetg-My3ds3ws'
});

router.get('/', function (req, res, next) {
    Transactions.findAll().then(data => {
        var tampilData = data.map(item => {
            return {
                t_price: item.t_price,
                c_id: item.tiket_id,
                t_status: item.t_status,
                response_midtrans: JSON.parse(item.response_midtrans),
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            }
        });
        res.json({
            status: true,
            pesan: "Berhasil Tampil",
            data: tampilData
        });
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal tampil: " + err.message,
            data: []
        });
    });
});


router.post('/charge', function (req, res, next) {
    coreApi.charge(req.body).then((chargeResponse) => {
        var dataOrder = {
            id:chargeResponse.order_id,
            order_id: req.body.order_id,
            t_price: req.body.t_price,
            c_id: req.body.c_id,
            t_image: req.body.t_image,
            t_status: req.body.t_status,
            t_paymentMethod: req.body.t_paymentMethod,
            t_product: req.body.t_product,
            response_midtrans:JSON.stringify(chargeResponse)
        }

        Transactions.create(dataOrder).then(data => {
            res.json({
                status: true,
                pesan: "Berhasil Transaksi",
                data: data
            });
        }).catch(err => {
            res.json({
                status: false,
                pesan: "Gagal Transaksi: " + err.message,
                data: []
            });
        });
    }).catch((e) => {
        res.json({
            status: false,
            pesan: "Gagal order: " + e.message,
            data: []
        });
    });
});

router.post('/notifications', function (req, res, next) {
    coreApi.transaction.notification(req.body)
        .then((statusResponse) => {
            let orderId = statusResponse.order_id;
            let responseMidtrans = JSON.stringify(statusResponse);
            Transactions.update({ response_midtrans: responseMidtrans }, {
                where: { id: orderId }
            }).then(() => {
                res.json({
                    status: true,
                    pesan: "Berhasil Notifikasi",
                    data: []
                });
            }).catch(err => {
                res.status(500).json({
                    status: false,
                    pesan: "Gagal Notifikasi: " + err.message,
                    data: []
                });
            });
        });
});

router.get('/status/:order_id', function (req, res, next) {
    coreApi.transaction.status(req.params.order_id).then((statusResponse) => {
        let responseMidtrans = JSON.stringify(statusResponse);
        Transactions.update({ response_midtrans: responseMidtrans }, {
            where: { id: req.params.order_id }
        }).then(() => {
            res.json({
                status: true,
                pesan: "Berhasil cek status",
                data: statusResponse
            });
        }).catch(err => {
            res.json({
                status: false,
                pesan: "Gagal cek status: " + err.message,
                data: []
            });
        });
    });
});

export default router;