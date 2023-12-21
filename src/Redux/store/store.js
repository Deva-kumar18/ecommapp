import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../features/cartSlice/cartSlice'
export const store = configureStore({
  reducer: {
    cartSlice:CartReducer
  },
})