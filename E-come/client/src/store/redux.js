import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import productReducer from './products/productSlice'; 
import storage from 'redux-persist/lib/storage';
import  userReducer from './user/userSlice';
import {persistReducer,persistStore} from 'redux-persist';
const commonConfig={
  key:'shop/user',
  storage
}
const userConfig={
  ...commonConfig,
  whiteList:['isLoggedIn','token']
}
export const store = configureStore({
  reducer: {
    app: appReducer,
    products: productReducer, 
    user: persistReducer(userConfig, userReducer) 
  },
});
export const persistor = persistStore(store)
