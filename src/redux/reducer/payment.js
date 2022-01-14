import { createSlice } from "@reduxjs/toolkit";

const day = new Date().getDate() + 1;
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const hours = new Date().getHours().toString();
const minutes = new Date().getMinutes().toString();
const seconds = new Date().getSeconds().toString(); 

const time_limit = `${hours}:${minutes}:${seconds}, ${month}/${day}/${year}`

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: {},
  reducers: {
    addToPayment: (state, action) => {
        state.id_transaction = new Date().getTime().toString();
        state.date = new Date().toLocaleDateString();
        state.price = action.payload.price;
        state.time_limit = time_limit;
    }
  }
})

export const { addToPayment } = paymentSlice.actions

export default paymentSlice.reducer