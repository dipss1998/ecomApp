import React from 'react'

import EditIcon from '@mui/icons-material/Edit';
import AppBar from '@mui/material/AppBar';
import {Box, Typography, Card,Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const gridWraper = styled(Grid)`
      backgroundcolor:red;
 
`

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#6b84a1' : '#ebf1f7',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.primary,
  }));

const ProfileInformation = () => {
  const userdata = JSON.parse(localStorage.getItem("user"))
  
  return (
   <>
   <Box sx={{ flexGrow: 1,  }} style={{}}>
    <Typography variant='h4'>Personal Information</Typography>
    <Card style={{height:500, backgroundColor:"#808000", width:800}}>
            <Grid container spacing={3} style={{margin:30, width:600, paddingTop:30, paddingButtom:20}}>
            <Grid item xs={6} style={{height:30}} >
              <Typography>Username</Typography>
                <Item>Username</Item>
                {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}
            </Grid>
            <Grid item xs={6} >
              <Typography>Contatc</Typography>
                <Item>Contact </Item>
                {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}

            </Grid>
            <Grid item xs={6}>
              <Typography>email Address</Typography>
                <Item>email Address</Item>
                {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}

            </Grid>
            <Grid item xs={6}>
              <Typography>Address</Typography>
                <Item>Address</Item>
                {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}

            </Grid>
            <Grid item xs={6}>
              <Typography>Female</Typography>
                <Item>Female</Item>
               {/* <Link to={`/edit?id/${userdata._id}`}> <EditIcon/></Link> */}

            </Grid>
            </Grid>
            <Link to={`/edit/edit?id/${userdata._id}`}> <EditIcon/></Link>

      </Card>
    </Box>
      
   </>
            
           
      
  )
}

export default ProfileInformation