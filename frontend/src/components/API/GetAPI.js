import axios from "axios";
import { useState } from "react";

export const customerModel = async (items) => {
  const customer = await axios.get("http://localhost:8080/customers");

  return customer.data.find((cust) => cust.id.toString() === items);
};

export const foodModel = async () => {
  const food = await axios.get("http://localhost:8080/foods");

  return food.data;
};

export const categoryModel = async () => {
  const category = await axios.get("http://localhost:8080/categories");

  return category.data;
};

export const addressModel = async (items) => {
  const address = await axios.get("http://localhost:8080/addresses");

  return address.data.filter((prod) => prod.c_id.toString() === items);
};

export const checkoutModel = async (items) => {
    const checkout = await axios.get("http://localhost:8080/checkout");
  
    return checkout.data.filter((check) => check.c_id.toString() === items);
  };

  export const voucherModel = async (items) => {
    const voucher = await axios.get("http://localhost:8080/vouchers");
  
    return voucher.data.filter((vouch) => vouch.c_id.toString() === items);
  };

  export const paymentMethodModel = async () => {
    const paymentMethod = await axios.get("http://localhost:8080/paymentmethods");
  
    return paymentMethod.data;
  };

  export const transactionModel = async (items) => {
    const transaction = await axios.get("http://localhost:8080/transactions");
  
    return transaction.data.filter((trans) => trans.c_id.toString() === items);
  };



