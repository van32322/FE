import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import productReducer from './products/productSlice'; // ⚠️ Import đúng reducer

export const store = configureStore({
  reducer: {
    app: appReducer,
    products: productReducer, // ⚠️ Phải là productReducer, không phải productSlice
  },
});
