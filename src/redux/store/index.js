import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../reducer/counter'
import cartReducer from '../reducer/cart'
import paymentReducer from '../reducer/payment'

export default configureStore({
    reducer: {
        order: orderReducer,
        cart: cartReducer,
        payment: paymentReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})