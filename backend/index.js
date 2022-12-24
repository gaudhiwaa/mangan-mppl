import express from "express";
import cors from "cors";
import CustomerRoute from "./routes/CustomerRoute.js";
import FoodRoute from "./routes/FoodRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import AddressRoute from "./routes/AddressRoute.js";
import CheckoutRoute from "./routes/CheckoutRoute.js";
import VoucherRoute from "./routes/VoucherRoute.js";
import TransactionRoute from "./routes/TransactionRoute.js";
import PaymentMethodRoute from "./routes/PaymentMethodRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(CustomerRoute);
app.use(FoodRoute);
app.use(CategoryRoute);
app.use(AddressRoute);
app.use(CheckoutRoute);
app.use(VoucherRoute);
app.use(TransactionRoute);
app.use(PaymentMethodRoute);

app.listen(8080, ()=> console.log('Server up and running...'));