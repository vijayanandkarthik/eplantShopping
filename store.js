// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create Redux store with cartReducer
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
