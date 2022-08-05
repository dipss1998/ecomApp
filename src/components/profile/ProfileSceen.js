// import React from 'react'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { AppBar, Toolbar, Box, Typography } from '@mui/material';
// import Grid from '@mui/material/Grid';

// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  

// const ProfileSceen = () => {
//   return (
//     <>
//     <Box>
//         <Box>
//             <Box>
//             <Stack direction="row" spacing={2}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />    
//             </Stack>
//             <Typography>User name</Typography>

//             </Box>
//             {/* <Box>
//                 <Typography>Your orders</Typography>
//                 <Typography>Login&Sicurity</Typography>
//                 <Typography>Manage Address</Typography>

//             <Typography>Mnagae your Peofilw</Typography>
//                 <Typography>Contact us</Typography>
//                 <Typography>Buy</Typography>
//                 <Typography>wishlist</Typography>

//             </Box> */}
//              
//         <Box>
            
//         </Box>
//     </Box>
//     </>
//   )
// }

// export default ProfileSceen

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import logo from './../../imges/logo.png'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';

const drawerWidth = 300;
const drawerHeigth = 0;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ebf1f7',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.primary,
  }));

  const gridWraper = styled(Grid)`
        backgroundcolor:red;
   
  `


const Wrapper = styled(Box)`
    
     margin: 10px 20px 30px 60px;
     padding: 10px;
   
`

export default function ProfileSceen(props: Props) {

  const url = 'data:image/png;base64,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'

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style ={{marginTop:0, paddingTop:0, backgroundColor:'#f5dcbf', }} >
        <Wrapper >
            <Stack direction="row" spacing={2} >
                 <Avatar alt="Remy Sharp" src={url} style={{width:90, height:90}}/>    
            </Stack>
             <Typography>Remy Sharp </Typography>

             </Wrapper>
     
      <Divider />
  {/* <List style={{backgroundColor:'yellow'}} > */}

 <Box  >
       
        <Box sx={{ width: '100%',  }} >


          
        <Item>
        <Typography>Account Setting</Typography>           

          <Stack spacing={2}>
              <Item>Profile Information</Item>
              <Item>Manage Address</Item>
              <Item>Identity Details</Item>
          </Stack>
          </Item>
            
        
        </Box>

        <Box sx={{ width: '100%', backgroundColor:'red' }}>  
        <Item>
        <Typography>Payment Setting</Typography>           

          <Stack spacing={3}>
              <Item>Girt Card</Item>
              <Item>Saved UPI</Item>
              <Item>Saved Cards</Item>
          </Stack></Item>
            
        
        </Box>
        <Box sx={{ width: '100%' }}>  
        <Item>
        <Typography>MY STUFF</Typography>           

          <Stack spacing={2}>
              <Item>MyCoupons</Item>
              <Item>MyReviews</Item>
              <Item>MyWishlist</Item>
          </Stack></Item>
            
        
        </Box>

     
 </Box>


      {/* </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, height:{sm:drawerHeigth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: drawerHeigth,  },
          }}
        >
          {drawer}
        </Drawer>
            <Drawer
            variant="permanent"
           
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop:10,  },
            }}
            open
            >
            {drawer}
            </Drawer>
      </Box>
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar 
            
            />

<Box sx={{ flexGrow: 1,  }} style={{}}>
    <Typography variant='h4'>Personal Information</Typography>
    <Card style={{height:500, backgroundColor:"#debf12", width:800}}>
            <Grid container spacing={3} style={{margin:30, width:600, paddingTop:30, paddingButtom:20}}>
            <Grid item xs={6} style={{height:30}} >
              <Typography>Username</Typography>
                <Item>Username</Item>
            </Grid>
            <Grid item xs={6} >
              <Typography>Contatc</Typography>
                <Item>Contact </Item>
            </Grid>
            <Grid item xs={6}>
              <Typography>email Address</Typography>
                <Item>email Address</Item>
            </Grid>
            <Grid item xs={6}>
              <Typography>Address</Typography>
                <Item>Address</Item>
            </Grid>
            <Grid item xs={6}>
              <Typography>Female</Typography>
                <Item>Female</Item>
            </Grid>
            </Grid>
   
      </Card>
    </Box>
            
           
        </Box>
    </Box>
  );
}
 
