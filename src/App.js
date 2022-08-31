import React, {useEffect,createContext,useReducer,useContext, useHistory, useState}  from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
 import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
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


function App() {
  
  // const [state,dispatch] = useReducer(reducer,initialState)
  const {accounts, setAccounts} = useContext(LoginContext);
  const [data, setData] = useState("")
     const userdata = localStorage.getItem("user")
      console.log(userdata) 
  // const history = useNavigate()
    // const homepagevalid = async () =>{
    //   let token = localStorage.getItem("token");

    //   const res = await fetch("/loggedUser/loggedUser", {
    //     method:"GET",
    //     headers:{
    //       "Content-Type":"application/json",
    //       "Authorization": token
    //     }
    //   })
    //   const data = await res.json();
    //   if(!data){
    //     // history("*")log
    //     console.log("error in data");
    //   }
    //     console.log(data);
    //     // setAccounts(data)
    //     // history("/")
    // }
  //   useEffect(() => {
  //     setTimeout(() => {
  //       homepagevalid();
  //         setData(true)
         
  //     }, 1000)

  // }, [])




  return (
    <TemplateProvider>

  <ContextProvider  >
  {/* <UserContext.Provider > */}
  <Router style = {{position:'fixed'}}>    
    <Header  style = {{height:55}} />
  
    <NavBar  />
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
      <Route path= '/Cart' element={<Cart />} />  
      <Route path= '/Wishlist' element={<Wishlist />} />  
    
        <Route path= '/KitchenCategory' element={<KitchenCategory/>} />
      <Route path= '/ElectronicCategory' element={<ElectronicCategory/>} />
      <Route path= '/product/:id'  element={<DetailView />} />
      </Routes>
      </Box>

          // {/* <Routing/> */}
       
    }
    
  
 
   
  </Router>
  {/* </UserContext.Provider> */}
  </ContextProvider>
 
  </TemplateProvider>
  
  );
}

export default App;
