import React,{useEffect} from 'react';
import {   Route, Routes } from 'react-router-dom';
import { Login, Home, Public,FAQ,Products,DetailProduct,Services,Blogs } from './pages/public';
import path from './utils/path';
import {getCategories} from './store/app/asyncActions';
import {useDispatch} from 'react-redux'  
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories())
  },[dispatch])
  return (

    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />} >
          <Route path={path.HOME} element={<Home />}></Route>         
          <Route path={path.FAQ} element={<FAQ />}></Route>
          <Route path={path.PRODUCTS} element={<Products />}></Route>
          <Route path={path.DETAIL_PRODUCT__PID__TITLE} element={<DetailProduct />}></Route>
          <Route path={path.OUR_SERVICES} element={<Services />}></Route>
          <Route path={path.BLOGS} element={<Blogs />}></Route>
        </Route>
        <Route path={path.LOGIN} element={<Login />}></Route>
      </Routes>
    </div>

  );
}

export default App;
