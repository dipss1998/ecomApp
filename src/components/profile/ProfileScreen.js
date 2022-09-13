import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { useParams} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import ProfileInformation from './ProfileInformation'
import {updatePhoto} from '../../service/addressapi'
import Avatar from '@mui/material/Avatar';

export default function ProfileScreen() {
const { id } = useParams();
const [photo, setPhoto] = useState('/Image/user1.jpg')
const updateUserPhoto = (e)=>{
  updatePhoto()
 setPhoto('/Image/user2.jpeg')
}
console.log('Profile screen id:', id)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       <Box
        component="nav"
        sx={{ m:20, width:20, height:20}}
       // aria-label="mailbox folders"
      >
    <Avatar sx={{mr:10, width:100, height:100}} alt="user profile" onClick={updateUserPhoto} src={photo}/>
      </Box> 
        <Box
            component="main"
            //sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            {/* <Toolbar/> */}

            <ProfileInformation/>

</Box>
</Box>

  );
}
 
