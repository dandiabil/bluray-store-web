import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
        const cart = {
            id: new Date().getTime(),
            poster: action.payload.poster,
            title: action.payload.title,
            price: action.payload.price,
        };
        state.push(cart)
    },
    removeItemFromCart: (state, action) => {
        state.filter(item => item.id !== action.payload.id)
    },
    removeAllItem: (state, action) => {
      state = [];
    } 
  }
})

export const { addItemToCart, removeItemFromCart, removeAllItem } = cartSlice.actions

export default cartSlice.reducer