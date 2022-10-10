import React, {useState, useContext} from 'react'
import { Box, Button, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import LoginDialog from '../authpages/LoginDialog';
import { LoginContext } from '../context/ContextProvider';
import Profile from './Profile';
import {useDispatch, useSelector} from 'react-redux'
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';
import wishlist from '../wishlist/Wishlist';
import Avatar from '@mui/material/Avatar';
import DefaultProfileScreen from '../profile/DefaultProfileScreen';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const StyledBadge = styled(Badge) ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 2,
    border: `2px solid `,
    padding: '0 4px',
    background: "red"
  },
});



const Wrapper = styled(Box)(({theme}) => ({
   display:"flex",
   margin: "0 5% 0 auto",
   "& > button" :{
    height: "35px",
    padding: "10px auto",
    lineHeight: "15px",
    margin : "15px 100px 10px 20px",
    background: "white",
    color:" #333300",
    fontStyle: "bold",
    fontWeight: "600",
    textTransform: "none",
    alignItems: "center",
   },
   "&>p" : {
    fontStyle: "bold",
    fontWeight: "600",
    margin: "20px auto",
    display:"flex",
    flexDirection: "Column"
   },
 "&>div" : {
        display:"flex",
        margin: "20px 20px auto",
   },

   [theme.breakpoints.down('sm')]: {
    color: '#fffff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10
},

[theme.breakpoints.down('sm')]: {
  display: 'block'
}

  }));

const CartDesign = styled(Box)`
  display:flex;
 flex-direction: row;
 padding: 5px;
 margin: 15px 20px

`;
  const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 30,
    width:40,
    marginTop:20,
    marginRight:20,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

const CustomButtons = () => {
   
    const {accounts, setAccounts} = useContext(LoginContext);
    const dispatch = useDispatch()
          const userdata = JSON.parse(localStorage.getItem("user"))
          const user = JSON.parse(window.localStorage.getItem('user'));
          const userId = user._id
 
    const reloadstop =()=>{
      window.stop();
    } 
  return (
    <Wrapper>
      {
        // accounts ? 
        userdata ?
         <Profile accounts = {accounts} setAccounts={setAccounts 
          (userdata.name)
        }/>
          :
       
       <Link to="/Login" style={{textDecoration:'none', color:'inherit'}}> <LoginButton variant="contained" >Login </LoginButton></Link>
      }
        <Link to="/History" style={{textDecoration:'none', color:'inherit', marginTop:20}}>Return&Orders </Link>
       <Link to="/Cart" style = {{textDecoration: 'none', color:'inherit',}} >
         <CartDesign  >
        <Typography >Cart 
              {/* {cartItem.cart.length} */}
          </Typography>
         
        <IconButton aria-label="cart" >
          {/* <StyledBadge badgeContent={cartItem} color="secondary"> */}
            <ShoppingCartIcon style={{color:"white", marginTop:-5}} />
          {/* </StyledBadge> */}
        </IconButton>    
          </CartDesign>
        </Link> 
         <Box>
         <Link to ="/wishlist" ><FavoriteBorderIcon/></Link>
        </Box>
        {/* {
         accounts ? <MyProfile accounts = {accounts} setAccounts={setAccounts}/> : */}
       {/* <Link to="/ProfileScreen"> <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Link> */}
         {/* } */}
        {/* <LoginDialog open= {open} setOpen={setOpen} /> */}
    </Wrapper>
   
  )
}

export default CustomButtons