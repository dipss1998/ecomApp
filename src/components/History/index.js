import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import {Box, Typography, Button, ButtonGroup, Unstable_Grid2 } from '@mui/material'
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
       const userId = user._id
       const data = await fetch("http://localhost:5000/carts/getcart", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
            userId
           })
       })
      const res = await data.json();
      setCartProducts(res);
                    }
                    console.log("history===========",cartProducts)
                    useEffect(()=>{Items()}, [])
  return (<>
  
   {   cartProducts.map(items => (
    <Component>
          
      <LeftComponent>
        <img src={items.url} style={{ height: 110, width: 110 }} /> 
      </LeftComponent> 
         <Container>  
         <Typography>Title: {items.title.shortTitle} </Typography>
            <Typography>Item: {items.description} </Typography>
            <Typography>Quantity:{items.quantity}</Typography>
            <Typography>Order Date:{items.date}</Typography>
      </Container> 
    </Component>   ))
                    } 
        </>
  )
}
export default History