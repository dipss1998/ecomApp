import React, {useEffect,createContext,useReducer,useContext, useHistory, useState}  from 'react'
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
 
 import KitchenCategory from './components/CategoryProducts/KitchenCategory'
 import ElectronicCategory from './components/CategoryProducts/ElectronicCategory'
import DetailView from './components/CategoryProducts/Prodcutsdetail/DetailView';
import Checkout from './components/checkout/Checkout';
import PaymentForm from './components/checkout/PaymentForm';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './components/context/ContextProvider';
import ProfileScreen from './components/profile/ProfileSceen';
import Cart from './components/cart/Cart';
import ManageAddress from './components/profile/ManageAddress'
import Login from './components/authpages/Login';
import Signup from './components/authpages/Signup';
 import { LoginContext } from './components/context/ContextProvider';
import Wishlist from './components/wishlist/Wishlist';
import AddressForm from './../src/components/checkout/AddressForm'
import Header from './components/header/Header';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import ForgetPass from './components/authpages/ForgetPass';
import ChangePass from './components/authpages/ChangePass'

function App() {
  
  // const [state,dispatch] = useReducer(reducer,initialState)
  const {accounts, setAccounts} = useContext(LoginContext);
  const [data, setData] = useState("")
  
  const userdata = JSON.parse(localStorage.getItem("user"))

    
    
    


  return (
    <TemplateProvider>

  <ContextProvider  >
  {/* <UserContext.Provider > */}
  <Router style = {{position:'fixed'}}>    
    <Header  style = {{height:55}} />
  
    <NavBar/>
    <Routes>
    <Route path= '/' element={<Home />} /> 
    </Routes>

    {
      userdata ?
      <Box style={{marginTop: -15}}>
      <Routes>
      <Route path= '/Checkout' element={<Checkout/>} /> 
      <Route path= '/AddressForm' element={<AddressForm/>} /> 
      <Route path= '/PaymentForm' element={< PaymentForm/>} />
      <Route path= '/ProfileScreen' element={< ProfileScreen/>} /> 
      <Route path= '/ManageAddress' element={< ManageAddress/>} /> 
      <Route path= '/Login' element={<Login />} />    
      <Route path= '/Signup' element={<Signup />} />    
      <Route path= '/Cart' element={<Cart />} />  
      <Route path= '/Wishlist' element={<Wishlist />} />  
    
        <Route path= '/KitchenCategory' element={<KitchenCategory/>} />
      <Route path= '/ElectronicCategory' element={<ElectronicCategory/>} />
      <Route path= '/product/:id'  element={<DetailView />} /> 

      </Routes>
      </Box>
      :
      <Box>
      <Routes>
      
      <Route path= '/ProfileScreen' element={< ProfileScreen/>} /> 
      <Route path= '/ManageAddress' element={< ManageAddress/>} /> 
      <Route path= '/Login' element={<Login />} />    
      <Route path= '/Signup' element={<Signup />} />    
      {/* <Route path= '/Cart' element={<Cart />} />   */}
      <Route path= '/Wishlist' element={<Wishlist />} />  
    
        <Route path= '/KitchenCategory' element={<KitchenCategory/>} />
      <Route path= '/ElectronicCategory' element={<ElectronicCategory/>} />
      <Route path= '/product/:id'  element={<DetailView />} />
      <Route path= '/ForgetPass'  element={<ForgetPass />} />
      <Route path= '/ForgetPass/:id/:token'  element={<ChangePass />} />

      </Routes>
      </Box>    } 
  </Router>
  {/* </UserContext.Provider> */}
  </ContextProvider>
  </TemplateProvider>
  
  );
}

export default App;
