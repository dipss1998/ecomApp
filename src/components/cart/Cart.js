import React from 'react'
import {useSelector} from 'react-redux'
import {Box, Grid, Typography, Button} from '@mui/material'
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import { styled } from '@mui/material/styles';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';
// import EmptyCart from './EmptyCart';


const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      padding: '15px 0'
  }
}));
  const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #d9d9d9;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
    height: 45px;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    margin-Top: -15px;
    background: #cc9900;
    color: #fff;
    border-radius: 2px;
    width: 200px;
    height: 40px;
   
`;
const RightContainer = styled(Grid)`
    width: 300;
    height: 1000px
`;

const Cart = () => {
     const Items = async () => {
        const user =  JSON.parse(window.localStorage.getItem('user'));
        const userId = user._id
        console.log("e", userId)
        const data = await fetch("http://localhost:5000/carts/getcart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
             id:userId
            })
        })
       const res = await data.json();
                      console.log("this is data",res);
       }
       Items()
    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log("these are cart items: ",cartItems);
  return (
    <>
  
    { cartItems.length ? 
        <Component container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                <Header>
                    <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                </Header>
                    {   cartItems.map(item => (
                            <CartItem item={item} />
                        ))
                    }
                <BottomWrapper>
                     <Link to="/Checkout" style={{textDecoration: 'none'}}> <StyledButton variant="contained">Place Order</StyledButton> </Link>
                </BottomWrapper>
            </LeftComponent>
            <RightContainer item lg={3} md={3} sm={12} xs={12}>
                <TotalBalance cartItems={cartItems} />
            </RightContainer>
        </Component> : <Box><EmptyCart/></Box>
    }
    </> 
  )
}

export default Cart