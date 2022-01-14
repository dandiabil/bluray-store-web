//REDUCER
import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: 1
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if(state.value > 1){
        state.value -= 1
      }
      else state.value = 1
    },
  }
})

export const { increment, decrement } = orderSlice.actions

export default orderSlice.reducer