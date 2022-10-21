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
  height: '100%',
  overflow: "hidden"
});

function App() {
  return (
    <BrowserRouter>
      <Center>
        <CustomizedSize>
          <Routes>
            <Route path="/" element={<OnBoarding />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register-phase-1" element={<RegisterPhase1 />} />
            <Route path="/register-phase-2" element={<RegisterPhase2 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentgateway" element={<PaymentGateway />} />
          </Routes>
        </CustomizedSize>
      </Center>
    </BrowserRouter>
  );
}

export default App;