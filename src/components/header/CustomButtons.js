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
import {Link} from 'react-router-dom'

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

// const Wrapper = styled(Box)(({ theme }) => ({
//   margin: '0 3% 0 auto',
//   display: 'flex',
//   '& > *': {
//       marginRight: '40px !important',
//       textDecoration: 'none',
//       color: '#FFFFFF',
//       fontSize: 12,
//       alignItems: 'center',
//       [theme.breakpoints.down('sm')]: {
//           color: '#2874f0',
//           alignItems: 'center',
//           display: 'flex',
//           flexDirection: 'column',
//           marginTop: 10
//       }
//   },
//   [theme.breakpoints.down('sm')]: {
//       display: 'block'
//   }
// }));

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
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

const CustomButtons = () => {
    const [open, setOpen ]= useState(false);
    const {accounts, setAccounts} = useContext(LoginContext);
    const dispatch = useDispatch()

const cartItem = useSelector((state) => state.cart )
console.log(cartItem);
    const openDialog = ()=>{
          setOpen(true)
    }
  return (
    <Wrapper>
      {
        accounts ? <Profile accounts = {accounts} setAccounts={setAccounts}/> :
        <LoginButton variant="contained" onClick={()=> openDialog()}>Login </LoginButton>

      }
        {/* <Typography>My Account</Typography> */}
        <Typography>Return</Typography>
        <Typography>&Orders</Typography>
       <Link to="/Cart" style = {{textDecoration: 'none', color:'inherit',}} >
         <CartDesign >
        <Typography >Cart 
              {/* {cartItem.cart.length} */}
          </Typography>
        <IconButton aria-label="cart">
       <StyledBadge badgeContent={cartItem.cartItems.length} color="secondary">
        <ShoppingCartIcon style={{color:"white", marginTop:-5}} />
       </StyledBadge>
        </IconButton>            
          
        </CartDesign>
        </Link>
        <Typography>More</Typography>
        <LoginDialog open= {open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButtons