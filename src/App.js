import React, {useEffect,createContext,useReducer,useContext, useHistory, useState}  from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
 import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
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
import ProfileScreen from './components/profile/ProfileSceen';
import Cart from './components/cart/Cart';
import ManageAddress from './components/profile/ManageAddress'
import Login from './components/authpages/Login';
import Signup from './components/authpages/Signup';
 import { LoginContext } from './components/context/ContextProvider';
//  const {accounts, setAccounts} = useContext(LoginContext);
import Wishlist from './components/wishlist/Wishlist';
 // import { useHistory } from "react-router-dom";
// import {reducer} from './userReducer';
// import {initialState} from './userReducer';
// export const UserContext = createContext()
// import { userdata } from './redux/actions/user';
// const Routing = ()=>{

//   const dispatch = useDispatch()
//   // const history = useHistory()
// //   const {state,dispatch} = useContext(UserContext)
//   useEffect(()=>{
//     const user = JSON.parse(localStorage.getItem("user"))
//     if(user){
//       dispatch(userdata())
//     }else{
//       // if(!history.location.pathname.startsWith('/reset'))
//           //  history.push('/Signin')
//           console.log(user);
//     }
//   },[])
//   return (
//   <Routes>
//    <Route path= '/Checkout' element={<Checkout/>} /> 
//   <Route path= '/PaymentForm' element={< PaymentForm/>} />  
//   <Route path= '/ProfileScreen' element={< ProfileScreen/>} /> 
//   <Route path= '/ManageAddress' element={< ManageAddress/>} /> 
//   <Route path= '/Login' element={<Login />} />    
//   <Route path= '/Signup' element={<Signup />} />    
//   <Route path= '/Cart' element={<Cart />} />  
// </Routes>

//   )
// }


function App() {
  
  // const [state,dispatch] = useReducer(reducer,initialState)
  const {accounts, setAccounts} = useContext(LoginContext);
  const [data, setData] = useState(false)
  // const history = useNavigate()
    const homepagevalid = async () =>{
      let token = localStorage.getItem("token");

      const res = await fetch("/validuser/validuser", {
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization": token
        }
      })
      const data = await res.json();
      if(!data){
        // history("*")log
        console.log("error in data");
      }
        console.log(data);
        // setAccounts(data)
        // history("/")
    }
    useEffect(() => {
      setTimeout(() => {
        homepagevalid();
          setData(true)
         
      }, 1000)

  }, [])




  return (
    <TemplateProvider>

  <ContextProvider  >
  {/* <UserContext.Provider > */}
  <Router style = {{position:'fixed'}}>    
    <Header  style = {{height:55}} />
  
    <NavBar  />
    <Box style={{marginTop: -10}}>
      <Routes>
    <Route path= '/' element={<Home />} />  
    <Route path= '/Checkout' element={<Checkout/>} /> 
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

     {/* <Routing/> */}
    </Box>
   
  </Router>
  {/* </UserContext.Provider> */}
  </ContextProvider>
 
  </TemplateProvider>
  
  );
}

export default App;
