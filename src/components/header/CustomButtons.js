import React, {useState, useContext} from 'react'
import { Box, Button, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import LoginDialog from '../authpages/LoginDialog';
import { LoginContext } from '../context/ContextProvider';
import Profile from './Profile';


const Wrapper = styled(Box)(({theme}) => ({
   display:"flex",
   margin: "0 3% 0 auto",
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
        <Box>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Box>
        <Typography>More</Typography>
        <LoginDialog open= {open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButtons