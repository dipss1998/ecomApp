import React, { useEffect }  from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 import KitchenCategory from './components/CategoryProducts/KitchenCategory'
 import ElectronicCategory from './components/CategoryProducts/ElectronicCategory'
import DataProvider from './components/context/ContextProvider';
import DetailView from './components/CategoryProducts/Prodcutsdetail/DetailView';
import Checkout from './components/checkout/Checkout';
import PaymentForm from './components/checkout/PaymentForm';
import { useSelector, useDispatch, getState } from 'react-redux'; // hooks
import { getProducts as listProducts } from './redux/actions/productActions';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './components/context/ContextProvider';

function App() {

      
 



  return (
    <TemplateProvider>
  <ContextProvider >
  <Router style = {{position:'fixed'}}>    
    <Header  style = {{height:55}} />
  
    <NavBar  />
    <Box style={{marginTop: -10}}>
      <Routes>
         <Route path= '/' element={<Home />} />    
         <Route path= '/KitchenCategory' element={<KitchenCategory/>} />
         <Route path= '/ElectronicCategory' element={<ElectronicCategory/>} />
         <Route path= '/product/:id'  element={<DetailView />} /> 
          <Route path= '/Checkout' element={<Checkout/>} /> 
         <Route path= '/PaymentForm' element={< PaymentForm/>} />  

      </Routes>
    </Box>
   
  </Router>
  </ContextProvider>
  </TemplateProvider>
  
  );
}

export default App;
