import React from 'react';
import { useDispatch } from 'react-redux';
import {Box, Typography, Button, ButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles';
import { addEllipsis } from '../utilss/common-utils';
// import { removefromCart } from '../../redux/actions/cartActions';
const Component = styled(Box)`
    display:flex;
    background-Color: #f2f2f2;
    

`;

const Container = styled(Box)`
      padding-Left: 20px;
      margin: 10px 20px 10px 20px
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const LeftComponent = styled(Box)`
      padding:10px;
      display: flex;
      flex-Direction: column;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const SelletText= styled(Typography)`
    text-Size: 14px;
    font-weight: 600;
`;






const ProductItem = ({items}) => {
  console.log("---------------------", items)
  return (
    <>
    <Component>
      <LeftComponent>
        <img src={items.url} style={{ height: 110, width: 110 }} /> 
      </LeftComponent> 
         <Container>   
            <Typography>{addEllipsis(items.title.longTitle)} </Typography>
            <Typography>{items.title.shortTitle} </Typography>
      <SelletText>
        Seller: abc
      </SelletText>

        <Typography> Quantity: {items.quantity}</Typography>

       <Typography style={{margin: '20px 0'}}>
           <Cost component="span">₹{items.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
            <MRP component="span"><strike>₹{items.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
            <Discount component="span">{items.price.discount} off</Discount>
        </Typography>
       
        {/* <Button variant='contained' style={{marginTop: -10, height: 30}} onClick={()=>removeitemsfromcart(items.data.id)}>REMOVE</Button> */}
      </Container>

    </Component>
    </>
  )
}

export default ProductItem