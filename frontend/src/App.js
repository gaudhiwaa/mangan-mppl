import "./App.css";
import Box from "@mui/material/Box";
import OnBoarding from "./pages/OnBoarding";
import styled from "@emotion/styled";
import { THEME } from "./constants/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import RegisterPhase1 from "./pages/register/RegisterPhase1";
import RegisterPhase2 from "./pages/register/RegisterPhase2";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import PaymentGateway from "./pages/PaymentGateway";
import Location from "./pages/location/LocationChange";
import LocationList from "./pages/location/LocationList";
import Voucher from "./pages/Voucher";
import Product from "./pages/Product";
import Point from "./pages/Point";
import Checkout from "./pages/Checkout";
import Shipment from "./pages/Shipment";
import Profile from "./pages/Profile";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { categoryModel, foodModel, paymentMethodModel, transactionModel, voucherModel } from "./components/API/GetAPI";
import axios from "axios";
import AppliedVoucher from "./pages/AppliedVoucher";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import AdminTransaction from "./pages/AdminTransaction";

const CustomizedSize = styled(Box)({
  backgroundColor: THEME.WHITE,
  minWidth: 445,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
});

const Center = styled(Box)({
  display: "flex",
  justifyContent: "center",
  backgroundColor: THEME.WHITE_SECONDARY,
  height: "100%",
  overflow: "hidden",
});

export function API() {
  // useState React hook
  const [APICustomer, setAPICustomer] = useState([]);
  const [APIFoods, setAPIFoods] = useState([]);
  const [APICategory, setAPICategory] = useState([]);
  const [APIAddress, setAPIAddress] = useState([]);
  const [APICheckout, setAPICheckout] = useState([]);
  const [mainAddress, setMainAddress] = useState({});
  const [findMainAddress, setFindMainAddress] = useState({});
  const [APICek, setAPICek] = useState([]);
  const [item, setItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [districtsInTulungagung, setDistrictsInTulungagung] = useState([])
  const [APIVoucher, setAPIVoucher] = useState([])
  const [APIpaymentMethods, setAPIPaymentMethods] = useState([])
  const [APITransactions, setAPITransactions] = useState([])

  const value = {
    APICustomer,
    setAPICustomer,
    APIFoods,
    setAPIFoods,
    item,
    setItem,
    APICategory,
    setAPICategory,
    APIAddress,
    setAPIAddress,
    mainAddress,
    setMainAddress,
    APICheckout,
    setAPICheckout,
    findMainAddress,
    setFindMainAddress,
    APICek,
    setAPICek,
    districtsInTulungagung,
    setDistrictsInTulungagung,
    totalPrice,
    setTotalPrice,
    APIVoucher,
    setAPIVoucher,
    APIpaymentMethods,
    setAPIPaymentMethods,
    APITransactions,
    setAPITransactions
  };

  // useState React hook
  useEffect(() => {
    getAPI();

  }, []);

  const getAPI = async () => {
    const districts = await axios.get("https://ibnux.github.io/data-indonesia/kecamatan/3504.json");
    setDistrictsInTulungagung(districts.data)
    


    // if(trans = await axios.get(`http://localhost:8080/status/MPPLCERIA${i}`);)

  

    // const transactions = await transactionModel()
    // setAPITransactions(transactions)

    const payment_methods = await paymentMethodModel()
    setAPIPaymentMethods(payment_methods)

    const foods = await foodModel();
    setAPIFoods(foods);

    const category = await categoryModel();
    setAPICategory(category);
  };

  return value;
}

export const AppContext = createContext(null);

export const AppProvider = (props) => (
  <AppContext.Provider value={API()}>{props.children}</AppContext.Provider>
);

function App() {
  return (
    <BrowserRouter>
      <Center>
        <CustomizedSize>
          <AppProvider>
            <Routes>
              <Route path="/" element={<OnBoarding />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register-phase-1" element={<RegisterPhase1 />} />
              <Route path="/register-phase-2" element={<RegisterPhase2 />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/payment/:transactionId" element={<Payment />} />
              <Route path="/paymentgateway" element={<PaymentGateway />} />
              <Route path="/changelocation" element={<Location />} />
              <Route path="/locationlist" element={<LocationList />} />
              <Route path="/voucher" element={<Voucher />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/point" element={<Point />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shipment" element={<Shipment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/appliedvoucher" element={<AppliedVoucher />} />
              <Route path="/adminproduct" element={<Admin />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/admin" element={<AdminTransaction />} />
            </Routes>
          </AppProvider>
        </CustomizedSize>
      </Center>
    </BrowserRouter>
  );
}

export default App;
