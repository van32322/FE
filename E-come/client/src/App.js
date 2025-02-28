import React,{useEffect} from 'react';
import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import { Login, Home, Public } from './pages/public';
import path from './utils/path';
import {getCategories} from './store/asyncActions';
import {useDispatch} from 'react-redux'  
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories())
  },[])
  return (

    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />} >
          <Route path={path.HOME} element={<Home />}></Route>
          <Route path={path.LOGIN} element={<Login />}></Route>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
