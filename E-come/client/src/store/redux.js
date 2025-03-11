import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import productReducer from './products/productSlice'; 
import storage from 'redux-persist/lib/storage';
import  userReducer from './user/userSlice';
import {FLUSH, PAUSE, PERSIST, persistReducer,persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
const commonConfig={
  key:'shop/user',
  storage
}
const userConfig={
  ...commonConfig,
  whiteList:['isLoggedIn','token','current']
}
export const store = configureStore({
  reducer: {
    app: appReducer,
    products: productReducer, 
    user: persistReducer(userConfig, userReducer) 
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
      }
    })
});
export const persistor = persistStore(store)
