import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Box, Grid, Typography, Button} from '@mui/material'
import CartItem from '../cart/CartItem';
import ProductItem from './ProductItem';
import { styled } from '@mui/material/styles';
import EmptyCart from '../cart/EmptyCart';
import {addtowishlist} from '../../redux/actions/cartActions'
import { Link, useParams } from 'react-router-dom';
// import EmptyCart from './EmptyCart';
import { getProductdetails } from '../../redux/actions/productActions';
import axios from 'axios';
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

const Wishlist = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.wishlist.wishlistItems)
  const [wishItems, setWishItems] = useState([])
  // const {id} = useParams(); 
  // const url = `http://localhost:5000`

    const fetchProductWishlist = async () =>{
      const user =  JSON.parse(window.localStorage.getItem('user'));
      const userId = user._id
      const data = await fetch("/favourites/getfavourite", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        userId
        })
    })
    const res = await data.json();
    setWishItems(res);
                  console.log("this is response:",res);
    }
    const removeitemsfromWishlist = async(productId)=>{
      const user =  JSON.parse(window.localStorage.getItem('user'));
      const userId =user._id
      const data = await fetch("/favourites/deletefavourite",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
             productId,  userId
        })
    });
  console.log("data in favourites deleted:", data);
  fetchProductWishlist()
    }
    useEffect(()=>{
        fetchProductWishlist();   
    }, [])
  console.log(cartItems);
  // useEffect(()=>{
  //   dispatch(addtowishlist())
  // })
  return (
    <>
     { wishItems.length ? 
     <Component container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
              <Typography style={{fontWeight: 600, fontSize: 18}}>My Favourites ({wishItems?.length})</Typography>
            </Header>
                    {   wishItems.map(items => (
                            <ProductItem items={items} removeitemsfromWishlist={removeitemsfromWishlist}/>
                        ))
                    }
                <BottomWrapper>
                     <Link to="/Checkout" style={{textDecoration: 'none'}}> <StyledButton variant="contained">Place Order</StyledButton> </Link>
                </BottomWrapper>
        </LeftComponent>
           
        </Component> : <Box><EmptyCart/></Box>
}
    </>
  )
}

export default Wishlist