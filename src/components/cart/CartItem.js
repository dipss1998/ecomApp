import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Box, Typography, Button, ButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles';
import { addEllipsis } from '../utilss/common-utils';
import ButtonGrowth from './ButtonGrowth';
import { removedfromCart, removefromCart } from '../../redux/actions/cartActions';
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






const CartItem = ({item}) => {
  
  const dispatch = useDispatch();
  
  
//const [itemId, setItemId] = useState('')


const removeitemfromcart = ({id}) => {
 // await removedfromCart(id, quantity);
  dispatch(removefromCart(id));
  console.log("this is item removed from cart:", id);
 
}
  return (
    <>
    <Component>
      <LeftComponent>
        <img src={item.data.url} style={{ height: 110, width: 110 }} /> 
        <ButtonGrowth item={item} />
      </LeftComponent> 
         <Container>
   
             <Typography>{addEllipsis(item.data.title.longTitle)} </Typography>
             <Typography>{item.data.title.shortTitle} </Typography>

      <SelletText>
        Seller: abc
      </SelletText>

        <Typography> Quantity: {item.data.quantity}</Typography>

       <Typography style={{margin: '20px 0'}}>
          <Cost component="span">₹{item.data.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
          <MRP component="span"><strike>₹{item.data.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
          <Discount component="span">{item.data.price.discount} off</Discount>
        </Typography>
       
        <Button variant='contained' style={{marginTop: -10, height: 30}} onClick={()=>removeitemfromcart(item.data.id)}>REMOVE</Button>
      </Container>

    </Component>
    </>
  )

}

export default CartItem