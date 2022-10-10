import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import {Box, Typography, Button, ButtonGroup, Unstable_Grid2 } from '@mui/material'
import EmptyCart from '../cart/EmptyCart';

const Component = styled(Box)`
    display:flex;
    background-Color: #f2f2f2;
    width:60%;
    margin-left:20%;
`;

const Container = styled(Box)`
      padding-Left: 20px;
      margin: 10px 20px 10px 20px
`;

const LeftComponent = styled(Box)`
      padding:10px;
      display: flex;
      flex-Direction: column;
`;

 const History = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const Items = async () => {
       const user =  JSON.parse(window.localStorage.getItem('user'));
     //  const userId = user._id
       const data = await fetch(`http://localhost:5000/userOrders/userOrders`, {
           method: "GET",
           headers: {
               "Content-Type": "application/json",
               "Authorization" : `Bearer ${user.Token}`
           },
       })
      const res = await data.json();
      setCartProducts(res.orders);
                    }
                    console.log("history===========",cartProducts)
                    useEffect(()=>{Items()}, [])
  return (<>
  
   {  cartProducts.length ?   cartProducts.map(items => (
    <Component>
          
      <LeftComponent>
        <img src={items.orderItems[0].image} style={{ height: 110, width: 110 }} /> 
      </LeftComponent> 
         <Container>  
         <Typography>Title: {items.orderItems[0].name} </Typography>
            <Typography>Order Status: {items.orderStatus} </Typography>
            <Typography>Paid at:{items.paidAt}</Typography>
            <Typography>Shipping Price :{items.shippingPrice}</Typography>
            <Typography>Total Price :{items.totalPrice}</Typography>
      </Container> 
    </Component>   )):<Box><EmptyCart/></Box>
                    } 
        </>
  )
}
export default History